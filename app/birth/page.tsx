import Link from "next/link";

export const metadata = {
  title: "Birth Designer | Destiny Lab",
  description: "출생일, 출생시, 작명 시뮬레이션 플랫폼",
};

export default function BirthPage() {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">
            사전예약 진행중
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Birth Designer
        </h1>
        <p className="text-slate-400 text-lg mb-10">출생 조합 시뮬레이터</p>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-10 text-base max-w-lg mx-auto">
          출생일, 출생시, 이름을 조합하여 최적의 조합을 시뮬레이션합니다.
          <br />
          태어날 아이, 또는 새로운 시작을 위한 데이터 기반 설계 도구.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["출생일", "출생시", "작명", "시뮬레이션"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-sm border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/#waitlist"
          className="inline-block px-8 py-4 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold text-sm hover:bg-[#e8c84a] transition-colors shadow-lg shadow-[#D4AF37]/20"
        >
          서비스 시작하기
        </Link>

        <p className="mt-6 text-slate-600 text-xs">
          사전예약 등록 시 오픈 시 우선 알림을 드립니다.
        </p>
      </div>
    </main>
  );
}
