import { ImageResponse } from "next/og";

export const runtime = "edge";

const crownPath = "M114 7 L109 8 L103 21 L89 44 L84 40 L69 13 L67 11 L63 11 L63 18 L60 23 L59 28 L49 51 L46 50 L16 21 L15 14 L11 15 L11 31 L10 32 L8 63 L7 64 L7 80 L5 90 L5 99 L8 115 L12 122 L15 119 L27 113 L42 109 L61 109 L62 110 L70 110 L71 111 L94 114 L117 122 L120 122 L124 119 L122 113 L122 102 L121 101 L119 72 L114 75 L112 74 L118 66 L117 63 L117 48 L116 47 L117 14 L115 11 L116 9 Z";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E1B1B",
          color: "white",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 25% 30%, rgba(255,182,50,0.18), transparent 30%), radial-gradient(circle at 78% 72%, rgba(61,122,213,0.16), transparent 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "980px",
            gap: "70px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "330px",
              height: "330px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="330" height="330" viewBox="-12 -12 152 152" fill="none">
              <path d={crownPath} stroke="#FFB632" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" opacity="0.18" />
              <path d={crownPath} stroke="#FFB632" strokeWidth="13.5" strokeLinecap="round" strokeLinejoin="round" opacity="1" />
              <path d={crownPath} stroke="#FFB632" strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" strokeDasharray="13 2 5 2 18 3 7 2" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "610px" }}>
            <div
              style={{
                color: "#FFB632",
                fontSize: "30px",
                fontWeight: 800,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              Champions of Hope
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "68px",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
              }}
            >
              Real shows.
              <br />
              Real community.
              <br />
              Real signal.
            </div>
            <div
              style={{
                marginTop: "34px",
                color: "rgba(255,255,255,0.72)",
                fontSize: "26px",
                lineHeight: 1.25,
              }}
            >
              Live events, local artists, community impact, and FieldProof candidate readiness.
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
