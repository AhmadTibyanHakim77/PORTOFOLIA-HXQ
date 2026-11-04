import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          background: "#08090d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f5f5f7",
          borderRadius: 8,
          border: "1.5px solid #4d7cff",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: -0.5,
        }}
      >
        ATH
      </div>
    ),
    {
      ...size,
    }
  );
}

