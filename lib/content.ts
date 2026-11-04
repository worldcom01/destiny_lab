export const SITE_URL = "https://www.destiny-code.kr";
export const DESTINY_CODE_HREF = "/code";
export const INSTAGRAM_URL = "https://www.instagram.com/destinylab.kr_official/";

export const DISCLAIMER =
  "Destiny Lab의 모든 분석 결과는 자기 이해를 위한 참고 자료입니다. 사주, 손금, 혈액형 등은 전통적·상징적 해석 체계이며 과학적으로 검증된 성격 진단이 아닙니다. 의료, 법률, 재정 판단의 근거로 사용하지 마세요.";

export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/updates", label: "Updates" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
];

export const stance = {
  does: [
    "여러 해석 체계가 같은 방향을 가리키는 지점을 찾습니다.",
    "결과마다 어떤 체계의 어떤 근거에서 나왔는지 함께 보여 줍니다.",
    "버전이 바뀔 때마다 무엇이 달라졌는지 기록하고 공개합니다.",
  ],
  doesNot: [
    "미래를 예측하지 않습니다.",
    "사주·손금·혈액형을 과학적으로 검증된 성격 진단처럼 다루지 않습니다.",
    "의료, 법률, 재정 판단의 근거를 제공하지 않습니다.",
  ],
};

export const destinyCode = {
  name: "Destiny Code",
  status: "운영 중 · 베타",
  summary:
    "사주, MBTI, 혈액형, 타로, 점성술, 손금처럼 서로 다른 해석 체계의 결과를 겹쳐 보고, 여러 체계가 함께 가리키는 나의 패턴을 AI 종합 분석으로 정리합니다.",
  systems: [
    { name: "사주" },
    { name: "MBTI" },
    { name: "혈액형" },
    { name: "타로" },
    { name: "점성술" },
    { name: "손금", isNew: true },
  ],
  versions: [
    { label: "엔진", value: "Engine V4" },
    { label: "손금", value: "Palm V3" },
    { label: "결과 화면", value: "Result First UX V1.1" },
  ],
};

export const birthDesigner = {
  name: "Birth Designer",
  status: "개발 중",
  summary:
    "이름, 시작일, 브랜드명 조합을 여러 해석 체계로 비교해 보는 시뮬레이션 도구입니다. 현재 개발 중입니다.",
};

export const researchTopics = [
  {
    name: "Relationship Code",
    summary: "두 사람의 해석 결과를 나란히 놓았을 때 소통 방식과 갈등 지점이 어떻게 드러나는지 살펴봅니다.",
  },
  {
    name: "Identity Map",
    summary: "여러 체계에서 반복되는 특성을 한 장의 지도로 정리하는 방법을 실험합니다.",
  },
  {
    name: "Decision Compass",
    summary: "중요한 선택 앞에서 반복되는 의사결정 습관을 돌아보는 도구를 구상합니다.",
  },
];

export type UpdateKind = "product" | "internal";

export type Update = {
  slug: string;
  version: string;
  kind: UpdateKind;
  title: string;
  summary: string;
  note?: string;
};

// 날짜는 기록하지 않는다. 배열 순서가 곧 표시 순서다.
export const updates: Update[] = [
  {
    slug: "result-first-ux-v1-1",
    version: "Result First UX V1.1",
    kind: "product",
    title: "결과 화면에서 AI 종합 분석을 가장 먼저 보여 줍니다",
    summary:
      "체계별 세부 결과보다 여러 체계를 종합한 AI 분석을 첫 화면에 배치했습니다. 세부 결과는 그 아래에서 이어서 볼 수 있습니다.",
  },
  {
    slug: "engine-v4",
    version: "Engine V4",
    kind: "product",
    title: "분석 근거 표시와 Identity 선택 방식을 개선했습니다",
    summary:
      "분석 결과가 어떤 근거에서 나왔는지 더 분명하게 보이도록 바꾸고, 대표 Identity를 고르는 방식을 다듬었습니다.",
  },
  {
    slug: "palm-v3",
    version: "Palm V3",
    kind: "product",
    title: "손금 분석을 추가하고 연동을 안정화했습니다",
    summary:
      "Destiny Code의 해석 체계에 손금이 새로 추가되었습니다. 손금 분석 결과가 AI 종합 분석에 안정적으로 함께 반영되도록 연동 과정을 정비했습니다.",
  },
  {
    slug: "mobile-qa",
    version: "Mobile QA",
    kind: "internal",
    title: "실제 모바일 기기에서 위 변경 사항을 확인했습니다",
    summary:
      "Engine V4, Palm V3, Result First UX V1.1을 실제 모바일 환경에서 직접 사용하며 확인했습니다.",
    note: "Destiny Lab 내부 테스트 결과이며, 외부 기관의 검증이나 정확도 평가가 아닙니다.",
  },
];

export const updateKindLabel: Record<UpdateKind, { label: string; desc: string }> = {
  product: { label: "제품 변경", desc: "사용자가 쓰는 서비스에 반영된 변경" },
  internal: { label: "내부 검증", desc: "팀 내부에서 진행한 테스트" },
};

export const faqs = [
  {
    q: "의학적 판단을 제공하나요?",
    a: "아니요. Destiny Lab의 모든 서비스는 참고용 분석 자료입니다. 의료, 법률, 재정적 판단의 근거로 사용하지 마세요. 중요한 결정은 반드시 전문가와 상담하시기 바랍니다.",
  },
  {
    q: "미래를 예측하나요?",
    a: "아니요. 저희는 미래를 예측하지 않습니다. 여러 해석 체계에서 반복되는 패턴을 정리해 자기 이해를 돕는 자료를 제공합니다. 당신의 선택과 행동이 당신의 미래를 만듭니다.",
  },
  {
    q: "사주나 손금 결과가 과학적으로 검증된 건가요?",
    a: "아니요. 사주, 손금, 혈액형 등은 오래 전해 온 상징적 해석 체계입니다. Destiny Lab은 이 체계들을 과학적 성격 진단으로 다루지 않으며, 여러 체계를 함께 놓고 볼 때 드러나는 공통점을 참고 자료로 정리합니다.",
  },
];
