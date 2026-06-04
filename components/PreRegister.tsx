"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function PreRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "오류가 발생했습니다.");
      }

      setState("success");
      setName("");
      setEmail("");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "오류가 발생했습니다. 다시 시도해주세요.");
    }
  }

  return (
    <section
      id="waitlist"
      className="py-28 px-6 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">
            Early Access
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Destiny Lab Early Access
        </h2>
        <p className="text-slate-400 mb-10 text-sm leading-relaxed">
          출시 소식을 가장 먼저 받아보세요.
          <br />
          사전예약자에게는 얼리 액세스 혜택이 제공됩니다.
        </p>

        {state === "success" ? (
          <div className="py-10 px-8 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold mb-1">등록이 완료되었습니다!</p>
            <p className="text-slate-400 text-sm">출시 소식을 이메일로 알려드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={state === "loading"}
                className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-colors disabled:opacity-50"
              />
              <input
                type="email"
                placeholder="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={state === "loading"}
                className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/8 transition-colors disabled:opacity-50"
              />
            </div>

            {state === "error" && (
              <p className="text-red-400 text-xs text-left">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={state === "loading" || !name.trim() || !email.trim()}
              className="w-full py-3.5 bg-[#D4AF37] text-[#0F172A] rounded-xl font-semibold text-sm hover:bg-[#e8c84a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {state === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  처리중...
                </>
              ) : (
                "사전예약 등록"
              )}
            </button>

            <p className="text-xs text-slate-600 mt-1">
              스팸 없음. 중요 소식만 발송합니다.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
