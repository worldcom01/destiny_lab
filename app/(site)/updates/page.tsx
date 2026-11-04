import type { Metadata } from "next";
import UpdatesList from "@/components/UpdatesList";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Updates",
  description: "Destiny Lab 개발 기록. 버전마다 무엇이 바뀌었는지 제품 변경과 내부 검증을 나눠 공개합니다.",
  alternates: { canonical: "/updates" },
};

export default function UpdatesPage() {
  return (
    <main>
      <PageHeader badge="Updates" title="개발 기록">
        버전마다 무엇이 바뀌었는지 기록합니다. 사용자가 쓰는 서비스에 반영된 변경과 팀 내부에서 진행한 검증을
        따로 표시합니다.
      </PageHeader>
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <UpdatesList />
        </div>
      </section>
    </main>
  );
}
