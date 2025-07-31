import { motion, MotionValue, useInView } from "motion/react";
import { Button } from "../ui/button";
import { Play, Brain, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { TypingAnimation } from "../TypingAnimation";

interface HeroSectionProps {
  heroY: MotionValue<number>;
  bgY: MotionValue<number>;
}

export function HeroSection({ heroY, bgY }: HeroSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Brand Logo */}
          <motion.div 
            className="flex items-center justify-center mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.5)",
                    "0 0 60px rgba(139, 92, 246, 0.5)",
                    "0 0 30px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-50 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <motion.span 
              className="ml-4 text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AI Insights
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Discover the
            </span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Future of AI
            </motion.span>
          </motion.h1>

          {/* Typing Animation Subtitle */}
          <motion.div 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <TypingAnimation 
              text="Your comprehensive hub for AI insights, cutting-edge research, and expert analysis. Stay ahead of the artificial intelligence revolution."
              speed={50}
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore AI Content
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 backdrop-blur-sm"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Latest Research
              </Button>
            </motion.div>
          </motion.div>

          {/* Live Stats Dashboard */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.div 
              className="bg-black/40 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-3xl font-bold text-blue-400 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2,500+
              </motion.div>
              <div className="text-gray-300 text-sm">AI Articles</div>
              <div className="mt-2 flex items-center text-blue-400 text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15% this month
              </div>
            </motion.div>

            <motion.div 
              className="bg-black/40 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-3xl font-bold text-purple-400 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                150K+
              </motion.div>
              <div className="text-gray-300 text-sm">Monthly Readers</div>
              <div className="mt-2 flex items-center text-purple-400 text-xs">
                <Brain className="w-3 h-3 mr-1" />
                AI enthusiasts
              </div>
            </motion.div>

            <motion.div 
              className="bg-black/40 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-3xl font-bold text-cyan-400 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                8
              </motion.div>
              <div className="text-gray-300 text-sm">AI Categories</div>
              <div className="mt-2 flex items-center text-cyan-400 text-xs">
                <Sparkles className="w-3 h-3 mr-1" />
                Comprehensive coverage
              </div>
            </motion.div>

            <motion.div 
              className="bg-black/40 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-green-400 mb-2">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour12: false, 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
              <div className="text-gray-300 text-sm">Live Updates</div>
              <div className="mt-2 flex items-center text-green-400 text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1" />
                Real-time insights
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-32 h-32 border-2 border-blue-500/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-purple-500/20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity }
        }}
      />
    </section>
  );
}