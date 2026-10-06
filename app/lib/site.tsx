"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import defaultContent from "@/content/site.json";

export type SiteContent = typeof defaultContent;

type Ctx = {
  c: SiteContent;
  edit: boolean;
  set: (path: string, value: string) => void;
  pickImage: (path: string) => void;
  /** Lokální náhledy obrázků, které už jsou uložené na GitHubu, ale web je ještě nenasadil. */
  previews: Record<string, string>;
};

const SiteCtx = createContext<Ctx>({
  c: defaultContent,
  edit: false,
  set: () => {},
  pickImage: () => {},
  previews: {},
});

export const useSite = () => useContext(SiteCtx);

export function SiteProvider({ value, children }: { value: Ctx; children: ReactNode }) {
  return <SiteCtx.Provider value={value}>{children}</SiteCtx.Provider>;
}

/** Přečte hodnotu z obsahu podle cesty "hero.bullets.0". */
export function getPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((o, k) => (o == null ? undefined : (o as Record<string, unknown>)[k]), obj);
}

/** Vrátí kopii obsahu s nastavenou hodnotou. */
export function setPath<T>(obj: T, path: string, value: unknown): T {
  const keys = path.split(".");
  const clone = structuredClone(obj) as Record<string, unknown>;
  let cur: Record<string, unknown> = clone;
  for (let i = 0; i < keys.length - 1; i++) cur = cur[keys[i]] as Record<string, unknown>;
  cur[keys[keys.length - 1]] = value;
  return clone as T;
}

/** Text z obsahu. Na webu čistý text, v adminu editovatelné pole. */
export function T({ p }: { p: string }) {
  const { c, edit, set } = useSite();
  const value = String(getPath(c, p) ?? "");
  const ref = useRef<HTMLSpanElement>(null);

  // Text v editovatelném poli spravujeme ručně, aby React při psaní nepřeskakoval kurzor.
  useLayoutEffect(() => {
    const el = ref.current;
    if (el && document.activeElement !== el && el.textContent !== value) el.textContent = value;
  });

  if (!edit) return <>{value}</>;

  const onKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
    if (e.key === " ") e.stopPropagation();
  };

  return (
    <span
      ref={ref}
      data-edit-text
      contentEditable
      suppressContentEditableWarning
      spellCheck
      title="Klikni a přepiš text"
      onKeyDown={onKeyDown}
      onKeyUp={(e) => e.preventDefault()}
      onPaste={(e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain").replace(/\s*\n\s*/g, " ");
        document.execCommand("insertText", false, text);
      }}
      onInput={(e) => set(p, (e.currentTarget.textContent ?? "").replace(/ /g, " "))}
      onBlur={(e) => {
        const t = (e.currentTarget.textContent ?? "").replace(/ /g, " ");
        if (t !== value) set(p, t);
      }}
    />
  );
}

/** Hodnota obsahu jako string (pro odkazy, alt texty apod.). */
export function useText(p: string) {
  const { c } = useSite();
  return String(getPath(c, p) ?? "");
}

function useImageSrc(p: string) {
  const { c, previews } = useSite();
  const src = String(getPath(c, p) ?? "");
  return previews[src] ?? src;
}

/** Obrázek z obsahu. V adminu se po kliknutí dá vyměnit. */
export function Img({ p, alt, className }: { p: string; alt: string; className?: string }) {
  const { edit, pickImage } = useSite();
  const src = useImageSrc(p);
  if (!edit) return <img src={src} alt={alt} className={className} />;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      data-edit-image
      title="Klikni pro výměnu obrázku"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        pickImage(p);
      }}
    />
  );
}

/** Element s obrázkem na pozadí. V adminu má tlačítko „Změnit pozadí“. */
export function Bg({
  p,
  as: Tag = "div",
  className,
  style,
  id,
  children,
}: {
  p: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children?: ReactNode;
}) {
  const { edit, pickImage } = useSite();
  const src = useImageSrc(p);
  return (
    <Tag
      id={id}
      className={className}
      style={{ backgroundImage: `url('${src}')`, backgroundSize: "cover", backgroundPosition: "center", ...style }}
    >
      {children}
      {edit && (
        <button
          type="button"
          data-admin-ui
          onClick={() => pickImage(p)}
          className="absolute top-3 right-3 z-30 bg-gray-900/80 hover:bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg"
        >
          🖼️ Změnit pozadí
        </button>
      )}
    </Tag>
  );
}

/** Telefon "+420 702 026 586" → "+420702026586" */
export const phoneDigits = (phone: string) => phone.replace(/[^\d+]/g, "");
