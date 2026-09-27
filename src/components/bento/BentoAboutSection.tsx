import { GraduationCap, Award, CheckCircle2, QrCode, Cpu, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TiltedCard } from '../ui/TiltedCard';
import { SpotlightCard } from '../ui/SpotlightCard';
import { DEVELOPER_INFO } from '../../data/portfolioData';

export function BentoAboutSection() {
  return (
    <section id="sobre" className="py-24 max-w-7xl mx-auto px-4 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-neutral-800 pb-6 gap-4">
        <div>
          <span className="font-mono text-cyan-400 text-xs uppercase tracking-widest block mb-2">
            02 // SOBRE MIM & TRAJETÓRIA
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            Matriz de Perfil
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-md font-mono">
          Explorando arquiteturas modernas, unindo o rigor acadêmico do IFRN à agilidade de entrega no desenvolvimento de software.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 1. Bio & Resumo Principal (Span 2) */}
        <SpotlightCard className="p-8 md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60">
                👋
              </span>
              <div>
                <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white">
                  Olá, eu sou Davi Linhares
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  Análise e Desenvolvimento de Sistemas • IFRN
                </span>
              </div>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
              Sou estudante de graduação em <strong>Análise e Desenvolvimento de Sistemas (TADS)</strong> no <strong>Instituto Federal do Rio Grande do Norte (IFRN)</strong>. Minha jornada na tecnologia é impulsionada pela curiosidade de entender como sistemas complexos operam nos bastidores e pela satisfação de construir produtos que proporcionam uma experiência intuitiva e prazerosa aos usuários.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Atualmente, me dedico ao ecossistema <strong>React & TypeScript</strong> para criação de aplicações web modernas e ao <strong>Flutter</strong> para o desenvolvimento de soluções mobile multiplataforma, sem deixar de lado o conhecimento em <strong>Python</strong>, <strong>Java</strong> e <strong>Modelagem de Bancos de Dados</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-neutral-800/80">
            {DEVELOPER_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#090a0f] border border-neutral-800/60">
                <span className="text-[11px] font-mono text-neutral-400 block mb-1">
                  {stat.label}
                </span>
                <span className="text-sm font-bold font-mono text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* 2. 3D Holographic Developer Card (TiltedCard — Styfen Sagala / React Bits style) */}
        <div className="md:col-span-1 flex items-center justify-center">
          <TiltedCard maxAngle={16} glowColor="rgba(0, 242, 254, 0.3)">
            <div className="p-6 relative overflow-hidden rounded-3xl bg-[#0c0e17] border border-neutral-700/80 text-white min-h-[380px] flex flex-col justify-between">
              
              {/* Card Header & Chip */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-300">
                    DEV ID // 2026
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  ONLINE
                </div>
              </div>

              {/* Card Central Visual / Hologram */}
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 border-2 border-cyan-400/50 p-1 mb-4 shadow-[0_0_25px_rgba(0,242,254,0.3)] flex items-center justify-center">
                  <div className="w-full h-full rounded-xl bg-[#090a0f] flex items-center justify-center font-display font-black text-3xl text-cyan-400">
                    DL
                  </div>
                </div>

                <h4 className="font-display font-black text-2xl uppercase tracking-tight text-white">
                  Davi Linhares
                </h4>
                <p className="font-mono text-xs text-neutral-400 mt-1">
                  @DaviLinharess
                </p>

                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>IFRN • TADS</span>
                </div>
              </div>

              {/* Card Bottom / Barcode & Action */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-400 font-mono text-[11px]">
                  <QrCode className="w-4 h-4 text-neutral-400" />
                  <span>NATAL, BR</span>
                </div>

                <a
                  href={DEVELOPER_INFO.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-mono font-black uppercase tracking-wider transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </TiltedCard>
        </div>

        {/* 3. Academic & Formação Card */}
        <SpotlightCard className="p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-purple-900/30 border border-purple-800/40 text-purple-300">
              Graduação
            </span>
          </div>

          <h4 className="font-display font-bold text-lg text-white mb-2 uppercase">
            IFRN • Campus Natal
          </h4>
          <p className="text-xs font-mono text-cyan-400 mb-4">
            Tecnologia em Análise e Desenvolvimento de Sistemas
          </p>

          <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-sans">
            Formação sólida com ênfase em engenharia de software, algoritmos, arquitetura de sistemas distribuídos e bancos de dados relacionais.
          </p>

          <div className="space-y-2 border-t border-neutral-800/80 pt-4 font-mono text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Desenvolvimento Web & Mobile</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sistemas Distribuídos & Redes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Modelagem e Administração de BD</span>
            </div>
          </div>
        </SpotlightCard>

        {/* 4. Filosofia de Desenvolvimento */}
        <SpotlightCard className="p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-900/30 border border-emerald-800/40 text-emerald-300">
              Engenharia
            </span>
          </div>

          <h4 className="font-display font-bold text-lg text-white mb-2 uppercase">
            Filosofia de Código
          </h4>
          <p className="text-xs font-mono text-emerald-400 mb-4">
            Qualidade, manutenibilidade e impacto
          </p>

          <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-sans">
            Acredito que o melhor software é aquele que resolve problemas reais com código limpo, interfaces fluidas e excelente desempenho.
          </p>

          <div className="space-y-2 border-t border-neutral-800/80 pt-4 font-mono text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Código legível e documentado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Foco em UX e responsividade</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Evolução contínua de stack</span>
            </div>
          </div>
        </SpotlightCard>

        {/* 5. GitHub Achievements & Reconhecimento */}
        <SpotlightCard className="p-7">
          <div className="flex items-center justify-between mb-5">
            <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-amber-900/30 border border-amber-800/40 text-amber-300">
              GitHub Badges
            </span>
          </div>

          <h4 className="font-display font-bold text-lg text-white mb-2 uppercase">
            Conquistas Técnicas
          </h4>
          <p className="text-xs font-mono text-amber-400 mb-4">
            Atividade e colaboração contínua
          </p>

          <div className="grid grid-cols-3 gap-2.5 my-4">
            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
              <span className="text-xl block">🦈</span>
              <span className="font-mono text-[10px] text-neutral-300 block font-bold mt-1">Pull Shark</span>
              <span className="text-[9px] text-amber-400 font-mono">x2 Tier</span>
            </div>
            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
              <span className="text-xl block">⚡</span>
              <span className="font-mono text-[10px] text-neutral-300 block font-bold mt-1">Quickdraw</span>
              <span className="text-[9px] text-neutral-400 font-mono">Agilidade</span>
            </div>
            <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
              <span className="text-xl block">🎯</span>
              <span className="font-mono text-[10px] text-neutral-300 block font-bold mt-1">YOLO</span>
              <span className="text-[9px] text-neutral-400 font-mono">Merge</span>
            </div>
          </div>

          <div className="border-t border-neutral-800/80 pt-4 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-pink-400" />
              <span>Colaboração ativa</span>
            </span>
            <span className="text-white font-bold">@DaviLinharess</span>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
