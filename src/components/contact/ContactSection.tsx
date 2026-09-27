import { useState } from 'react';
import { MessageCircle, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Magnet } from '../ui/Magnet';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/SocialIcons';
import { DEVELOPER_INFO } from '../../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.links.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f2fe', '#4facfe', '#8b5cf6', '#10b981'],
      });
    } catch {
      // Fallback silently if confetti encounters environment restrictions
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-24 max-w-7xl mx-auto px-4 relative">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-neutral-800 pb-6 gap-4">
        <div>
          <span className="font-mono text-cyan-400 text-xs uppercase tracking-widest block mb-2">
            05 // CANAIS & CONEXÃO
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            Vamos Conversar
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-md font-mono">
          Aberto para novas oportunidades, projetos desafiadores, vagas de estágio/júnior e parcerias em tecnologia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main CTA Card (Span 7) */}
        <SpotlightCard className="p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              DISPONÍVEL PARA CONTRATAÇÃO & PROJETOS
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
              Tem um projeto em mente ou uma oportunidade na sua equipe?
            </h3>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans mb-8">
              Estou sempre pronto para trocar ideias, aprender novas tecnologias e contribuir para a construção de produtos que geram impacto real. Entre em contato pelo canal que preferir:
            </p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="space-y-4 pt-6 border-t border-neutral-800">
            {/* WhatsApp Direct Action */}
            <Magnet strength={12} className="w-full">
              <a
                href={DEVELOPER_INFO.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-600/20 to-teal-600/10 border border-emerald-500/40 hover:border-emerald-400 text-white font-mono font-bold text-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-white group-hover:text-emerald-300 transition-colors">
                      Falar no WhatsApp
                    </span>
                    <span className="text-[11px] text-neutral-400 font-normal">
                      Resposta rápida em horário comercial
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Magnet>

            {/* Email Copy Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800 gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-xs text-neutral-400">E-mail Direto</span>
                  <span className="font-mono text-sm text-neutral-200 font-bold select-all">
                    {DEVELOPER_INFO.links.email}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </SpotlightCard>

        {/* Social Cards Matrix (Span 5) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* LinkedIn */}
          <a
            href={DEVELOPER_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">LinkedIn</h4>
              <p className="text-xs font-mono text-neutral-400">Conexões profissionais e histórico acadêmico.</p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-blue-400">
              <span>/in/linharessdavi</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href={DEVELOPER_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-white/40 hover:bg-neutral-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">GitHub</h4>
              <p className="text-xs font-mono text-neutral-400">Repositórios, contribuições e projetos abertos.</p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-300">
              <span>@DaviLinharess</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Instagram */}
          <a
            href={DEVELOPER_INFO.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-pink-500/50 hover:bg-neutral-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">Instagram</h4>
              <p className="text-xs font-mono text-neutral-400">Rotina de estudos, projetos e lifestyle tech.</p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-pink-400">
              <span>@linharessdavi</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={DEVELOPER_INFO.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-white mb-1">WhatsApp</h4>
              <p className="text-xs font-mono text-neutral-400">Contato direto e agendamento de bate-papo.</p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>+55 84 98112-8912</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
