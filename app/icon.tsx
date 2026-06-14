import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EEF3F2",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
      </div>
    ),
    { ...size }
  );
}
