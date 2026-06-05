export const metadata = {
  title: "운명코드 | Destiny Lab",
  description: "사주, MBTI, 혈액형, 타로, 점성술 교집합 분석 서비스",
};

export default function CodePage() {
  return (
    <iframe
      src="https://destiny-code.vercel.app/"
      className="fixed inset-0 w-full h-full border-0"
      title="운명코드"
      allow="clipboard-write"
    />
  );
}
