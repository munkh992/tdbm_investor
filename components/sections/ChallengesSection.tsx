import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { containerVariants, itemVariants } from "../../constants/animations";
import { challenges } from "../../constants/data";

export function ChallengesSection() {
  const leftChallenges = challenges.slice(0, 3);
  const rightChallenges = challenges.slice(3);

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
            className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            Challenges in Digital Transformation
          </motion.span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {leftChallenges.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-orange-900/50 border border-orange-600/30 rounded-full flex items-center justify-center flex-shrink-0 relative"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, 15, -15, 0],
                      boxShadow: "0 0 20px rgba(251, 146, 60, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-orange-500/30 rounded-full blur-sm"
                    />
                    <AlertTriangle className="w-5 h-5 text-orange-400 relative z-10" />
                  </motion.div>
                  
                  <motion.span 
                    className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {rightChallenges.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-orange-900/50 border border-orange-600/30 rounded-full flex items-center justify-center flex-shrink-0 relative"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: [0, 15, -15, 0],
                      boxShadow: "0 0 20px rgba(251, 146, 60, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-orange-500/30 rounded-full blur-sm"
                    />
                    <AlertTriangle className="w-5 h-5 text-orange-400 relative z-10" />
                  </motion.div>
                  
                  <motion.span 
                    className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}