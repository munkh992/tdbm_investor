import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Target, 
  Clock, 
  TrendingUp, 
  Users, 
  Star,
  CheckCircle,
  Zap,
  Award,
  Play,
  ArrowRight
} from "lucide-react";

const fitnessPlans = [
  {
    id: 1,
    name: "Beginner Boost",
    description: "Perfect for those starting their fitness journey with guided workouts and nutrition basics",
    duration: "4 weeks",
    workoutsPerWeek: 3,
    level: "Beginner",
    price: "Free",
    popular: false,
    rating: 4.7,
    users: "12.5K",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    features: [
      "Full body workouts",
      "Nutrition guide",
      "Progress tracking",
      "Video tutorials",
      "24/7 support"
    ],
    gradient: "from-green-500 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.5)"
  },
  {
    id: 2,
    name: "Strength Master",
    description: "Advanced strength training program for serious muscle building and power development",
    duration: "8 weeks",
    workoutsPerWeek: 5,
    level: "Advanced",
    price: "$29/month",
    popular: true,
    rating: 4.9,
    users: "8.3K",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    features: [
      "Progressive overload",
      "Meal planning",
      "1-on-1 coaching",
      "Custom workouts",
      "Recovery protocols"
    ],
    gradient: "from-blue-500 to-purple-500",
    glowColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    id: 3,
    name: "Fat Burn Elite",
    description: "High-intensity program designed for maximum fat loss and metabolic enhancement",
    duration: "6 weeks",
    workoutsPerWeek: 4,
    level: "Intermediate",
    price: "$19/month",
    popular: false,
    rating: 4.8,
    users: "15.7K",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop",
    features: [
      "HIIT workouts",
      "Cardio routines",
      "Fat loss nutrition",
      "Metabolic tracking",
      "Community support"
    ],
    gradient: "from-red-500 to-pink-500",
    glowColor: "rgba(239, 68, 68, 0.5)"
  }
];

export function FitnessPlansSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "from-green-500 to-emerald-500";
      case "Intermediate": return "from-yellow-500 to-orange-500";
      case "Advanced": return "from-red-500 to-pink-500";
      default: return "from-blue-500 to-purple-500";
    }
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      <motion.div 
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-400 font-medium text-sm tracking-wide">
              FITNESS PLANS
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Choose Your Path
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Personalized fitness plans designed by experts to help you achieve your specific goals. 
            From beginner-friendly routines to advanced training programs.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {fitnessPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02
              }}
              className={`group relative ${plan.popular ? 'lg:scale-110 z-10' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 10px 30px rgba(245, 158, 11, 0.3)",
                      "0 10px 40px rgba(245, 158, 11, 0.5)",
                      "0 10px 30px rgba(245, 158, 11, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Most Popular
                </motion.div>
              )}

              <div className="relative bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden h-full transition-all duration-500 group-hover:border-blue-500/50">
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${plan.glowColor} 0%, transparent 70%)`
                  }}
                />
                
                {/* Plan Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 bg-gradient-to-r ${getLevelColor(plan.level)} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {plan.level}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{plan.rating}</span>
                    <span className="text-xs text-gray-300 ml-2">({plan.users})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  {/* Plan Name & Price */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {plan.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{plan.price}</div>
                      {plan.price !== "Free" && (
                        <div className="text-xs text-gray-400">per month</div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Plan Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-gray-300">{plan.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Target className="w-4 h-4 text-emerald-400 mr-2" />
                      <span className="text-gray-300">{plan.workoutsPerWeek}/week</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-center text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 border-0 text-white font-medium py-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Plan
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Active Members</div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>

          <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}