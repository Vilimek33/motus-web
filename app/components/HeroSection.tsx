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
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="inline-block bg-[#2CB5CA] text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
              VŠESTRANNÝ SPORTOVNÍ KEMP PRO DĚTI
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Léto plné pohybu,<br />
              který si děti{" "}
              <span className="text-[#2CB5CA]">zamilují!</span>
            </h1>

            <p className="text-gray-600 text-base mb-8 max-w-md">
              Dopřejte svým dětem týden plný nových přátelství, sportu a nezapomenutelných zážitků.
            </p>

            {/* Info badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {[
                { icon: "📍", label: "MÍSTA", value: "Plzeň" },
                { icon: "🎂", label: "VĚK", value: "6–10" },
                { icon: "🕗", label: "ČAS", value: "8:00–16:30" },
                { icon: "🍽️", label: "STRAVA", value: "3× denně + pití" },
              ].map((item) => (
                <div key={item.label} className="bg-[#2CB5CA]/10 border border-[#2CB5CA]/20 rounded-xl p-3">
                  <div className="text-base mb-0.5">{item.icon}</div>
                  <div className="text-[#2CB5CA] text-[9px] font-bold tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-gray-800 text-xs font-semibold">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 items-center mb-5">
              <a
                href="#registrace"
                className="bg-[#2CB5CA] hover:bg-[#25a3b7] text-white font-bold px-7 py-3.5 rounded-full text-xs tracking-widest transition-colors shadow-md"
              >
                REGISTROVAT NYNÍ
              </a>
              <a
                href="#kempy"
                className="border-2 border-gray-400 hover:border-gray-600 text-gray-700 font-bold px-7 py-3.5 rounded-full text-xs tracking-widest transition-colors"
              >
                VÍCE O PROGRAMU
              </a>
            </div>

            <p className="text-gray-500 text-xs">
              Cena je <span className="text-gray-800 font-semibold">4 444 Kč</span> včetně stravování a sportovišť.
            </p>
          </div>

          {/* Right – trainer photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[460px] h-[520px] rounded-3xl overflow-hidden shadow-2xl">
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
