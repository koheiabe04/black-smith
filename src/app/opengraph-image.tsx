import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Black Smith — 溶接・鉄の加工体験アトリエ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #222 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "repeating-linear-gradient(90deg, #D4A03C 0px, #D4A03C 20px, #111 20px, #111 40px)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ width: 40, height: 1, background: "#D4A03C" }} />
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.3em",
              color: "#888",
              fontWeight: 700,
            }}
          >
            WELDING &amp; METALWORK EXPERIENCE
          </span>
        </div>

        {/* Main text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#F5F0E8",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            欲しければ、
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#D4A03C",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            作る。
          </span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#888",
              lineHeight: 1.2,
              marginTop: 8,
            }}
          >
            壊れたら、直す。
          </span>
        </div>

        {/* Bottom info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid #333",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#F5F0E8",
                letterSpacing: "0.05em",
              }}
            >
              Black Smith
            </span>
            <span style={{ fontSize: 14, color: "#666" }}>
              溶接・鉄の加工体験アトリエ
            </span>
          </div>
          <span style={{ fontSize: 14, color: "#666" }}>
            岩手県一関市 ｜ 6歳から参加OK
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
