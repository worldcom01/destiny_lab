"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "#about", label: "소개" },
    { href: "#services", label: "서비스" },
    { href: "#roadmap", label: "로드맵" },
    { href: "#waitlist", label: "사전예약" },
  ];

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
          <div className="w-8 h-8 rounded-lg bg-[#0F172A] dark:bg-[#D4AF37] flex items-center justify-center">
            <span className="text-[#D4AF37] dark:text-[#0F172A] font-bold text-sm">D</span>
          </div>
          <span className="font-semibold text-[#0F172A] dark:text-white tracking-tight">
            Destiny Lab
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="text-sm px-4 py-2 bg-[#0F172A] dark:bg-[#D4AF37] text-white dark:text-[#0F172A] rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            사전예약
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
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
        </div>
      )}
    </nav>
  );
}
