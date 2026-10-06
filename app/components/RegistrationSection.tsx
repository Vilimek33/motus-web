"use client";
import { T } from "../lib/site";

export default function RegistrationSection() {
  return (
    <section
      id="registrace"
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #2CB5CA 0%, #1e9db0 60%, #1789a0 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              <T p="registration.titleLine1" /><br /><T p="registration.titleLine2" />
            </h2>
            <p className="text-white/80 text-lg max-w-md">
              <T p="registration.text" />
            </p>
          </div>

          {/* Right – price card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-900"><T p="registration.price" /></span>
                <span className="text-gray-400 text-sm"><T p="registration.priceUnit" /></span>
              </div>
              <p className="text-gray-500 text-sm mb-7">
                <T p="registration.priceNote" />
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdNjsnNkgQ9Lg8ZfIzyt3hUVhOgvjMz_mUXspty193yG5DyPg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#F07228] hover:bg-[#d96522] text-white font-bold text-center py-4 rounded-xl text-xs tracking-widest transition-colors shadow-md uppercase"
              >
                <T p="registration.button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
