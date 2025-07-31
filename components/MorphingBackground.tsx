import { motion } from "framer-motion";

export function MorphingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
             radial-gradient(circle at 60% 60%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
            `radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 60% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Animated mesh grid */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0 0', '50px 50px', '0 0']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}