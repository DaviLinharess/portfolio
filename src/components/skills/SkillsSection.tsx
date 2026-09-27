import { 
  Code, Atom, FileCode, Palette, Layout, Zap, 
  Smartphone, Terminal, Sparkles, Globe, 
  Binary, Coffee, Database, Network, Server, 
  GitBranch, Send, CheckCircle2 
} from 'lucide-react';
import { SpotlightCard } from '../ui/SpotlightCard';
import { FigmaIcon } from '../ui/SocialIcons';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export function SkillsSection() {
  const renderSkillIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" };
    switch (iconName) {
      case "atom": return <Atom {...props} />;
      case "file-code": return <FileCode {...props} />;
      case "code": return <Code {...props} />;
      case "palette": return <Palette {...props} />;
      case "layout": return <Layout {...props} />;
      case "zap": return <Zap {...props} />;
      case "smartphone": return <Smartphone {...props} />;
      case "terminal": return <Terminal {...props} />;
      case "sparkles": return <Sparkles {...props} />;
      case "globe": return <Globe {...props} />;
      case "binary": return <Binary {...props} />;
      case "coffee": return <Coffee {...props} />;
      case "database": return <Database {...props} />;
      case "network": return <Network {...props} />;
      case "server": return <Server {...props} />;
      case "git-branch": return <GitBranch {...props} />;
      case "send": return <Send {...props} />;
      case "figma": return <FigmaIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" size={16} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-neutral-800 pb-6 gap-4">
        <div>
          <span className="font-mono text-cyan-400 text-xs uppercase tracking-widest block mb-2">
            04 // STACKS & COMPETÊNCIAS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            Arsenal Tecnológico
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-md font-mono">
          Conjunto de ferramentas, linguagens e frameworks aplicados no dia a dia para desenvolver sistemas robustos e interfaces envolventes.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <SpotlightCard key={category.title} className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-2 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300">
                  {category.skills.length} Tecnologias
                </span>
              </h3>
              <p className="text-neutral-400 text-xs font-mono mb-6">
                {category.description}
              </p>

              {/* Skills badges grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-3 rounded-xl bg-[#090a0f] border border-neutral-800/80 hover:border-cyan-500/40 hover:bg-neutral-900/60 transition-all duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-cyan-500/30">
                        {renderSkillIcon(skill.icon)}
                      </div>
                      <span className="font-mono text-xs font-bold text-neutral-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 group-hover:text-cyan-400 transition-colors">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
