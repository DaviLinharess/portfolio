import { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../../ui/SocialIcons';
import { DEVELOPER_INFO } from '../../../data/portfolioData';

export function ContactStage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="stage stage--contact" aria-live="polite">
      <div className="contact-scene">
        {/* Left Column: Headline in Portuguese */}
        <div className="contact-left">
          <p className="contact-breadcrumb">CONTATO</p>
          <h1 className="contact-huge-headline">
            Vamos criar<br />
            algo<br />
            extraordinário.
          </h1>
        </div>

        {/* Right Column: Contact Card Box */}
        <div className="contact-right">
          <div className="contact-card-box">
            {/* Row 1: Email */}
            <div
              className="contact-info-row interactive-target"
              onClick={handleCopyEmail}
              title="Clique para copiar e-mail"
            >
              <div className="flex items-center gap-3">
                <Mail size={16} className="contact-row-icon" />
                <span className="contact-row-value">{DEVELOPER_INFO.links.email}</span>
              </div>
              <span className="contact-copy-badge">
                {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                <span>{copied ? 'COPIADO' : 'COPIAR'}</span>
              </span>
            </div>

            {/* Row 2: Phone / WhatsApp */}
            <a
              href={DEVELOPER_INFO.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="contact-info-row"
              title="Conversar no WhatsApp"
            >
              <div className="flex items-center gap-3">
                <Phone size={16} className="contact-row-icon" />
                <span className="contact-row-value">+55 84 98112-8912</span>
              </div>
              <span className="contact-arrow-badge">↗</span>
            </a>

            {/* Row 3: Location */}
            <div className="contact-info-row">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="contact-row-icon" />
                <span className="contact-row-value">Natal, Rio Grande do Norte, Brasil</span>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="contact-buttons-grid">
              <a
                href={DEVELOPER_INFO.links.github}
                target="_blank"
                rel="noreferrer"
                className="contact-btn-black"
                title="Acessar GitHub"
              >
                <GithubIcon size={14} />
                <span>GITHUB</span>
              </a>

              <a
                href={DEVELOPER_INFO.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-btn-black"
                title="Conectar no LinkedIn"
              >
                <LinkedinIcon size={14} />
                <span>LINKEDIN</span>
              </a>

              <a
                href={DEVELOPER_INFO.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="contact-btn-black"
                title="Seguir no Instagram"
              >
                <InstagramIcon size={14} />
                <span>INSTAGRAM</span>
              </a>

              <a
                href={DEVELOPER_INFO.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="contact-btn-black"
                title="Iniciar conversa no WhatsApp"
              >
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
