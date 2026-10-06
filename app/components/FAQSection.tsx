"use client";
import { useState } from "react";
import { T, useSite } from "../lib/site";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { c, edit } = useSite();

  return (
    <section id="faq" className="py-20 bg-[#F5F0EB]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <T p="faq.headingPrefix" />{" "}
            <span className="text-[#2CB5CA]"><T p="faq.headingHighlight" /></span>
          </h2>
        </div>

        <div className="space-y-3">
          {c.faq.items.map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => !edit && setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm md:text-base text-gray-900">
                  <T p={`faq.items.${i}.q`} />
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform text-gray-400 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {(open === i || edit) && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed"><T p={`faq.items.${i}.a`} /></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
