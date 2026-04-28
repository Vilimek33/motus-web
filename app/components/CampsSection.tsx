export default function CampsSection() {
  return (
    <section
      id="kempy"
      className="relative py-24 bg-gray-900 overflow-hidden"
      style={{
        backgroundImage: "url('/images/stadium-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase">
            Sportovní všestranné kempy
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Přihlaste své děti na naše{" "}
            <span className="text-blue-500">celoroční kempy</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl">
            Kempy jsou zaměřené především na všestrannost. Dítě si vyzkouší sporty,
            kterým by se mohlo v následujících letech věnovat. Většina kempů od 7:30 do 16:30 po–pá.
          </p>

          <a
            href="#registrace"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-xl text-sm tracking-wider transition-colors shadow-lg shadow-blue-900/30"
          >
            PŘIHLÁSIT SE NA AKTUÁLNÍ KEMP
          </a>
        </div>
      </div>
    </section>
  );
}
