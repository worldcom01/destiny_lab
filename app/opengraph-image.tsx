import { ImageResponse } from "next/og";

export const alt = "Destiny Lab — AI Human Pattern Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 기본 OG 폰트는 한글을 지원하지 않아 영문만 사용한다.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F172A",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 3, color: "#D4AF37" }}>AI HUMAN PATTERN LAB</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* 로고와 같은 워드마크: 점 없는 ı 위에 골드 점 */}
          <div style={{ display: "flex", fontSize: 112, fontWeight: 600, letterSpacing: -3 }}>
            <span>Dest</span>
            <span style={{ display: "flex", position: "relative" }}>
              ı
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 22,
                  width: 22,
                  height: 22,
                  marginLeft: -11,
                  borderRadius: 11,
                  background: "#D4AF37",
                }}
              />
            </span>
            <span style={{ whiteSpace: "pre" }}>ny Lab</span>
          </div>
          <div style={{ fontSize: 34, color: "#94a3b8", marginTop: 16 }}>Destiny Code · Updates · Research</div>
        </div>
        <div style={{ fontSize: 24, color: "#94a3b8" }}>destiny-code.kr</div>
      </div>
    ),
    size
  );
}
