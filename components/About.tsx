import { Badge } from "@/components/ui";
import { stance } from "@/lib/content";

const columns = [
  {
    title: "합니다",
    items: stance.does,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
  {
    title: "하지 않습니다",
    items: stance.doesNot,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
];

export function StanceCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {columns.map((c) => (
        <div
          key={c.title}
          className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-[#D4AF37]/40 transition-colors group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0F172A] dark:bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37]/10 transition-colors">
            {c.icon}
          </div>
          <h3 className="font-semibold text-[#0F172A] dark:text-white text-sm mb-3">{c.title}</h3>
          <ul className="grid gap-2">
            {c.items.map((item) => (
              <li key={item} className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white dark:bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <Badge>Lab stance</Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white leading-tight mb-6">
              우리가 하는 것과
              <br />
              하지 않는 것
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-base">
              Destiny Lab은 사람의 성향, 관계, 선택, 정체성에서 반복되는 패턴을 연구하는 AI Human Pattern
              Lab입니다.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              Destiny Lab의 결과물은 자기 이해를 돕는 참고 자료입니다.{" "}
              <span className="text-[#0F172A] dark:text-white font-medium">
                이 기준을 모든 프로젝트에 똑같이 적용합니다.
              </span>
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-500">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span>참고용 분석 자료 · 과학적 진단 아님</span>
            </div>
          </div>

          {/* Right: Stance cards */}
          <StanceCards />
        </div>
      </div>
    </section>
  );
}
