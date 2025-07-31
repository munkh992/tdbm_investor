import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { containerVariants, itemVariants } from "../../constants/animations";
import { benefits } from "../../constants/data";

export function BenefitsSection() {
  const leftBenefits = benefits.slice(0, 3);
  const rightBenefits = benefits.slice(3);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-950 relative">
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
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            Why Digital Transformation Matters
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
              {leftBenefits.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-blue-900/50 border border-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <Check className="w-5 h-5 text-blue-400 relative z-10" />
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
              {rightBenefits.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-blue-900/50 border border-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <Check className="w-5 h-5 text-blue-400 relative z-10" />
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