import { ImageResponse } from "next/og";

export const alt = "YOURS Finland — Young Researchers Society";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12382f",
          color: "#f3f1eb",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#8fd0c6" }}>
          YOUNG RESEARCHERS SOCIETY
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 0.95 }}>
          <span>YOURS</span>
          <span>Finland</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c45c32" }}>Led by Dr. Nour</div>
      </div>
    ),
    size,
  );
}
