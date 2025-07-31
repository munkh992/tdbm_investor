import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { containerVariants, itemVariants, pulseVariants } from "../../constants/animations";
import { transformationAreas } from "../../constants/data";

export function TransformationAreasSection() {
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
            transition={{ duration: 6, repeat: Infinity }}
            className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            Core Areas of Transformation
          </motion.span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {transformationAreas.map((item, index) => (
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
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${item.color}-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div 
                    className={`w-16 h-16 bg-${item.color}-900/50 border border-${item.color}-600/30 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    variants={pulseVariants}
                    animate="pulse"
                  >
                    {/* Icon glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-${item.color}-500/20 rounded-full blur-xl`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <item.icon className={`w-8 h-8 text-${item.color}-400 relative z-10`} />
                    </motion.div>
                  </motion.div>
                  
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </CardContent>
                
                {/* Sparkle effect on hover */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}