"use client";

import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import SitePage from "../components/SitePage";
import { SiteProvider, getPath, setPath, type SiteContent } from "../lib/site";

type Status = { kind: "idle" | "saving" | "saved" | "error"; message?: string };

const MAX_SIDE = 2000;
const MAX_REQUEST_CHARS = 4_000_000; // Vercel bere max ~4,5 MB na jeden požadavek

/** Zmenší fotku v prohlížeči, aby se dala rychle nahrát. */
async function imageToDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0, w, h);
  bitmap.close();
  // PNG nechat jako PNG jen u menších obrázků (logo apod. s průhledností), jinak JPG
  const keepPng = file.type === "image/png" && w * h <= 1200 * 1200;
  return canvas.toDataURL(keepPng ? "image/png" : "image/jpeg", 0.85);
}

/** Najde v obsahu nově nahrané obrázky a přiřadí jim lokální náhled. */
function collectPreviews(before: unknown, after: unknown, out: Record<string, string>) {
  if (typeof before === "string" && typeof after === "string") {
    if (before.startsWith("data:") && after.startsWith("/")) out[after] = before;
  } else if (before && after && typeof before === "object" && typeof after === "object") {
    for (const k of Object.keys(after)) collectPreviews((before as never)[k], (after as never)[k], out);
  }
}

export default function AdminEditor({
  initialContent,
  initialSha,
  warning,
}: {
  initialContent: SiteContent;
  initialSha: string | null;
  warning: string;
}) {
  const router = useRouter();
  const [saved, setSaved] = useState(initialContent);
  const [content, setContent] = useState(initialContent);
  const [sha, setSha] = useState(initialSha);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [resetKey, setResetKey] = useState(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const imageTarget = useRef<string | null>(null);

  const dirty = useMemo(() => JSON.stringify(content) !== JSON.stringify(saved), [content, saved]);
  const canSave = Boolean(sha) && dirty && status.kind !== "saving";

  // Varování při zavření stránky s neuloženými změnami
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  const ctx = useMemo(
    () => ({
      c: content,
      edit: true,
      previews,
      set: (path: string, value: string) => {
        setContent((prev) => (getPath(prev, path) === value ? prev : setPath(prev, path, value)));
        setStatus((s) => (s.kind === "saved" ? { kind: "idle" } : s));
      },
      pickImage: (path: string) => {
        imageTarget.current = path;
        fileInput.current?.click();
      },
    }),
    [content, previews]
  );

  async function onFileChosen(file: File | undefined) {
    const path = imageTarget.current;
    if (!file || !path) return;
    try {
      const dataUrl = await imageToDataUrl(file);
      setContent((prev) => setPath(prev, path, dataUrl));
      setStatus({ kind: "idle" });
    } catch {
      setStatus({ kind: "error", message: "Tenhle obrázek neumím načíst. Zkus prosím JPG nebo PNG." });
    } finally {
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  async function save() {
    if (!canSave) return;
    (document.activeElement as HTMLElement | null)?.blur?.();
    const body = JSON.stringify({ content, sha });
    if (body.length > MAX_REQUEST_CHARS) {
      setStatus({ kind: "error", message: "Nové obrázky jsou dohromady moc velké. Ulož je prosím po jednom." });
      return;
    }
    setStatus({ kind: "saving" });
    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Uložení se nepovedlo.");
      const newPreviews = { ...previews };
      collectPreviews(content, data.content, newPreviews);
      setPreviews(newPreviews);
      setContent(data.content);
      setSaved(data.content);
      setSha(data.sha);
      setStatus({ kind: "saved", message: "Uloženo ✓ Na webu se změny objeví zhruba za 1–2 minuty." });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Uložení se nepovedlo." });
    }
  }

  function discard() {
    if (!confirm("Zahodit všechny neuložené změny?")) return;
    setContent(saved);
    setResetKey((k) => k + 1);
    setStatus({ kind: "idle" });
  }

  async function logout() {
    if (dirty && !confirm("Máš neuložené změny. Opravdu se odhlásit?")) return;
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  // V adminu se odkazy neotevírají – klik slouží k úpravě textu.
  function blockLinks(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.closest("[data-admin-ui]")) return;
    if (target.closest("a")) e.preventDefault();
  }

  return (
    <>
      <style>{`
        [data-edit-text] { outline: 1px dashed rgba(240,114,40,.55); outline-offset: 2px; border-radius: 3px; cursor: text; }
        [data-edit-text]:hover { background: rgba(240,114,40,.10); }
        [data-edit-text]:focus { outline: 2px solid #F07228; background: rgba(255,255,255,.75); color: #111827; }
        [data-edit-text]:empty { display: inline-block; min-width: 2em; min-height: 1em; }
        [data-edit-image] { cursor: pointer; outline: 3px dashed #F07228; outline-offset: -3px; }
        [data-edit-image]:hover { filter: brightness(.8); }
      `}</style>

      <div onClickCapture={blockLinks} className="pb-28">
        <SiteProvider value={ctx}>
          <SitePage key={resetKey} />
        </SiteProvider>
      </div>

      <input
        ref={fileInput}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => onFileChosen(e.target.files?.[0])}
      />

      {/* Lišta administrace */}
      <div data-admin-ui className="fixed bottom-0 inset-x-0 z-[100] bg-gray-900 text-white shadow-[0_-8px_30px_rgba(0,0,0,.25)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[200px]">
            <div className="text-sm font-bold">Administrace webu</div>
            <div
              className={`text-xs ${
                status.kind === "error" ? "text-red-300" : status.kind === "saved" ? "text-green-300" : "text-white/60"
              }`}
              role="status"
            >
              {warning ||
                status.message ||
                (status.kind === "saving"
                  ? "Ukládám…"
                  : dirty
                  ? "Máš neuložené změny."
                  : "Klikni na text a přepiš ho. Na obrázek klikni pro výměnu.")}
            </div>
          </div>
          <button
            type="button"
            onClick={discard}
            disabled={!dirty || status.kind === "saving"}
            className="text-xs font-semibold px-4 py-2.5 rounded-full border border-white/25 hover:bg-white/10 disabled:opacity-40"
          >
            Zahodit změny
          </button>
          <button
            type="button"
            onClick={save}
            disabled={!canSave}
            className="text-sm font-bold px-6 py-2.5 rounded-full bg-[#F07228] hover:bg-[#d96522] disabled:opacity-40 shadow-md"
          >
            {status.kind === "saving" ? "Ukládám…" : "Uložit a zveřejnit"}
          </button>
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-white underline">
            Zobrazit web
          </a>
          <button type="button" onClick={logout} className="text-xs text-white/70 hover:text-white underline">
            Odhlásit
          </button>
        </div>
      </div>
    </>
  );
}
