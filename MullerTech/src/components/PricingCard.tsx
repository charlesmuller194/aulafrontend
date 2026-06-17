import Button from "./Button";
import { IconCheck } from "./icons";
import "../styles/pricing.css";

export interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  description,
  price,
  period,
  features,
  ctaText,
  featured,
  badge,
}: PricingCardProps) {
  return (
    <article className={featured ? "pricing-card featured" : "pricing-card"}>
      {badge && <span className="pricing-card__badge">{badge}</span>}

      <div className="pricing-card__head">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="pricing-card__price">
        <span className="amount">{price}</span>
        {period && <span className="period">{period}</span>}
      </div>

      <Button text={ctaText} href="#contact" fullWidth secondary={!featured} />

      <span className="pricing-card__divider" aria-hidden="true" />

      <ul className="pricing-card__features">
        {features.map((feature) => (
          <li key={feature}>
            <IconCheck size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
