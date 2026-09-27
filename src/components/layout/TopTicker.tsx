import { useState, useEffect } from 'react';
import { MapPin, GraduationCap, Clock, Sparkles } from 'lucide-react';
import { DEVELOPER_INFO } from '../../data/portfolioData';

export function TopTicker() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('pt-BR', {
          timeZone: 'America/Fortaleza',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-b border-neutral-800/80 bg-[#07080c]/90 text-xs font-mono uppercase tracking-wider backdrop-blur-md z-40 relative">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-y-2 text-neutral-400">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-400">Open to Work</span>
          <span className="hidden sm:inline text-neutral-600">•</span>
          <span className="hidden sm:inline text-neutral-300">{DEVELOPER_INFO.status}</span>
        </div>

        {/* Location & Institution & Live Clock */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <div className="hidden md:flex items-center gap-1.5 text-neutral-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{DEVELOPER_INFO.location}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-neutral-300">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>{DEVELOPER_INFO.course}</span>
          </div>

          <div className="flex items-center gap-1.5 text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 px-2.5 py-0.5 rounded-full text-[11px]">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>{time || "12:00:00"} BRT</span>
          </div>

          <a
            href="#contato"
            className="hidden sm:flex items-center gap-1 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Vamos Conversar →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
