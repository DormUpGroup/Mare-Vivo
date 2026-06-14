type LogoProps = {
  size?: number;
  className?: string;
  ariaHidden?: boolean;
};

export default function Logo({
  size = 40,
  className = "",
  ariaHidden = true,
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={ariaHidden}
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.22"
      />
      <circle cx="24" cy="15" r="2.25" fill="#A77C52" opacity="0.95" />
      <path
        d="M10 27.5C14.5 23.5 19 23.5 24 27.5C29 31.5 33.5 31.5 38 27.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M12 32.5C16 29.5 20 29.5 24 32.5C28 35.5 32 35.5 36 32.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M14 21.5C17.5 19 21 19 24 21.5C27 22 30.5 22 34 21.5"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
