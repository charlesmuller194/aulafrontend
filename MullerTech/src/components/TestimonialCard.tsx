import { IconStar, IconStarOutline } from "./icons";
import "../styles/testimonials.css";

export interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  /** Quantidade de estrelas preenchidas (0 a 5). */
  stars: number;
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({ text, name, role, stars }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="stars" aria-label={`${stars} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, index) =>
          index < stars ? (
            <IconStar key={index} size={18} />
          ) : (
            <IconStarOutline key={index} size={18} className="star-empty" />
          )
        )}
      </div>

      <p className="testimonial-card__quote">“{text}”</p>

      <div className="avatar">
        <span className="avatar__img" aria-hidden="true">
          {initials(name)}
        </span>
        <span className="avatar__meta">
          <span className="avatar__name">{name}</span>
          <span className="avatar__role">{role}</span>
        </span>
      </div>
    </article>
  );
}
