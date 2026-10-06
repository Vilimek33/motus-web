"use client";
import { T, useSite, phoneDigits } from "../lib/site";

export default function WhatsAppContact({ className = "" }: { className?: string }) {
  const { c } = useSite();
  const phone = phoneDigits(c.contact.whatsappPhone);
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3.5 bg-white border-[1.5px] border-[#2CB5CA]/35 rounded-2xl px-4 py-4 ${className}`}
    >
      <p className="text-gray-800 text-sm font-semibold">
        <T p="whatsappContact.text" />
        <a href={`tel:${phone}`} className="block text-[#25a3b7] font-extrabold whitespace-nowrap">
          <T p="contact.whatsappPhone" />
        </a>
      </p>
      <a
        href={`https://wa.me/${phone.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors shadow-md whitespace-nowrap"
      >
        <T p="whatsappContact.button" />
      </a>
    </div>
  );
}
