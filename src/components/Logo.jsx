import { useId } from "react";

// Vector recreation of the CNLY Labs hexagon "C" mark and wordmark.
export function LogoMark({ size = 40 }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#0a4cff" />
          <stop offset="1" stopColor="#22c3fb" />
        </linearGradient>
      </defs>
      <path
        d="M80 32 50 15 20 32v36l30 17 30-17"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="13"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M66 46 50 55 36 47"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ size = 38 }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="logo-text">
        <span className="logo-cnly">CNLY</span>
        <span className="logo-labs">LABS</span>
      </span>
    </span>
  );
}
