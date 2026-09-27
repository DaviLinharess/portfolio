import { useState, useEffect } from 'react';
import { MessageCircle, FileText, Menu, X, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/SocialIcons';
import { DEVELOPER_INFO } from '../../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre Mim", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Skills", href: "#skills" },
  { name: "Contato", href: "#contato" },
];

export function FloatingDockNav() {
  const [activeTab, setActiveTab] = useState<string>("Início");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));
      const scrollPos = window.scrollY + 200;

      sections.forEach((section, idx) => {
        if (section instanceof HTMLElement) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(NAV_ITEMS[idx].name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-[#090a0f]/80 backdrop-blur-xl border-b border-neutral-800/80 shadow-2xl" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Brand Logo with Cyber Initials */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 shadow-lg group-hover:border-cyan-400 group-hover:scale-105 transition-all duration-300">
            <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              DAVI LINHARES
            </span>
            <span className="font-mono text-[10px] text-neutral-400">
              dev.portfolio // 2026
            </span>
          </div>
        </a>

        {/* Hover.dev Style SlideTabs Navigation (Desktop) */}
        <nav className="hidden md:flex items-center bg-neutral-900/80 p-1.5 rounded-full border border-neutral-800 backdrop-blur-md shadow-lg shadow-black/40">
          <ul className="flex items-center gap-1 relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <li key={item.name} className="relative z-10">
                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={`relative px-4 py-2 text-xs font-mono font-medium rounded-full transition-all duration-300 block ${
                      isActive
                        ? "text-black font-bold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_2px_12px_rgba(255,255,255,0.3)] transition-all duration-300" />
                    )}
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Icons & CV Trigger */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={DEVELOPER_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-cyan-400/50 hover:bg-neutral-800 transition-all duration-200"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={DEVELOPER_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-400/50 hover:bg-neutral-800 transition-all duration-200"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={DEVELOPER_INFO.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-pink-400/50 hover:bg-neutral-800 transition-all duration-200"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={DEVELOPER_INFO.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-400/50 hover:bg-neutral-800 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black text-xs font-mono font-bold tracking-tight shadow-md shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Contato</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-6 py-6 mt-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg transition-colors ${
                  activeTab === item.name
                    ? "bg-white text-black font-bold"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-4 pt-6 mt-4 border-t border-neutral-800">
            <a href={DEVELOPER_INFO.links.github} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white p-2">
              <GithubIcon size={20} />
            </a>
            <a href={DEVELOPER_INFO.links.linkedin} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white p-2">
              <LinkedinIcon size={20} />
            </a>
            <a href={DEVELOPER_INFO.links.instagram} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white p-2">
              <InstagramIcon size={20} />
            </a>
            <a href={DEVELOPER_INFO.links.whatsapp} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white p-2">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
