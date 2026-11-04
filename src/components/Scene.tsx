"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Lightformer,
  MeshTransmissionMaterial,
  Html,
  Sparkles,
} from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import type { Group } from "three";
import { heroOrbitChips } from "@/lib/data";

function OrbitingChips({ isMobile }: { isMobile: boolean }) {
  const chipsGroup = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!chipsGroup.current) return;
    chipsGroup.current.rotation.y += delta * 0.18;
    chipsGroup.current.rotation.x = Math.sin(chipsGroup.current.rotation.y * 0.4) * 0.08;
  });

  const chips = useMemo(() => {
    const total = heroOrbitChips.length;
    // Wide horizontal ellipse so chips spread gracefully across the full screen
    const rx = isMobile ? 2.3 : 3.8;
    const rz = isMobile ? 1.6 : 2.4;
    return heroOrbitChips.map((name, i) => {
      const theta = (i / total) * Math.PI * 2;
      const x = Math.cos(theta) * rx;
      const z = Math.sin(theta) * rz;
      const y = Math.sin(theta * 2) * 0.5;
      return { name, pos: [x, y, z] as [number, number, number] };
    });
  }, [isMobile]);

  return (
    <group ref={chipsGroup}>
      {chips.map(({ name, pos }) => (
        <group key={name} position={pos}>
          {/* Using sprite without transform keeps typography razor-sharp at text-xs */}
          <Html center sprite zIndexRange={[1, 0]}>
            <div className="select-none pointer-events-none whitespace-nowrap rounded-full border border-white/20 bg-[#08090d]/85 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide text-silver shadow-[0_0_24px_rgba(77,124,255,0.4)] backdrop-blur-md transition-all duration-300">
              <span className="inline-block h-2 w-2 rounded-full bg-accent mr-2 shadow-[0_0_8px_#4d7cff] align-middle" />
              <span>{name}</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

function GlassCore({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<Group>(null);
  const ring1Ref = useRef<Group>(null);
  const ring2Ref = useRef<Group>(null);

  useFrame(({ pointer, clock }) => {
    if (!groupRef.current) return;
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y +=
      (time * 0.14 + pointer.x * 0.7 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x +=
      (pointer.y * -0.35 - groupRef.current.rotation.x) * 0.04;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.06;
    }
  });

  const ringRadius1 = isMobile ? 2.4 : 3.4;
  const ringRadius2 = isMobile ? 3.0 : 4.4;

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Main Glass Polyhedron */}
        <mesh>
          <icosahedronGeometry args={[1.25, isMobile ? 1 : 2]} />
          <MeshTransmissionMaterial
            samples={isMobile ? 2 : 4}
            resolution={isMobile ? 256 : 512}
            thickness={1.1}
            roughness={0.14}
            chromaticAberration={0.06}
            distortion={0.15}
            distortionScale={0.3}
            temporalDistortion={0.08}
            ior={1.35}
            color="#d4e2ff"
            attenuationColor="#4d7cff"
            attenuationDistance={1.8}
          />
        </mesh>

        {/* Inner geometric core */}
        <mesh scale={0.5}>
          <octahedronGeometry />
          <meshBasicMaterial color="#4d7cff" wireframe opacity={0.6} transparent />
        </mesh>

        {/* Full-width sweeping orbital rings */}
        <group ref={ring1Ref} rotation={[Math.PI / 3, 0.2, 0]}>
          <mesh>
            <torusGeometry args={[ringRadius1, 0.012, 16, 120]} />
            <meshBasicMaterial color="#4d7cff" opacity={0.6} transparent />
          </mesh>
        </group>

        <group ref={ring2Ref} rotation={[-Math.PI / 4, -0.3, 0]}>
          <mesh>
            <torusGeometry args={[ringRadius2, 0.008, 12, 120]} />
            <meshBasicMaterial color="#ffffff" opacity={0.25} transparent />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function Scene({ inView = true }: { inView?: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={inView ? "always" : "demand"}
      camera={{ position: [0, 0, 5.8], fov: 42 }}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Lightformer
        form="rect"
        intensity={3}
        position={[0, 4, 2]}
        scale={[6, 3, 1]}
        color="#ffffff"
      />
      <Lightformer
        form="circle"
        intensity={2.5}
        position={[-4, -1, 3]}
        scale={3}
        color="#4d7cff"
      />
      <Lightformer
        form="rect"
        intensity={2}
        position={[4, -2, -1]}
        scale={[3, 5, 1]}
        color="#8baaff"
      />

      {/* Floating particles across the entire full screen */}
      <Sparkles
        count={isMobile ? 25 : 55}
        scale={[12, 8, 8]}
        size={isMobile ? 1.5 : 2.2}
        speed={0.35}
        opacity={0.4}
        color="#60a5fa"
      />

      <GlassCore isMobile={isMobile} />
      <OrbitingChips isMobile={isMobile} />
    </Canvas>
  );
}
