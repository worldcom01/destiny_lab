export const metadata = {
  title: "Destiny Code 시작하기",
  description: "사주, MBTI, 혈액형, 타로, 점성술, 손금의 교집합을 AI로 분석하는 Destiny Code",
  alternates: { canonical: "/code" },
};

export default function CodePage() {
  return (
    <iframe
      src="https://destiny-code.vercel.app/"
      className="fixed inset-0 w-full h-full border-0"
      title="Destiny Code"
      allow="clipboard-write"
    />
  );
}
