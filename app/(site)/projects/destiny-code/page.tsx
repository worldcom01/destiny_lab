import type { Metadata } from "next";
import Link from "next/link";
import UpdatesList from "@/components/UpdatesList";
import { PageHeader, SectionHeader } from "@/components/ui";
import { DESTINY_CODE_HREF, DISCLAIMER, destinyCode } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destiny Code",
  description: destinyCode.summary,
  alternates: { canonical: "/projects/destiny-code" },
};

export default function DestinyCodePage() {
  return (
    <main>
      <PageHeader badge={destinyCode.status} title={destinyCode.name}>
        <p className="mb-10">{destinyCode.summary}</p>
        <Link
          href={DESTINY_CODE_HREF}
          className="inline-block px-8 py-4 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold text-sm hover:bg-[#e8c84a] transition-colors shadow-lg shadow-[#D4AF37]/20"
        >
          Destiny Code 시작하기
        </Link>
      </PageHeader>

      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-white mb-5">함께 보는 해석 체계</h2>
            <div className="flex flex-wrap gap-2">
              {destinyCode.systems.map((s) => (
                <span
                  key={s.name}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm"
                >
                  {s.name}
                  {s.isNew && <span className="ml-1.5 font-semibold text-[#b8952e] dark:text-[#D4AF37]">NEW</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-white mb-5">현재 버전</h2>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
              {destinyCode.versions.map((v) => (
                <div key={v.label} className="contents">
                  <dt className="text-slate-400 dark:text-slate-500">{v.label}</dt>
                  <dd className="font-mono text-[#0F172A] dark:text-white">{v.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="md:col-span-2 text-xs text-slate-500 dark:text-slate-500 leading-relaxed text-center">
            {DISCLAIMER}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Updates" title="변경 기록" />
          <UpdatesList />
        </div>
      </section>
    </main>
  );
}
