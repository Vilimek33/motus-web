"use client";

import { useEffect, useRef } from "react";
import { getPath, type SiteContent } from "../lib/site";
import { isHexColor, isSafeHref } from "../lib/validate";

const PRESETS = [
  { name: "Tyrkysová", value: "#2CB5CA" },
  { name: "Oranžová", value: "#F07228" },
  { name: "WhatsApp zelená", value: "#25D366" },
  { name: "Tmavě tyrkysová", value: "#1789A0" },
  { name: "Tmavá", value: "#111827" },
  { name: "Červená", value: "#E53935" },
];

export default function ButtonDialog({
  path,
  content,
  onChange,
  onClose,
}: {
  path: string;
  content: SiteContent;
  onChange: (key: string, value: string) => void;
  onClose: () => void;
}) {
  const text = String(getPath(content, path) ?? "");
  const href = String(getPath(content, `${path}Href`) ?? "");
  const color = String(getPath(content, `${path}Color`) ?? "");
  const hrefOk = isSafeHref(href);
  const colorOk = isHexColor(color);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      data-admin-ui
      className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div role="dialog" aria-modal="true" aria-label="Nastavení tlačítka" className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 text-gray-900">
        <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1">Nastavení tlačítka</div>
        <div className="text-lg font-bold mb-5 truncate">{text || "Tlačítko"}</div>

        {/* Náhled */}
        <div className="mb-6 flex justify-center bg-gray-50 rounded-2xl py-5">
          <span
            className="inline-block text-white font-bold px-6 py-3 rounded-full text-sm shadow-md"
            style={{ backgroundColor: colorOk ? color : "#9ca3af" }}
          >
            {text || "Tlačítko"}
          </span>
        </div>

        <label htmlFor="btn-href" className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-1.5">
          Odkaz
        </label>
        <input
          id="btn-href"
          ref={inputRef}
          value={href}
          onChange={(e) => onChange(`${path}Href`, e.target.value)}
          placeholder="https://…"
          className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
            hrefOk ? "border-gray-200 focus:ring-[#2CB5CA]" : "border-red-400 focus:ring-red-400"
          }`}
        />
        <p className={`text-xs mt-1.5 mb-5 ${hrefOk ? "text-gray-400" : "text-red-600"}`}>
          {hrefOk ? (
            <>
              Webová adresa (https://…), WhatsApp (https://wa.me/420…), telefon (tel:+420…) nebo e-mail (mailto:…).{" "}
              <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-[#25a3b7]">
                Vyzkoušet odkaz
              </a>
            </>
          ) : (
            "Odkaz musí začínat https://, mailto: nebo tel:"
          )}
        </p>

        <div className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">Barva</div>
        <div className="flex flex-wrap gap-2 mb-3">
          {PRESETS.map((p) => (
            <button
              key={p.value}
              type="button"
              title={p.name}
              aria-label={p.name}
              onClick={() => onChange(`${path}Color`, p.value)}
              className={`w-9 h-9 rounded-full shadow-sm border-2 ${
                color.toLowerCase() === p.value.toLowerCase() ? "border-gray-900 scale-110" : "border-white"
              }`}
              style={{ backgroundColor: p.value }}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 mb-6">
          <input
            type="color"
            aria-label="Vlastní barva"
            value={colorOk ? color : "#000000"}
            onChange={(e) => onChange(`${path}Color`, e.target.value.toUpperCase())}
            className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer bg-white"
          />
          <input
            aria-label="Kód barvy"
            value={color}
            onChange={(e) => onChange(`${path}Color`, e.target.value)}
            className={`w-28 border rounded-xl px-3 py-2 text-sm font-mono ${colorOk ? "border-gray-200" : "border-red-400"}`}
          />
          <span className="text-xs text-gray-400">vlastní barva</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-full"
        >
          Hotovo
        </button>
        <p className="text-[11px] text-gray-400 text-center mt-2">Změny se projeví na webu po kliknutí na „Uložit a zveřejnit“.</p>
      </div>
    </div>
  );
}
