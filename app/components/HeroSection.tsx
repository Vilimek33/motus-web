"use client";
import { T, Img, Bg, Btn, useSite, phoneDigits } from "../lib/site";
export default function HeroSection() {
  const { c } = useSite();
  const phone = phoneDigits(c.contact.whatsappPhone);
  return (
    <Bg
      as="section"
      p="hero.background"
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="inline-block bg-[#2CB5CA] text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6">
              <T p="hero.badge" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              <T p="hero.titleLine1" /><br />
              <T p="hero.titleLine2" />{" "}
              <span className="text-[#2CB5CA]"><T p="hero.titleHighlight" /></span>
            </h1>

            <p className="text-gray-600 text-base mb-8 max-w-md">
              <T p="hero.subtitle" />
            </p>

            {/* Info badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {c.hero.infoBadges.map((item, i) => (
                <div key={i} className="bg-[#2CB5CA]/10 border border-[#2CB5CA]/20 rounded-xl p-3">
                  <div className="text-base mb-0.5"><T p={`hero.infoBadges.${i}.icon`} /></div>
                  <div className="text-[#2CB5CA] text-[9px] font-bold tracking-widest mb-0.5"><T p={`hero.infoBadges.${i}.label`} /></div>
                  <div className="text-gray-800 text-xs font-semibold"><T p={`hero.infoBadges.${i}.value`} /></div>
                </div>
              ))}
            </div>

            {/* Program */}
            <ul className="space-y-2 mb-8">
              {c.hero.bullets.map((_, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#2CB5CA] flex-shrink-0" />
                  <T p={`hero.bullets.${i}`} />
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="flex flex-wrap items-center justify-between gap-3.5 bg-white border-[1.5px] border-[#2CB5CA]/35 rounded-2xl px-4 py-4 mb-4">
              <p className="text-gray-800 text-sm font-semibold max-w-[320px]">
                <T p="hero.contactText" />{" "}
                <a href={`tel:${phone}`} className="text-[#25a3b7] font-extrabold">
                  <T p="contact.whatsappPhone" />
                </a>
              </p>
              <Btn
                p="hero.whatsappButton"
                newTab
                className="inline-flex items-center gap-2 text-white font-bold text-xs px-4 py-2.5 rounded-full shadow-md whitespace-nowrap"
              />
            </div>

            <p className="text-gray-500 text-xs">
              <T p="hero.pricePrefix" />{" "}
              <span className="text-gray-800 font-semibold"><T p="hero.price1" /></span>{" "}
              <T p="hero.price1Suffix" />{" "}
              <span className="text-gray-800 font-semibold"><T p="hero.price2" /></span>{" "}
              <T p="hero.price2Suffix" />
            </p>
          </div>

          {/* Right – trainer photo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-[460px] h-[520px] rounded-3xl overflow-hidden">
              <Img
                p="hero.photo"
                alt="Trenéři Motus"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </Bg>
  );
}
