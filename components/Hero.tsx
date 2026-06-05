import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] pt-16">
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
            Destiny Lab
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
          MBTI와 사주를 겹쳐보면
          <br />
          <span className="gold-gradient">진짜 내 모습이 보일까?</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-loose mb-12">
          사주, MBTI, 타로, 점성술.
          <br />
          서로 다른 언어가 같은 방향을 가리킬 때,
          <br />
          그곳에 나를 이해하는 힌트가 있습니다.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/code"
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold text-sm hover:bg-[#e8c84a] transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            내 운명코드 확인하기
          </Link>
          <Link
            href="/birth"
            className="w-full sm:w-auto px-6 py-3.5 text-slate-500 text-sm hover:text-slate-300 transition-colors"
          >
            Birth Designer →
          </Link>
        </div>

        {/* Question cards */}
        <div className="animate-fade-up-delay-3 border-t border-white/8 pt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/8">
          {[
            "나는 왜 늘 비슷한\n선택을 할까?",
            "나는 왜 특정 사람에게\n끌릴까?",
            "내 MBTI는 사주에도\n보일까?",
          ].map((q) => (
            <div key={q} className="bg-[#0F172A] px-6 py-8 text-center">
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{q}</p>
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
