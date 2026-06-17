import "../styles/logo.css";

interface LogoProps {
  /** Mostra o nome "MüllerTech" ao lado do símbolo. */
  withWordmark?: boolean;
}

export default function Logo({ withWordmark = true }: LogoProps) {
  return (
    <a href="#hero" className="logo" aria-label="Müller Tech & Innovation — ir para o início">
      <span className="logo__mark" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="logo-grad" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7BE8B0" />
              <stop offset="1" stopColor="#2BD576" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="56" height="56" rx="16" fill="#0E1512" />
          <rect
            x="5.25"
            y="5.25"
            width="53.5"
            height="53.5"
            rx="14.75"
            stroke="url(#logo-grad)"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
          <path
            d="M19 44V21L32 33L45 21V44"
            stroke="url(#logo-grad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {withWordmark && (
        <span className="logo__wordmark">
          Müller<span className="logo__accent">Tech</span>
        </span>
      )}
    </a>
  );
}
