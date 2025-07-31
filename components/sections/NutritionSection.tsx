import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Apple, 
  Utensils, 
  BarChart3, 
  Droplets,
  Flame,
  Heart,
  Brain,
  Shield,
  ChefHat,
  Calculator,
  ArrowRight,
  PlayCircle
} from "lucide-react";

const nutritionPlans = [
  {
    id: 1,
    name: "Muscle Building",
    description: "High-protein meal plans designed to support muscle growth and recovery",
    calories: "2800-3200",
    protein: "180g+",
    icon: Apple,
    color: "emerald",
    gradient: "from-emerald-500 to-green-500",
    meals: ["Protein-packed breakfast", "Pre-workout fuel", "Post-workout recovery", "Balanced dinner"]
  },
  {
    id: 2,
    name: "Fat Loss",
    description: "Calorie-controlled nutrition for sustainable weight loss and body composition",
    calories: "1800-2200",
    protein: "120g+",
    icon: Flame,
    color: "red",
    gradient: "from-red-500 to-pink-500",
    meals: ["Metabolism booster", "Lean lunch", "Healthy snacks", "Light dinner"]
  },
  {
    id: 3,
    name: "Performance",
    description: "Optimized nutrition for athletic performance and endurance training",
    calories: "2500-3000",
    protein: "150g+",
    icon: BarChart3,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    meals: ["Energy breakfast", "Pre-training fuel", "Recovery nutrition", "Performance dinner"]
  },
  {
    id: 4,
    name: "Wellness",
    description: "Balanced nutrition focused on overall health and mental well-being",
    calories: "2000-2400",
    protein: "100g+",
    icon: Heart,
    color: "purple",
    gradient: "from-purple-500 to-indigo-500",
    meals: ["Mindful breakfast", "Balanced lunch", "Nutrient snacks", "Wholesome dinner"]
  }
];

const nutritionFeatures = [
  {
    icon: ChefHat,
    title: "Chef-Designed Recipes",
    description: "Delicious meals created by professional chefs and nutritionists"
  },
  {
    icon: Calculator,
    title: "Macro Tracking",
    description: "Precise tracking of calories, proteins, carbs, and fats"
  },
  {
    icon: Brain,
    title: "AI Meal Planning",
    description: "Personalized meal plans based on your preferences and goals"
  },
  {
    icon: Shield,
    title: "Allergy Safe",
    description: "Customizable plans for dietary restrictions and allergies"
  }
];

export function NutritionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/10 to-transparent" />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-green-400 font-medium text-sm tracking-wide">
              NUTRITION & WELLNESS
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-300 to-emerald-300 bg-clip-text text-transparent">
            Fuel Your Success
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the power of proper nutrition with personalized meal plans, macro tracking, 
            and expert guidance to complement your fitness journey.
          </p>
        </motion.div>

        {/* Nutrition Plans Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {nutritionPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group relative"
              >
                <div className="relative bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 h-full overflow-hidden transition-all duration-500 group-hover:border-gray-600">
                  {/* Glow Effect */}
                  <motion.div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${plan.gradient}/10`}
                  />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                      {plan.description}
                    </p>
                    
                    {/* Nutrition Stats */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500 flex items-center">
                          <Flame className="w-3 h-3 mr-1" />
                          Daily Calories
                        </span>
                        <span className="text-white font-medium">{plan.calories}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500 flex items-center">
                          <Utensils className="w-3 h-3 mr-1" />
                          Protein Target
                        </span>
                        <span className="text-white font-medium">{plan.protein}</span>
                      </div>
                    </div>
                    
                    {/* Sample Meals */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Sample Meals
                      </h4>
                      <div className="space-y-2">
                        {plan.meals.slice(0, 2).map((meal, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                            {meal}
                          </div>
                        ))}
                        <div className="text-xs text-gray-500">+{plan.meals.length - 2} more meals</div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 border-0 text-white font-medium text-sm`}
                        size="sm"
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />
                        View Plan
                      </Button>
                    </motion.div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {nutritionFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center group"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-green-400/50 transition-all duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <IconComponent className="w-10 h-10 text-green-400" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Hydration Reminder */}
        <motion.div 
          className="bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Droplets className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Stay Hydrated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Proper hydration is crucial for optimal performance and recovery. 
            Track your daily water intake and get personalized hydration reminders.
          </p>
          
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2.5L</div>
              <div className="text-sm text-gray-400">Daily Target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">8</div>
              <div className="text-sm text-gray-400">Glasses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">24/7</div>
              <div className="text-sm text-gray-400">Reminders</div>
            </div>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 shadow-lg"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Start Hydration Tracking
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}