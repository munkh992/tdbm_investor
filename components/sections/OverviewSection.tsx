import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Zap } from "lucide-react";

export function OverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 dark-grid-pattern relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            What Is Digital Transformation in Banking?
          </motion.span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Digital transformation in banking represents a fundamental shift in how financial institutions operate, 
              deliver services, and interact with customers. It involves integrating cutting-edge technologies 
              like artificial intelligence, cloud computing, and mobile platforms to create seamless, 
              efficient, and personalized banking experiences.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              This transformation goes beyond simple digitization—it reimagines traditional banking processes, 
              enhances security measures, and opens new revenue streams while meeting evolving customer 
              expectations in an increasingly digital world.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative w-80 h-80 bg-gradient-to-br from-blue-900/30 to-black rounded-3xl flex items-center justify-center border border-blue-700/30 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto relative"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <TrendingUp className="w-16 h-16 text-white" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-50 blur-md"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Orbiting elements */}
                <motion.div 
                  className="absolute top-8 right-8 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <BarChart3 className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 left-8 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}