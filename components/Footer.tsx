import Link from "next/link";

const footerLinks = [
  { label: "소개", href: "#about" },
  { label: "서비스", href: "#services" },
  { label: "로드맵", href: "#roadmap" },
  { label: "사전예약", href: "#waitlist" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#D4AF37] flex items-center justify-center">
                <span className="text-[#0F172A] font-bold text-xs">D</span>
              </div>
              <span className="font-semibold text-white">Destiny Lab</span>
            </div>
            <p className="text-xs text-slate-500 tracking-widest uppercase">
              Data meets Destiny
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {year} Destiny Lab. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Powered by Destiny Lab
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-slate-700 dark:text-slate-700 text-center leading-relaxed max-w-2xl mx-auto">
          본 서비스의 모든 분석 결과는 참고용 자료입니다. 의료, 법률, 재정적 판단의 근거로 사용하지 마세요.
        </p>
      </div>
    </footer>
  );
}
