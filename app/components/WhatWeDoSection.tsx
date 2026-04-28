export default function WhatWeDoSection() {
  return (
    <section id="krouzky" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">CO MOTUS DĚLÁ?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sport pro každé dítě,<br className="hidden sm:block" /> každý den.
          </h2>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Next activity card */}
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Příští trénink</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Všestrannost</h3>
            <p className="text-gray-500 text-sm mb-4">Út a Čt, 17:00 v Plzni</p>

            {/* Capacity bar */}
            <div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "25%" }} />
              </div>
              <p className="text-gray-500 text-xs">Obsazenost kroužku: 5/20 dětí</p>
            </div>
          </div>

          {/* Season progress card */}
          <div className="bg-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-200 uppercase">Průběh sezóny</span>
              <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <ul className="space-y-2 text-sm">
              {["Pohybové hry", "Atletika", "Gymnastika", "Netradiční sportovní hry", "Míčové hry", "Parkour"].map((sport) => (
                <li key={sport} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                  {sport}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructor card */}
          <div className="border border-gray-200 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-28 h-36 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
              <img src="/images/trener-sebo.jpg" alt="Jan Šebo" className="w-full h-full object-cover" />
            </div>
            <div className="pt-2">
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Hlavní trenér</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bc. Jan Šebo</h3>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
