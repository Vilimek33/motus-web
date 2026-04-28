const trainers = [
  {
    name: "Bc. Jan Šebo",
    role: "Specialista na herní dovednosti",
    sports: ["BĚH", "MÍČOVÉ HRY"],
    image: "/images/trener-sebo.jpg",
  },
  {
    name: "Bc. Daniel Šobr",
    role: "Specialista na herní dovednosti",
    sports: ["MÍČOVÉ HRY"],
    image: "/images/trener-sobr.jpg",
  },
  {
    name: "Bc. David Termer",
    role: "Koordinátor pohybových kroužků",
    sports: ["ATLETIKA", "GYMNASTIKA"],
    image: "/images/trener-termer.jpg",
  },
];

export default function TrainersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">NÁŠ TÝM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trenéři, co mají<br className="hidden sm:block" /> tah na bránu.
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm lg:text-right">
            Všichni naši trenéři jsou kvalifikovaní a mají zkušenosti s dětmi všech věkových skupin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Photo */}
              <div className="relative h-80 bg-gray-200 overflow-hidden">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top" />

                {/* Sport tags */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {trainer.sports.map((sport) => (
                    <span key={sport} className="bg-gray-900/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-gray-500 text-sm">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
