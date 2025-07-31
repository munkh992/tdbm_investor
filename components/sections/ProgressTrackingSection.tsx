import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { 
  TrendingUp, 
  Target, 
  Award, 
  Calendar,
  Activity,
  Zap,
  Clock,
  Trophy,
  Flame,
  Heart
} from "lucide-react";
import { AnimatedProgressRing } from "../AnimatedProgressRing";

const progressData = [
  { month: "Jan", workouts: 12, calories: 3200 },
  { month: "Feb", workouts: 18, calories: 4800 },
  { month: "Mar", workouts: 24, calories: 6400 },
  { month: "Apr", workouts: 30, calories: 8000 },
  { month: "May", workouts: 28, calories: 7500 },
  { month: "Jun", workouts: 35, calories: 9200 }
];

const achievements = [
  {
    id: 1,
    title: "First Workout",
    description: "Completed your first workout session",
    icon: Target,
    color: "emerald",
    unlocked: true,
    date: "2 months ago"
  },
  {
    id: 2,
    title: "Week Warrior",
    description: "7 consecutive days of workouts",
    icon: Calendar,
    color: "blue",
    unlocked: true,
    date: "3 weeks ago"
  },
  {
    id: 3,
    title: "Calorie Crusher",
    description: "Burned 5,000+ calories in a month",
    icon: Flame,
    color: "red",
    unlocked: true,
    date: "1 week ago"
  },
  {
    id: 4,
    title: "Strength Legend",
    description: "Complete 50 strength workouts",
    icon: Trophy,
    color: "yellow",
    unlocked: false,
    progress: 75
  },
  {
    id: 5,
    title: "Cardio King",
    description: "200 hours of cardio training",
    icon: Heart,
    color: "pink",
    unlocked: false,
    progress: 45
  },
  {
    id: 6,
    title: "Ultimate Warrior",
    description: "Reach 1 year fitness streak",
    icon: Award,
    color: "purple",
    unlocked: false,
    progress: 20
  }
];

const weeklyStats = [
  { day: "Mon", completed: true, intensity: 85 },
  { day: "Tue", completed: true, intensity: 92 },
  { day: "Wed", completed: true, intensity: 78 },
  { day: "Thu", completed: true, intensity: 95 },
  { day: "Fri", completed: false, intensity: 0 },
  { day: "Sat", completed: false, intensity: 0 },
  { day: "Sun", completed: false, intensity: 0 }
];

export function ProgressTrackingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMetric, setSelectedMetric] = useState("workouts");
  const [animatedStats, setAnimatedStats] = useState({
    totalWorkouts: 0,
    caloriesBurned: 0,
    activeMinutes: 0,
    currentStreak: 0
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedStats({
          totalWorkouts: 147,
          caloriesBurned: 39200,
          activeMinutes: 2840,
          currentStreak: 12
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const getColorByMetric = (metric: string) => {
    switch (metric) {
      case "workouts": return "emerald";
      case "calories": return "red";
      case "minutes": return "blue";
      case "streak": return "purple";
      default: return "emerald";
    }
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-400 font-medium text-sm tracking-wide">
              TRACK YOUR PROGRESS
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
            See Your Growth
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visualize your fitness journey with detailed analytics, achievement tracking, 
            and personalized insights that keep you motivated every step of the way.
          </p>
        </motion.div>

        {/* Main Stats Dashboard */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Key Metrics */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {animatedStats.totalWorkouts}
              </motion.div>
              <div className="text-gray-400 text-sm">Total Workouts</div>
            </motion.div>

            <motion.div 
              className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 hover:border-red-500/50 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-red-400" />
              </div>
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {animatedStats.caloriesBurned.toLocaleString()}
              </motion.div>
              <div className="text-gray-400 text-sm">Calories Burned</div>
            </motion.div>

            <motion.div 
              className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 hover:border-blue-500/50 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.9 }}
              >
                {animatedStats.activeMinutes.toLocaleString()}
              </motion.div>
              <div className="text-gray-400 text-sm">Active Minutes</div>
            </motion.div>

            <motion.div 
              className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <motion.div 
                className="text-3xl font-bold text-white mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1, delay: 1.1 }}
              >
                {animatedStats.currentStreak}
              </motion.div>
              <div className="text-gray-400 text-sm">Day Streak</div>
            </motion.div>
          </div>

          {/* Progress Ring */}
          <div className="flex items-center justify-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <AnimatedProgressRing 
                progress={78} 
                size={200} 
                strokeWidth={8}
                color="emerald"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">78%</div>
                  <div className="text-sm text-gray-400">Monthly Goal</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Weekly Progress */}
        <motion.div 
          className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">This Week's Progress</h3>
          
          <div className="grid grid-cols-7 gap-4">
            {weeklyStats.map((day, index) => (
              <motion.div
                key={day.day}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-sm text-gray-400 mb-3">{day.day}</div>
                
                <motion.div 
                  className={`relative h-32 w-8 mx-auto rounded-full border-2 ${
                    day.completed 
                      ? 'border-emerald-500 bg-gradient-to-t from-emerald-500/30 to-emerald-500/10' 
                      : 'border-gray-600 bg-gray-800/30'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {day.completed && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-full"
                      initial={{ height: 0 }}
                      animate={{ height: `${day.intensity}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    />
                  )}
                  
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    {day.completed ? (
                      <div className="w-4 h-4 bg-emerald-500 rounded-full" />
                    ) : (
                      <div className="w-4 h-4 border-2 border-gray-600 rounded-full" />
                    )}
                  </div>
                </motion.div>
                
                {day.completed && (
                  <div className="text-xs text-emerald-400 mt-8">{day.intensity}%</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <motion.div
                  key={achievement.id}
                  className={`relative bg-black/60 backdrop-blur-xl border rounded-3xl p-6 transition-all duration-500 ${
                    achievement.unlocked 
                      ? 'border-yellow-500/50 hover:border-yellow-400/70' 
                      : 'border-gray-800 hover:border-gray-600'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {achievement.unlocked && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-3xl"
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-br from-yellow-500 to-orange-500' 
                          : 'bg-gray-700'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          achievement.unlocked ? 'text-white' : 'text-gray-400'
                        }`} />
                      </div>
                      
                      {achievement.unlocked ? (
                        <Trophy className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <div className="text-xs text-gray-400">
                          {achievement.progress}%
                        </div>
                      )}
                    </div>
                    
                    <h4 className={`font-bold mb-2 ${
                      achievement.unlocked ? 'text-white' : 'text-gray-400'
                    }`}>
                      {achievement.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {achievement.description}
                    </p>
                    
                    {achievement.unlocked ? (
                      <div className="text-xs text-yellow-400">
                        Unlocked {achievement.date}
                      </div>
                    ) : (
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${achievement.progress}%` } : {}}
                          transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              className="px-12 py-4 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 shadow-2xl hover:shadow-purple-500/25"
            >
              <Activity className="w-5 h-5 mr-2" />
              View Full Analytics
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}