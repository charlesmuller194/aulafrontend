/**
 * Biblioteca de ícones SVG inline.
 * Todos usam `currentColor`, então herdam a cor do contexto (fácil de tematizar).
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* --- Navegação / UI --------------------------------------------------- */
export const IconMenu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Icon>
);

export const IconClose = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const IconArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const IconCheck = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 6L9 17l-5-5" />
  </Icon>
);

/* --- Serviços --------------------------------------------------------- */
export const IconCode = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
  </Icon>
);

export const IconCloud = (p: IconProps) => (
  <Icon {...p}>
    <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.2 11.2 3.5 3.5 0 0 0 7 18h10.5Z" />
    <path d="M9 14l2 2 4-4" />
  </Icon>
);

export const IconShield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3Z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const IconChart = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </Icon>
);

export const IconCog = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </Icon>
);

export const IconHeadset = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <path d="M4 14a2 2 0 0 1 2-2h1v5H6a2 2 0 0 1-2-2v-1ZM20 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2v-1Z" />
    <path d="M20 16v1a4 4 0 0 1-4 4h-3" />
  </Icon>
);

/* --- Estrelas (avaliação) -------------------------------------------- */
const starPath = "M12 3.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.9l-5.25 2.8 1-5.85L3.5 9.65l5.9-.85L12 3.5Z";

export const IconStar = (p: IconProps) => (
  <Icon fill="currentColor" stroke="none" {...p}>
    <path d={starPath} />
  </Icon>
);

export const IconStarOutline = (p: IconProps) => (
  <Icon {...p}>
    <path d={starPath} />
  </Icon>
);

/* --- Contato / diversos ---------------------------------------------- */
export const IconMail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </Icon>
);

export const IconSparkle = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
  </Icon>
);

/* --- Redes sociais ---------------------------------------------------- */
export const IconGithub = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 2.8 5.3 3.1 5.3 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </Icon>
);

export const IconLinkedin = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />
  </Icon>
);

export const IconInstagram = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M16.5 7.5v.01" />
  </Icon>
);
