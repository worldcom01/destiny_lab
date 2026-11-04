import Link from "next/link";
import { DESTINY_CODE_HREF, birthDesigner, destinyCode } from "@/lib/content";

const status = [
  { label: "운영 중", title: destinyCode.name, desc: "분석 엔진 Engine V4 적용" },
  { label: "최근 릴리스", title: "Result First UX V1.1", desc: "AI 종합 분석을 결과 첫 화면에" },
  { label: "준비 중", title: birthDesigner.name, desc: birthDesigner.status },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start md:justify-center overflow-hidden bg-[#0F172A] pt-32 md:pt-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-800/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">
            AI Human Pattern Lab
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
          사람이 반복하는 패턴을
          <br />
          <span className="gold-gradient">AI로 다시 읽는 연구실</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-loose mb-12">
          사주, 손금, 혈액형, 성격 유형처럼
          <br />
          사람을 설명해 온 여러 해석 체계를 AI로 교차해 봅니다.
          <br />
          무엇을 만들고 어떻게 바꿨는지, 개발 과정을 그대로 공개합니다.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href={DESTINY_CODE_HREF}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold text-sm hover:bg-[#e8c84a] transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            Destiny Code 시작하기
          </Link>
          <Link
            href="/updates"
            className="w-full sm:w-auto px-6 py-3.5 text-slate-500 text-sm hover:text-slate-300 transition-colors"
          >
            개발 기록 보기 →
          </Link>
        </div>

        {/* Status cards */}
        <div className="animate-fade-up-delay-3 border-t border-white/8 pt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/8">
          {status.map((s) => (
            <div key={s.label} className="bg-[#0F172A] px-6 py-8 text-center">
              <p className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase mb-2">{s.label}</p>
              <p className="text-white text-sm font-semibold mb-1">{s.title}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
