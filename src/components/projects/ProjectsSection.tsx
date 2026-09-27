import { useState } from 'react';
import { ExternalLink, Smartphone, Globe, Server, Database, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';
import type { ProjectItem } from '../../data/portfolioData';

type FilterType = "Todos" | "Web" | "Mobile" | "Backend";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Todos");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Web") return project.category.includes("Web") || project.category.includes("Landing");
    if (activeFilter === "Mobile") return project.category.includes("Mobile");
    if (activeFilter === "Backend") return project.category.includes("Backend") || project.category.includes("Banco");
    return true;
  });

  const getCategoryIcon = (category: string) => {
    if (category.includes("Mobile")) return <Smartphone className="w-4 h-4 text-cyan-400" />;
    if (category.includes("Web") || category.includes("Landing")) return <Globe className="w-4 h-4 text-purple-400" />;
    if (category.includes("Backend")) return <Server className="w-4 h-4 text-amber-400" />;
    return <Database className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section id="projetos" className="py-24 max-w-7xl mx-auto px-4 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6 gap-6">
        <div>
          <span className="font-mono text-cyan-400 text-xs uppercase tracking-widest block mb-2">
            03 // PROJETOS DESENVOLVIDOS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            Trabalhos Selecionados
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto overflow-x-auto max-w-full">
          {(["Todos", "Web", "Mobile", "Backend"] as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-white text-black shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project: ProjectItem) => (
          <SpotlightCard
            key={project.id}
            className="p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header with category badge and icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  {getCategoryIcon(project.category)}
                  <span>{project.badge}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.title} no GitHub`}
                    className="p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                  >
                    <GithubIcon size={16} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Acessar ${project.title}`}
                      className="p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-cyan-400 border border-neutral-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>
              
              <p className="font-mono text-xs text-cyan-400/90 font-medium mt-1 mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">
                {project.description}
              </p>

              {/* Project Metrics Display */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-[#090a0f] border border-neutral-800/80 mb-6">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <span className="block font-display font-black text-sm text-white">
                      {metric.value}
                    </span>
                    <span className="block font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300 hover:border-neutral-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* GitHub Callout Footer inside projects */}
      <div className="mt-14 p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3 text-neutral-300">
          <GithubIcon size={20} className="text-cyan-400 flex-shrink-0" />
          <span>Quer ver mais códigos, experimentos e repositórios acadêmicos?</span>
        </div>
        <a
          href="https://github.com/DaviLinharess?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-bold transition-colors whitespace-nowrap"
        >
          <span>Explorar Todos os Repositórios</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
