import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe } from 'lucide-react';
import { GithubIcon } from '../../ui/SocialIcons';
import { PROJECTS, type ProjectItem } from '../../../data/portfolioData';

// Visual Mockup Components for each project
// Visual Mockup Components for each project
function ProjectMockupImage({ project }: { project: ProjectItem }) {
  if (project.id === 'lp-winner-run') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-neutral-950 flex items-center justify-center group">
        <img
          src="./projects/winner-run.webp"
          alt="Winner Run Assessoria de Corridas"
          width={1024}
          height={534}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  if (project.id === 'big-burgs-joao') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center group">
        <img
          src="./projects/big-burgs.webp"
          alt="Big Burgs do João"
          width={1024}
          height={533}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  if (project.id === 'paceweather') {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center p-2 relative overflow-hidden group">
        <img
          src="./projects/paceweather.webp"
          alt="PaceWeather Mobile App"
          width={408}
          height={874}
          loading="lazy"
          decoding="async"
          className="h-full w-auto max-h-[190px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 pointer-events-none">
          <span className="font-mono text-[9px] bg-slate-900/85 text-amber-400 px-2 py-0.5 rounded shadow font-bold">
            FLUTTER • MOBILE
          </span>
        </div>
      </div>
    );
  }

  if (project.id === 'ibf-natal') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center group">
        <img
          src="./projects/ibf-natal.webp"
          alt="Igreja Batista Filadélfia"
          width={1024}
          height={534}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  // RIA, DSD, and PA-BD (GitHub repository preview with prominent Github logo)
  return (
    <div className="w-full h-full bg-[#0d1117] text-white flex flex-col justify-between p-4 border border-[#30363d] relative overflow-hidden group">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#30363d_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex items-center justify-between relative z-10 font-mono text-[10px]">
        <div className="flex items-center gap-2 text-zinc-300">
          <GithubIcon size={16} className="text-white" />
          <span className="text-zinc-200 font-semibold tracking-wide">
            {project.githubUrl.replace('https://github.com/', '')}
          </span>
        </div>
        <span className="px-2 py-0.5 bg-[#21262d] border border-[#30363d] text-zinc-300 text-[9px] uppercase font-bold tracking-wider">
          Repositório Público
        </span>
      </div>

      {/* Center: Prominent GitHub Icon and Project Details */}
      <div className="flex items-center gap-4 relative z-10 py-1">
        <div className="w-14 h-14 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:border-zinc-400 transition-all duration-300">
          <GithubIcon size={34} className="text-white drop-shadow" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-bold text-white truncate font-sans">
              {project.title}
            </h4>
          </div>
          <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {project.badge}
            </span>
            {project.techs.slice(0, 3).map((t) => (
              <span key={t} className="text-[9px] font-mono text-zinc-300 bg-[#21262d] px-1.5 py-0.5 rounded border border-[#30363d]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="pt-2 border-t border-[#30363d] flex items-center justify-between relative z-10 font-mono text-[10px] text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">✓</span> Código aberto no GitHub
        </span>
        <span className="text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors">
          git clone ↗
        </span>
      </div>
    </div>
  );
}

export function WorkStage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const project = PROJECTS[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : PROJECTS.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < PROJECTS.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="stage stage--work" aria-live="polite">
      <div className="work-scene">
        {/* Page Heading */}
        <div className="work-heading">
          <p className="work-breadcrumb">2023-2026 / SISTEMAS SELECIONADOS</p>
          <h1 className="work-headline">Arquivo de projetos.</h1>
        </div>

        {/* Project Console (Irfan Sabrian exact dual-pane console with square sharp edges) */}
        <div className="project-console">
          {/* Left Column: Project Index List */}
          <div className="project-index">
            <div className="project-index-header">
              <span className="project-index-title">LISTA DE PROJETOS</span>
              <span className="project-index-count">{PROJECTS.length} projetos</span>
            </div>

            <div className="project-index-list">
              {PROJECTS.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(idx)}
                    aria-current={isSelected ? 'true' : undefined}
                    className={`project-list-card ${isSelected ? 'is-selected' : ''}`}
                    type="button"
                  >
                    <div className="project-list-card-year">
                      {item.year || '2026'} {item.category.toUpperCase()}
                    </div>
                    <div className="project-list-card-name">{item.title}</div>
                    <div className="project-list-card-status">{item.badge.toUpperCase()}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Project Focus Dossier */}
          <div className="project-focus">
            {/* Top Toolbar */}
            <div className="project-focus-toolbar">
              <span className="project-dossier-label">DOSSIÊ DO PROJETO</span>

              <div className="project-dossier-controls">
                <span className="dossier-badge">EM DESENVOLVIMENTO</span>
                <span className="dossier-badge">
                  {project.liveUrl ? 'ACESSO PÚBLICO' : 'CÓDIGO ABERTO'}
                </span>

                <div className="dossier-nav-arrows">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous project"
                    title="Projeto anterior (Seta Esquerda)"
                    className="dossier-arrow-btn"
                  >
                    <ArrowLeft size={13} />
                  </button>
                  <span className="dossier-counter">
                    Projeto {selectedIndex + 1} de {PROJECTS.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next project"
                    title="Próximo projeto (Seta Direita)"
                    className="dossier-arrow-btn"
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>

            {/* Dossier Body */}
            <div className="project-dossier-grid">
              {/* Left Side: Category, Title, Screenshots Image & Description */}
              <div className="dossier-main">
                <div className="dossier-subheading">
                  {project.year || '2026'} / {project.category.toUpperCase()}
                </div>
                <h2 className="dossier-title">{project.title}</h2>

                <div className="dossier-screenshots-header">
                  <span>PRÉVIA VISUAL</span>
                  <span className="dossier-img-count">PROJETO AO VIVO</span>
                </div>

                {/* Screenshot Visual Frame with Real Mockup Graphic */}
                <div className="dossier-visual-frame">
                  <ProjectMockupImage project={project} />

                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="dossier-open-btn"
                  >
                    <span>{project.liveUrl ? 'SITE AO VIVO' : 'VER GITHUB'}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Narrative Description below image matching Screenshot 3 */}
                <div className="dossier-narrative-copy">
                  <p>{project.description}</p>
                  <p className="mt-2 text-xs opacity-75">
                    Projetado com foco em arquitetura limpa, alta performance em tempo de execução e integração direta com repositório no GitHub.
                  </p>
                </div>
              </div>

              {/* Right Side: Progress, Info Grid, Stack & Access */}
              <div className="dossier-sidebar">
                {/* Box 1: Progress */}
                <div className="dossier-box">
                  <div className="dossier-box-label">PROGRESSO</div>
                  <h3 className="dossier-box-title">Em desenvolvimento ativo</h3>
                  <p className="dossier-box-sub">FOCO PRINCIPAL DO PORTFÓLIO</p>
                </div>

                {/* Box 2: Project Info Table */}
                <div className="dossier-box">
                  <div className="dossier-box-label">INFORMAÇÕES DO PROJETO</div>
                  <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[11px] pt-1">
                    <div>
                      <span className="opacity-60 text-[9px] uppercase block">TIPO</span>
                      <strong className="text-[var(--ink)]">{project.category}</strong>
                    </div>
                    <div>
                      <span className="opacity-60 text-[9px] uppercase block">ANO</span>
                      <strong className="text-[var(--ink)]">{project.year || '2026'}</strong>
                    </div>
                  </div>
                </div>

                {/* Box 3: Stack */}
                <div className="dossier-box">
                  <div className="dossier-box-label">TECNOLOGIAS</div>
                  <div className="dossier-stack-tags">
                    {project.techs.map((t: string) => (
                      <span key={t} className="dossier-tech-pill">
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Box 4: Access */}
                <div className="dossier-box">
                  <div className="dossier-box-label">ACESSO & LINKS</div>
                  <div className="dossier-action-buttons">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dossier-action-link"
                    >
                      <GithubIcon size={14} />
                      <span>REPOSITÓRIO</span>
                      <ArrowUpRight size={13} />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="dossier-action-link primary"
                      >
                        <Globe size={14} />
                        <span>SITE AO VIVO</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
