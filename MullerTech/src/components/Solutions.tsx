import Card from "./Card";
import { IconCode, IconCloud, IconShield } from "./icons";
import "../styles/solutions.css";

const SOLUTIONS = [
  {
    icon: <IconCode size={26} />,
    title: "Desenvolvimento de Software",
    text: "Sistemas web, aplicativos e APIs sob medida, construídos com tecnologia moderna e total foco no resultado do seu negócio.",
  },
  {
    icon: <IconCloud size={26} />,
    title: "Infraestrutura & Nuvem",
    text: "Migração, gestão e escalabilidade na nuvem com alta disponibilidade, automação e custos sempre otimizados.",
  },
  {
    icon: <IconShield size={26} />,
    title: "Segurança & Suporte",
    text: "Proteção de dados, monitoramento contínuo e suporte especializado 24/7 para manter sua operação no ar.",
  },
];

export default function Solutions() {
  return (
    <section className="container" id="solutions">
      <header className="section-head">
        <span className="section-tag">Soluções</span>
        <h2>Sob medida para você</h2>
        <p>
          Da ideia ao deploy, a <strong>Müller&nbsp;TI</strong> cuida de toda a
          jornada de tecnologia da sua empresa — com times especializados e foco
          em gerar valor.
        </p>
      </header>

      <div className="even-columns gap-1.5 cards-grid">
        {SOLUTIONS.map((solution) => (
          <Card key={solution.title} {...solution} />
        ))}
      </div>
    </section>
  );
}
