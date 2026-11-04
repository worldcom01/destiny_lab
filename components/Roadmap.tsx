import { SectionHeader } from "@/components/ui";
import { birthDesigner, destinyCode, researchTopics } from "@/lib/content";

const milestones = [
  { status: "current", title: destinyCode.name, description: destinyCode.summary, label: "운영 중" },
  { status: "upcoming", title: birthDesigner.name, description: birthDesigner.summary, label: birthDesigner.status },
  ...researchTopics.map((t) => ({ status: "research", title: t.name, description: t.summary, label: "연구 주제" })),
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

export function Timeline() {
  return (
    <div className="relative">
      {milestones.map((m, i) => {
        const cfg = statusConfig[m.status as keyof typeof statusConfig];
        const isLast = i === milestones.length - 1;

        return (
          <div key={m.title} className="relative flex gap-6">
            {/* Left: dot + line */}
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${cfg.dot} ${cfg.dotRing}`} />
              {!isLast && <div className={`w-px flex-1 mt-2 mb-0 ${cfg.line}`} />}
            </div>

            {/* Right: content */}
            <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-medium ${cfg.badge}`}>
                  {m.label}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] dark:text-white mb-2">{m.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{m.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-28 px-6 bg-white dark:bg-[#0a0f1e]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader badge="Research" title="앞으로 탐구할 질문들">
          연구 주제는 아직 출시된 서비스가 아닙니다. 실험이 진행되면 Updates에 기록합니다.
        </SectionHeader>
        <Timeline />
      </div>
    </section>
  );
}
