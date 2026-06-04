import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-pretendard",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Destiny Lab | AI 운명 데이터 연구소",
  description:
    "사주, 성명학, 성격 분석을 AI와 데이터 기술로 재해석하는 Destiny Lab. 동양 명리학과 현대 AI 기술이 만나는 곳.",
  keywords: ["사주", "명리학", "성명학", "AI", "운명코드", "Birth Designer", "Destiny Lab"],
  authors: [{ name: "Destiny Lab" }],
  creator: "Destiny Lab",
  metadataBase: new URL("https://destinylab.kr"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://destinylab.kr",
    title: "Destiny Lab | AI 운명 데이터 연구소",
    description:
      "사주, 성명학, 성격 분석을 AI와 데이터 기술로 재해석하는 Destiny Lab.",
    siteName: "Destiny Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destiny Lab | AI 운명 데이터 연구소",
    description:
      "사주, 성명학, 성격 분석을 AI와 데이터 기술로 재해석하는 Destiny Lab.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Destiny Lab",
              url: "https://destinylab.kr",
              description:
                "동양 명리학, 성명학, 성격 분석을 AI 기술로 재해석하는 운명 데이터 연구소",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
