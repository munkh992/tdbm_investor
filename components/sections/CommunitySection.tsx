import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Users, 
  MessageCircle, 
  Trophy, 
  Target,
  Heart,
  Share2,
  TrendingUp,
  Award,
  Star,
  Calendar,
  MapPin,
  ArrowRight,
  Play
} from "lucide-react";

const communityStats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Members",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageCircle,
    value: "25K+",
    label: "Daily Messages",
    color: "green",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Trophy,
    value: "10K+",
    label: "Challenges Completed",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    color: "purple",
    gradient: "from-purple-500 to-pink-500"
  }
];

const challenges = [
  {
    id: 1,
    title: "30-Day Transformation",
    description: "Complete daily workouts and track your transformation journey",
    participants: 2847,
    duration: "30 days",
    prize: "$500 Prize Pool",
    difficulty: "All Levels",
    startDate: "Jan 15",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    trending: true
  },
  {
    id: 2,
    title: "Cardio King Challenge",
    description: "Push your cardiovascular limits with intense cardio sessions",
    participants: 1523,
    duration: "14 days",
    prize: "Exclusive Badge",
    difficulty: "Intermediate",
    startDate: "Jan 20",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop",
    trending: false
  },
  {
    id: 3,
    title: "Strength Squad",
    description: "Build muscle and strength with progressive training",
    participants: 956,
    duration: "21 days",
    prize: "Personal Training Session",
    difficulty: "Advanced",
    startDate: "Jan 25",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
    trending: false
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8b9?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "The community support here is incredible! I've lost 25 pounds and gained amazing friends.",
    achievement: "Lost 25 lbs"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Marathon Runner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "From couch to marathon in 8 months! The training plans and community motivation made it possible.",
    achievement: "Marathon Finisher"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Yoga Instructor",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Amazing platform for connecting with like-minded fitness enthusiasts. Love the daily challenges!",
    achievement: "Challenge Winner"
  }
];

export function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <motion.div 
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 25,
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-purple-400 font-medium text-sm tracking-wide">
              FITNESS COMMUNITY
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent">
            Join the Movement
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of fitness enthusiasts, share your journey, participate in challenges, 
            and achieve your goals together. Fitness is better with friends.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 text-center hover:border-gray-600 transition-all duration-500">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-3xl font-bold text-white mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Active Challenges */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Active Challenges</h3>
              <p className="text-gray-400">Join ongoing challenges and compete with the community</p>
            </div>
            <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
              View All Challenges
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Trending Badge */}
                {challenge.trending && (
                  <motion.div 
                    className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Hot
                  </motion.div>
                )}

                <div className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden group-hover:border-purple-500/50 transition-all duration-500">
                  {/* Challenge Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={challenge.image} 
                      alt={challenge.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Participants Count */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Users className="w-4 h-4 text-white mr-2" />
                      <span className="text-white text-sm font-medium">{challenge.participants.toLocaleString()}</span>
                    </div>

                    {/* Start Date */}
                    <div className="absolute bottom-4 right-4 bg-purple-500/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                      <Calendar className="w-4 h-4 text-white mr-1" />
                      <span className="text-white text-xs font-medium">{challenge.startDate}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {challenge.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {challenge.description}
                    </p>

                    {/* Challenge Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm">
                        <Target className="w-4 h-4 text-purple-400 mr-2" />
                        <span className="text-gray-300">{challenge.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-gray-300">{challenge.difficulty}</span>
                      </div>
                    </div>

                    {/* Prize */}
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-3 mb-6">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-300 font-medium text-sm">{challenge.prize}</span>
                      </div>
                    </div>

                    {/* Join Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0 text-white font-medium"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Join Challenge
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Testimonials */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real transformations from our amazing community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 hover:border-gray-600 transition-all duration-500"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* User Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <motion.img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="bg-green-500/20 text-green-300 border-green-500/30"
                  >
                    {testimonial.achievement}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Community CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-3xl p-12 backdrop-blur-xl">
            <motion.div 
              className="flex items-center justify-center mb-6"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Connect with like-minded individuals, share your progress, and achieve your fitness goals together. 
              The journey is better when shared!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 border-0 shadow-2xl"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Your Story
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}