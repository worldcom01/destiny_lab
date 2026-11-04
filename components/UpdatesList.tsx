import Link from "next/link";
import { KindBadge } from "@/components/ui";
import { updateKindLabel, updates } from "@/lib/content";

export default function UpdatesList() {
  return (
    <div>
      <div className="bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-slate-800 px-6 divide-y divide-slate-100 dark:divide-slate-800">
        {updates.map((u) => (
          <article key={u.slug} className="py-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">{u.version}</span>
              <KindBadge kind={u.kind} label={updateKindLabel[u.kind].label} />
            </div>
            <h3 className="text-base md:text-lg font-bold text-[#0F172A] dark:text-white mb-2 leading-snug">
              <Link href={`/updates/${u.slug}`} className="hover:text-[#b8952e] dark:hover:text-[#D4AF37] transition-colors">
                {u.title}
              </Link>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{u.summary}</p>
            {u.note && <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">{u.note}</p>}
          </article>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-6 text-xs text-slate-500 dark:text-slate-400">
        {(["product", "internal"] as const).map((kind) => (
          <span key={kind} className="inline-flex items-center gap-2">
            <KindBadge kind={kind} label={updateKindLabel[kind].label} />
            {updateKindLabel[kind].desc}
          </span>
        ))}
      </div>
    </div>
  );
}
