export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-gray-950 min-h-[85vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-950/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – text */}
          <div>
            {/* Badge */}
            <div className="inline-block bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full mb-6">
              VŠESTRANNÝ SPORTOVNÍ KEMP PRO DĚTI
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Léto plné pohybu,<br />
              <span className="text-blue-500">který si děti zamilují!</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Dopřejte svým dětem týden plný nových přátelství, sportu a nezapomenutelných zážitků.
            </p>

            {/* Info badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                { icon: "📍", label: "MÍSTA", value: "Plzeň" },
                { icon: "🎂", label: "VĚK", value: "6–10 let" },
                { icon: "🕗", label: "ČAS", value: "8:00–16:30" },
                { icon: "🍽️", label: "STRAVA", value: "3× denně + pití" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-lg mb-1">{item.icon}</div>
                  <div className="text-gray-400 text-[10px] font-bold tracking-widest mb-0.5">{item.label}</div>
                  <div className="text-white text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <a
                href="#registrace"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-sm tracking-wider transition-colors shadow-lg shadow-blue-900/30"
              >
                PŘIHLÁSIT SE NA KEMP
              </a>
              <a
                href="#kempy"
                className="border border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-xl text-sm tracking-wider transition-colors"
              >
                VÍCE O PROGRAMU
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              Cena je <span className="text-white font-semibold">4 444 Kč</span> včetně stravování a sportovišť.
            </p>
          </div>

          {/* Right – image placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-blue-600/20 rounded-full blur-3xl" />
              <div className="relative w-[500px] h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/hero-photo.jpg" alt="Děti na kempu" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
