import type { ReactNode } from "react";
import "../styles/button.css";

interface IButtonProps {
  text: string;
  secondary?: boolean;
  /** Ícone opcional exibido à direita do texto. */
  icon?: ReactNode;
  /** Se informado, o botão vira um link <a>. */
  href?: string;
  fullWidth?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  text,
  secondary,
  icon,
  href,
  fullWidth,
  type = "button",
  onClick,
  disabled,
}: IButtonProps) {
  const className = [
    "btn",
    secondary ? "btn-secondary" : "btn-primary",
    fullWidth ? "btn-block" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {text}
      {icon && <span className="btn__icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
