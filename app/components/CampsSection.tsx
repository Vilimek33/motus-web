export default function CampsSection() {
  return (
    <section
      id="kempy"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/stadium-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            Sportovní všestranné kempy
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-5">
            <span className="text-[#2CB5CA]">SPORTOVNÍ</span><br />
            VŠESTRANNÉ KEMPY
          </h2>

          <p className="text-gray-700 text-base mb-3">
            Přihlaste své děti na naše celoroční kempy, které jsou zaměřené především na všestrannost.
          </p>
          <p className="text-gray-700 text-base mb-3">
            Dítě si vyzkouší sporty, kterým by se mohlo v následujících letech věnovat.
          </p>
          <p className="text-gray-700 text-base mb-8">
            Většina kempů od 7:30 do 16:30 po–pá.
          </p>

          <a
            href="mailto:Motuscz@gmail.com?subject=Přihláška na kemp"
            className="inline-block bg-[#F07228] hover:bg-[#d96522] text-white font-bold px-8 py-4 rounded-full text-xs tracking-widest transition-colors shadow-md uppercase"
          >
            Přihlásit se na aktuální kemp
          </a>
        </div>
      </div>
    </section>
  );
}
