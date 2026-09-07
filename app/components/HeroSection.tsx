export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="inline-block bg-[#2CB5CA] text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
              MOTUS PLZEŇ – SPORTOVNÍ KROUŽKY PRO DĚTI
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Všestranný pohyb,<br />
              který si děti{" "}
              <span className="text-[#2CB5CA]">zamilují!</span>
            </h1>

            <p className="text-gray-600 text-base mb-8 max-w-md">
              Rozvíjíme u dětí všestrannost, sebevědomí a zdravou lásku k pohybu, která je může provázet celý život.
            </p>

            {/* Info badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {[
                { icon: "📍", label: "MÍSTO", value: "Hala ZŠ Chotěšov" },
                { icon: "🎒", label: "PRO KOHO", value: "2.–6. třída" },
                { icon: "🗓️", label: "FREKVENCE", value: "1× týdně" },
                { icon: "⚽", label: "NÁPLŇ", value: "Gymnastika, atletika, míčové hry" },
              ].map((item) => (
                <div key={item.label} className="bg-[#2CB5CA]/10 border border-[#2CB5CA]/20 rounded-xl p-3">
                  <div className="text-base mb-0.5">{item.icon}</div>
                  <div className="text-[#2CB5CA] text-[9px] font-bold tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-gray-800 text-xs font-semibold">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Program */}
            <ul className="space-y-2 mb-8">
              {[
                "Zábavnou a hravou formou",
                "Přátelský přístup mladých trenérů",
                "Pohybové hry, základy gymnastiky a atletiky",
                "Netradiční a míčové hry",
                "Rozvoj obratnosti, koordinace a rychlosti",
                "Pro holky i kluky, bez ohledu na sportovní úroveň",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#2CB5CA] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="flex flex-wrap items-center justify-between gap-3.5 bg-white border-[1.5px] border-[#2CB5CA]/35 rounded-2xl px-4 py-4 mb-4">
              <p className="text-gray-800 text-sm font-semibold max-w-[320px]">
                V případě zájmu nám pište nebo volejte na{" "}
                <a href="tel:+420702026586" className="text-[#25a3b7] font-extrabold">
                  +420 702 026 586
                </a>
              </p>
              <a
                href="https://wa.me/420702026586"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors shadow-md whitespace-nowrap"
              >
                WhatsApp
              </a>
            </div>

            <p className="text-gray-500 text-xs">
              Cena je <span className="text-gray-800 font-semibold">1 200 Kč</span> za pololetí (15 lekcí) nebo{" "}
              <span className="text-gray-800 font-semibold">2 200 Kč</span> za rok (30 lekcí).
            </p>
          </div>

          {/* Right – trainer photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[460px] h-[520px] rounded-3xl overflow-hidden">
              <img
                src="/images/hero-photo.jpg"
                alt="Trenéři Motus"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
