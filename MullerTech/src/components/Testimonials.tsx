import TestimonialCard, { type TestimonialCardProps } from "./TestimonialCard";
import "../styles/testimonials.css";

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    text: "A Müller TI reescreveu nossa plataforma e a performance melhorou de forma absurda. Entrega no prazo e comunicação impecável do início ao fim.",
    name: "Mariana Alves",
    role: "CTO · Lumina Varejo",
    stars: 5,
  },
  {
    text: "Migramos toda a infraestrutura para a nuvem sem nenhum downtime. O suporte 24/7 já salvou a nossa operação mais de uma vez.",
    name: "Rafael Costa",
    role: "Head de TI · NexBank",
    stars: 5,
  },
  {
    text: "Profissionais que entendem de negócio, não só de código. Viraram parceiros estratégicos da nossa empresa e da nossa evolução digital.",
    name: "Juliana Prado",
    role: "CEO · AgroData",
    stars: 4,
  },
  {
    text: "Implementaram nossa camada de segurança e passamos na auditoria de primeira. Recomendo a Müller TI de olhos fechados.",
    name: "Bruno Henrique",
    role: "Diretor · Vortex Log",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <header className="section-head">
        <span className="section-tag">Depoimentos</span>
        <h2>Cada cliente importa</h2>
        <p>
          Empresas de diferentes setores confiam na Müller&nbsp;TI para evoluir
          sua tecnologia. Veja o que dizem sobre trabalhar com a gente.
        </p>
      </header>

      <div className="carousel">
        {/* Conteúdo duplicado para criar o loop infinito do marquee */}
        <div className="carousel-content">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={`${item.name}-clone`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
