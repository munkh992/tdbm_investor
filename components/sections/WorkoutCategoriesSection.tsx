import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { 
  Dumbbell, 
  Heart, 
  Zap, 
  Target, 
  Timer, 
  Flame,
  Activity,
  Bike,
  ArrowRight,
  Play
} from "lucide-react";

const workoutCategories = [
  {
    id: 1,
    title: "Strength Training",
    description: "Build muscle and increase power with progressive resistance workouts",
    icon: Dumbbell,
    color: "emerald",
    workouts: 340,
    duration: "20-60 min",
    difficulty: "Beginner to Advanced",
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.5)"
  },
  {
    id: 2,
    title: "HIIT & Cardio",
    description: "High-intensity workouts to boost metabolism and cardiovascular health",
    icon: Heart,
    color: "red",
    workouts: 275,
    duration: "15-45 min",
    difficulty: "Intermediate to Pro",
    gradient: "from-red-500 to-pink-500",
    glowColor: "rgba(239, 68, 68, 0.5)"
  },
  {
    id: 3,
    title: "Functional Fitness",
    description: "Real-world movement patterns for everyday strength and mobility",
    icon: Zap,
    color: "yellow",
    workouts: 190,
    duration: "25-50 min",
    difficulty: "All Levels",
    gradient: "from-yellow-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.5)"
  },
  {
    id: 4,
    title: "Yoga & Flexibility",
    description: "Improve flexibility, balance, and mental clarity through mindful movement",
    icon: Target,
    color: "purple",
    workouts: 220,
    duration: "30-75 min",
    difficulty: "Beginner to Advanced",
    gradient: "from-purple-500 to-indigo-500",
    glowColor: "rgba(139, 92, 246, 0.5)"
  },
  {
    id: 5,
    title: "Quick Workouts",
    description: "Efficient 10-minute routines for busy schedules",
    icon: Timer,
    color: "blue",
    workouts: 150,
    duration: "5-15 min",
    difficulty: "All Levels",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    id: 6,
    title: "Fat Burn",
    description: "Targeted workouts designed to maximize calorie burn and fat loss",
    icon: Flame,
    color: "orange",
    workouts: 180,
    duration: "20-45 min",
    difficulty: "Beginner to Pro",
    gradient: "from-orange-500 to-red-500",
    glowColor: "rgba(249, 115, 22, 0.5)"
  },
  {
    id: 7,
    title: "Sports Performance",
    description: "Athletic training programs for specific sports and competitions",
    icon: Activity,
    color: "green",
    workouts: 125,
    duration: "30-90 min",
    difficulty: "Intermediate to Pro",
    gradient: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.5)"
  },
  {
    id: 8,
    title: "Cycling & Spinning",
    description: "Indoor cycling workouts with music and motivation",
    icon: Bike,
    color: "indigo",
    workouts: 95,
    duration: "20-60 min",
    difficulty: "All Levels",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.5)"
  }
];

export function WorkoutCategoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
      <div className="absolute inset-0 dark-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-emerald-400 font-medium text-sm tracking-wide">
              CHOOSE YOUR PATH
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-300 to-blue-300 bg-clip-text text-transparent">
            Workout Categories
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect fitness journey with our diverse range of expertly designed workout categories. 
            From strength building to flexibility training, find what moves you.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {workoutCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group relative"
              >
                <div className="relative bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 group-hover:border-gray-600">
                  {/* Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${category.glowColor} 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <motion.div 
                      className={`w-full h-full bg-gradient-to-br ${category.gradient}`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                      {category.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                      {category.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Workouts</span>
                        <span className="text-white font-medium">{category.workouts}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Duration</span>
                        <span className="text-white font-medium">{category.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Level</span>
                        <span className="text-white font-medium">{category.difficulty}</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${category.gradient} hover:opacity-90 border-0 text-white font-medium group-hover:shadow-lg`}
                        size="sm"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Start Training
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              variant="outline"
              className="px-12 py-4 text-lg border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 backdrop-blur-sm"
            >
              <Target className="w-5 h-5 mr-2" />
              View All Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}