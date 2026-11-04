"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

function FAQItem({ q, a, isOpen, onToggle }: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-[#0F172A] dark:text-white leading-snug">
          {q}
        </span>
        <span
          className={`shrink-0 w-5 h-5 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-transform duration-200 mt-0.5 ${
            isOpen ? "rotate-180 border-[#D4AF37] bg-[#D4AF37]/10" : ""
          }`}
        >
          <svg
            className={`w-3 h-3 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-slate-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 -mt-1">
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/5 dark:bg-[#D4AF37]/10 border border-[#0F172A]/10 dark:border-[#D4AF37]/20 mb-6">
            <span className="text-xs font-medium text-[#0F172A] dark:text-[#D4AF37] tracking-widest uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white">
            자주 묻는 질문
          </h2>
        </div>

        {/* FAQ list */}
        <div className="bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 px-6 divide-y divide-slate-100 dark:divide-slate-800">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
