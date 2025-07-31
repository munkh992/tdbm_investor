import { motion } from "motion/react";
import { useMemo } from "react";

export function LuxuryParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -30, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional luxury elements */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`luxury-${i}`}
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
            y: [100, -100],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating rings */}
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute border border-slate-400/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            rotate: {
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}