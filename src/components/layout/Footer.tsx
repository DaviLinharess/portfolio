import { ArrowUp, Terminal } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-800 bg-[#07080c] py-12 px-4 font-mono text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white font-display text-sm tracking-tight block">
              DAVI LINHARES
            </span>
            <span className="text-[11px] text-neutral-500">
              Engenharia de Software • Natal, RN
            </span>
          </div>
        </div>

        {/* Tech stack credit */}
        <div className="flex items-center gap-1.5 text-neutral-400 text-center">
          <span>Construído com</span>
          <span className="text-cyan-400 font-bold">React</span>
          <span>•</span>
          <span className="text-purple-400 font-bold">React Bits</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">Hover.dev</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
        >
          <span>Voltar ao Topo</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-600">
        <span>© {new Date().getFullYear()} Davi Linhares. Todos os direitos reservados.</span>
        <span>Feito com dedicação e foco na excelência técnica.</span>
      </div>
    </footer>
  );
}
