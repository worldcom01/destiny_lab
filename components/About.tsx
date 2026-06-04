const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "전통 지식 체계",
    desc: "사주, 점성술, 타로 등 인류가 축적해온 인간 이해의 체계를 연구 자료로 활용합니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "데이터 분석",
    desc: "패턴 인식과 통계 기반의 현대적 데이터 과학으로 인사이트를 도출합니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI 기술",
    desc: "최신 언어 모델과 머신러닝으로 개인화된 분석 결과를 생성합니다.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "패턴 인텔리전스",
    desc: "MBTI, 혈액형, 다양한 체계의 교집합을 분석해 개인의 행동 패턴을 입체적으로 이해합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white dark:bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/5 dark:bg-[#D4AF37]/10 border border-[#0F172A]/10 dark:border-[#D4AF37]/20 mb-6">
              <span className="text-xs font-medium text-[#0F172A] dark:text-[#D4AF37] tracking-widest uppercase">
                About
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white leading-tight mb-6">
              Destiny Lab이란?
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-base">
              인간의 성향, 관계, 선택, 정체성의 패턴을 연구하는
              AI Human Pattern Lab입니다.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-base">
              우리는 운세를 연구하지 않습니다. 사주, 점성술, MBTI 등
              인류가 오랫동안 인간을 이해하려 했던 다양한 체계의 교집합에서
              새로운 인사이트를 발견합니다.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              <span className="text-[#0F172A] dark:text-white font-medium">
                데이터와 전통 지식의 교차점.
              </span>{" "}
              우리는 그곳에서 인간을 이해합니다.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-500">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span>참고용 분석 자료 · 의학적 판단 아님</span>
            </div>
          </div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-[#D4AF37]/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0F172A] dark:bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-[#0F172A] dark:text-white text-sm mb-2">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
