"use client";
import { T, Img, useSite } from "../lib/site";

export default function TrainersSection() {
  const { c } = useSite();
  return (
    <section className="py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <T p="trainers.headingPrefix" />{" "}
              <span className="text-[#2CB5CA]">
                <T p="trainers.headingHighlightLine1" /><br className="hidden sm:block" /> <T p="trainers.headingHighlightLine2" />
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm mt-2">
            <T p="trainers.intro" />
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.trainers.people.map((trainer, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Photo */}
              <div className="relative h-80 bg-gray-200 overflow-hidden">
                <Img
                  p={`trainers.people.${i}.image`}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Sport tags */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {trainer.sports.map((_, j) => (
                    <span
                      key={j}
                      className="bg-[#F07228] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full"
                    >
                      <T p={`trainers.people.${i}.sports.${j}`} />
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1"><T p={`trainers.people.${i}.name`} /></h3>
                <p className="text-gray-500 text-sm"><T p={`trainers.people.${i}.role`} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
