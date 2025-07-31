import { motion, MotionValue } from "motion/react";
import { TrendingUp, Globe, Shield, Award } from "lucide-react";

interface InvestorHeroSectionProps {
  parallaxY: MotionValue<number>;
}

export function InvestorHeroSection({ parallaxY }: InvestorHeroSectionProps) {
  const stats = [
    { icon: Globe, value: "50+", label: "Global Banks", color: "text-blue-400" },
    { icon: TrendingUp, value: "$2.5T", label: "Assets Under Management", color: "text-slate-400" },
    { icon: Shield, value: "AAA", label: "Credit Rating", color: "text-green-400" },
    { icon: Award, value: "25+", label: "Years Experience", color: "text-purple-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: parallaxY }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-500/20 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-slate-500/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Shield className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium text-sm tracking-wide">
              GLOBAL FINANCIAL LEADERSHIP
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            <span className="block text-white mb-4">Of</span>
            <span className="block bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500 bg-clip-text text-transparent">
              Investor Relations
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Connecting global financial institutions with transparent reporting, 
            strategic insights, and comprehensive investor resources across international markets.
          </motion.p>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <motion.div
                  key={index}
                  className="bg-black/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-500 group"
                  whileHover={{ y: -10, scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-slate-500/20 to-blue-500/20 border border-slate-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </motion.div>
                  
                  <motion.div 
                    className="text-3xl font-bold text-white mb-2"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.0)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 10px rgba(59, 130, 246, 0.0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-gray-400 text-sm leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-1/3 left-10 w-32 h-32 border-2 border-blue-500/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity }
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-10 w-24 h-24 border-2 border-slate-500/20 rounded-full"
        animate={{
          rotate: -360,
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity }
        }}
      />
    </section>
  );
}