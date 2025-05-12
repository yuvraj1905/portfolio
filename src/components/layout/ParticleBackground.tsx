"use client";

import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "@tsparticles/preset-links";

const ParticleBackground = () => {
  const [particlesInitialized, setParticlesInitialized] = useState(false);

  const customParticlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    await loadLinksPreset(engine);
  }, []);

  useEffect(() => {
    initParticlesEngine(customParticlesInit)
      .then(() => {
        setParticlesInitialized(true);
      })
      .catch((err) => {
        console.error("Failed to initialize particle engine in ParticleBackground:", err);
      });
  }, [customParticlesInit]);

  const particlesOptions = {
    preset: "links",
    background: {
      color: "#111827", // Dark background (bg-gray-900 equivalent)
    },
    particles: {
      color: { value: "#60a5fa" },
      links: { color: "#60a5fa", distance: 150, enable: true, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 0.8, direction: "none" as const, outModes: { default: "bounce" as const } },
      number: { density: { enable: true, area: 800 }, value: 80 }, 
      opacity: { value: 0.5 }, 
      shape: { type: "circle" as const },
      size: { value: { min: 1, max: 3 } }, 
    },
    detectRetina: true,
    fullScreen: { enable: true, zIndex: -1 } // Enable fullScreen and set zIndex to be behind content
  };

  if (!particlesInitialized) {
    return null; // Don't render anything until particles are ready, to prevent hydration issues or flashes
  }

  return (
    <Particles
      id="global-tsparticles"
      options={particlesOptions}
      // className is not needed here as fullScreen:true handles positioning
    />
  );
};

export default ParticleBackground; 