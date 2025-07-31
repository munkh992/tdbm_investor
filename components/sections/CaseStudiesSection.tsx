import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AnimatedCounter } from "../AnimatedCounter";
import { containerVariants, itemVariants } from "../../constants/animations";
import { caseStudies } from "../../constants/data";

export function CaseStudiesSection() {
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
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            Case Studies &amp; Success Stories
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/80 transition-all duration-500 h-full group backdrop-blur-sm relative overflow-hidden">
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${study.color}40, transparent)`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <CardHeader className="text-center relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden border border-gray-600/30"
                    style={{
                      background: `linear-gradient(135deg, ${study.color}20, ${study.color}10)`
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 15,
                      boxShadow: `0 0 25px ${study.color}60`
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `conic-gradient(from 0deg, ${study.color}, transparent, ${study.color})`
                      }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <study.icon 
                      className="w-8 h-8 relative z-10" 
                      style={{ color: study.color }}
                    />
                  </motion.div>
                  
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center relative z-10">
                  <motion.div className="mb-4">
                    <AnimatedCounter 
                      end={study.percentage} 
                      suffix="%" 
                      className="text-3xl mb-2"
                      style={{ color: study.color }}
                    />
                  </motion.div>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {study.desc}
                  </p>
                </CardContent>
                
                {/* Success indicator */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Star className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}