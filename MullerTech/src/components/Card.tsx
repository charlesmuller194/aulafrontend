import type { ReactNode } from "react";
import "../styles/solutions.css";

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

/** Cartão de serviço usado na seção de soluções. */
export default function Card({ icon, title, text }: CardProps) {
  return (
    <article className="card">
      <span className="card__icon" aria-hidden="true">
        {icon}
      </span>
      <div className="card__body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <span className="card__detail" aria-hidden="true" />
    </article>
  );
}
