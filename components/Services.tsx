import Link from "next/link";
import { SectionHeader, StatusBadge } from "@/components/ui";
import { DESTINY_CODE_HREF, birthDesigner, destinyCode } from "@/lib/content";

const services = [
  {
    id: "destiny-code",
    badge: <StatusBadge tone="live">{destinyCode.status}</StatusBadge>,
    title: destinyCode.name,
    subtitle: destinyCode.versions.map((v) => v.value).join(" · "),
    description: destinyCode.summary,
    tags: destinyCode.systems,
    cta: { label: "Destiny Code 시작하기", href: DESTINY_CODE_HREF },
    detailHref: "/projects/destiny-code",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    id: "birth-designer",
    badge: <StatusBadge tone="muted">{birthDesigner.status}</StatusBadge>,
    title: birthDesigner.name,
    subtitle: "출생 조합 시뮬레이터",
    description: birthDesigner.summary,
    tags: [{ name: "이름" }, { name: "시작일" }, { name: "브랜드명" }, { name: "시뮬레이션" }],
    cta: null,
    detailHref: null,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export function ServiceCards({ showDetailLink = true }: { showDetailLink?: boolean }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((s) => (
        <div
          key={s.id}
          className="relative p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/40 dark:hover:border-[#D4AF37]/40 transition-all duration-300 group"
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[#0F172A] dark:bg-slate-800 flex items-center justify-center text-[#D4AF37] mb-6">
            {s.icon}
          </div>

          {/* Badge */}
          <div className="mb-4">{s.badge}</div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-1">{s.title}</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 font-medium tracking-wide">{s.subtitle}</p>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{s.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {s.tags.map((tag) => (
              <span
                key={tag.name}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs"
              >
                {tag.name}
                {"isNew" in tag && tag.isNew && (
                  <span className="ml-1.5 font-semibold text-[#b8952e] dark:text-[#D4AF37]">NEW</span>
                )}
              </span>
            ))}
          </div>

          {/* CTA */}
          {s.cta ? (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={s.cta.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-[#D4AF37] group-hover:gap-3 transition-all"
              >
                {s.cta.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {showDetailLink && s.detailHref && (
                <Link
                  href={s.detailHref}
                  className="text-sm text-slate-500 hover:text-[#0F172A] dark:hover:text-white transition-colors"
                >
                  자세히 보기
                </Link>
              )}
            </div>
          ) : (
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">{birthDesigner.status}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader badge="Projects" title="지금 운영하고 준비하는 프로젝트">
          인간의 패턴을 이해하기 위해 Destiny Lab이 운영하고 준비하는 프로젝트입니다.
        </SectionHeader>
        <ServiceCards />
      </div>
    </section>
  );
}
