import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../../ui/SocialIcons';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubApiResponse {
  total: {
    lastYear: number;
    [year: string]: number;
  };
  contributions: ContributionDay[];
}

export function AboutStage() {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState<number>(254);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch real GitHub contribution data for DaviLinharess
  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        const res = await fetch('https://github-contributions-api.jogruber.de/v4/DaviLinharess?y=last');
        if (!res.ok) throw new Error('Falha ao buscar dados do GitHub');
        const data: GitHubApiResponse = await res.json();

        if (isMounted && data.contributions && data.contributions.length > 0) {
          setContributions(data.contributions);
          if (data.total && typeof data.total.lastYear === 'number') {
            setTotalCount(data.total.lastYear);
          }
        }
      } catch (err) {
        console.warn('Usando dados de fallback do GitHub:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Organize days into weeks of 7 days
  const weeks: ContributionDay[][] = [];
  if (contributions.length > 0) {
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }
  } else {
    // Graceful fallback placeholder
    for (let w = 0; w < 28; w++) {
      const week: ContributionDay[] = [];
      for (let d = 0; d < 7; d++) {
        const seed = (w * 7 + d * 11) % 17;
        const level = seed === 0 || seed === 5 ? 0 : seed < 8 ? 1 : seed < 13 ? 2 : seed < 16 ? 3 : 4;
        week.push({ date: `2026-${w}-${d}`, count: level > 0 ? level * 2 : 0, level });
      }
      weeks.push(week);
    }
  }

  // Display the most recent 26 weeks for optimal viewport fit
  const visibleWeeks = weeks.slice(-26);

  const months = ['.PR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'];

  return (
    <section className="stage stage--about" aria-live="polite">
      <div className="about-scene">
        {/* Top Header / Breadcrumb */}
        <div className="about-header">
          <p className="about-breadcrumb">SOBRE / .TRAJETÓRIA</p>
          <h1 className="about-headline">
            Desenvolvimento full-stack, aplicações web, mobile e sistemas distribuídos.
          </h1>
        </div>

        {/* 3-Column Grid Matching Irfan Sabrian (Translucent Glass Finish) */}
        <div className="about-grid">
          {/* COLUMN 1: Current Direction & Real GitHub Heatmap */}
          <div className="about-col about-col--profile">
            {/* Box 1: Current Direction */}
            <div className="irfan-card about-direction-card">
              <div className="irfan-card-header">
                <span className="irfan-card-label">DIREÇÃO ATUAL</span>
              </div>
              <h2 className="about-direction-title">Desenvolvedor Full-Stack.</h2>
              <p className="about-direction-desc">
                Desenvolvo sistemas de ponta a ponta, da interface ao banco de dados. Foco em aplicações web escaláveis (Angular, React, TypeScript), soluções mobile em Flutter e arquiteturas distribuídas com APIs REST.
              </p>
            </div>

            {/* Box 2: Real GitHub Contributions */}
            <div className="irfan-card about-github-card">
              <div className="irfan-card-header">
                <span className="irfan-card-label">CONTRIBUIÇÕES NO GITHUB</span>
                <a
                  href="https://github.com/DaviLinharess"
                  target="_blank"
                  rel="noreferrer"
                  className="about-github-link"
                  title="Abrir perfil real no GitHub"
                >
                  <GithubIcon size={13} />
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Heatmap Area */}
              <div className="heatmap-container">
                <div className="heatmap-months">
                  {months.map((m, idx) => (
                    <span key={idx}>{m}</span>
                  ))}
                </div>

                <div className="heatmap-matrix" tabIndex={0} aria-label="Mapa de Contribuições do GitHub">
                  {visibleWeeks.map((week, wIdx) => (
                    <div key={wIdx} className="heatmap-week">
                      {week.map((day, dIdx) => (
                        <span
                          key={dIdx}
                          className={`heatmap-cell level-${day.level}`}
                          title={`${day.count} contribuição${day.count === 1 ? '' : 'ões'} em ${day.date}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Subtle scroll indicator line */}
                <div className="heatmap-slider-track">
                  <div className="heatmap-slider-thumb" />
                </div>

                <div className="heatmap-footer">
                  <span className="heatmap-count">
                    {loading ? 'CARREGANDO...' : `${totalCount.toLocaleString()} CONTRIBUIÇÕES`}
                  </span>
                  <span className="heatmap-period">ÚLTIMO ANO</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: WORK / PRACTICE LOG */}
          <div className="about-col about-col--scrollable">
            <div className="irfan-card about-feed-card">
              <div className="irfan-card-header">
                <span className="irfan-card-label">
                  <span className="label-bullet">■</span> EXPERIÊNCIA
                </span>
                <span className="irfan-card-tag">REGISTRO PRÁTICO</span>
              </div>

              <div className="about-feed-list">
                <article className="feed-entry">
                  <div className="feed-entry-badge">2026</div>
                  <h3 className="feed-entry-title">Big Burgs do João</h3>
                  <div className="feed-entry-subtitle">WEB COMERCIAL // TAILWIND & JAVASCRIPT</div>
                  <p className="feed-entry-body">
                    Landing page comercial responsiva com foco em conversão direta de pedidos, carregamento rápido e navegação fluida.
                  </p>
                </article>

                <article className="feed-entry">
                  <div className="feed-entry-badge">2026</div>
                  <h3 className="feed-entry-title">Igreja Batista Filadélfia</h3>
                  <div className="feed-entry-subtitle">PORTAL INSTITUCIONAL // ANGULAR & TAILWIND</div>
                  <p className="feed-entry-body">
                    Portal web para comunicação comunitária e gestão institucional, reunindo agenda de cultos, ministérios e transmissões em tempo real.
                  </p>
                </article>

                <article className="feed-entry">
                  <div className="feed-entry-badge">2026</div>
                  <h3 className="feed-entry-title">PaceWeather & Mobile Ecosystem</h3>
                  <div className="feed-entry-subtitle">APLICATIVO MOBILE // FLUTTER & DART</div>
                  <p className="feed-entry-body">
                    Aplicativo meteorológico mobile reativo integrando API da OpenWeather, previsões geolocalizadas e ritmo de treino para corredores.
                  </p>
                </article>

                <article className="feed-entry">
                  <div className="feed-entry-badge">2026</div>
                  <h3 className="feed-entry-title">Winner Run</h3>
                  <div className="feed-entry-subtitle">LANDING PAGE COMERCIAL // PERFORMANCE</div>
                  <p className="feed-entry-body">
                    Landing page esportiva institucional com Tailwind CSS, SEO semântico, apresentação de treinos e direcionamento para conversão.
                  </p>
                </article>

                <article className="feed-entry">
                  <div className="feed-entry-badge">2026</div>
                  <h3 className="feed-entry-title">Sistemas Distribuídos (DSD) </h3>
                  <div className="feed-entry-subtitle">ARQUITETURA ACADÊMICA IFRN // ANGULAR & DJANGO</div>
                  <p className="feed-entry-body">
                    Comunicação entre interface e sistema com APIs REST, consumindo banco de dados relacional.
                  </p>
                </article>

                <article className="feed-entry">
                  <div className="feed-entry-badge">2025</div>
                  <h3 className="feed-entry-title">Banco de Dados (PA-BD)</h3>
                  <div className="feed-entry-subtitle">SISTEMAS RELACIONAIS // POSTGRESQL</div>
                  <p className="feed-entry-body">
                    Modelagem relacional DER, sistemas relacionais, progrmação e administração em banco de dados.
                  </p>
                </article>
              </div>
            </div>
          </div>

          {/* COLUMN 3: EDUCATION / FORMAL TRACK */}
          <div className="about-col about-col--scrollable">
            <div className="irfan-card about-feed-card">
              <div className="irfan-card-header">
                <span className="irfan-card-label">
                  <span className="label-bullet">■</span> FORMAÇÃO
                </span>
                <span className="irfan-card-tag">HISTÓRICO ACADÊMICO</span>
              </div>

              <div className="about-feed-list">
                <article className="feed-entry">
                  <div className="feed-entry-badge">2024 - 2027</div>
                  <h3 className="feed-entry-title">Instituto Federal do RN (IFRN)</h3>
                  <div className="feed-entry-subtitle">GRADUAÇÃO // TADS (CAMPUS NATAL CENTRAL)</div>
                  <p className="feed-entry-body">
                    Tecnologia em Análise e Desenvolvimento de Sistemas. Formação focada em Arquitetura de software, sistemas web, bancos de dados e qualidade de software.
                  </p>
                </article>

                <article className="feed-entry">
                  <div className="feed-entry-badge">2020 - 2023</div>
                  <h3 className="feed-entry-title">Ensino Médio </h3>
                  <div className="feed-entry-subtitle">FORMAÇÃO DE NÍVEL MÉDIO</div>
                  <p className="feed-entry-body">
                    Formação de nível médio na escola "FACEX".
                  </p>
                </article>

                <article className="feed-entry">
                  <div className="feed-entry-badge">CONTÍNUO</div>
                  <h3 className="feed-entry-title">Especialização Tecnológica Autônoma</h3>
                  <div className="feed-entry-subtitle">ECOSSISTEMA WEB & MOBILE</div>
                  <p className="feed-entry-body">
                    Prática contínua em frameworks reativos modernos (Angular, React), TypeScript avançado, Flutter mobile, APIs REST e arquiteturas de banco de dados.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
