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
    q: "Jak vypadá jídelníček?",
    a: "Zajišťujeme 3 vyvážená jídla denně plus pitný režim po celý den. Jídelníček sestavujeme s důrazem na výživu sportujících dětí. Na alergie a diety reagujeme individuálně.",
  },
  {
    q: "Musíme mít vlastní vybavení?",
    a: "Ne, veškeré sportovní vybavení zajišťujeme my. Stačí přinést pohodlné sportovní oblečení a pevnou obuv vhodnou na sport.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#F5F0EB]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Často se{" "}
            <span className="text-[#2CB5CA]">ptáte.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base text-gray-900">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform text-gray-400 ${open === i ? "rotate-180" : ""}`}
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
