import { motion } from "framer-motion";
import { Hexagon, Star } from "lucide-react";
import { floatingElementAnimation, floatingElementTransition } from "../constants/animations";

export function AnimatedBackgroundElements() {
  return (
    <motion.div className="absolute inset-0">
      {/* Large floating elements */}
      <motion.div 
        className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        animate={floatingElementAnimation}
        transition={floatingElementTransition}
      />
      
      <motion.div 
        className="absolute top-32 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.4, 1],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.6, 1],
          rotate: [0, -180, -360],
          x: [0, 60, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Hexagon className="w-8 h-8 text-blue-400/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{ 
          rotate: [0, -360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Star className="w-6 h-6 text-cyan-400/40" />
      </motion.div>
    </motion.div>
  );
}