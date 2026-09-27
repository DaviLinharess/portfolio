import { ArrowUpRight } from 'lucide-react';
import { RotatingText } from '../../ui/RotatingText';

interface HomeStageProps {
  onNavigate: (stage: string, label: string) => void;
  onOpenCV: () => void;
}

export function HomeStage({ onNavigate, onOpenCV }: HomeStageProps) {
  return (
    <section className="stage stage--home" aria-live="polite">
      {/* Background Animated Line Art Vector */}
      <div className="home-line-art" aria-hidden="true">
        <svg viewBox="0 0 946 842" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="home-line-art-path"
            d="M530.931 955.551C546.993 894.362 563.479 835.324 567.619 771.623C573.602 679.541 548.007 600.308 473.209 542.366C393.06 480.279 262.025 497.866 214.438 396.431C201.098 367.995 194.486 337.349 187.534 306.913C181.291 279.578 161.191 240.653 166.663 212.34C173.217 178.431 219.827 152.377 246.724 137.008C291.462 111.443 340.489 95.0497 390.213 82.3841C422.98 74.0377 459.175 62.6874 493.428 67.5459C513.473 70.3891 531.854 79.9096 551.15 85.4821C579.282 93.6066 608.392 96.7435 637.57 97.8744C674.182 99.2935 713.379 99.3702 747.47 84.3407C784.12 68.1832 824.039 45.1222 854.109 18.3029C862.348 10.9547 867.97 -0.777178 880.85 0.0405699C894.476 0.90573 903.681 15.1398 909.874 25.4774C929.536 58.2995 939.686 94.4493 942.811 132.442C946.391 175.952 953.716 236.602 906.45 257.996C877.139 271.263 843.874 273.855 812.203 275.606C763.426 278.302 714.444 277.563 665.615 277.563C570.546 277.563 473.976 274.84 379.288 284.737C318.094 291.133 256.836 304.572 196.991 318.653C167.381 325.62 -54.89 381.106 12.7377 436.053C35.0219 454.159 65.6033 463.827 92.1461 472.904C151.014 493.036 211.535 508.369 272.16 522.147C370.643 544.529 471.651 562.43 566.64 597.805C603.609 611.573 648.452 632.667 655.18 676.399C663.511 730.553 633.731 793.351 605.285 837.498C574.687 884.983 531.918 902.692 479.242 916.907C465.762 920.544 440.18 922.366 428.858 932.071C421.968 937.976 445.112 941.188 454.131 942.18C521.84 949.628 593.762 946.717 659.419 927.832C689.081 919.3 729.515 904.124 748.774 877.936C776.844 839.768 751.063 777.748 735.73 740.317C709.997 677.499 652.862 627.191 638.385 559.976C625.204 498.779 667.206 447.502 694.477 396.92C717.592 354.044 717.654 317.306 685.508 279.193C659.523 248.384 617.131 212.289 667.246 182.012C697.452 163.762 740.035 163.535 774.048 167.989"
          />
        </svg>
      </div>

      <div className="home-scene">
        {/* Title */}
        <div className="home-title">
          <p className="mono-label">PORTFÓLIO 2026 / WEB + MOBILE + SISTEMAS</p>
          <h1>Davi Linhares</h1>
        </div>

        {/* Intro */}
        <div className="home-intro">
          <div className="home-role">
            <span>Eu crio</span>
            <span className="rotating-text-pill">
              <RotatingText
                words={[
                  'full-stack web apps',
                  'soluções mobile',
                  'sistemas distribuídos',
                  'bancos relacionais',
                ]}
                interval={2500}
              />
            </span>
          </div>

          <span className="home-intro-copy">
            Eu crio sistemas web full-stack, da interface ao banco de dados. Me conheça melhor!
          </span>

          <div className="home-actions">
            <button
              onClick={() => onNavigate('work', 'PROJETOS')}
              className="home-action-btn primary"
            >
              <span>VER PROJETOS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCV}
              className="home-action-btn"
            >
              <span>VER CURRÍCULO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Capability Map (Bottom 5-column Bar) */}
        <div className="capability-bar-wrapper">
          <div className="capability-bar">
            {/* Box 1: Description */}
            <div className="cap-card cap-card--lead">
              <div className="cap-tag">MAPA DE COMPETÊNCIAS</div>
              <h2 className="cap-lead-text">
                Áreas essenciais que integro em cada projeto. Um panorama direto das minhas especialidades.
              </h2>
            </div>

            {/* Box 2: Web Core */}
            <div className="cap-card">
              <div className="cap-tag">WEB FULL-STACK</div>
              <h3 className="cap-title">Aplicações Web</h3>
              <p className="cap-body">
                Interfaces modernas, regras de negócio, APIs, dashboards e deploy de aplicações completas.
              </p>
              <span className="cap-diamond" aria-hidden="true">◇</span>
            </div>

            {/* Box 3: DSD */}
            <div className="cap-card">
              <div className="cap-tag">SISTEMAS</div>
              <h3 className="cap-title">Sistemas Distribuídos</h3>
              <p className="cap-body">
                Sistemas com comunicação entre frontend, APIs REST e banco de dados.
              </p>
              <span className="cap-diamond" aria-hidden="true">◇</span>
            </div>


            {/* Box 4: Mobile */}
            <div className="cap-card">
              <div className="cap-tag">CAMADA MOBILE</div>
              <h3 className="cap-title">Apps Reativos</h3>
              <p className="cap-body">
                Aplicativos de alta performance em Flutter e Dart, arquitetura limpa e experiência fluida.
              </p>
              <span className="cap-diamond" aria-hidden="true">◇</span>
            </div>

            {/* Box 5: Database */}
            <div className="cap-card">
              <div className="cap-tag">BANCO DE DADOS</div>
              <h3 className="cap-title">Arquitetura de Dados</h3>
              <p className="cap-body">
                Modelagem relacional DER, otimização de queries SQL, integridade ACID e PostgreSQL.
              </p>
              <span className="cap-diamond" aria-hidden="true">◇</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
