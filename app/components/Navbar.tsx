"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#2CB5CA] text-white text-xs text-center py-2 px-4 flex items-center justify-center gap-2 font-medium tracking-wider">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        LETNÍ KEMP V SRPNU SE RYCHLE PLNÍ, PŘIHLAS SE I TY!
      </div>

      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="font-black text-2xl tracking-widest text-gray-900 leading-none">
              M<span className="text-[#2CB5CA]">0</span>TUS
            </span>
            <svg className="text-[#2CB5CA] mb-1" width="16" height="20" viewBox="0 0 16 22" fill="currentColor">
              <ellipse cx="8" cy="2.5" rx="2.2" ry="2.2"/>
              <path d="M5 6.5C5.5 5.5 6.5 5 8 5s2.5.5 3 1.5l1.8 4.5-2.3.6L9 8.5v9H7.5v-5H6.8v5H5V8.5L3.5 11.6l-2.3-.6L5 6.5z"/>
            </svg>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "KEMPY", href: "#kempy" },
              { label: "KROUŽKY", href: "#krouzky" },
              { label: "O NÁS", href: "#vyhody" },
              { label: "ČASTÉ OTÁZKY", href: "#faq" },
              { label: "KONTAKT", href: "#kontakt" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wider transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social icons + mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a href="https://www.instagram.com/motus.plzen/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>

            <button
              className="md:hidden text-gray-900 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Otevřít menu"
            >
              {menuOpen ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            {[
              { label: "KEMPY", href: "#kempy" },
              { label: "KROUŽKY", href: "#krouzky" },
              { label: "O NÁS", href: "#vyhody" },
              { label: "ČASTÉ OTÁZKY", href: "#faq" },
              { label: "KONTAKT", href: "#kontakt" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 text-sm font-medium tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
