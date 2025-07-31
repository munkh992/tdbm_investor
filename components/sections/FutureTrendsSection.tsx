import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../constants/animations";
import { futureTrends } from "../../constants/data";

export function FutureTrendsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-950 relative overflow-hidden">
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
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            What's Next in Banking?
          </motion.span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced animated timeline */}
            <motion.div 
              className="absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2 hidden lg:block rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ transformOrigin: "left" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />
            </motion.div>
            
            <motion.div 
              className="grid lg:grid-cols-5 gap-8 lg:gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {futureTrends.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center relative group"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -15,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: `0 0 30px ${item.colors[0]}80`
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-50"
                      style={{
                        background: `linear-gradient(45deg, ${item.colors[0]}, ${item.colors[1]})`
                      }}
                      animate={{
                        background: [
                          `linear-gradient(45deg, ${item.colors[0]}, ${item.colors[1]})`,
                          `linear-gradient(225deg, ${item.colors[1]}, ${item.colors[0]})`,
                          `linear-gradient(45deg, ${item.colors[0]}, ${item.colors[1]})`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <motion.div
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10"
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50 relative overflow-hidden group-hover:border-gray-600/70 transition-all duration-300"
                    whileHover={{ 
                      boxShadow: `0 20px 40px -10px ${item.colors[0]}40`
                    }}
                  >
                    {/* Hover gradient effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`
                      }}
                    />
                    
                    <motion.div 
                      className="text-2xl mb-2"
                      style={{ color: item.colors[0] }}
                      animate={{
                        textShadow: [
                          `0 0 10px ${item.colors[0]}60`,
                          `0 0 20px ${item.colors[1]}80`,
                          `0 0 10px ${item.colors[0]}60`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.year}
                    </motion.div>
                    
                    <div className="text-lg text-gray-300 mb-2 relative z-10 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}