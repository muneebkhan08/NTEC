
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useEffect, useRef } from 'react';

interface DestroyerAnimationProps {
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;  // Store original grid position
  targetY: number;
  textTargetX?: number; // Target for text formation
  textTargetY?: number;
  isTextParticle?: boolean;
  vx: number;
  vy: number;
  size: number;
  w?: number;
  h?: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  alpha: number;
  type: 'shard' | 'smoke' | 'spark' | 'flash';
  life: number;
  decay: number;
  gravity?: number;
  friction?: number;
  bounciness?: number;
  grounded?: boolean;
}

const DestroyerAnimation: React.FC<DestroyerAnimationProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation Phases in frames
  // 60fps assumption
  const EXPLOSION_LEN = 120; // 2 seconds of destruction
  const PAUSE_LEN = 20;      // 0.3 second pause
  const RECONSTRUCT_LEN = 140; // ~2.3 seconds to reform text and flash

  const getSampledTextPoints = (text: string, width: number, height: number, fontSize: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return [];
    
    ctx.font = `900 ${fontSize}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    ctx.fillText(text, width / 2, height / 2);
    
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const points: {x: number, y: number}[] = [];
    const step = 5; // Sample density
    
    for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
            const alpha = data[(y * width + x) * 4 + 3];
            if (alpha > 128) {
                points.push({x, y});
            }
        }
    }
    return points;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    
    // Colors sampled from the NTEC dark theme
    const shardColors = [
        '#0f172a', '#1e293b', '#334155', '#475569', 
        '#8b5cf6', '#7c3aed', '#10b981', '#059669', 
        '#e2e8f0', '#020617'
    ];

    // Initialize Explosion
    const init = () => {
        const originX = Math.min(width / 2, 280); 
        const originY = 80;

        // 1. SHARDS (The UI breaking apart)
        const cols = 50; 
        const rows = 35;
        const cellW = width / cols;
        const cellH = height / rows;

        // Generate Text Points for "NTEC"
        const textPoints = getSampledTextPoints("NTEC", width, height, Math.min(width, 1000) * 0.25);
        // Shuffle points for random assignment
        for (let i = textPoints.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [textPoints[i], textPoints[j]] = [textPoints[j], textPoints[i]];
        }

        let shardCount = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = c * cellW + cellW/2;
                const y = r * cellH + cellH/2;
                
                const dx = x - originX;
                const dy = y - originY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                const force = Math.min(150, 6000 / (dist + 5)); 
                const angle = Math.atan2(dy, dx);
                
                const isRect = Math.random() > 0.15;
                
                // Assign text target if available
                let textTargetX, textTargetY, isTextParticle = false;
                if (shardCount < textPoints.length) {
                    textTargetX = textPoints[shardCount].x;
                    textTargetY = textPoints[shardCount].y;
                    isTextParticle = true;
                }

                particles.push({
                    x: x,
                    y: y,
                    targetX: x, // Not used for return anymore, using text target
                    targetY: y,
                    textTargetX,
                    textTargetY,
                    isTextParticle,
                    vx: Math.cos(angle) * force + (Math.random() - 0.5) * 12,
                    vy: Math.sin(angle) * force + (Math.random() - 0.5) * 12,
                    size: isRect ? 0 : Math.random() * 12 + 3, 
                    w: isRect ? Math.random() * cellW + 2 : 0,
                    h: isRect ? Math.random() * cellH + 2 : 0,
                    color: shardColors[Math.floor(Math.random() * shardColors.length)],
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.8,
                    alpha: 1,
                    type: 'shard',
                    life: 1,
                    decay: 0, 
                    gravity: 0.5 + Math.random() * 0.3, 
                    friction: 0.985,
                    bounciness: 0.4 + Math.random() * 0.4,
                    grounded: false
                });
                shardCount++;
            }
        }

        // 2. INITIAL FLASH
        particles.push({
            x: 0, y: 0, targetX: 0, targetY: 0, vx: 0, vy: 0, size: 0, color: '#fff', rotation: 0, rotationSpeed: 0,
            alpha: 1, type: 'flash', life: 1, decay: 0.05, w: width, h: height
        });

        // 3. BLAST RING
        for(let i=0; i<360; i+=5) {
             const angle = (i * Math.PI) / 180;
             particles.push({
                x: originX,
                y: originY,
                targetX: originX, targetY: originY,
                vx: Math.cos(angle) * 35,
                vy: Math.sin(angle) * 35,
                size: Math.random() * 3 + 1,
                color: '#fff',
                rotation: 0, rotationSpeed: 0,
                alpha: 1,
                type: 'spark',
                life: 1,
                decay: 0.03,
                gravity: 0.1,
                friction: 0.9
             });
        }
    };

    init();

    let frame = 0;
    let animationId: number;
    let phase = 'explode'; // explode -> pause -> reconstruct

    const render = () => {
        frame++;
        
        // --- PHASE MANAGEMENT ---
        if (frame > EXPLOSION_LEN && phase === 'explode') {
            phase = 'pause';
        } else if (frame > EXPLOSION_LEN + PAUSE_LEN && phase === 'pause') {
            phase = 'reconstruct';
        } else if (frame > EXPLOSION_LEN + PAUSE_LEN + RECONSTRUCT_LEN) {
            // End Animation
            cancelAnimationFrame(animationId);
            onComplete();
            return;
        }

        ctx.clearRect(0, 0, width, height);
        
        // Background
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, width, height);

        const originX = Math.min(width / 2, 280);
        const originY = 80;

        // --- NEW PARTICLES (Only during explosion phase) ---
        if (phase === 'explode') {
            // Smoke
            if (frame > 2 && frame < 150 && frame % 2 === 0) {
                 particles.push({
                    x: originX + (Math.random() - 0.5) * 150,
                    y: originY + (Math.random() - 0.5) * 150,
                    targetX: 0, targetY: 0, // Smoke doesn't return
                    vx: (Math.random() - 0.5) * 4,
                    vy: (Math.random() - 0.5) * 4 - 0.5,
                    size: Math.random() * 80 + 40,
                    color: Math.random() > 0.6 ? '#0f172a' : '#334155', 
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.01,
                    alpha: 0.6,
                    type: 'smoke',
                    life: 1,
                    decay: 0.005,
                    gravity: -0.01,
                    friction: 0.96
                 });
            }
        }

        // --- UPDATE & DRAW ---
        particles.forEach((p) => {
            if (p.alpha <= 0) return;

            if (phase === 'reconstruct') {
                // RECONSTRUCTION PHYSICS
                if (p.type === 'shard') {
                    p.grounded = false;

                    if (p.isTextParticle && p.textTargetX !== undefined && p.textTargetY !== undefined) {
                        // Fly to form "NTEC"
                        const dx = p.textTargetX - p.x;
                        const dy = p.textTargetY - p.y;
                        p.x += dx * 0.08; 
                        p.y += dy * 0.08;
                        p.rotation += (0 - p.rotation) * 0.1;
                        p.color = '#fff'; // Turn white for text
                        p.alpha = Math.min(p.alpha + 0.05, 1);
                        
                        // Shrink slightly to look like tight bricks
                        if (p.w) p.w = p.w * 0.95 + 4 * 0.05;
                        if (p.h) p.h = p.h * 0.95 + 4 * 0.05;

                    } else {
                        // Excess particles: Orbit or form a cloud
                        // "other white bricks reconstructing" - make them white too but transparent
                        const centerX = width/2;
                        const centerY = height/2;
                        const dx = p.x - centerX;
                        const dy = p.y - centerY;
                        const angle = Math.atan2(dy, dx);
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        
                        // Spiral in slightly then hold
                        const targetDist = 200 + Math.sin(frame * 0.05 + p.x) * 50;
                        const newDist = dist * 0.95 + targetDist * 0.05;
                        const newAngle = angle + 0.02;

                        p.x = centerX + Math.cos(newAngle) * newDist;
                        p.y = centerY + Math.sin(newAngle) * newDist;
                        
                        p.color = '#e2e8f0';
                        p.alpha = 0.3; // Fainter than text
                        p.rotation += 0.05;
                    }
                } else {
                    // Smoke fades out
                    p.alpha -= 0.05;
                }
            } 
            else {
                // EXPLOSION PHYSICS
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.gravity !== undefined) p.vy += p.gravity;
                if (p.friction !== undefined) {
                    p.vx *= p.friction;
                    p.vy *= p.friction;
                }

                if (p.type === 'shard' && !p.grounded) {
                    if (p.y + (p.h || p.size) > height) {
                        p.y = height - (p.h || p.size);
                        p.vy *= -p.bounciness!;
                        p.vx *= 0.8; 
                        if (Math.abs(p.vy) < 1.5 && Math.abs(p.vx) < 1.5) p.grounded = true;
                    }
                    if (p.x < 0 || p.x > width) {
                        p.vx *= -0.8;
                        p.x = Math.max(0, Math.min(width, p.x));
                    }
                }
                
                p.rotation += p.rotationSpeed;
                p.alpha -= p.decay;
            }

            // Render
            ctx.save();
            
            if (p.type === 'flash') {
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                ctx.fillRect(0, 0, width, height);
                if(p.alpha < 0.9 && phase === 'explode') {
                   ctx.fillStyle = `rgba(239, 68, 68, ${p.alpha * 0.4})`;
                   ctx.fillRect(0, 0, width, height); 
                }
            } 
            else {
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.globalAlpha = Math.max(0, p.alpha);

                if (p.type === 'shard') {
                    ctx.fillStyle = p.color;
                    // Glow during reconstruct
                    if (phase === 'reconstruct' && p.isTextParticle) {
                         ctx.shadowBlur = 8;
                         ctx.shadowColor = 'rgba(255,255,255,0.6)';
                    }

                    if (p.w && p.h) {
                        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
                    } else {
                         ctx.beginPath();
                         ctx.moveTo(-p.size, -p.size);
                         ctx.lineTo(p.size, 0);
                         ctx.lineTo(0, p.size);
                         ctx.closePath();
                         ctx.fill();
                    }
                } else if (p.type === 'smoke') {
                    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
                    grad.addColorStop(0, `rgba(15, 23, 42, ${p.alpha})`); 
                    grad.addColorStop(1, `rgba(15, 23, 42, 0)`);
                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                    ctx.fill();
                } else if (p.type === 'spark') {
                    ctx.fillStyle = p.color;
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = p.color;
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size, 0, Math.PI*2);
                    ctx.fill();
                }
            }
            ctx.restore();
        });

        // Final White Flash at end
        if (phase === 'reconstruct') {
             const progress = (frame - (EXPLOSION_LEN + PAUSE_LEN)) / RECONSTRUCT_LEN;
             if (progress > 0.85) {
                 const flashAlpha = (progress - 0.85) * 6.6; // 0 to 1 quickly
                 ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha})`;
                 ctx.fillRect(0, 0, width, height);
             }
        }

        animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-[10000] bg-black cursor-none"
    />
  );
};

export default DestroyerAnimation;
