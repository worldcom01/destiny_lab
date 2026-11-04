import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { INSTAGRAM_URL, SITE_URL } from "@/lib/content";

const geist = Geist({
  variable: "--font-pretendard",
  subsets: ["latin"],
});

const description =
  "사람이 반복하는 패턴을 AI로 다시 읽는 연구실. Destiny Lab은 여러 해석 체계를 AI로 교차하는 Destiny Code를 운영하고, 개발 과정을 공개합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Destiny Lab | AI Human Pattern Lab",
    template: "%s | Destiny Lab",
  },
  description,
  keywords: ["Destiny Lab", "Destiny Code", "AI Human Pattern Lab", "사주", "손금", "MBTI", "AI 분석"],
  authors: [{ name: "Destiny Lab" }],
  creator: "Destiny Lab",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Destiny Lab | AI Human Pattern Lab",
    description,
    siteName: "Destiny Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destiny Lab | AI Human Pattern Lab",
    description,
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
              url: SITE_URL,
              description: "여러 해석 체계를 AI로 교차해 사람의 패턴을 연구하는 AI Human Pattern Lab",
              sameAs: [INSTAGRAM_URL],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
