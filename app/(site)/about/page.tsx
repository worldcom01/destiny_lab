import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import { StanceCards } from "@/components/About";
import { PageHeader, SectionHeader } from "@/components/ui";
import { INSTAGRAM_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Destiny Lab은 사람이 반복하는 패턴을 AI로 다시 읽는 AI Human Pattern Lab입니다.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader badge="About" title="Destiny Lab">
        사람의 성향, 관계, 선택, 정체성에서 반복되는 패턴을 연구하는 AI Human Pattern Lab입니다.
      </PageHeader>

      <section className="py-24 px-6 bg-white dark:bg-[#0a0f1e]">
        <div className="max-w-2xl mx-auto">
          <SectionHeader badge="Who we are" title="소개" />
          <div className="grid gap-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
            <p>
              사주, 점성술, 손금, 혈액형, 성격 유형처럼 사람들은 오랫동안 여러 방식으로 자신을 이해하려 해
              왔습니다. Destiny Lab은 이 체계들을 하나씩 따로 보지 않고 나란히 놓습니다.
            </p>
            <p>
              서로 다른 체계가 같은 방향을 가리킬 때, 그 공통점을 AI로 정리해 자기 이해를 돕는 참고 자료로
              만듭니다. 그리고 무엇을 만들고 어떻게 바꿨는지{" "}
              <span className="text-[#0F172A] dark:text-white font-medium">개발 과정을 공개합니다.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Lab stance" title="우리가 하는 것과 하지 않는 것" />
          <StanceCards />
        </div>
      </section>

      <FAQ />

      <section className="py-24 px-6 bg-white dark:bg-[#0a0f1e]">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader badge="Contact" title="소식과 연락">
            새 소식은 Instagram에서 먼저 전합니다.
          </SectionHeader>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#0F172A] dark:bg-[#D4AF37] text-white dark:text-[#0F172A] rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Instagram @destinylab.kr_official
          </a>
        </div>
      </section>
    </main>
  );
}
