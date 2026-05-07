"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Co když dítě onemocní před kempem?",
    a: "Víme, že zdraví si nevybírá. Pokud se vaše dítě nemůže zúčastnit, nejjednodušším řešením je najít za něj náhradníka (např. kamaráda nebo sourozence). V takovém případě neplatíte žádné storno poplatky – stačí nám tuto změnu pouze včas oznámit.",
  },
  {
    q: "Jaká je věková skupina dětí?",
    a: "U dětí dbáme na správný rozvoj odpovídající jejich věku. Proto skupiny na kempech zásadně nemícháme a dělíme je do dvou kategorií: Mladší sportovci (6–10 let) Starší žáci (10–15 let) Díky tomu můžeme program přizpůsobit tak, aby byl pro každou skupinu dostatečně zábavný i motivující. Konkrétní rozmezí vždy najdete v detailu daného kempu.",
  },
  {
    q: "Berete i úplné začátečníky?",
    a: "Určitě ano! Naším cílem je ukázat dětem radost z pohybu v jeho celé šíři. Začátečníci si u nás vyzkouší desítky různých disciplín a her. Často se stává, že právě u nás děti objeví sport, který je nadchne natolik, že se mu pak věnují i nadále.",
  },
  {
    q: "Jak vypadá jídelníček?",
    a: "Zajišťujeme 3 vyvážená jídla denně plus pitný režim po celý den. Jídelníček sestavujeme s důrazem na výživu sportujících dětí. Na alergie a diety reagujeme individuálně.",
  },
  {
    q: "Musíme mít vlastní vybavení?",
    a: "Vůbec ne. Chceme, aby byl sport dostupný pro všechny. Jediné, co bude vaše dítě potřebovat, je: Vhodné sportovní oblečení (na ven i do haly podle počasí), Kvalitní běžecká obuv (klasické tenisky). Veškeré ostatní sportovní náčiní a pomůcky zajistíme my!",
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
