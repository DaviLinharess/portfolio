import { X, Download, Printer, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { DEVELOPER_INFO, PROJECTS } from '../../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] rounded-xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--line)] bg-[var(--paper-soft)]">
          <div className="flex items-center gap-2">
            <span className="mono-label">Curriculum Vitae</span>
            <span className="font-mono text-xs opacity-60">• Davi Linhares</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded border border-[var(--line)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
              title="Imprimir CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <a
              href="https://github.com/DaviLinharess"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded border border-[var(--line)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
              title="Download / GitHub"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded border border-[var(--line)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors ml-2"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body / Printable Dossier */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-sm">
          {/* Header Info */}
          <div className="border-b border-[var(--line)] pb-6">
            <h2 className="text-3xl font-black font-display uppercase tracking-tight">
              {DEVELOPER_INFO.name}
            </h2>
            <p className="font-mono text-xs text-[var(--accent)] font-bold mt-1">
              {DEVELOPER_INFO.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 font-mono text-xs opacity-75">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {DEVELOPER_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {DEVELOPER_INFO.links.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                +55 84 98112-8912
              </span>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              01 // Resumo Profissional
            </h3>
            <p className="leading-relaxed opacity-85">
              Estudante de Análise e Desenvolvimento de Sistemas no IFRN (Campus Natal). Desenvolvedor com foco em ecossistemas web (Angular, React, Tailwind e TypeScript), aplicações REST (Django, Node.js) e soluções mobile (Flutter/Dart). Experiência na concepção, prototipação, estruturação de banco de dados e implementação de arquiteturas eficientes.
            </p>
          </div>

          {/* Formação Acadêmica */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              02 // Formação Acadêmica
            </h3>
            <div className="p-4 rounded border border-[var(--line)] bg-[var(--paper-soft)]">
              <div className="flex items-center gap-2 font-bold font-display text-base">
                <GraduationCap className="w-5 h-5" />
                <span>{DEVELOPER_INFO.institution}</span>
              </div>
              <p className="text-xs font-mono opacity-80 mt-1">
                {DEVELOPER_INFO.course} — Natal, RN
              </p>
              <p className="text-xs opacity-75 mt-2">
                Disciplinas Chave: Arquitetura de Software, Algoritmos, Estruturas de Dados, Desenvolvimento Mobile, Sistemas Distribuídos, Modelagem e Administração de Banco de Dados.
              </p>
            </div>
          </div>

          {/* Projetos Chave */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              03 // Projetos em Destaque
            </h3>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded border border-[var(--line)]">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <strong className="text-sm font-bold font-display uppercase">{proj.title}</strong>
                    <span className="opacity-70">{proj.badge}</span>
                  </div>
                  <p className="text-xs opacity-80 mt-1">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2 font-mono text-[11px] opacity-75">
                    {proj.techs.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded border border-[var(--line)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competências Técnicas */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              04 // Habilidades & Ferramentas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              <div className="p-2 border border-[var(--line)] rounded">
                <strong>Frontend</strong>
                <p className="opacity-70 text-[11px] mt-1">Angular, React, TypeScript, Tailwind</p>
              </div>
              <div className="p-2 border border-[var(--line)] rounded">
                <strong>Mobile</strong>
                <p className="opacity-70 text-[11px] mt-1">Flutter, Dart, REST APIs</p>
              </div>
              <div className="p-2 border border-[var(--line)] rounded">
                <strong>Backend</strong>
                <p className="opacity-70 text-[11px] mt-1">Django, Node.js - Express, REST APIs</p>
              </div>
              <div className="p-2 border border-[var(--line)] rounded">
                <strong>Banco & DevOps</strong>
                <p className="opacity-70 text-[11px] mt-1">SQL, PostgreSQL, Git, GitHub, Linux</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[var(--line)] bg-[var(--paper-soft)] flex justify-between items-center text-xs font-mono opacity-70">
          <span>Davi Linhares • Portfolio 2026</span>
          <button onClick={onClose} className="hover:underline cursor-pointer">
            Fechar Janela [Esc]
          </button>
        </div>
      </div>
    </div>
  );
}
