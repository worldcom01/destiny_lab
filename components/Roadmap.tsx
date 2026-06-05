const milestones = [
  {
    status: "current",
    phase: "Phase 1",
    title: "운명코드",
    description: "사주, MBTI, 혈액형, 타로, 점성술 등 다양한 체계의 교집합을 분석하여 인간의 핵심 패턴을 탐색하는 서비스.",
    label: "현재 서비스",
  },
  {
    status: "upcoming",
    phase: "Phase 2",
    title: "Birth Designer",
    description: "이름, 출생일, 출생시 조합을 분석하여 출생 패턴을 시뮬레이션하는 데이터 기반 설계 서비스.",
    label: "출시 준비중",
  },
  {
    status: "research",
    phase: "Phase 3",
    title: "Relationship Code",
    description: "두 사람의 데이터를 기반으로 관계 패턴, 소통 방식, 갈등 가능성, 시너지 포인트를 분석하는 서비스.",
    label: "연구중",
  },
  {
    status: "research",
    phase: "Phase 4",
    title: "Identity Map",
    description: "MBTI, 사주, 성격 데이터, 점성술 등 다양한 패턴을 통합 분석하여 개인의 정체성을 시각화하는 서비스.",
    label: "연구중",
  },
  {
    status: "research",
    phase: "Phase 5",
    title: "Decision Compass",
    description: "창업, 이직, 관계, 투자 등 중요한 선택에서 나타나는 의사결정 패턴을 분석하는 서비스.",
    label: "연구중",
  },
];

const statusConfig = {
  current: {
    dot: "bg-[#D4AF37]",
    dotRing: "ring-4 ring-[#D4AF37]/20",
    line: "bg-[#D4AF37]",
    badge: "bg-[#D4AF37]/10 text-[#b8952e] dark:text-[#D4AF37] border-[#D4AF37]/30",
  },
  upcoming: {
    dot: "bg-slate-400 dark:bg-slate-500",
    dotRing: "ring-4 ring-slate-200 dark:ring-slate-700",
    line: "bg-slate-200 dark:bg-slate-700",
    badge: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
  },
  research: {
    dot: "bg-slate-300 dark:bg-slate-700",
    dotRing: "ring-4 ring-slate-100 dark:ring-slate-800",
    line: "bg-slate-100 dark:bg-slate-800",
    badge: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700",
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 px-6 bg-white dark:bg-[#0a0f1e]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/5 dark:bg-[#D4AF37]/10 border border-[#0F172A]/10 dark:border-[#D4AF37]/20 mb-6">
            <span className="text-xs font-medium text-[#0F172A] dark:text-[#D4AF37] tracking-widest uppercase">
              앞으로의 실험
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">
            Research Roadmap
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            인간 패턴 이해를 위해 Destiny Lab이 연구하고 만들어가는 서비스들
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {milestones.map((m, i) => {
            const cfg = statusConfig[m.status as keyof typeof statusConfig];
            const isLast = i === milestones.length - 1;

            return (
              <div key={m.title} className="relative flex gap-6">
                {/* Left: dot + line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${cfg.dot} ${cfg.dotRing}`}
                  />
                  {!isLast && (
                    <div className={`w-px flex-1 mt-2 mb-0 ${cfg.line}`} />
                  )}
                </div>

                {/* Right: content */}
                <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-slate-400 dark:text-slate-600 font-mono">
                      {m.phase}
                    </span>
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-medium ${cfg.badge}`}
                    >
                      {m.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
