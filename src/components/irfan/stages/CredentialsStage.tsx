import { GraduationCap, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { DEVELOPER_INFO } from '../../../data/portfolioData';

export function CredentialsStage() {
  return (
    <section className="stage stage--credentials" aria-live="polite">
      <div className="skill-scene">
        {/* Page Heading */}
        <div className="page-heading">
          <p className="mono-label">Credentials / formal tracks & milestones</p>
          <h1 className="text-2xl sm:text-4xl font-black uppercase text-[var(--ink)] leading-tight">
            Formação acadêmica, conquistas no GitHub e certificações.
          </h1>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full min-h-0 overflow-y-auto">
          {/* 1. Academic Track */}
          <div className="border border-[var(--line)] bg-[var(--panel)] p-5 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 mb-4">
                <span className="mono-label">Graduação Superior</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded border border-emerald-500/40 text-emerald-400 font-bold">
                  Finalizando
                </span>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="p-2.5 rounded-lg border border-[var(--line)] bg-[var(--paper)] shrink-0">
                  <GraduationCap className="w-5 h-5 text-[var(--ink)]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-display uppercase tracking-tight">
                    {DEVELOPER_INFO.institution}
                  </h2>
                  <p className="font-mono text-xs text-emerald-400 mt-0.5">
                    {DEVELOPER_INFO.course}
                  </p>
                </div>
              </div>

              <p className="text-xs opacity-80 leading-relaxed mb-4 font-sans">
                Formação no IFRN (Campus Central) com ênfase em Engenharia de Software, Algoritmos, Sistemas Distribuídos, Desenvolvimento Web/Mobile e Banco de Dados.
              </p>

              <div className="space-y-1.5 border-t border-[var(--line)] pt-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Campus Natal - Central</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Ago. de 2024 – Atualmente</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Projetos Fullstack Práticos</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--line)] flex justify-between items-center text-xs font-mono opacity-70 mt-3">
              <span>IFRN - CNAT</span>
              <span>TADS</span>
            </div>
          </div>

          {/* 2. Cursos Complementares (From latest CV) */}
          <div className="border border-[var(--line)] bg-[var(--panel)] p-5 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 mb-4">
                <span className="mono-label">Cursos Complementares</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded border border-sky-500/40 text-sky-400 font-bold">
                  Extensão
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* WTEC - IFRN */}
                <div className="p-3 rounded border border-[var(--line)] bg-[var(--paper)]">
                  <div className="flex justify-between items-baseline mb-1">
                    <strong className="text-xs font-bold font-sans text-sky-400 uppercase">WTEC - IFRN</strong>
                    <span className="text-[10px] opacity-70">2024 - 2026</span>
                  </div>
                  <p className="text-[11px] opacity-80 font-sans leading-relaxed">
                    Workshops de inovação, capacitação tecnológica contínua e desenvolvimento de software promovidos pelo IFRN.
                  </p>
                </div>

                {/* DevOps Day Natal */}
                <div className="p-3 rounded border border-[var(--line)] bg-[var(--paper)]">
                  <div className="flex justify-between items-baseline mb-1">
                    <strong className="text-xs font-bold font-sans text-emerald-400 uppercase">DevOps Day Natal</strong>
                    <span className="text-[10px] opacity-70">23 Nov 2024</span>
                  </div>
                  <p className="text-[11px] opacity-80 font-sans leading-relaxed">
                    Imersão prática em cultura DevOps, pipelines de CI/CD, containers e automação de infraestrutura moderna.
                  </p>
                </div>

                {/* Diferenciais */}
                <div className="p-2.5 rounded border border-[var(--line)] bg-[var(--paper-soft)]">
                  <span className="text-[10px] opacity-60 block uppercase font-bold mb-1">Destaques do Currículo</span>
                  <div className="flex flex-wrap gap-1 text-[10px]">
                    <span className="px-1.5 py-0.5 rounded bg-[var(--line)]">Inglês Interm.</span>
                    <span className="px-1.5 py-0.5 rounded bg-[var(--line)]">Pacote Adobe</span>
                    <span className="px-1.5 py-0.5 rounded bg-[var(--line)]">ERP Protheus</span>
                    <span className="px-1.5 py-0.5 rounded bg-[var(--line)]">Equipe</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--line)] flex justify-between items-center text-xs font-mono opacity-70 mt-3">
              <span>FORMAÇÃO COMPLEMENTAR</span>
              <span>ATIVO</span>
            </div>
          </div>

          {/* 3. GitHub Badges & Achievements */}
          <div className="border border-[var(--line)] bg-[var(--panel)] p-5 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 mb-4">
                <span className="mono-label">Reconhecimento</span>
                <Award className="w-4 h-4 text-amber-500" />
              </div>

              <h3 className="font-display font-bold text-lg uppercase mb-3">
                GitHub Achievements
              </h3>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-2.5 rounded border border-[var(--line)] bg-[var(--paper)] flex items-center justify-between">
                  <div>
                    <strong className="block font-bold">Pull Shark</strong>
                    <span className="opacity-60 text-[10px]">Pull requests revisados e mesclados</span>
                  </div>
                  <span className="font-bold px-2 py-0.5 rounded bg-[var(--ink)] text-[var(--paper)] text-xs">x2</span>
                </div>

                <div className="p-2.5 rounded border border-[var(--line)] bg-[var(--paper)] flex items-center justify-between">
                  <div>
                    <strong className="block font-bold">YOLO</strong>
                    <span className="opacity-60 text-[10px]">Merged without review</span>
                  </div>
                  <span className="font-bold px-2 py-0.5 border border-[var(--line)] text-xs">Tier 1</span>
                </div>

                <div className="p-2.5 rounded border border-[var(--line)] bg-[var(--paper)] flex items-center justify-between">
                  <div>
                    <strong className="block font-bold">Quickdraw</strong>
                    <span className="opacity-60 text-[10px]">Resolução ágil de issues/PRs</span>
                  </div>
                  <span className="font-bold px-2 py-0.5 border border-[var(--line)] text-xs">Tier 1</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/DaviLinharess?tab=achievements"
              target="_blank"
              rel="noreferrer"
              className="mt-3 pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono font-bold hover:underline"
            >
              <span>Ver no perfil GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
