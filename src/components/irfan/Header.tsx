import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from '../ui/SocialIcons';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  activeStage: string;
  onNavigate: (stage: string, label: string) => void;
  darkTheme: boolean;
  onToggleTheme: () => void;
}

export function Header({
  activeStage,
  onNavigate,
  darkTheme,
  onToggleTheme,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="frame-header">
        {/* Brand Name & Logo on the left */}
        <button
          onClick={() => onNavigate('home', 'INÍCIO')}
          className="brand-mark cursor-pointer flex items-center gap-2.5"
          aria-label="Davi Linhares Home"
        >
          <img
            src="./favicon.svg"
            alt="Logo Davi Linhares"
            className="w-7 h-7 object-contain"
          />
          <span className="hidden sm:inline">DAVI / 2026</span>
        </button>

        {/* Desktop Header Actions */}
        <div className="header-actions desktop-header-actions">
          {/* Fixed Portuguese Mode */}
          <div className="lang-dropdown-pill" title="Modo Português Ativo">
            <span>文A</span>
            <span>PORTUGUÊS</span>
          </div>

          {/* Social Icons (Square 1px border buttons) */}
          <a
            href={DEVELOPER_INFO.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="header-action-btn"
            title="GitHub"
          >
            <GithubIcon size={14} />
          </a>

          <a
            href={DEVELOPER_INFO.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="header-action-btn"
            title="LinkedIn"
          >
            <LinkedinIcon size={14} />
          </a>

          <a
            href={DEVELOPER_INFO.links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="header-action-btn"
            title="Instagram"
          >
            <InstagramIcon size={14} />
          </a>

          <a
            href={DEVELOPER_INFO.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="header-action-btn"
            title="WhatsApp"
          >
            <WhatsappIcon size={14} />
          </a>

          {/* Theme Toggle (Paper vs Dark) */}
          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn ml-1"
            aria-label="Toggle theme"
            title={darkTheme ? "Mudar para modo Paper" : "Mudar para modo Dark"}
          >
            {darkTheme ? <Sun size={13} className="text-amber-400" /> : <Moon size={13} />}
            <span className="hidden sm:inline">{darkTheme ? "LIGHT" : "DARK"}</span>
          </button>
        </div>

        {/* Mobile Header Actions (Visible on Mobile <= 900px, matching Screenshots 1, 3, 4, 5) */}
        <div className="mobile-header-actions">
          <div className="mobile-lang-btn" title="Português">
            <span>文A</span>
          </div>

          {/* Theme Toggle in Mobile Header */}
          <button
            onClick={onToggleTheme}
            className="mobile-theme-btn cursor-pointer"
            aria-label="Alternar Tema"
            title={darkTheme ? "Mudar para modo Paper" : "Mudar para modo Dark"}
          >
            {darkTheme ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-menu-btn cursor-pointer"
            aria-label="Abrir Menu de Navegação"
          >
            <span>MENU</span>
            <span className="text-sm font-black">+</span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu Overlay (Screenshot 2) */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeStage={activeStage}
        onNavigate={onNavigate}
      />
    </>
  );
}
