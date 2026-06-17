import Button from "./Button";
import { IconArrowRight, IconSparkle } from "./icons";
import "../styles/hero.css";

const STATS = [
  { value: "+120", label: "projetos entregues" },
  { value: "99.9%", label: "uptime garantido" },
  { value: "24/7", label: "suporte dedicado" },
];

export default function Hero() {
  return (
    <section id="hero">
      {/* Elementos decorativos de fundo */}
      <span className="hero-glow hero-glow--1" aria-hidden="true" />
      <span className="hero-glow hero-glow--2" aria-hidden="true" />

      <div className="container content">
        <span className="hero-badge">
          <span className="dot" aria-hidden="true" />
          Müller Tech &amp; Innovation
        </span>

        <h1>
          Tecnologia sob medida para o seu negócio{" "}
          <span className="text-gradient">crescer</span>
        </h1>

        <p className="hero-sub">
          Desenvolvimento de software, infraestrutura em nuvem e segurança digital
          em um só lugar. Transformamos desafios em soluções que geram resultado
          de verdade.
        </p>

        <div className="hero-cta flex gap-1">
          <Button
            text="Começar agora"
            href="#contact"
            icon={<IconArrowRight size={16} />}
          />
          <Button
            text="Conhecer soluções"
            href="#solutions"
            secondary
            icon={<IconSparkle size={16} />}
          />
        </div>

        <dl className="hero-stats">
          {STATS.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <dt className="hero-stat__value text-gradient">{stat.value}</dt>
              <dd className="hero-stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
