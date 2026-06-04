import Link from "next/link";

export const metadata = {
  title: "운명코드 | Destiny Lab",
  description: "사주, MBTI, 혈액형, 타로, 점성술 교집합 분석 서비스",
};

export default function CodePage() {
  return (
    <main className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-16 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Destiny Lab
        </Link>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-medium tracking-widest uppercase">
            베타 서비스 준비중
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          운명코드
        </h1>
        <p className="text-slate-400 text-lg mb-10">Destiny Code</p>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-10 text-base max-w-lg mx-auto">
          사주, MBTI, 혈액형, 타로, 점성술의 교집합을 분석합니다.
          <br />
          여러 시스템이 말하는 공통된 당신의 패턴을 데이터로 확인하세요.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["사주", "MBTI", "혈액형", "타로", "점성술", "교집합 분석"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-sm border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          disabled
          className="px-8 py-4 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold text-sm opacity-50 cursor-not-allowed"
        >
          서비스 시작하기 — 준비중
        </button>

        <p className="mt-6 text-slate-600 text-xs">
          서비스 오픈 시 알림을 받으려면{" "}
          <Link href="/#waitlist" className="text-[#D4AF37] hover:underline">
            사전예약
          </Link>
          에 등록하세요.
        </p>
      </div>
    </main>
  );
}
