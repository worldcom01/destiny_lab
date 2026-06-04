import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-800/30 blur-3xl" />
        {/* Grid lines */}
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
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">
            AI 운명 데이터 연구소
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          데이터로 읽는
          <br />
          <span className="gold-gradient">운명의 패턴</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          사주, 성명학, 성격 유형 분석을
          <br className="hidden sm:block" />
          현대적인 AI 기술로 재해석합니다.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#services"
            className="w-full sm:w-auto px-7 py-3.5 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold text-sm hover:bg-[#e8c84a] transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            운명코드 체험하기
          </Link>
          <Link
            href="#waitlist"
            className="w-full sm:w-auto px-7 py-3.5 bg-white/5 border border-white/15 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            Birth Designer 사전예약
          </Link>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-delay-3 mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
          {[
            { value: "2+", label: "서비스 연구중" },
            { value: "AI", label: "기반 분석" },
            { value: "Beta", label: "서비스 준비중" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
