import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import UpdatesList from "@/components/UpdatesList";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <section id="updates" className="py-28 px-6 bg-white dark:bg-[#0a0f1e] border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Updates" title="개발 기록">
            무엇이 바뀌었는지 기록합니다. 제품 변경과 내부 검증은 따로 표시합니다.
          </SectionHeader>
          <UpdatesList />
          <div className="text-center mt-10">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-[#D4AF37] hover:gap-3 transition-all"
            >
              전체 기록 보기 →
            </Link>
          </div>
        </div>
      </section>
      <Roadmap />
      <FAQ />
    </main>
  );
}
