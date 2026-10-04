// Crisp inline SVGs for authentic developer skill badges
function SkillIcon({ name }: { name: string }) {
  switch (name) {
    case 'ANGULAR':
      return (
        <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 250 250" fill="currentColor">
          <polygon points="125,30 31.9,63.2 46.1,186.3 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
          <polygon points="125,30 125,52.2 125,153.4 125,213.2 203.9,186.3 218.1,63.2" fill="#C3002F" />
          <path d="M125,52.1L66.8,182.6h21.7l11.8-29.5h49.4l11.8,29.5h21.7L125,52.1z M141.7,135.5h-33.4l16.7-41.8L141.7,135.5z" fill="#FFFFFF" />
        </svg>
      );
    case 'REACT':
      return (
        <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 115.3 100" fill="currentColor">
          <ellipse cx="57.65" cy="50" rx="16.5" ry="46" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(30 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16.5" ry="46" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(90 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="16.5" ry="46" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(150 57.65 50)" />
          <circle cx="57.65" cy="50" r="8" />
        </svg>
      );
    case 'TYPESCRIPT':
      return (
        <span className="w-3.5 h-3.5 bg-blue-600 text-white font-mono text-[8px] font-black rounded-[1px] flex items-center justify-center">
          TS
        </span>
      );
    case 'JAVASCRIPT':
      return (
        <span className="w-3.5 h-3.5 bg-amber-400 text-black font-mono text-[8px] font-black rounded-[1px] flex items-center justify-center">
          JS
        </span>
      );
    case 'TAILWIND CSS':
      return (
        <svg className="w-3.5 h-3.5 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case 'HTML5':
      return (
        <span className="w-3.5 h-3.5 bg-orange-600 text-white font-mono text-[8px] font-black rounded-[1px] flex items-center justify-center">
          5
        </span>
      );
    case 'CSS3':
      return (
        <span className="w-3.5 h-3.5 bg-blue-500 text-white font-mono text-[8px] font-black rounded-[1px] flex items-center justify-center">
          3
        </span>
      );
    case 'PYTHON':
      return (
        <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.922 0C8.423 0 8.653 1.516 8.653 1.516l.006 1.564h3.315v.475H4.693S2.235 3.3 2.235 6.84c0 3.542 2.146 3.418 2.146 3.418h1.278v-1.82s-.07-2.146 2.109-2.146h3.633v-.482H7.765s-.355-1.558 1.488-1.558h5.952S16.99 4.252 16.99 2.736C16.99 1.22 15.42.002 11.922 0zm-1.85 1.054a.732.732 0 1 1 0 1.464.732.732 0 0 1 0-1.464z" />
        </svg>
      );
    case 'NODE.JS':
      return (
        <span className="w-3.5 h-3.5 bg-emerald-600 text-white font-mono text-[8px] font-black rounded-[1px] flex items-center justify-center">
          JS
        </span>
      );
    case 'EXPRESS':
      return <span className="font-mono text-[9px] font-black text-current">ex</span>;
    case 'POSTGRESQL':
      return (
        <span className="w-3.5 h-3.5 bg-sky-700 text-white font-mono text-[8px] font-bold rounded-[1px] flex items-center justify-center">
          PG
        </span>
      );
    case 'MYSQL':
      return (
        <span className="w-3.5 h-3.5 bg-blue-700 text-white font-mono text-[8px] font-bold rounded-[1px] flex items-center justify-center">
          SQL
        </span>
      );
    case 'FLUTTER':
      return (
        <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.314 11.085l-5.69 5.69 5.69 5.7h7.37l-5.69-5.7 5.69-5.69h-7.37z" />
        </svg>
      );
    case 'DART':
      return (
        <span className="w-3.5 h-3.5 bg-cyan-600 text-white font-mono text-[8px] font-bold rounded-[1px] flex items-center justify-center">
          D
        </span>
      );
    case 'DOCKER':
      return (
        <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185" />
        </svg>
      );
    case 'GIT':
      return (
        <svg className="w-3.5 h-3.5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.124 0L8.831 2.564l3.35 3.35a2.04 2.04 0 011.66 1.66l3.226 3.227a2.044 2.044 0 11-1.066 1.053l-3.04-3.04a2.052 2.052 0 01-1.34.408l-1.92 1.92a2.043 2.043 0 11-1.06-1.06l1.92-1.92a2.053 2.053 0 01.385-1.428L7.6 3.796.454 10.942a1.5 1.5 0 000 2.125l10.48 10.48a1.5 1.5 0 002.124 0l10.488-10.492a1.5 1.5 0 000-2.125z" />
        </svg>
      );
    case 'FIGMA':
      return (
        <span className="w-3.5 h-3.5 bg-gradient-to-tr from-purple-500 to-rose-400 text-white font-mono text-[8px] font-black rounded-full flex items-center justify-center">
          F
        </span>
      );
    case 'API REST':
      return (
        <span className="w-3.5 h-3.5 bg-emerald-600 text-white font-mono text-[7px] font-black rounded-[1px] flex items-center justify-center">
          REST
        </span>
      );
    case 'SOAP':
      return (
        <span className="w-3.5 h-3.5 bg-violet-600 text-white font-mono text-[7px] font-black rounded-[1px] flex items-center justify-center">
          SOAP
        </span>
      );
    case 'SQL MODELING':
    case 'MODELAGEM RELACIONAL':
      return (
        <span className="w-3.5 h-3.5 bg-blue-600 text-white font-mono text-[7px] font-bold rounded-[1px] flex items-center justify-center">
          DER
        </span>
      );
    case 'CONSULTAS SQL':
      return (
        <span className="w-3.5 h-3.5 bg-sky-600 text-white font-mono text-[7px] font-bold rounded-[1px] flex items-center justify-center">
          SQL
        </span>
      );
    case 'STATE MANAGEMENT':
      return (
        <span className="w-3.5 h-3.5 bg-amber-500 text-black font-mono text-[7px] font-bold rounded-[1px] flex items-center justify-center">
          SM
        </span>
      );
    case 'DJANGO REST':
      return (
        <span className="w-3.5 h-3.5 bg-emerald-800 text-white font-mono text-[6.5px] font-black rounded-[1px] flex items-center justify-center">
          DJ
        </span>
      );
    case 'PACOTE ADOBE':
    case 'ADOBE':
      return (
        <span className="w-3.5 h-3.5 bg-red-600 text-white font-mono text-[6.5px] font-black rounded-[1px] flex items-center justify-center">
          PS
        </span>
      );
    case 'ERP PROTHEUS':
    case 'PROTHEUS':
      return (
        <span className="w-3.5 h-3.5 bg-indigo-600 text-white font-mono text-[6px] font-black rounded-[1px] flex items-center justify-center">
          TOTVS
        </span>
      );
    case 'CLOUD':
      return (
        <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      );
    default:
      return <span className="w-2 h-2 rounded-full bg-current opacity-60" />;
  }
}

interface MarqueeRowProps {
  title: string;
  subtitle: string;
  skills: string[];
}

function MarqueeRow({ title, subtitle, skills }: MarqueeRowProps) {
  // Duplicate array for endless seamless looping marquee
  const loopedSkills = [...skills, ...skills];

  return (
    <div className="stack-row-card">
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="stack-row-title">{title}</h3>
      </div>
      <p className="stack-row-desc">{subtitle}</p>

      {/* Endless Horizontal Marquee Track */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {loopedSkills.map((s, idx) => (
            <span key={`${s}-${idx}`} className="stack-pill">
              <SkillIcon name={s} />
              <span>{s}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsStage() {
  const webSkills = ['ANGULAR', 'REACT', 'TYPESCRIPT', 'TAILWIND CSS', 'JAVASCRIPT', 'HTML5', 'CSS3'];
  const backendSkills = ['DJANGO REST', 'NODE.JS', 'EXPRESS', 'POSTGRESQL', 'MYSQL', 'ERP PROTHEUS'];
  const systemsSkills = ['API REST', 'SOAP', 'ERP PROTHEUS', 'CLOUD', 'LINUX', 'TCP/UDP'];
  const mobileSkills = ['FLUTTER', 'DART', 'MOBILE UX', 'STATE MANAGEMENT'];
  const dataSkills = ['POSTGRESQL', 'MYSQL', 'SQL MODELING', 'MODELAGEM RELACIONAL', 'CONSULTAS SQL'];
  const devopsSkills = ['GIT', 'DOCKER', 'POSTMAN', 'CLOUD', 'LINUX', 'PACOTE ADOBE'];

  return (
    <section className="stage stage--skills" aria-live="polite">
      <div className="skills-scene">
        {/* Page Heading */}
        <div className="skills-heading-bar">
          <div>
            <p className="skills-breadcrumb">HABILIDADES / MAPA DE COMPETÊNCIAS</p>
            <h1 className="skills-headline">Habilidades aplicadas na prática.</h1>
          </div>
          <div className="skills-status-badge">
            MAPA ATIVO
          </div>
        </div>

        {/* 2-Column Layout (Translucent Glass & Rectangular Geometry) */}
        <div className="skills-grid">
          {/* Left Column: Direction & Project Delivery */}
          <div className="skills-col skills-col--left">
            {/* Box 1: Core Direction */}
            <div className="irfan-card skills-direction-card">
              <span className="skills-tag-pill">DIREÇÃO PROFISSIONAL</span>
              <h2 className="skills-direction-title">
                Desenvolvedor Web Full-Stack com experiência prática em Angular, Node.js, Django REST e integração ERP.
              </h2>
              <p className="skills-direction-desc">
                Trajetória iniciada no comércio familiar aos 14 anos trazendo grande versatilidade, comunicação ágil e dedicação contínua à excelência técnica e multimídia.
              </p>

              <div className="skills-tri-metrics">
                <div className="tri-metric-box">
                  <span className="tri-label">FOCO PRINCIPAL</span>
                  <strong className="tri-val">Web Fullstack & Cloud</strong>
                </div>
                <div className="tri-metric-box">
                  <span className="tri-label">MULTIMÍDIA</span>
                  <strong className="tri-val">Pacote Adobe & Vídeo</strong>
                </div>
                <div className="tri-metric-box">
                  <span className="tri-label">DIFERENCIAIS</span>
                  <strong className="tri-val">Inglês Interm. & Protheus</strong>
                </div>
              </div>
            </div>

            {/* Box 2: Project Delivery */}
            <div className="irfan-card skills-delivery-card">
              <div className="irfan-card-header">
                <span className="irfan-card-label">ENTREGA & DIFERENCIAIS DO CV</span>
                <span className="irfan-card-tag">CREATIVE / ERP / CLOUD</span>
              </div>

              <div className="delivery-section">
                <span className="delivery-section-label">DESIGN MULTIMÍDIA & LAYOUT</span>
                <div className="delivery-tags">
                  <span className="delivery-pill"><SkillIcon name="PACOTE ADOBE" /> PACOTE ADOBE (PS/PR)</span>
                  <span className="delivery-pill"><SkillIcon name="FIGMA" /> FIGMA</span>
                  <span className="delivery-pill">EDIÇÃO DE VÍDEO</span>
                  <span className="delivery-pill"><SkillIcon name="TAILWIND CSS" /> TAILWIND CSS</span>
                </div>
              </div>

              <div className="delivery-section mt-3">
                <span className="delivery-section-label">INTEGRAÇÃO, CLOUD & FERRAMENTAL</span>
                <div className="delivery-tags">
                  <span className="delivery-pill"><SkillIcon name="ERP PROTHEUS" /> ERP PROTHEUS</span>
                  <span className="delivery-pill"><SkillIcon name="CLOUD" /> HOSPEDAGEM CLOUD</span>
                  <span className="delivery-pill"><SkillIcon name="GIT" /> GIT & GITHUB</span>
                  <span className="delivery-pill">POSTMAN</span>
                </div>
              </div>

              <div className="delivery-section mt-3">
                <span className="delivery-section-label">COMPETÊNCIAS INTERPESSOAIS & IDIOMA</span>
                <div className="delivery-tags">
                  <span className="delivery-pill text-emerald-400 font-medium">INGLÊS INTERMEDIÁRIO</span>
                  <span className="delivery-pill text-white/90">COMUNICAÇÃO ASSERTIVA</span>
                  <span className="delivery-pill text-white/90">TRABALHO EM EQUIPE</span>
                  <span className="delivery-pill text-white/90">VERSATILIDADE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Moving Animated Skill Rows */}
          <div className="skills-col skills-col--right">
            <div className="skills-stack-list">
              <MarqueeRow
                title="Desenvolvimento Web Full-Stack"
                subtitle="Websites, dashboards, portais institucionais e interfaces de alto desempenho."
                skills={webSkills}
              />

              <MarqueeRow
                title="Backend, APIs e Banco de Dados"
                subtitle="Lógica de servidor, fluxos de APIs REST, persistência relacional e transações seguras."
                skills={backendSkills}
              />

              <MarqueeRow
                title="Sistemas Distribuídos & Integrações"
                subtitle="Comunicação entre serviços via API REST, SOAP, protocolos de rede e arquitetura distribuída."
                skills={systemsSkills}
              />

              <MarqueeRow
                title="Ecossistema Mobile"
                subtitle="Aplicativos multiplataforma em Flutter/Dart, gerenciamento de estado e APIs nativas."
                skills={mobileSkills}
              />

              <MarqueeRow
                title="Bancos de Dados & Integridade"
                subtitle="Modelagem relacional DER, queries otimizadas em SQL, normalização e PostgreSQL."
                skills={dataSkills}
              />

              <MarqueeRow
                title="DevOps & Ferramental"
                subtitle="Controle de versão Git, conteinerização Docker, testes de API no Postman e Linux."
                skills={devopsSkills}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
