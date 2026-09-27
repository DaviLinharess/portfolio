import { useEffect, useState } from 'react';

export function InitialLoader() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLeaving(true), 1200);
    const timer2 = setTimeout(() => setRemoved(true), 1800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`initial-loader ${leaving ? 'is-leaving' : ''}`}
      role="status"
      aria-label="Carregando portfólio"
    >
      <div className="loader-shell">
        <span className="loader-scanline" />
        <span className="loader-dot" />
        <span className="loader-wordmark">Hello</span>
        <span className="loader-dot" />
      </div>
    </div>
  );
}
