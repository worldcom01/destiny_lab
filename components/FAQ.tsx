"use client";

import { useState } from "react";

const faqs = [
  {
    q: "의학적 판단을 제공하나요?",
    a: "아니요. Destiny Lab의 모든 서비스는 참고용 분석 자료입니다. 의료, 법률, 재정적 판단의 근거로 사용하지 마세요. 중요한 결정은 반드시 전문가와 상담하시기 바랍니다.",
  },
  {
    q: "미래를 예측하나요?",
    a: "아니요. 저희는 미래를 예측하지 않습니다. 전통 명리학과 데이터 분석 기반의 패턴 분석 자료를 제공합니다. 당신의 선택과 행동이 당신의 미래를 만듭니다.",
  },
  {
    q: "사전예약을 하면 무엇이 달라지나요?",
    a: "사전예약자에게는 서비스 출시 시 가장 먼저 알림이 전달되며, 얼리 액세스 혜택이 제공될 수 있습니다. 별도의 비용은 발생하지 않습니다.",
  },
  {
    q: "개인정보는 안전하게 보호되나요?",
    a: "네. 수집된 이름과 이메일은 서비스 출시 알림 용도로만 사용됩니다. 제3자에게 공유하거나 마케팅 목적으로 활용하지 않습니다.",
  },
];

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
