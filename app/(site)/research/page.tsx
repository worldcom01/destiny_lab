import type { Metadata } from "next";
import Link from "next/link";
import { StanceCards } from "@/components/About";
import { Timeline } from "@/components/Roadmap";
import { PageHeader, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Research",
  description: "Destiny Lab의 연구 방향과 실험 기록. 여러 해석 체계를 AI로 교차하는 방식과 앞으로 탐구할 주제.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <main>
      <PageHeader badge="Research" title="연구 방향">
        사람을 설명해 온 여러 해석 체계를 나란히 놓고, AI로 그 사이의 공통점을 찾습니다. 결과는 근거와 함께
        보여 주고, 바뀐 내용은 기록으로 남깁니다.
      </PageHeader>

      <section className="py-24 px-6 bg-white dark:bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Principles" title="연구 원칙" />
          <StanceCards />
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Topics" title="앞으로 탐구할 질문들">
            연구 주제는 아직 출시된 서비스가 아닙니다.
          </SectionHeader>
          <Timeline />
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-[#0a0f1e]">
        <div className="max-w-2xl mx-auto">
          <SectionHeader badge="Experiments" title="실험 기록" />
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              아직 공개한 실험 기록이 없습니다. 연구 주제의 실험이 시작되면 이곳에 정리합니다.
              <br />
              지금까지의 제품 변경은 개발 기록에서 볼 수 있습니다.
            </p>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-[#D4AF37] hover:gap-3 transition-all"
            >
              개발 기록 보기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
