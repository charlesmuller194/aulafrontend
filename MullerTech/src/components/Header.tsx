import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { IconMenu, IconClose, IconArrowRight } from "./icons";
import "../styles/header.css";

const NAV_LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#solutions", label: "Soluções" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#pricing", label: "Planos" },
  { href: "#contact", label: "Contato" },
];

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Trava o scroll da página enquanto o menu mobile está aberto.
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.style.overflow = showMobileMenu ? "hidden" : "auto";
  }, [showMobileMenu]);

  // Aplica um fundo translúcido ao header depois de rolar um pouco.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setShowMobileMenu(false);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <nav className="container flex items-center justify-between py-sm">
        <Logo />

        {/* Navegação — desktop */}
        <div className="desktop-only">
          <ul className="nav-links flex gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ações — desktop */}
        <div className="desktop-only">
          <div className="nav-actions flex items-center">
            <a className="nav-login" href="#contact">
              Entrar
            </a>
            <Button
              text="Começar agora"
              href="#contact"
              icon={<IconArrowRight size={16} />}
            />
          </div>
        </div>

        {/* Botão do menu — mobile */}
        <button
          className="btn-wrapper mobile-toggle"
          aria-label={showMobileMenu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={showMobileMenu}
          onClick={() => setShowMobileMenu((value) => !value)}
        >
          {showMobileMenu ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Drawer — mobile */}
      {showMobileMenu && (
        <div className="mobile-menu-content">
          <ul className="container">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-cta">
              <Button
                text="Começar agora"
                href="#contact"
                fullWidth
                onClick={closeMenu}
                icon={<IconArrowRight size={16} />}
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
