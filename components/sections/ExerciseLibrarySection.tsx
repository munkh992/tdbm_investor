import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Play, 
  Clock, 
  Flame, 
  Target, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Users,
  TrendingUp,
  Filter
} from "lucide-react";

const exercises = [
  {
    id: 1,
    name: "Burpee Blast",
    category: "HIIT",
    duration: "45 sec",
    calories: "12-15",
    difficulty: "Advanced",
    rating: 4.8,
    participants: "25.4K",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    description: "Full-body explosive movement combining squat, plank, and jump",
    muscles: ["Full Body", "Core", "Legs", "Arms"],
    equipment: "None",
    trending: true
  },
  {
    id: 2,
    name: "Deadlift Power",
    category: "Strength",
    duration: "60 sec",
    calories: "8-12",
    difficulty: "Intermediate",
    rating: 4.9,
    participants: "18.2K",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    description: "Build posterior chain strength with perfect deadlift form",
    muscles: ["Back", "Glutes", "Hamstrings"],
    equipment: "Barbell",
    trending: false
  },
  {
    id: 3,
    name: "Mountain Climber Sprint",
    category: "Cardio",
    duration: "30 sec",
    calories: "10-14",
    difficulty: "Beginner",
    rating: 4.7,
    participants: "32.1K",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop",
    description: "High-intensity core and cardio exercise in plank position",
    muscles: ["Core", "Shoulders", "Legs"],
    equipment: "None",
    trending: true
  },
  {
    id: 4,
    name: "Yoga Flow Sequence",
    category: "Flexibility",
    duration: "2 min",
    calories: "4-6",
    difficulty: "Beginner",
    rating: 4.6,
    participants: "41.3K",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    description: "Flowing sequence to improve flexibility and mindfulness",
    muscles: ["Full Body", "Core"],
    equipment: "Yoga Mat",
    trending: false
  },
  {
    id: 5,
    name: "Kettlebell Swing",
    category: "Functional",
    duration: "45 sec",
    calories: "9-13",
    difficulty: "Intermediate",
    rating: 4.8,
    participants: "15.7K",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    description: "Dynamic hip hinge movement for power and conditioning",
    muscles: ["Glutes", "Core", "Shoulders"],
    equipment: "Kettlebell",
    trending: true
  },
  {
    id: 6,
    name: "Push-Up Variations",
    category: "Strength",
    duration: "50 sec",
    calories: "6-10",
    difficulty: "Intermediate",
    rating: 4.7,
    participants: "28.9K",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    description: "Progressive push-up variations for upper body strength",
    muscles: ["Chest", "Arms", "Core"],
    equipment: "None",
    trending: false
  }
];

const categories = ["All", "HIIT", "Strength", "Cardio", "Flexibility", "Functional"];

export function ExerciseLibrarySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredExercises = selectedCategory === "All" 
    ? exercises 
    : exercises.filter(exercise => exercise.category === selectedCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredExercises.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredExercises.length / 3)) % Math.ceil(filteredExercises.length / 3));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "from-green-500 to-emerald-500";
      case "Intermediate": return "from-yellow-500 to-orange-500";
      case "Advanced": return "from-red-500 to-pink-500";
      default: return "from-blue-500 to-purple-500";
    }
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-900/10 to-transparent" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-400 font-medium text-sm tracking-wide">
              EXERCISE LIBRARY
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Master Every Move
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our comprehensive exercise library with step-by-step video guides, 
            form tips, and progressive variations for every fitness level.
          </p>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400 text-white shadow-lg"
                    : "border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Exercise Carousel */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-black/60 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-white hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20">
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-black/60 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-white hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Exercise Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={selectedCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredExercises.slice(currentSlide * 3, (currentSlide + 1) * 3).map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
              >
                {/* Trending Badge */}
                {exercise.trending && (
                  <motion.div 
                    className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </motion.div>
                )}

                {/* Exercise Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={exercise.image} 
                    alt={exercise.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                    >
                      {exercise.category}
                    </Badge>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {exercise.rating}
                    </div>
                  </div>

                  {/* Exercise Name */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {exercise.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {exercise.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="flex items-center justify-center text-emerald-400 mb-1">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-gray-400">{exercise.duration}</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-red-400 mb-1">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-gray-400">{exercise.calories} cal</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center text-purple-400 mb-1">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="text-xs text-gray-400">{exercise.participants}</div>
                    </div>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="mb-4">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getDifficultyColor(exercise.difficulty)} text-white text-xs font-medium rounded-full`}>
                      {exercise.difficulty}
                    </div>
                  </div>

                  {/* Muscle Groups */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Target Muscles:</div>
                    <div className="flex flex-wrap gap-1">
                      {exercise.muscles.map((muscle) => (
                        <span key={muscle} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Start Exercise
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg"
              className="px-12 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-2xl hover:shadow-blue-500/25"
            >
              <Filter className="w-5 h-5 mr-2" />
              Browse Full Library
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}