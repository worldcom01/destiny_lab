import type { UpdateKind } from "@/lib/content";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/5 dark:bg-[#D4AF37]/10 border border-[#0F172A]/10 dark:border-[#D4AF37]/20 mb-6">
      <span className="text-xs font-medium text-[#0F172A] dark:text-[#D4AF37] tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}

export function SectionHeader({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="text-center mb-16">
      <Badge>{badge}</Badge>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">{title}</h2>
      {children && (
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">{children}</p>
      )}
    </div>
  );
}

export function PageHeader({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-[#0F172A] pt-36 pb-20 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">{badge}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{title}</h1>
        {children && <div className="text-slate-400 leading-relaxed text-base max-w-xl mx-auto">{children}</div>}
      </div>
    </header>
  );
}

const statusBadge = {
  live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  gold: "bg-[#D4AF37]/10 text-[#b8952e] dark:text-[#D4AF37] border-[#D4AF37]/30",
  muted: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700",
} as const;

export function StatusBadge({ tone, children }: { tone: keyof typeof statusBadge; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium ${statusBadge[tone]}`}>
      {children}
    </span>
  );
}

export function KindBadge({ kind, label }: { kind: UpdateKind; label: string }) {
  return <StatusBadge tone={kind === "product" ? "gold" : "muted"}>{label}</StatusBadge>;
}
