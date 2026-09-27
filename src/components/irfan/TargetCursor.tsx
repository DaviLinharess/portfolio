import { useEffect, useRef, useState } from 'react';

interface ElementBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function TargetCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBounds, setHoveredBounds] = useState<ElementBounds | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let currentW = 32;
    let currentH = 32;
    let targetW = 32;
    let targetH = 32;
    let targetX = -100;
    let targetY = -100;
    let isSnapping = false;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        // Find closest interactive element
        const interactiveEl = target.closest(
          'button, a, .side-nav-item, .project-list-card, .header-action-btn, .lang-dropdown-pill, .home-action-btn, .dossier-arrow-btn, .contact-btn-black, .contact-info-row, [role="button"]'
        ) as HTMLElement | null;

        if (interactiveEl) {
          const rect = interactiveEl.getBoundingClientRect();
          // Padding of 6px horizontally and 4px vertically to frame the element nicely
          const padX = 6;
          const padY = 4;
          
          targetX = rect.left - padX;
          targetY = rect.top - padY;
          targetW = rect.width + padX * 2;
          targetH = rect.height + padY * 2;
          isSnapping = true;
          setHoveredBounds({ x: targetX, y: targetY, width: targetW, height: targetH });
        } else {
          isSnapping = false;
          targetW = 32;
          targetH = 32;
          setHoveredBounds(null);
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setHoveredBounds(null);
      isSnapping = false;
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // 120fps RAF loop
    const render = () => {
      if (isSnapping) {
        // Fast snap directly to target element bounding box
        currentX += (targetX - currentX) * 0.45;
        currentY += (targetY - currentY) * 0.45;
        currentW += (targetW - currentW) * 0.4;
        currentH += (targetH - currentH) * 0.4;

        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        cursor.style.width = `${currentW}px`;
        cursor.style.height = `${currentH}px`;
      } else {
        // Follow mouse coordinates directly
        currentX += (mouseX - currentX) * 0.55;
        currentY += (mouseY - currentY) * 0.55;
        currentW += (32 - currentW) * 0.35;
        currentH += (32 - currentH) * 0.35;

        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
        cursor.style.width = `${currentW}px`;
        cursor.style.height = `${currentH}px`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  const isSnapped = hoveredBounds !== null;

  return (
    <div
      ref={cursorRef}
      className={`irfan-target-cursor ${isSnapped ? 'is-snapped' : ''} ${isVisible ? 'is-visible' : ''}`}
      aria-hidden="true"
    >
      <div className={`irfan-target-brackets ${isSnapped ? 'no-spin' : ''}`}>
        <span className="bracket bracket-tl" />
        <span className="bracket bracket-tr" />
        <span className="bracket bracket-bl" />
        <span className="bracket bracket-br" />
      </div>
    </div>
  );
}
