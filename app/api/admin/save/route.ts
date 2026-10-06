import defaultContent from "@/content/site.json";
import { isLoggedIn } from "../../../lib/auth";
import { isHexColor, isSafeHref } from "../../../lib/validate";
import { commitFiles, ConflictError, CONTENT_PATH, githubConfigured } from "../../../lib/github";

export const maxDuration = 60;

const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

/** Obsah musí mít přesně stejnou strukturu jako původní (jen jiné texty). */
function sameShape(a: unknown, b: unknown): boolean {
  if (typeof b === "string") return typeof a === "string" && a.length < 3_000_000;
  if (Array.isArray(b)) return Array.isArray(a) && a.length === b.length && a.every((x, i) => sameShape(x, b[i]));
  if (b && typeof b === "object") {
    if (!a || typeof a !== "object" || Array.isArray(a)) return false;
    const ka = Object.keys(a).sort();
    const kb = Object.keys(b).sort();
    return ka.length === kb.length && ka.every((k, i) => k === kb[i] && sameShape((a as never)[k], (b as never)[k]));
  }
  return false;
}

export async function POST(request: Request) {
  if (!(await isLoggedIn())) return Response.json({ error: "Nejsi přihlášený." }, { status: 401 });
  if (!githubConfigured()) return Response.json({ error: "Ukládání není nastavené (chybí GITHUB_TOKEN)." }, { status: 500 });

  const body = await request.json().catch(() => null);
  const content = body?.content;
  const sha = typeof body?.sha === "string" ? body.sha : undefined;
  if (!sameShape(content, defaultContent)) {
    return Response.json({ error: "Neplatný obsah." }, { status: 400 });
  }

  // Nové obrázky přijdou jako data:image/...;base64 → uložíme je do public/images/uploads
  const files: { path: string; content: string; encoding: "utf-8" | "base64" }[] = [];
  const uploaded: Record<string, string> = {};
  const stamp = Date.now();
  let n = 0;
  let error = "";

  const walk = (node: unknown, key = ""): unknown => {
    if (typeof node === "string" && key.endsWith("Href")) {
      if (!isSafeHref(node)) error = `Neplatný odkaz: ${node}`;
      return node.trim();
    }
    if (typeof node === "string" && key.endsWith("Color")) {
      if (!isHexColor(node)) error = `Neplatná barva: ${node}`;
      return node.trim();
    }
    if (typeof node === "string") {
      const m = node.match(/^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)$/);
      if (!m) {
        if (node.startsWith("data:")) error = "Nepodporovaný formát obrázku.";
        return node;
      }
      const ext = m[1] === "jpeg" ? "jpg" : m[1];
      if (Buffer.byteLength(m[2], "base64") > MAX_IMAGE_BYTES) error = "Obrázek je moc velký.";
      const publicPath = `/images/uploads/${stamp}-${++n}.${ext}`;
      files.push({ path: `public${publicPath}`, content: m[2], encoding: "base64" });
      uploaded[publicPath] = node;
      return publicPath;
    }
    if (Array.isArray(node)) return node.map((v) => walk(v));
    if (node && typeof node === "object") {
      return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, walk(v, k)]));
    }
    return node;
  };

  const cleaned = walk(content);
  if (error) return Response.json({ error }, { status: 400 });

  files.push({ path: CONTENT_PATH, content: JSON.stringify(cleaned, null, 2) + "\n", encoding: "utf-8" });

  try {
    const result = await commitFiles(files, "Admin: úprava obsahu webu", sha);
    return Response.json({ ok: true, sha: result.contentSha, content: cleaned, uploaded: Object.keys(uploaded) });
  } catch (e) {
    if (e instanceof ConflictError) {
      return Response.json(
        { error: "Mezitím někdo web upravil. Obnov stránku (tvoje neuložené změny se ztratí) a zkus to znovu." },
        { status: 409 }
      );
    }
    console.error(e);
    return Response.json({ error: "Uložení na GitHub selhalo. Zkus to prosím znovu." }, { status: 502 });
  }
}
