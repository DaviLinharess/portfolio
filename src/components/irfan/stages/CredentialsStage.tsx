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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full min-h-0 overflow-y-auto">
          {/* 1. Academic Track */}
          <div className="border border-[var(--line)] bg-[var(--panel)] p-6 rounded-lg flex flex-col justify-between md:col-span-2">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 mb-4">
                <span className="mono-label">Graduação Superior</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--line)]">
                  Em Andamento
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg border border-[var(--line)] bg-[var(--paper)]">
                  <GraduationCap className="w-6 h-6 text-[var(--ink)]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-display uppercase tracking-tight">
                    {DEVELOPER_INFO.institution}
                  </h2>
                  <p className="font-mono text-xs opacity-70 mt-1">
                    {DEVELOPER_INFO.course}
                  </p>
                </div>
              </div>

              <p className="text-sm opacity-80 leading-relaxed mb-6 font-sans">
                Formação com ênfase em Engenharia de Software, Algoritmos e Estruturas de Dados Não-Lineares, Sistemas Distribuídos, Programação para Dispositivos Móveis e Administração de Banco de Dados.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[var(--line)] pt-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Natal, RN</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Matriz Atualizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Projetos Práticos</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--line)] flex justify-between items-center text-xs font-mono opacity-70">
              <span>IFRN - CNAT</span>
              <span>TADS</span>
            </div>
          </div>

          {/* 2. GitHub Badges & Achievements */}
          <div className="border border-[var(--line)] bg-[var(--panel)] p-6 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-3 mb-4">
                <span className="mono-label">Reconhecimento</span>
                <Award className="w-4 h-4 text-amber-500" />
              </div>

              <h3 className="font-display font-bold text-xl uppercase mb-3">
                GitHub Achievements
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded border border-[var(--line)] bg-[var(--paper)] flex items-center justify-between">
                  <div>
                    <strong className="block font-bold">🦈 Pull Shark</strong>
                    <span className="opacity-60 text-[11px]">Pull requests revisados e mesclados</span>
                  </div>
                  <span className="font-bold px-2 py-0.5 rounded bg-[var(--ink)] text-[var(--paper)]">x2</span>
                </div>

                <div className="p-3 rounded border border-[var(--line)] bg-[var(--paper)] flex items-center justify-between">
                  <div>
                    <strong className="block font-bold">🎯 YOLO</strong>
                    <span className="opacity-60 text-[11px]">Merged without review</span>
                  </div>
                  <span className="font-bold px-2 py-0.5 border border-[var(--line)]">Tier 1</span>
                </div>

                <div className="p-3 rounded border border-[var(--line)] bg-[var(--paper)] flex items-center justify-between">
                  <div>
                    <strong className="block font-bold">⚡ Quickdraw</strong>
                    <span className="opacity-60 text-[11px]">Resolução ágil de issues/PRs</span>
                  </div>
                  <span className="font-bold px-2 py-0.5 border border-[var(--line)]">Tier 1</span>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/DaviLinharess?tab=achievements"
              target="_blank"
              rel="noreferrer"
              className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono font-bold hover:underline"
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
