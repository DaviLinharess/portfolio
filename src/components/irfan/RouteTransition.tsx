import { useEffect, useState } from 'react';

interface RouteTransitionProps {
  isTransitioning: boolean;
  targetLabel: string;
  onTransitionComplete: () => void;
}

export function RouteTransition({
  isTransitioning,
  targetLabel,
  onTransitionComplete,
}: RouteTransitionProps) {
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');
  const [activeLabel, setActiveLabel] = useState<string>(targetLabel);

  useEffect(() => {
    if (isTransitioning) {
      setActiveLabel(targetLabel);

      // Force RAF to guarantee browser triggers scaleY(0) -> scaleY(1) transition
      requestAnimationFrame(() => {
        setPhase('covering');
      });

      const revealTimer = setTimeout(() => {
        setPhase('revealing');
      }, 380);

      const finishTimer = setTimeout(() => {
        setPhase('idle');
        onTransitionComplete();
      }, 780);

      return () => {
        clearTimeout(revealTimer);
        clearTimeout(finishTimer);
      };
    } else {
      setPhase('idle');
    }
  }, [isTransitioning, targetLabel, onTransitionComplete]);

  if (phase === 'idle') return null;

  return (
    <div className="route-transition" aria-hidden="true">
      <div className="route-transition-panels">
        {[0, 1, 2, 3, 4].map((index) => {
          const isCovering = phase === 'covering';
          return (
            <span
              key={index}
              className="route-transition-panel"
              style={{
                transition: 'transform 0.36s cubic-bezier(0.77, 0, 0.175, 1)',
                transitionDelay: `${index * 42}ms`,
                transform: isCovering ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: isCovering ? 'top center' : 'bottom center',
              }}
            />
          );
        })}
      </div>

      <div
        className="route-transition-label"
        style={{
          opacity: phase === 'covering' ? 1 : 0,
          transition: 'opacity 0.18s ease',
        }}
      >
        <span>DAVI // {activeLabel}</span>
      </div>
    </div>
  );
}
