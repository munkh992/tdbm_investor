import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Brain, 
  Cpu, 
  Zap, 
  Network, 
  Database,
  Bot,
  Code,
  Sparkles
} from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'icon' | 'dot' | 'ring' | 'pulse';
  icon?: any;
  color: string;
  opacity: number;
}

const aiIcons = [Brain, Cpu, Zap, Network, Database, Bot, Code, Sparkles];

const colors = [
  'rgba(59, 130, 246, 0.6)',   // blue
  'rgba(139, 92, 246, 0.6)',   // purple
  'rgba(6, 182, 212, 0.6)',    // cyan
  'rgba(16, 185, 129, 0.6)',   // emerald
  'rgba(245, 158, 11, 0.6)',   // amber
  'rgba(236, 72, 153, 0.6)',   // pink
  'rgba(99, 102, 241, 0.6)',   // indigo
  'rgba(34, 197, 94, 0.6)'     // green
];

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newParticles: Particle[] = [];
    
    // Create different types of particles
    for (let i = 0; i < 25; i++) {
      const particleTypes = ['icon', 'dot', 'ring', 'pulse'];
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)] as Particle['type'];
      
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        type,
        icon: type === 'icon' ? aiIcons[Math.floor(Math.random() * aiIcons.length)] : null,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      pointerEvents: 'none' as const,
    };

    switch (particle.type) {
      case 'icon':
        const IconComponent = particle.icon;
        return (
          <motion.div
            key={particle.id}
            style={baseStyle}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, particle.opacity, 0],
              scale: [0, 1, 0.8, 1, 0],
              rotate: [0, 180, 360],
              x: [0, Math.sin(particle.id) * 50, 0],
              y: [0, Math.cos(particle.id) * 30, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm"
              style={{ backgroundColor: particle.color }}
            >
              <IconComponent className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        );

      case 'dot':
        return (
          <motion.div
            key={particle.id}
            style={baseStyle}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, particle.opacity, particle.opacity * 0.5, 0],
              scale: [0, 1, 1.5, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, -(Math.random() * 100 + 50)],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <div 
              className="rounded-full blur-sm"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size}px ${particle.color}`
              }}
            />
          </motion.div>
        );

      case 'ring':
        return (
          <motion.div
            key={particle.id}
            style={baseStyle}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, particle.opacity, 0],
              scale: [0, 1, 2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              className="rounded-full border-2"
              style={{
                width: particle.size * 1.5,
                height: particle.size * 1.5,
                borderColor: particle.color,
                boxShadow: `0 0 ${particle.size}px ${particle.color}`
              }}
            />
          </motion.div>
        );

      case 'pulse':
        return (
          <motion.div
            key={particle.id}
            style={baseStyle}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, particle.opacity, particle.opacity, 0],
              scale: [0, 0.5, 1, 1.5, 0],
            }}
            transition={{
              duration: particle.duration * 0.5,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              }}
              animate={{
                boxShadow: [
                  `0 0 0px ${particle.color}`,
                  `0 0 ${particle.size * 2}px ${particle.color}`,
                  `0 0 0px ${particle.color}`
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map(renderParticle)}
      
      {/* Interactive Mouse Follower Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`mouse-${i}`}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            opacity: [0.8, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Floating AI Energy Lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              width: '200px',
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: [0, 300, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Ambient AI Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}