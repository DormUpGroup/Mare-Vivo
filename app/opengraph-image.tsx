import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mare Vivo — Fresh Seafood. Mediterranean Soul.";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #EEF3F2 0%, #dce8e6 45%, #EEF3F2 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="22"
              stroke="#174D49"
              strokeWidth="0.75"
              opacity="0.22"
            />
            <circle cx="24" cy="15" r="2.25" fill="#A77C52" />
            <path
              d="M10 27.5C14.5 23.5 19 23.5 24 27.5C29 31.5 33.5 31.5 38 27.5"
              stroke="#174D49"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
            <path
              d="M12 32.5C16 29.5 20 29.5 24 32.5C28 35.5 32 35.5 36 32.5"
              stroke="#174D49"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 600,
                color: "#24302F",
                letterSpacing: "0.04em",
              }}
            >
              Mare Vivo
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#A77C52",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              Fresh Seafood · Mediterranean Soul
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
