"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { DESTINY_CODE_HREF, navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0a0f1e]/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Destiny Lab 홈"
        >
          <Logo className={`text-lg ${scrolled ? "text-[#0F172A] dark:text-white" : "text-white"}`} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-slate-600 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={DESTINY_CODE_HREF}
            className="text-sm px-4 py-2 bg-[#0F172A] dark:bg-[#D4AF37] text-white dark:text-[#0F172A] rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Destiny Code 열기
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-slate-600 dark:text-slate-400" : "text-slate-300"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0f1e] border-t border-slate-100 dark:border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 dark:text-slate-400 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={DESTINY_CODE_HREF}
            className="text-sm font-medium text-[#b8952e] dark:text-[#D4AF37] py-1"
            onClick={() => setMenuOpen(false)}
          >
            Destiny Code 열기 →
          </Link>
        </div>
      )}
    </nav>
  );
}
