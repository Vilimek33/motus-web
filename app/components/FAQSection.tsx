"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Co když dítě onemocní před kempem?",
    a: "V případě nemoci dítěte vám vrátíme plnou částku nebo nabídneme náhradní termín. Kontaktujte nás co nejdříve na Motuscz@gmail.com.",
  },
  {
    q: "Jaká je věková skupina dětí?",
    a: "Náš kemp je určen pro děti ve věku 6–10 let. Pro starší děti plánujeme v budoucnu specializované programy.",
  },
  {
    q: "Berete i úplné začátečníky?",
    a: "Ano! Kemp je navržen tak, aby byl vhodný pro děti bez předchozích sportovních zkušeností. Naši trenéři přizpůsobí program každému dítěti.",
  },
  {
    q: "Co si má dítě vzít s sebou?",
    a: "Pohodlné sportovní oblečení, pevnou obuv vhodnou na sport, pláštěnku nebo bunda do nepohody. Ostatní vybavení zajišťujeme my.",
  },
  {
    q: "Jak probíhá přihlášení?",
    a: "Přihlášení probíhá přes kontaktní e-mail nebo telefon. Po potvrzení přihlášky vám zašleme platební instrukce a detaily kempu.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Často se ptáte.</h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                open === i ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-white"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm md:text-base ${open === i ? "text-blue-700" : "text-gray-900"}`}>
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${open === i ? "rotate-180 text-blue-600" : "text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
