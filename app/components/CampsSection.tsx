"use client";
import WhatsAppContact from "./WhatsAppContact";
import { T, Bg, Btn, useSite } from "../lib/site";

export default function CampsSection() {
  const { c } = useSite();
  const paragraphs = c.camps.paragraphs;
  return (
    <Bg as="section" p="camps.background" id="kempy" className="relative py-20 overflow-hidden">
      {/* Teal gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #2CB5CA 0%, #2CB5CA 40%, rgba(44,181,202,0.7) 60%, rgba(44,181,202,0.2) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Frosted glass card */}
        <div className="max-w-xl bg-white/85 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="inline-block bg-[#2CB5CA] text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
            <T p="camps.badge" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5">
            <span className="text-[#2CB5CA]"><T p="camps.titleHighlight" /></span><br />
            <T p="camps.titleLine2" />
          </h2>

          {paragraphs.map((_, i) => (
            <p key={i} className={`text-gray-700 text-base ${i === paragraphs.length - 1 ? "mb-8" : "mb-3"}`}>
              <T p={`camps.paragraphs.${i}`} />
            </p>
          ))}

          <Btn
            p="camps.signupButton"
            className="inline-block text-white font-bold px-8 py-4 rounded-full text-xs tracking-widest shadow-md uppercase"
          />

          <WhatsAppContact className="mt-6" />
        </div>
      </div>
    </Bg>
  );
}
