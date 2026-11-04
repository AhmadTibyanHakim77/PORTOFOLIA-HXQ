"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => null,
});

export default function SceneLoader() {
  const [canRender3D, setCanRender3D] = useState(false);
  const [inView, setInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Check WebGL support & reduced motion
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setCanRender3D(!!gl && !reduceMotion);
    } catch {
      setCanRender3D(false);
    }

    // 2. Pause when off-screen
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {canRender3D ? (
        <Scene inView={inView} />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <div
            className="orb transition-transform duration-700 ease-out"
            role="img"
            aria-label="Abstract Glass Sphere"
          />
        </div>
      )}
    </div>
  );
}
