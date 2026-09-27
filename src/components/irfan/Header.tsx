import { Sun, Moon, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/SocialIcons';
import { DEVELOPER_INFO } from '../../data/portfolioData';

interface HeaderProps {
  activeStage: string;
  onNavigate: (stage: string, label: string) => void;
  darkTheme: boolean;
  onToggleTheme: () => void;
}

export function Header({
  onNavigate,
  darkTheme,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className="frame-header">
      {/* Brand Name on the left (without logo icon, as requested) */}
      <button
        onClick={() => onNavigate('home', 'HOME')}
        className="brand-mark cursor-pointer"
        aria-label="Davi Linhares Home"
      >
        <span>DAVI / 2026</span>
      </button>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Fixed Portuguese Mode (as requested) */}
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
          <MessageCircle size={14} />
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
    </header>
  );
}
