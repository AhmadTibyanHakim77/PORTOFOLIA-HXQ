import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const runtime = "nodejs";
export const alt = `${site.name} — Full Stack Developer & Data Science Enthusiast`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

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
          padding: "80px",
          backgroundColor: "#08090d",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(77, 124, 255, 0.25) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(17, 19, 27, 0.8) 0%, transparent 50%)",
          color: "#f5f5f7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar: Monogram & Location */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1.5px solid rgba(77, 124, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 700,
                color: "#4d7cff",
              }}
            >
              ATH
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "#9295a3",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              {site.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 16,
              color: "#4d7cff",
              fontFamily: "monospace",
              letterSpacing: 1,
            }}
          >
            Yogyakarta, Indonesia
          </div>
        </div>

        {/* Center: Title & Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: "1050px",
            }}
          >
            Building Scalable Digital Products &amp; Transforming Data into Intelligent Solutions.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#c9ccd6",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Full Stack Developer · Data Analyst &amp; Data Science Enthusiast
          </div>
        </div>

        {/* Bottom bar: Tech pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: 32,
          }}
        >
          {[
            "Full Stack Web",
            "Data Analytics",
            "Machine Learning",
            "Laravel",
            "Next.js",
            "Python",
            "TypeScript",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                fontSize: 15,
                color: "#c9ccd6",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
