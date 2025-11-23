
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useEffect, useRef, useState } from 'react';
import { PenTool, Sparkles } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhaseState] = useState<'warp' | 'formula' | 'reveal'>('warp');
  const phaseRef = useRef<'warp' | 'formula' | 'reveal'>('warp');
  const [formulaText, setFormulaText] = useState('');
  const typewriterIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const setPhase = (newPhase: 'warp' | 'formula' | 'reveal') => {
    setPhaseState(newPhase);
    phaseRef.current = newPhase;
  };

  // Animation Sequence Timing
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('formula');
      typewriterEffect("Welcome to the future");
    }, 2500);

    const timer2 = setTimeout(() => {
      setPhase('reveal');
    }, 5500);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (typewriterIntervalRef.current) clearInterval(typewriterIntervalRef.current);
    };
  }, [onComplete]);

  const typewriterEffect = (text: string) => {
    let i = 0;
    setFormulaText('');
    if (typewriterIntervalRef.current) clearInterval(typewriterIntervalRef.current);
    
    typewriterIntervalRef.current = setInterval(() => {
      setFormulaText(text.substring(0, i + 1));
      i++;
      if (i > text.length && typewriterIntervalRef.current) {
        clearInterval(typewriterIntervalRef.current);
      }
    }, 50);
  };

  // Canvas Warp Drive Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency on base
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const chars = "010101<>{}[]/\\Σ∫πƒ∆∇NTEC";
    const particles: { x: number; y: number; z: number; char: string; color: string }[] = [];
    const particleCount = 400; // Optimized count
    
    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 5,
        y: (Math.random() - 0.5) * height * 5,
        z: Math.random() * 4000, 
        char: chars[Math.floor(Math.random() * chars.length)],
        color: Math.random() > 0.5 ? '#8b5cf6' : '#10b981'
      });
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      const deltaTime = Math.min((time - lastTime) / 16.67, 2.0); // Cap delta time to prevent huge jumps
      lastTime = time;

      const currentPhase = phaseRef.current;

      // Clear screen with trail effect
      if (currentPhase === 'reveal') {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      } else {
          ctx.fillStyle = 'rgba(2, 6, 23, 0.4)'; // Slightly stronger clear for less blur/smear
      }
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      particles.forEach(p => {
        let baseSpeed = 60;
        
        if (currentPhase === 'formula') {
           baseSpeed = 5; 
        } else if (currentPhase === 'reveal') {
           baseSpeed = 180;
        }

        p.z -= baseSpeed * deltaTime;

        if (p.z <= 10) {
          p.z = 4000;
          p.x = (Math.random() - 0.5) * width * 5;
          p.y = (Math.random() - 0.5) * height * 5;
        }

        const perspective = 300;
        const k = perspective / p.z; 
        const px = p.x * k + cx;
        const py = p.y * k + cy;

        if (px >= -100 && px <= width + 100 && py >= -100 && py <= height + 100 && p.z > 10) {
          const size = (1 - p.z / 4000) * 30; 
          const alpha = (1 - p.z / 4000); 
          
          // Optimize text rendering: skip very small particles
          if (size > 1) {
              ctx.font = `bold ${size}px "JetBrains Mono"`;
              ctx.fillStyle = p.color;
              ctx.globalAlpha = alpha;
              ctx.fillText(p.char, px, py);
              ctx.globalAlpha = 1.0;
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render(performance.now());

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-out ${phase === 'reveal' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Phase 2: The Formula (Text) */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${phase === 'formula' ? 'scale-100 opacity-100 blur-0' : 'scale-150 opacity-0 blur-xl pointer-events-none'}`}>
         <div className="relative group text-center px-4">
            <div className="absolute -inset-12 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
            <h1 className="relative text-3xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-emerald-200 tracking-widest drop-shadow-[0_0_25px_rgba(139,92,246,0.6)]">
              {formulaText}
              <span className="animate-pulse text-emerald-400">_</span>
            </h1>
         </div>
      </div>

      {/* Final Flash White Overlay */}
      <div className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-1000 ease-in ${phase === 'reveal' ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export default IntroAnimation;
