export default function RegistrationSection() {
  return (
    <section id="registrace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-950 rounded-3xl overflow-hidden relative">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left – text */}
            <div className="px-10 py-14 lg:px-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Zaregistrujte svou aférku <br className="hidden md:block" />
                <span className="text-blue-500">ještě dnes!</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                Kapacita termínů je omezená. Přihlaste se pro léto plné pohybu a nových přátelství.
              </p>
            </div>

            {/* Right – price card */}
            <div className="flex items-stretch lg:justify-end">
              <div className="bg-white rounded-2xl m-8 lg:m-8 p-8 w-full lg:max-w-sm shadow-2xl flex flex-col justify-between">
                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">4 444 Kč</span>
                    <span className="text-gray-400 text-sm">/ kemp</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">
                    Cena zahrnuje kompletní stravu, prostory, vybavení a kvalifikované trenéry.
                  </p>

                  {/* What's included */}
                  <ul className="space-y-2 mb-8">
                    {[
                      "Strava 3× denně + pitný režim",
                      "Všechna sportoviště a vybavení",
                      "Kvalifikovaní trenéři",
                      "Výlety do přírody",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="mailto:Motuscz@gmail.com?subject=Přihláška na kemp"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-4 rounded-xl text-sm tracking-wider transition-colors shadow-lg shadow-blue-900/20"
                >
                  PŘIHLÁSIT SE NA AKTUÁLNÍ KEMP V SRPNU
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
