"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  sheen?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  sheen = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const rect = card.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((clientX - centerX) / centerX) * maxTilt;
      const rotateX = -((clientY - centerY) / centerY) * maxTilt;

      setTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
      );

      const sheenX = (clientX / rect.width) * 100;
      const sheenY = (clientY / rect.height) * 100;
      setSheenPos({ x: sheenX, y: sheenY, opacity: 0.18 });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setSheenPos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    setTransform("perspective(1000px) translateY(-4px) scale3d(1.02, 1.02, 1.02)");
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  }, []);

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        transform,
        transition: isFocused ? "all 0.3s ease-out" : "transform 0.15s ease-out, border-color 0.2s ease",
      }}
      className={`glass group relative overflow-hidden focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-[0_0_20px_rgba(77,124,255,0.3)] ${className}`}
    >
      {/* Light Sheen */}
      {sheen && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: sheenPos.opacity,
            background: `radial-gradient(circle at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 65%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

