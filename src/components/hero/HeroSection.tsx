import { ArrowDown, Sparkles, Code2, Smartphone, Terminal, ExternalLink } from 'lucide-react';
import { RotatingText } from '../ui/RotatingText';
import { Magnet } from '../ui/Magnet';
import { DEVELOPER_INFO } from '../../data/portfolioData';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex flex-col justify-between pt-12 pb-16 overflow-hidden bg-dot-grid"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* Top Hero Monospace Tagline */}
      <div className="max-w-7xl mx-auto px-4 w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 font-mono text-xs mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>PORTFÓLIO WEB • ENGENHARIA DE SOFTWARE & INTERFACES</span>
        </div>

        {/* Floating Sticker Badges (Neo-Brutalist & Magnetic) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-6">
          <Magnet strength={12}>
            <div className="px-3.5 py-1.5 rounded-full bg-neutral-900 border-2 border-neutral-700 text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider neo-shadow-dark flex items-center gap-1.5 hover:border-cyan-400 hover:text-cyan-300 transition-all cursor-default">
              <span className="text-cyan-400">✦</span> TADS • IFRN
            </div>
          </Magnet>

          <Magnet strength={12}>
            <div className="px-3.5 py-1.5 rounded-full bg-cyan-400 text-black border-2 border-cyan-300 text-xs font-mono font-black uppercase tracking-wider neo-shadow-dark flex items-center gap-1.5 hover:scale-105 transition-all cursor-default">
              <Code2 className="w-3.5 h-3.5" /> REACT & FLUTTER
            </div>
          </Magnet>

          <Magnet strength={12}>
            <div className="px-3.5 py-1.5 rounded-full bg-neutral-900 border-2 border-neutral-700 text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider neo-shadow-dark flex items-center gap-1.5 hover:border-purple-400 hover:text-purple-300 transition-all cursor-default">
              <Smartphone className="w-3.5 h-3.5 text-purple-400" /> MOBILE & WEB APPS
            </div>
          </Magnet>

          <Magnet strength={12}>
            <div className="px-3.5 py-1.5 rounded-full bg-neutral-900 border-2 border-neutral-700 text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider neo-shadow-dark flex items-center gap-1.5 hover:border-emerald-400 hover:text-emerald-300 transition-all cursor-default">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" /> PYTHON & SQL
            </div>
          </Magnet>

          <Magnet strength={12}>
            <div className="px-3.5 py-1.5 rounded-full bg-neutral-900 border-2 border-neutral-700 text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider neo-shadow-dark flex items-center gap-1.5 hover:border-amber-400 hover:text-amber-300 transition-all cursor-default">
              <span className="text-amber-400">✦</span> NATAL, RN
            </div>
          </Magnet>
        </div>

        {/* Huge Display Hero Name */}
        <div className="relative my-4 select-none">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8.5vw] font-black uppercase tracking-tighter leading-[0.85] font-display text-white transition-all">
            DAVI LINHARES
          </h1>
          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4 opacity-70" />
        </div>

        {/* Dynamic Rotating Headline (React Bits Style) */}
        <div className="max-w-3xl mx-auto mt-6 text-lg sm:text-2xl font-light text-neutral-300 flex flex-wrap items-center justify-center gap-2">
          <span>Desenvolvedor criando soluções em</span>
          <div className="inline-block px-3 py-1 rounded-lg bg-neutral-900/90 border border-neutral-800 text-cyan-400 font-mono font-bold shadow-inner">
            <RotatingText
              words={[
                "React & Interfaces Web",
                "Flutter & Mobile Apps",
                "TypeScript & Sistemas",
                "Python & Redes Distribuídas",
                "Modelagem de Bancos de Dados",
              ]}
              interval={2400}
            />
          </div>
        </div>

        {/* Narrative bio paragraph */}
        <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
          Combinando o rigor técnico acadêmico do <strong>IFRN</strong> com práticas modernas de desenvolvimento web e mobile. Foco em interfaces reativas, alta performance e código limpo.
        </p>

        {/* Action Buttons (Hover.dev Spring Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <Magnet strength={15}>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-black text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Ver Projetos</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </Magnet>

          <Magnet strength={15}>
            <a
              href={DEVELOPER_INFO.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-500 font-mono font-bold text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>Fale Comigo</span>
              <ExternalLink className="w-4 h-4 text-cyan-400" />
            </a>
          </Magnet>
        </div>
      </div>

      {/* Bottom Capabilities / Capability Strip */}
      <div className="max-w-7xl mx-auto px-4 w-full mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-neutral-800/80 pt-6 font-mono text-xs">
          <div className="p-3 rounded-xl bg-[#0d0f17]/60 border border-neutral-800/50">
            <span className="text-cyan-400 block font-bold mb-1">01 / FRONTEND</span>
            <p className="text-neutral-400 text-[11px]">React, TypeScript, Tailwind e componentização modular.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0d0f17]/60 border border-neutral-800/50">
            <span className="text-purple-400 block font-bold mb-1">02 / MOBILE</span>
            <p className="text-neutral-400 text-[11px]">Flutter & Dart com arquitetura limpa e offline-first.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0d0f17]/60 border border-neutral-800/50">
            <span className="text-emerald-400 block font-bold mb-1">03 / BACKEND & DADOS</span>
            <p className="text-neutral-400 text-[11px]">Python, Java, APIs REST, Sockets e SQL relacional.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#0d0f17]/60 border border-neutral-800/50">
            <span className="text-amber-400 block font-bold mb-1">04 / QUALIDADE</span>
            <p className="text-neutral-400 text-[11px]">Controle de versão com Git, Clean Code e UX fluida.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
