import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pokkie — AI receptionist";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#07050a",
          color: "#fff7f4",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#ff3d82" }}>
          Pokkie
        </div>
        <div style={{ marginTop: 24, fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          AI-receptionist voor restaurants, beauty & meer
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#d9b8c4" }}>
          Neemt elke call aan. Boekt meer afspraken.
        </div>
      </div>
    ),
    size,
  );
}
