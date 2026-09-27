import React, { useRef, useState } from 'react';

interface TiltedCardProps {
  children: React.ReactNode;
  maxAngle?: number;
  className?: string;
  glowColor?: string;
}

export function TiltedCard({
  children,
  maxAngle = 14,
  className = "",
  glowColor = "rgba(0, 242, 254, 0.25)",
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxAngle;
    const rotateY = ((x - centerX) / centerX) * maxAngle;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.65,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className={`inline-block w-full ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 0 ? "transform 0.5s ease-out" : "transform 0.08s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="relative overflow-hidden rounded-3xl border border-neutral-700/80 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 shadow-2xl backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,242,254,0.18)]"
      >
        {/* Specular glare layer */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(0, 242, 254, 0.15) 30%, transparent 65%)`,
          }}
        />

        {/* Holographic rim light */}
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-3xl opacity-40 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(${rotate.y * 5}deg, ${glowColor}, transparent 60%)`,
          }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
