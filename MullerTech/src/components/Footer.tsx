import Logo from "./Logo";
import { IconGithub, IconLinkedin, IconInstagram } from "./icons";
import "../styles/footer.css";

const COLUMNS = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "#hero" },
      { label: "Carreiras", href: "#hero" },
      { label: "Blog", href: "#hero" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Desenvolvimento", href: "#solutions" },
      { label: "Nuvem", href: "#solutions" },
      { label: "Segurança", href: "#solutions" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Planos", href: "#pricing" },
      { label: "Depoimentos", href: "#testimonials" },
      { label: "Contato", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Tecnologia sob medida para empresas que querem crescer com segurança
            e velocidade.
          </p>
          <div className="footer-social">
            <a href="#hero" aria-label="GitHub">
              <IconGithub size={20} />
            </a>
            <a href="#hero" aria-label="LinkedIn">
              <IconLinkedin size={20} />
            </a>
            <a href="#hero" aria-label="Instagram">
              <IconInstagram size={20} />
            </a>
          </div>
        </div>

        {COLUMNS.map((column) => (
          <nav className="footer-col" key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Müller Tech &amp; Innovation — Todos os direitos reservados.</p>
          <p>
            Feito com <span className="heart">💚</span> na aula de Desenvolvimento Web
          </p>
        </div>
      </div>
    </footer>
  );
}
