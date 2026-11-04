import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KindBadge, PageHeader } from "@/components/ui";
import { SITE_URL, updateKindLabel, updates } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return updates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = updates.find((u) => u.slug === slug);
  if (!update) return {};
  return {
    title: `${update.version} · ${update.title}`,
    description: update.summary,
    alternates: { canonical: `/updates/${update.slug}` },
  };
}

export default async function UpdatePage({ params }: Props) {
  const { slug } = await params;
  const update = updates.find((u) => u.slug === slug);
  if (!update) notFound();

  const kind = updateKindLabel[update.kind];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: update.title,
            description: update.summary,
            url: `${SITE_URL}/updates/${update.slug}`,
            publisher: { "@type": "Organization", name: "Destiny Lab", url: SITE_URL },
          }),
        }}
      />
      <PageHeader badge={update.version} title={update.title} />
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-slate-500 dark:text-slate-400">
              <KindBadge kind={update.kind} label={kind.label} />
              {kind.desc}
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{update.summary}</p>
            {update.note && (
              <p className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-500">
                {update.note}
              </p>
            )}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/updates"
              className="text-sm text-slate-500 hover:text-[#0F172A] dark:hover:text-white transition-colors"
            >
              ← 전체 기록
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
