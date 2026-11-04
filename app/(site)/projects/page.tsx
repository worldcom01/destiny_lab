import type { Metadata } from "next";
import { ServiceCards } from "@/components/Services";
import { Timeline } from "@/components/Roadmap";
import { PageHeader, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: "Destiny Lab이 운영하고 준비하는 프로젝트. 운영 중인 Destiny Code와 개발 중인 Birth Designer.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader badge="Projects" title="프로젝트">
        운영 중인 서비스, 개발 중인 도구, 아직 연구 단계인 주제를 상태별로 나눠 보여 드립니다.
      </PageHeader>

      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="운영 중 · 개발 중" title="지금 운영하고 준비하는 프로젝트" />
          <ServiceCards />
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Research" title="다음 연구 주제">
            아직 서비스가 아닙니다. 실험이 진행되면 Updates에 기록합니다.
          </SectionHeader>
          <Timeline />
        </div>
      </section>
    </main>
  );
}
