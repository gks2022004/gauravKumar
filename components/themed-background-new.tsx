"use client";

import React, { useEffect, useRef, useState } from "react";

// Revolutionary quantum particle system with advanced physics
function QuantumParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<any[]>([]);
  const quantumFieldRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const createParticles = () => {
      const count = Math.min(300, Math.floor((canvas.width * canvas.height) / 8000));
      particlesRef.current = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        vz: (Math.random() - 0.5) * 4,
        size: Math.random() * 5 + 1,
        baseSize: Math.random() * 5 + 1,
        opacity: Math.random() * 0.9 + 0.1,
        hue: (i * 137.508) % 360,
        life: Math.random() * 400,
        maxLife: 400 + Math.random() * 300,
        trail: [] as any[],
        energy: Math.random() * 100,
        pulse: Math.random() * Math.PI * 2,
        quantumState: Math.random(),
        magneticField: Math.random() * 3 - 1.5,
        waveFreq: Math.random() * 0.02 + 0.01
      }));
    };

    const updateParticles = () => {
      quantumFieldRef.current += 0.015;
      
      particlesRef.current.forEach((particle, index) => {
        // Quantum field effects
        const quantumWave = Math.sin(quantumFieldRef.current + index * 0.1) * 40;
        const fieldDistortion = Math.cos(quantumFieldRef.current * particle.waveFreq + index * 0.3) * 20;
        
        // Advanced movement with quantum tunneling
        particle.x += particle.vx + Math.sin(quantumFieldRef.current * 0.4 + particle.quantumState) * 1.2;
        particle.y += particle.vy + quantumWave * 0.2 + fieldDistortion * 0.15;
        particle.z += particle.vz;

        // Mouse quantum entanglement
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 250) {
          const force = (250 - distance) / 250;
          const quantumForce = Math.sin(force * Math.PI * 2) * 0.7;
          const angle = Math.atan2(dy, dx);
          
          particle.vx += Math.cos(angle) * quantumForce * 0.5;
          particle.vy += Math.sin(angle) * quantumForce * 0.5;
          particle.energy = Math.min(100, particle.energy + force * 12);
          particle.quantumState += force * 0.15;
        }

        // Dynamic quantum trails
        if (particle.energy > 40) {
          particle.trail.push({ 
            x: particle.x + (Math.random() - 0.5) * 8, 
            y: particle.y + (Math.random() - 0.5) * 8, 
            life: 20,
            quantum: particle.quantumState,
            energy: particle.energy
          });
        }
        if (particle.trail.length > 15) particle.trail.shift();
        particle.trail.forEach((point: any) => point.life--);
        particle.trail = particle.trail.filter((point: any) => point.life > 0);

        // Quantum boundaries with portal teleportation
        if (particle.x < -150) {
          particle.x = canvas.width + 150;
          particle.quantumState = Math.random();
          particle.energy += 20;
        }
        if (particle.x > canvas.width + 150) {
          particle.x = -150;
          particle.quantumState = Math.random();
          particle.energy += 20;
        }
        if (particle.y < -150) {
          particle.y = canvas.height + 150;
          particle.quantumState = Math.random();
          particle.energy += 20;
        }
        if (particle.y > canvas.height + 150) {
          particle.y = -150;
          particle.quantumState = Math.random();
          particle.energy += 20;
        }

        // 3D depth cycling
        if (particle.z > 1000) {
          particle.z = -300;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Quantum lifecycle
        particle.life++;
        particle.pulse += 0.15 + (particle.energy / 800);
        particle.energy *= 0.98;
        
        const quantumFluctuation = Math.sin(particle.pulse * 1.5) * 0.5;
        const depthScale = (particle.z + 300) / 1300;
        particle.size = particle.baseSize * (1 + quantumFluctuation) * depthScale * (1 + particle.energy / 150);

        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.hue = (particle.hue + 137.508) % 360;
          particle.opacity = Math.random() * 0.9 + 0.1;
          particle.energy = Math.random() * 80;
          particle.quantumState = Math.random();
        }

        // Quantum field dampening
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.vz *= 0.990;
        
        // Field turbulence
        const turbulence = Math.sin(quantumFieldRef.current * 2 + index * 0.08) * 0.2;
        particle.vx += turbulence;
        particle.vy += Math.cos(quantumFieldRef.current * 1.5 + index * 0.12) * 0.18;
      });
    };

    const drawParticles = () => {
      // Dynamic quantum background gradient
      const centerX = canvas.width / 2 + Math.sin(quantumFieldRef.current * 0.3) * 150;
      const centerY = canvas.height / 2 + Math.cos(quantumFieldRef.current * 0.25) * 120;
      
      const bgGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height)
      );
      
      const isDarkMode = document.documentElement.classList.contains('dark');
      const quantumPhase = Math.sin(quantumFieldRef.current * 0.8) * 3;
      
      if (isDarkMode) {
        bgGradient.addColorStop(0, `hsla(${220 + quantumPhase}, 25%, 15%, 0.2)`);
        bgGradient.addColorStop(0.3, `hsla(${215 + quantumPhase}, 30%, 10%, 0.12)`);
        bgGradient.addColorStop(0.7, `hsla(${210 + quantumPhase}, 35%, 6%, 0.06)`);
        bgGradient.addColorStop(1, `hsla(${205 + quantumPhase}, 40%, 4%, 0.03)`);
      } else {
        const prismaticShift = Math.sin(quantumFieldRef.current) * 40;
        bgGradient.addColorStop(0, `hsla(${200 + prismaticShift}, 50%, 97%, 0.15)`);
        bgGradient.addColorStop(0.4, `hsla(${230 + prismaticShift}, 45%, 98%, 0.08)`);
        bgGradient.addColorStop(0.8, `hsla(${260 + prismaticShift}, 40%, 99%, 0.04)`);
        bgGradient.addColorStop(1, `hsla(${290 + prismaticShift}, 35%, 100%, 0.02)`);
      }
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Quantum connection web
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1, i + 12).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 180) {
            const strength = ((180 - distance) / 180) * 0.8;
            const entanglement = Math.sin(particle.quantumState + otherParticle.quantumState + quantumFieldRef.current) * 0.4 + 0.6;
            const opacity = strength * entanglement * ((particle.energy + otherParticle.energy) / 150);
            
            const avgHue = (particle.hue + otherParticle.hue) / 2;
            const quantumShift = Math.sin(quantumFieldRef.current + avgHue * 0.02) * 25;
            
            if (isDarkMode) {
              ctx.strokeStyle = `hsla(${220 + quantumShift}, 45%, 75%, ${opacity})`;
            } else {
              ctx.strokeStyle = `hsla(${avgHue + quantumShift}, 85%, 60%, ${opacity})`;
            }
            
            ctx.lineWidth = 1.5 + (particle.energy / 30) + (otherParticle.energy / 30);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            
            // Curved quantum connections
            const curveMidX = (particle.x + otherParticle.x) / 2 + Math.sin(quantumFieldRef.current * 2) * 15;
            const curveMidY = (particle.y + otherParticle.y) / 2 + Math.cos(quantumFieldRef.current * 2) * 15;
            ctx.quadraticCurveTo(curveMidX, curveMidY, otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Quantum particle trails
      particlesRef.current.forEach(particle => {
        particle.trail.forEach((point: any, index: number) => {
          const trailOpacity = (point.life / 20) * 0.7;
          const trailSize = (2 + index * 0.4) * (point.life / 20);
          const quantumGlow = Math.sin(point.quantum * Math.PI + quantumFieldRef.current) * 0.4 + 0.6;
          
          const trailGradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, trailSize * 2
          );
          
          if (isDarkMode) {
            const trailHue = 220 + Math.sin(point.quantum * 3) * 18;
            trailGradient.addColorStop(0, `hsla(${trailHue}, 40%, 80%, ${trailOpacity * quantumGlow})`);
            trailGradient.addColorStop(1, `hsla(${trailHue}, 30%, 70%, 0)`);
          } else {
            trailGradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${trailOpacity * quantumGlow})`);
            trailGradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`);
          }
          
          ctx.fillStyle = trailGradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Main quantum particles
      particlesRef.current.forEach(particle => {
        const lifeRatio = 1 - (particle.life / particle.maxLife);
        const energyGlow = particle.energy / 100;
        const quantumPulse = Math.sin(particle.pulse) * 0.7 + 0.3;
        const depthFade = (particle.z + 300) / 1300;
        
        // Quantum aura
        const auraSize = particle.size * (4 + energyGlow * 5) * depthFade;
        const auraGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, auraSize
        );
        
        if (isDarkMode) {
          const quantumHue = 220 + Math.sin(particle.quantumState * Math.PI + quantumFieldRef.current) * 25;
          const saturation = 35 + energyGlow * 25;
          const lightness = 65 + quantumPulse * 30;
          auraGradient.addColorStop(0, `hsla(${quantumHue}, ${saturation}%, ${lightness}%, ${(particle.opacity * lifeRatio * energyGlow * depthFade)})`);
          auraGradient.addColorStop(0.3, `hsla(${quantumHue}, ${saturation * 0.9}%, ${lightness * 0.95}%, ${(particle.opacity * lifeRatio * energyGlow * depthFade) * 0.5})`);
          auraGradient.addColorStop(1, `hsla(${quantumHue}, ${saturation * 0.7}%, ${lightness * 0.85}%, 0)`);
        } else {
          const prismaticHue = particle.hue + Math.sin(particle.quantumState * 2 + quantumFieldRef.current) * 40;
          auraGradient.addColorStop(0, `hsla(${prismaticHue}, 95%, 70%, ${(particle.opacity * lifeRatio * energyGlow * depthFade) * 0.8})`);
          auraGradient.addColorStop(0.4, `hsla(${prismaticHue}, 85%, 65%, ${(particle.opacity * lifeRatio * energyGlow * depthFade) * 0.4})`);
          auraGradient.addColorStop(1, `hsla(${prismaticHue}, 75%, 60%, 0)`);
        }
        
        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, auraSize, 0, Math.PI * 2);
        ctx.fill();

        // Quantum particle core
        const coreGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        if (isDarkMode) {
          const coreHue = 220 + Math.sin(particle.pulse * 2) * 15;
          const brightness = 75 + quantumPulse * 20;
          coreGradient.addColorStop(0, `hsla(${coreHue}, 45%, ${brightness}%, ${particle.opacity * lifeRatio * depthFade})`);
          coreGradient.addColorStop(0.6, `hsla(${coreHue}, 40%, ${brightness * 0.9}%, ${(particle.opacity * lifeRatio * depthFade) * 0.8})`);
          coreGradient.addColorStop(1, `hsla(${coreHue}, 35%, ${brightness * 0.8}%, ${(particle.opacity * lifeRatio * depthFade) * 0.6})`);
        } else {
          const coreHue = particle.hue + Math.sin(particle.pulse * 3) * 20;
          coreGradient.addColorStop(0, `hsla(${coreHue}, 100%, 75%, ${particle.opacity * lifeRatio * depthFade})`);
          coreGradient.addColorStop(0.5, `hsla(${coreHue}, 90%, 65%, ${(particle.opacity * lifeRatio * depthFade) * 0.9})`);
          coreGradient.addColorStop(1, `hsla(${coreHue}, 80%, 55%, ${(particle.opacity * lifeRatio * depthFade) * 0.7})`);
        }
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Quantum sparkles for high-energy particles
        if (particle.energy > 85) {
          const sparkleCount = Math.floor(particle.energy / 20);
          for (let i = 0; i < sparkleCount; i++) {
            const angle = (i / sparkleCount) * Math.PI * 2 + particle.pulse;
            const distance = particle.size * 3 + Math.sin(particle.pulse + i) * 8;
            const sparkleX = particle.x + Math.cos(angle) * distance;
            const sparkleY = particle.y + Math.sin(angle) * distance;
            
            ctx.fillStyle = isDarkMode 
              ? `hsla(0, 0%, 98%, ${0.9 * depthFade})` 
              : `hsla(${particle.hue}, 100%, 90%, ${depthFade})`;
            ctx.beginPath();
            ctx.arc(sparkleX, sparkleY, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 dark:opacity-85" />;
}

export default function ThemedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950" />;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Revolutionary quantum particle system */}
      <QuantumParticleSystem />
      
      {/* Premium atmospheric layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/20 via-black/10 via-black/5 to-transparent dark:from-black/40 dark:via-black/20 dark:via-black/10" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/12 via-black/6 to-transparent dark:from-black/30 dark:via-black/15" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/10 via-black/5 to-transparent dark:from-black/25 dark:via-black/12" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/10 via-black/5 to-transparent dark:from-black/25 dark:via-black/12" />
        
        {/* Dynamic center vortex */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh] opacity-30 dark:opacity-40"
             style={{ 
               background: "radial-gradient(ellipse, transparent 15%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.04) 65%, rgba(0,0,0,0.08) 100%)" 
             }} />
      </div>
    </div>
  );
}
