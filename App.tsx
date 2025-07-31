import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { NavigationBar } from "./components/sections/NavigationBar";
import { InvestorHeroSection } from "./components/sections/InvestorHeroSection";
import { BankLinksSection } from "./components/sections/BankLinksSection";
import { InformationSection } from "./components/sections/InformationSection";
import { InvestorFooter } from "./components/sections/InvestorFooter";
import { LuxuryParticles } from "./components/LuxuryParticles";
import tdbLogo from 'figma:asset/b6a360793701f704da96072768f6f64c78b7230e.png';

// Premium TDB Logo Watermark Component with Actual Logo
const TDBLogoWatermark = () => (
  <motion.div 
    className="fixed inset-0 flex items-center justify-center pointer-events-none z-5"
    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    transition={{ duration: 3, ease: "easeOut" }}
  >
    {/* Enhanced Radial Green Glow Behind Logo */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{
        scale: [1, 1.08, 1.04, 1],
        opacity: [0.1, 0.16, 0.12, 0.1],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div 
        className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 77, 0, 0.15) 0%, rgba(0, 26, 51, 0.1) 40%, rgba(0, 13, 26, 0.05) 70%, transparent 90%)',
          filter: 'blur(80px)'
        }}
      />
    </motion.div>

    {/* Main TDB Logo - Large and Prominent */}
    <motion.div
      className="relative z-10 flex items-center justify-center"
      style={{
        width: '65vw',
        height: 'auto',
        maxWidth: '750px',
        minWidth: '400px'
      }}
      animate={{
        scale: [1, 1.025, 0.99, 1],
        rotate: [0, 0.8, -0.5, 0],
        y: [0, -5, 3, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Primary Logo with Enhanced Effects */}
      <motion.img 
        src={tdbLogo} 
        alt="Trade & Development Bank of Mongolia"
        className="w-full h-auto object-contain"
        style={{
          opacity: 0.35,
          mixBlendMode: 'overlay',
        }}
        animate={{
          filter: [
            'drop-shadow(0 0 50px rgba(0, 77, 0, 0.4)) drop-shadow(0 0 100px rgba(0, 26, 51, 0.3)) brightness(1.15) contrast(1.08)',
            'drop-shadow(0 0 70px rgba(0, 77, 0, 0.5)) drop-shadow(0 0 140px rgba(0, 26, 51, 0.35)) brightness(1.2) contrast(1.12)',
            'drop-shadow(0 0 40px rgba(0, 77, 0, 0.35)) drop-shadow(0 0 80px rgba(0, 26, 51, 0.25)) brightness(1.1) contrast(1.05)',
            'drop-shadow(0 0 50px rgba(0, 77, 0, 0.4)) drop-shadow(0 0 100px rgba(0, 26, 51, 0.3)) brightness(1.15) contrast(1.08)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced Soft Light Layer */}
      <motion.img 
        src={tdbLogo} 
        alt="Trade & Development Bank of Mongolia"
        className="absolute inset-0 w-full h-auto object-contain"
        style={{
          opacity: 0.22,
          mixBlendMode: 'soft-light',
        }}
        animate={{
          filter: [
            'drop-shadow(0 0 30px rgba(0, 77, 0, 0.5)) brightness(1.25)',
            'drop-shadow(0 0 45px rgba(0, 77, 0, 0.6)) brightness(1.3)',
            'drop-shadow(0 0 25px rgba(0, 77, 0, 0.4)) brightness(1.2)',
            'drop-shadow(0 0 30px rgba(0, 77, 0, 0.5)) brightness(1.25)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Premium Luminous Ring Enhancement */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '2px solid rgba(0, 77, 0, 0.25)',
          background: 'radial-gradient(circle, transparent 60%, rgba(0, 77, 0, 0.08) 80%, transparent 100%)'
        }}
        animate={{
          scale: [1, 1.08, 0.96, 1],
          opacity: [0.3, 0.6, 0.4, 0.3],
          boxShadow: [
            '0 0 60px rgba(0, 77, 0, 0.3), inset 0 0 60px rgba(0, 77, 0, 0.15)',
            '0 0 90px rgba(0, 77, 0, 0.45), inset 0 0 90px rgba(0, 77, 0, 0.2)',
            '0 0 45px rgba(0, 77, 0, 0.25), inset 0 0 45px rgba(0, 77, 0, 0.12)',
            '0 0 60px rgba(0, 77, 0, 0.3), inset 0 0 60px rgba(0, 77, 0, 0.15)'
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Secondary Ring for Extra Depth */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '1px solid rgba(0, 26, 51, 0.2)',
          transform: 'scale(1.1)'
        }}
        animate={{
          scale: [1.1, 1.18, 1.05, 1.1],
          opacity: [0.2, 0.4, 0.25, 0.2],
          rotate: [0, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.div>

    {/* Enhanced Corner Accent Logos */}
    <motion.div
      className="absolute top-[12%] right-[8%] opacity-[0.12]"
      style={{ width: '180px', height: 'auto' }}
      animate={{
        y: [-15, 20, -10, -15],
        x: [-8, 15, -5, -8],
        rotate: [0, -1.2, 0.8, 0],
        scale: [1, 1.08, 0.95, 1]
      }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <img 
        src={tdbLogo} 
        alt="TDB Logo"
        className="w-full h-auto object-contain"
        style={{
          mixBlendMode: 'overlay',
          filter: 'drop-shadow(0 0 25px rgba(0, 77, 0, 0.4)) brightness(1.2)'
        }}
      />
    </motion.div>

    <motion.div
      className="absolute bottom-[12%] left-[8%] opacity-[0.1]"
      style={{ width: '140px', height: 'auto' }}
      animate={{
        y: [18, -22, 12, 18],
        x: [12, -18, 8, 12],
        rotate: [0, 1.5, -1, 0],
        scale: [1, 1.12, 0.92, 1]
      }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 5
      }}
    >
      <img 
        src={tdbLogo} 
        alt="TDB Logo"
        className="w-full h-auto object-contain"
        style={{
          mixBlendMode: 'soft-light',
          filter: 'drop-shadow(0 0 20px rgba(0, 26, 51, 0.5)) brightness(1.25)'
        }}
      />
    </motion.div>

    {/* Premium Floating Mini Logos */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute opacity-[0.08]"
        style={{
          width: '65px',
          height: 'auto',
          top: `${15 + Math.sin(i * 45) * 30}%`,
          left: `${15 + Math.cos(i * 45) * 30}%`,
        }}
        animate={{
          y: [0, -25 - i * 2, 15 + i * 2, 0],
          x: [0, Math.sin(i * 60) * 18, Math.cos(i * 40) * 12, 0],
          rotate: [0, 180 + i * 45, 360, 360 + i * 30],
          scale: [1, 1.15 + i * 0.03, 0.92 - i * 0.02, 1],
        }}
        transition={{
          duration: 30 + i * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 2
        }}
      >
        <img 
          src={tdbLogo} 
          alt="TDB Logo"
          className="w-full h-auto object-contain"
          style={{
            mixBlendMode: 'overlay',
            filter: `drop-shadow(0 0 ${12 + i * 2}px rgba(0, 77, 0, ${0.25 + i * 0.03})) brightness(${1.4 + i * 0.08})`
          }}
        />
      </motion.div>
    ))}

    {/* Central Pulsing Accent */}
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0, 0.1, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 4
      }}
    >
      <div 
        className="w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 77, 0, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
    </motion.div>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Optimized scroll transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.6, 0.4]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Green Banking Background - Production Optimized */}
      
      {/* Primary Gradient Background */}
      <div 
        className="fixed inset-0"
        style={{
          background: 'linear-gradient(135deg, #004d00 0%, #002d1a 25%, #001a33 50%, #001122 75%, #000d1a 100%)'
        }}
      />
      
      {/* Enhanced Depth Layer */}
      <motion.div 
        className="fixed inset-0"
        style={{ 
          background: 'linear-gradient(45deg, rgba(0, 77, 0, 0.2) 0%, transparent 50%, rgba(0, 26, 51, 0.15) 100%)',
          y: bgY 
        }}
      />
      
      {/* Banking Texture Overlay */}
      <motion.div 
        className="fixed inset-0"
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(0, 77, 0, 0.08) 0%, rgba(0, 26, 51, 0.04) 60%, transparent 80%)',
          y: useTransform(scrollYProgress, [0, 1], [0, -30]) 
        }}
      />

      {/* Enhanced TDB Logo Watermark */}
      <motion.div
        style={{ 
          opacity: logoOpacity,
          scale: logoScale
        }}
        className="fixed inset-0 pointer-events-none"
      >
        <TDBLogoWatermark />
      </motion.div>
      
      {/* Professional Grid Pattern */}
      <div className="fixed inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 77, 0, 0.1) 0%, transparent 50%)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            background: 'linear-gradient(45deg, transparent 48%, rgba(0, 77, 0, 0.03) 50%, transparent 52%)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Luxury Floating Particles */}
      <LuxuryParticles />
      
      {/* Optimized Mouse Follower */}
      <motion.div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(0, 77, 0, 0.12) 0%, rgba(0, 26, 51, 0.08) 50%, transparent 80%)',
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          opacity: 0.7
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-20">
        <NavigationBar />
        
        <InvestorHeroSection parallaxY={parallaxY} />
        
        {/* Main Content Grid */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <BankLinksSection />
            <InformationSection />
          </div>
        </div>
        
        <InvestorFooter />
      </div>
      
      {/* Enhanced Ambient Light Effects */}
      
      {/* Primary banking glow */}
      <motion.div 
        className="fixed top-0 left-1/4 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none z-6"
        style={{
          background: 'radial-gradient(circle, rgba(0, 77, 0, 0.12) 0%, rgba(0, 26, 51, 0.08) 50%, transparent 80%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          y: [0, 35, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary banking ambiance */}
      <motion.div 
        className="fixed bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none z-6"
        style={{
          background: 'radial-gradient(circle, rgba(0, 26, 51, 0.1) 0%, rgba(0, 13, 26, 0.06) 50%, transparent 80%)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -25, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />
      
      {/* Central support lighting */}
      <motion.div 
        className="fixed top-1/2 left-1/2 w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none z-6"
        style={{
          background: 'radial-gradient(circle, rgba(0, 77, 0, 0.08) 0%, rgba(0, 26, 51, 0.04) 50%, transparent 80%)',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12
        }}
      />
      
      {/* Professional depth overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-7"
        style={{
          background: 'linear-gradient(to top, rgba(0, 13, 26, 0.3) 0%, transparent 60%, rgba(0, 77, 0, 0.1) 100%)'
        }}
      />
      
      {/* Banking Edge Effects */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-px pointer-events-none z-15"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(0, 77, 0, 0.4) 50%, transparent 100%)'
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="fixed bottom-0 left-0 right-0 h-px pointer-events-none z-15"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(0, 26, 51, 0.5) 50%, transparent 100%)'
        }}
        animate={{
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </div>
  );
}