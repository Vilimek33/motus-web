export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#2CB5CA] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-black text-xl tracking-widest">MOTUS PLZEŇ Z.S.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Budujeme zdravý vztah ke sportu u dětí už od útlého věku.
              Profesionálně, hravě a srdcem.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/motus_move_more/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Motus-Plze%C5%88/61588373848839/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/60 uppercase mb-5">MENU</h4>
            <ul className="space-y-3">
              {[
                { label: "Kempy", href: "#kempy" },
                { label: "Kroužky", href: "#krouzky" },
                { label: "O nás", href: "#vyhody" },
                { label: "FAQ", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/60 uppercase mb-5">OSTATNÍ</h4>
            <ul className="space-y-3">
              {[
                { label: "Kontakt", href: "#kontakt" },
                { label: "Obchodní podmínky", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/60 uppercase mb-5">KONTAKT</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Motuscz@gmail.com" className="hover:text-white transition-colors">
                  Motuscz@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+420604420280" className="hover:text-white transition-colors">
                  +420 604 420 280
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Plzeňský kraj
              </li>
            </ul>
            <p className="text-white/50 text-xs mt-5">IČO: 24116653</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-center text-white/50 text-xs">
            © 2024 Motus Plzeň z.s. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
