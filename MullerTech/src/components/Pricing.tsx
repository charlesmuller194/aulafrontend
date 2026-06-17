import PricingCard, { type PricingCardProps } from "./PricingCard";
import "../styles/pricing.css";

const PLANS: PricingCardProps[] = [
  {
    name: "Essencial",
    description: "Para pequenos times que estão começando a digitalizar.",
    price: "R$ 990",
    period: "/mês",
    ctaText: "Falar com vendas",
    features: [
      "1 projeto ativo",
      "Suporte em horário comercial",
      "Hospedagem gerenciada",
      "Atualizações mensais",
    ],
  },
  {
    name: "Profissional",
    description: "Para empresas em crescimento que precisam de agilidade.",
    price: "R$ 2.490",
    period: "/mês",
    ctaText: "Começar agora",
    featured: true,
    badge: "Mais popular",
    features: [
      "Projetos ilimitados",
      "Suporte 24/7",
      "Infraestrutura em nuvem",
      "Monitoramento e segurança",
      "Gerente de conta dedicado",
    ],
  },
  {
    name: "Empresarial",
    description: "Soluções dedicadas para operações de larga escala.",
    price: "Sob consulta",
    ctaText: "Falar com especialista",
    features: [
      "SLA personalizado",
      "Squad dedicado",
      "Arquitetura sob medida",
      "Consultoria estratégica",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="container" id="pricing">
      <header className="section-head">
        <span className="section-tag">Planos &amp; preços</span>
        <h2>Nossos planos</h2>
        <p>
          Escolha o plano ideal para o momento da sua empresa. Sem fidelidade,
          sem surpresas — e com a opção de evoluir quando quiser.
        </p>
      </header>

      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  );
}
