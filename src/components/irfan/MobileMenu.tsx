import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from '../ui/SocialIcons';
import { DEVELOPER_INFO } from '../../data/portfolioData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeStage: string;
  onNavigate: (stage: string, label: string) => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  activeStage,
  onNavigate,
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Small timeout to allow DOM mounting before applying translate-x-0 class
      const frame = requestAnimationFrame(() => {
        setActive(true);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setActive(false);
      const timer = setTimeout(() => {
        setMounted(false);
      }, 360);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setActive(false);
    setTimeout(() => {
      onClose();
    }, 320);
  };

  const handleItemClick = (id: string, tag: string) => {
    setActive(false);
    setTimeout(() => {
      onNavigate(id, tag);
      onClose();
    }, 280);
  };

  if (!mounted && !isOpen) return null;

  const menuItems = [
    { id: 'home', num: '01', label: 'Início', tag: 'INÍCIO' },
    { id: 'about', num: '02', label: 'Sobre', tag: 'SOBRE' },
    { id: 'work', num: '03', label: 'Projetos', tag: 'PROJETOS' },
    { id: 'skills', num: '04', label: 'Habilidades', tag: 'HABILIDADES' },
    { id: 'credentials', num: '05', label: 'Formação', tag: 'FORMAÇÃO' },
    { id: 'contact', num: '06', label: 'Contato', tag: 'CONTATO' },
  ];

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[var(--paper)] text-[var(--ink)] flex flex-col justify-between p-6 sm:p-8 overflow-hidden transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        active ? 'translate-x-0' : 'translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu de Navegação Mobile"
    >
      {/* Background Dot Matrix Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(var(--dot-color)_1.2px,transparent_1.2px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Top Header Bar */}
      <div
        className="relative z-10 transition-all duration-300"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(-10px)',
          transitionDelay: active ? '80ms' : '0ms',
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src="./favicon.svg"
              alt="Davi Linhares"
              className="w-8 h-8 object-contain"
            />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <button
              onClick={handleClose}
              className="px-3.5 py-1.5 bg-[var(--ink)] text-[var(--paper)] font-mono text-xs font-black tracking-wider uppercase flex items-center gap-1.5 border border-[var(--ink)] hover:opacity-90 active:scale-95 transition-all cursor-pointer"
              aria-label="Fechar Menu"
            >
              <span>CLOSE</span>
              <span className="text-sm font-bold">✕</span>
            </button>
            <span className="font-mono text-[10px] text-[var(--ink-muted)] font-semibold tracking-wider uppercase">
              DAVI LINHARES / 2026
            </span>
          </div>
        </div>

        {/* Dashed Line Divider */}
        <div className="w-full border-b border-dashed border-[var(--line)] mt-4" />
      </div>

      {/* Middle Navigation Stage List with Cascading Slide-In */}
      <nav className="relative z-10 flex flex-col justify-center my-auto py-6 space-y-2">
        {menuItems.map((item, idx) => {
          const isActive = activeStage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id, item.tag)}
              className="flex items-baseline text-left group cursor-pointer py-1.5 transition-all duration-200 active:scale-[0.98]"
              style={{
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
                transitionDelay: active ? `${100 + idx * 45}ms` : '0ms',
                transform: active ? 'translateX(0)' : 'translateX(28px)',
                opacity: active ? 1 : 0,
              }}
            >
              <span
                className={`font-mono text-xs mr-4 font-bold tracking-wider transition-colors ${
                  isActive ? 'text-[var(--ink)]' : 'text-[var(--ink-muted)] opacity-60'
                }`}
              >
                {item.num}
              </span>
              <span
                className={`text-3xl sm:text-4xl font-black font-display tracking-tight transition-all duration-150 ${
                  isActive
                    ? 'text-[var(--ink)] font-black translate-x-1'
                    : 'text-[var(--ink-muted)] opacity-45 group-hover:opacity-100 group-hover:text-[var(--ink)]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Bar: Social Icons in Square Bordered Boxes (Theme toggle moved to header) */}
      <div
        className="relative z-10 pt-4 border-t border-[var(--line-subtle)] flex items-center justify-center gap-2.5 transition-all duration-300"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(10px)',
          transitionDelay: active ? '200ms' : '0ms',
        }}
      >
        <a
          href={DEVELOPER_INFO.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 border border-[var(--line)] flex items-center justify-center bg-[var(--paper-card)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors cursor-pointer"
          title="GitHub"
        >
          <GithubIcon size={16} />
        </a>

        <a
          href={DEVELOPER_INFO.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 border border-[var(--line)] flex items-center justify-center bg-[var(--paper-card)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors cursor-pointer"
          title="LinkedIn"
        >
          <LinkedinIcon size={16} />
        </a>

        <a
          href={DEVELOPER_INFO.links.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="w-10 h-10 border border-[var(--line)] flex items-center justify-center bg-[var(--paper-card)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors cursor-pointer"
          title="Instagram"
        >
          <InstagramIcon size={16} />
        </a>

        <a
          href={DEVELOPER_INFO.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="w-10 h-10 border border-[var(--line)] flex items-center justify-center bg-[var(--paper-card)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors cursor-pointer"
          title="WhatsApp"
        >
          <WhatsappIcon size={16} />
        </a>
      </div>
    </div>
  );
}
