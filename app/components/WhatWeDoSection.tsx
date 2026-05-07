export default function WhatWeDoSection() {
  return (
    <section id="krouzky">
      {/* Light title bar */}
      <div className="bg-white py-6 px-6 border-b border-gray-100">
        <h2 className="text-center text-2xl md:text-3xl font-black text-gray-900 tracking-wide">
          CO <span className="text-[#2CB5CA]">MOTUS</span> DĚLÁ?
        </h2>
      </div>

      {/* Main content area — image fills full width, card on left */}
      <div
        className="relative min-h-[520px] flex items-center"
        style={{
          backgroundImage: "url('/images/koruzky.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full">
          {/* Card — covers only left portion, image visible on right */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-xl shadow-lg">
            {/* Badges */}
            <div className="flex gap-3 mb-5">
              <span className="bg-[#2CB5CA] text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full">
                POPULÁRNÍ
              </span>
              <span className="bg-[#F07228] text-white text-xs font-bold tracking-wider px-4 py-1.5 rounded-full">
                Věk 6-12
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-[#2CB5CA] leading-tight mb-4">
              SPORTOVNÍ<br />KROUŽKY
            </h3>

            <p className="text-gray-700 text-base mb-7">
              Rozvíjejte pohybové dovednosti svých dětí v moderním zázemí pod vedením profesionálních trenérů.
            </p>

            {/* Info row */}
            <div className="flex flex-wrap gap-6 mb-7">
              {[
                {
                  label: "KDY",
                  value: "Út a Čt",
                  icon: (
                    <svg className="w-4 h-4 text-[#2CB5CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "ČAS",
                  value: "17:00 – 18:00",
                  icon: (
                    <svg className="w-4 h-4 text-[#2CB5CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  label: "MÍSTO",
                  value: "Plzeň",
                  icon: (
                    <svg className="w-4 h-4 text-[#2CB5CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#2CB5CA]/10 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Price + CTA */}
            <div className="flex items-center gap-8 flex-wrap">
              <div>
                <div className="text-xs text-gray-500 font-medium mb-1">Měsíční členství</div>
                <div className="text-2xl font-bold text-gray-900">
                  700 Kč <span className="text-sm font-normal text-gray-500">/ měsíc</span>
                </div>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdg1MVEeL4OKOXBp-8pySsVVRH0YkbU2JYnYYkBVZFtNgr-4A/viewform?usp=send_form"
                className="bg-[#2CB5CA] hover:bg-[#25a3b7] text-white font-bold px-10 py-4 rounded-full text-base transition-colors shadow-md"
              >
                Přihlásit se →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 cards */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Next training */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Příští trénink</span>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Všestrannost</h4>
              <p className="text-gray-500 text-sm mb-4">Út a Čt, 17:00 v Plzni</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-[#F07228] rounded-full" style={{ width: "25%" }} />
              </div>
              <p className="text-gray-400 text-xs">Obsazenost kroužku: 5/20 dětí</p>
            </div>

            {/* Season progress */}
            <div className="bg-[#2CB5CA] rounded-2xl p-5 text-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">Průběh sezóny</span>
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <ul className="space-y-1.5 text-sm">
                {["Pohybové hry", "Atletika", "Gymnastika", "Netradiční sportovní hry", "Míčové hry", "Parkour"].map((sport) => (
                  <li key={sport} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                    {sport}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-5 items-center">
              <div className="w-36 h-36 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img src="/images/trener-sebo.jpg" alt="Jan Šebo" className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Hlavní trenér</p>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Bc. Jan Šebo</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
