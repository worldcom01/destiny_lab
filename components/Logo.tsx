// 워드마크: "Destiny Lab"의 i 위 점만 골드로 바꾼 로고 (점 없는 ı + 골드 점)
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight whitespace-nowrap ${className}`}>
      Dest
      <span className="relative">
        ı
        <span
          aria-hidden
          className="absolute left-1/2 top-[0.08em] w-[0.2em] h-[0.2em] -translate-x-1/2 rounded-full bg-[#D4AF37]"
        />
      </span>
      ny <span className="font-light">Lab</span>
    </span>
  );
}
