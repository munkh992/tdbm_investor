import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { PerformanceChart } from "../PerformanceChart";
import { AnimatedCounter } from "../AnimatedCounter";
import { AnimatedProgressRing } from "../AnimatedProgressRing";
import { containerVariants, itemVariants } from "../../constants/animations";
import { performanceStats } from "../../constants/data";

export function PerformanceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Flame className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.h2 
              className="text-4xl text-white"
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(6, 182, 212, 0.7)",
                  "0 0 20px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Performance Metrics
            </motion.h2>
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <Flame className="w-8 h-8 text-blue-400" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real-world performance improvements from digital transformation initiatives
          </motion.p>
        </motion.div>

        <PerformanceChart />

        {/* Enhanced Performance Stats with Progress Rings */}
        <motion.div 
          className="mt-16 grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {performanceStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: `0 20px 40px -10px ${stat.color}40`
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{ background: `linear-gradient(45deg, ${stat.color}20, transparent)` }}
                animate={{
                  background: [
                    `linear-gradient(45deg, ${stat.color}20, transparent)`,
                    `linear-gradient(135deg, ${stat.color}30, transparent)`,
                    `linear-gradient(45deg, ${stat.color}20, transparent)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <AnimatedProgressRing
                    percentage={stat.percentage}
                    size={80}
                    strokeWidth={6}
                    color={stat.color}
                    glowColor={stat.color}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </AnimatedProgressRing>
                </motion.div>
                
                <AnimatedCounter 
                  end={stat.percentage} 
                  suffix="%" 
                  className="text-2xl mb-2"
                  style={{ color: stat.color }}
                />
                
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle, ${stat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}