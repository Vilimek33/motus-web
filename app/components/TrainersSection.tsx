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
    sports: ["FOTBAL", "MÍČOVÉ HRY"],
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
    <section className="py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Trenéři, co mají{" "}
              <span className="text-[#2CB5CA]">
                tah na<br className="hidden sm:block" /> bránu.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm mt-2">
            Kombinujeme pedagogické zkušenosti s profesionální sportovní minulostí.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Photo */}
              <div className="relative h-80 bg-gray-200 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Sport tags */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {trainer.sports.map((sport) => (
                    <span
                      key={sport}
                      className="bg-[#F07228] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full"
                    >
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
