import { X, Download, Printer, GraduationCap } from 'lucide-react';
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
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h2 className="text-3xl font-black font-display uppercase tracking-tight">
                {DEVELOPER_INFO.name}
              </h2>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--ink)] text-[var(--paper)] font-bold">
                {DEVELOPER_INFO.tagline}
              </span>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3 font-mono text-xs opacity-85">
              <span>(84) 98112-8912</span>
              <span>{DEVELOPER_INFO.links.email}</span>
              <a
                href={DEVELOPER_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @DaviLinharess
              </a>
            </div>
          </div>

          {/* 01 // Resumo Profissional */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              01 // Perfil Profissional
            </h3>
            <p className="leading-relaxed opacity-90 text-sm">
              Comecei a trabalhar aos 14 anos no comércio familiar, adaptando-me em diversas funções. Finalizando o curso de Análise e Desenvolvimento de Sistemas no IFRN, sou um desenvolvedor e designer entusiasta em expandir meu conhecimento. Conheça um pouco sobre mim e minha trajetória abaixo.
            </p>
          </div>

          {/* 02 // Experiência Profissional */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              02 // Experiência Profissional
            </h3>
            <div className="space-y-3">
              {/* User Function */}
              <div className="p-3.5 rounded border border-[var(--line)] bg-[var(--paper-soft)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs gap-1">
                  <strong className="text-sm font-bold font-display uppercase">User Function</strong>
                  <span className="opacity-75">Jun. de 2026 – Out. de 2026</span>
                </div>
                <div className="font-mono text-xs font-semibold text-[var(--ink)] mt-1">
                  Desenvolvedor Fullstack
                </div>
                <p className="text-xs opacity-85 mt-1 leading-relaxed">
                  Suporte e Melhoria utilizando Angular, Node.js, PostgreSQL, além de integração com ERP Protheus.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2 font-mono text-[10px] opacity-80">
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Angular</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Node.js</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">ERP Protheus</span>
                </div>
              </div>

              {/* Designer Gráfico e Editor de Vídeo */}
              <div className="p-3.5 rounded border border-[var(--line)] bg-[var(--paper-soft)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs gap-1">
                  <strong className="text-sm font-bold font-display uppercase">Designer Gráfico e Editor de Vídeo</strong>
                  <span className="opacity-75">Maio de 2026 – Atualmente</span>
                </div>
                <p className="text-xs opacity-85 mt-1 leading-relaxed">
                  Criação de identidades visuais, design de peças gráficas comerciais e edição dinâmica de vídeos com experiência aprofundada no Pacote Adobe.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2 font-mono text-[10px] opacity-80">
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Pacote Adobe</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Photoshop</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Illustrator</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Premiere</span>
                </div>
              </div>

              {/* Freelancer */}
              <div className="p-3.5 rounded border border-[var(--line)] bg-[var(--paper-soft)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs gap-1">
                  <strong className="text-sm font-bold font-display uppercase">Freelancer</strong>
                  <span className="opacity-75">Jan. de 2026 – Atualmente</span>
                </div>
                <div className="font-mono text-xs font-semibold text-[var(--ink)] mt-1">
                  Desenvolvedor Web
                </div>
                <p className="text-xs opacity-85 mt-1 leading-relaxed">
                  Projetos Fullstack e Landing Pages, utilizando Django REST, Angular, PostgreSQL e hospedagem em CLOUD.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2 font-mono text-[10px] opacity-80">
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Django REST</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Angular</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded border border-[var(--line)]">Hospedagem Cloud</span>
                </div>
              </div>
            </div>
          </div>

          {/* 03 // Formação Acadêmica & Cursos Complementares */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              03 // Formação Acadêmica & Cursos Complementares
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Formação Acadêmica */}
              <div className="p-3.5 rounded border border-[var(--line)] bg-[var(--paper-soft)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-bold font-display text-sm">
                    <GraduationCap className="w-4 h-4 text-emerald-500" />
                    <span>Formação Acadêmica</span>
                  </div>
                  <h4 className="font-bold text-xs mt-2 uppercase font-mono">
                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                  </h4>
                  <p className="text-xs opacity-75 mt-1">
                    Instituto Federal do Rio Grande do Norte - Central
                  </p>
                </div>
                <span className="font-mono text-[11px] opacity-70 mt-3 pt-2 border-t border-[var(--line)] block">
                  Ago. de 2024 – Atualmente
                </span>
              </div>

              {/* Cursos Complementares */}
              <div className="p-3.5 rounded border border-[var(--line)] bg-[var(--paper-soft)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-bold font-display text-sm">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>Cursos Complementares</span>
                  </div>
                  <div className="mt-2 space-y-2 font-mono text-xs">
                    <div>
                      <strong className="block">DevOps Day Natal</strong>
                      <span className="opacity-70 text-[11px]">23 de Nov. de 2024</span>
                    </div>
                    <div>
                      <strong className="block">WTEC - IFRN</strong>
                      <span className="opacity-70 text-[11px]">Dez. de 2024 – Jun. de 2026</span>
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[11px] opacity-70 mt-3 pt-2 border-t border-[var(--line)] block">
                  Participação & Capacitação Ativa
                </span>
              </div>
            </div>
          </div>

          {/* 04 // Habilidades */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 opacity-60">
              04 // Habilidades & Diferenciais
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              <div className="p-2.5 border border-[var(--line)] rounded bg-[var(--paper-soft)]">
                <strong className="text-[11px] block uppercase text-emerald-600">Idiomas</strong>
                <p className="opacity-80 text-[11px] mt-1">Conhecimento interm. em Inglês</p>
              </div>
              <div className="p-2.5 border border-[var(--line)] rounded bg-[var(--paper-soft)]">
                <strong className="text-[11px] block uppercase text-sky-600">Frameworks REST</strong>
                <p className="opacity-80 text-[11px] mt-1">Frameworks REST + Angular, Django REST</p>
              </div>
              <div className="p-2.5 border border-[var(--line)] rounded bg-[var(--paper-soft)]">
                <strong className="text-[11px] block uppercase text-amber-600">Design & Mídia</strong>
                <p className="opacity-80 text-[11px] mt-1">Experiente no Pacote Adobe (Photoshop, Premiere)</p>
              </div>
              <div className="p-2.5 border border-[var(--line)] rounded bg-[var(--paper-soft)]">
                <strong className="text-[11px] block uppercase text-purple-600">Comportamentais</strong>
                <p className="opacity-80 text-[11px] mt-1">Comunicação e Trabalho em Equipe</p>
              </div>
            </div>
          </div>

          {/* 05 // Projetos & Link do GitHub */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider opacity-60">
                05 // Projetos
              </h3>
              <a
                href={DEVELOPER_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold text-emerald-500 hover:underline flex items-center gap-1"
              >
                <span>MEUS PROJETOS DO GITHUB (CLIQUE AQUI)</span>
                <span>↗</span>
              </a>
            </div>

            <div className="space-y-2.5">
              {PROJECTS.slice(0, 4).map((proj) => (
                <div key={proj.id} className="p-3 rounded border border-[var(--line)]">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <strong className="text-xs font-bold font-display uppercase">{proj.title}</strong>
                    <span className="opacity-70 text-[11px]">{proj.badge}</span>
                  </div>
                  <p className="text-xs opacity-75 mt-0.5">{proj.description}</p>
                </div>
              ))}
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
