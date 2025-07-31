import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  Brain, 
  Eye, 
  Cpu, 
  Bot, 
  Shield, 
  Zap, 
  Database, 
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Machine Learning",
    description: "Algorithms, models, and techniques for automated learning",
    icon: Brain,
    count: "120 articles",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    id: 2,
    name: "Computer Vision",
    description: "Image recognition, object detection, and visual AI",
    icon: Eye,
    count: "85 articles",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30"
  },
  {
    id: 3,
    name: "Deep Learning",
    description: "Neural networks, transformers, and advanced architectures",
    icon: Cpu,
    count: "95 articles",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  },
  {
    id: 4,
    name: "Natural Language Processing",
    description: "Text analysis, language models, and conversational AI",
    icon: Bot,
    count: "78 articles",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30"
  },
  {
    id: 5,
    name: "AI Ethics & Safety",
    description: "Responsible AI development and deployment practices",
    icon: Shield,
    count: "45 articles",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30"
  },
  {
    id: 6,
    name: "AI in Business",
    description: "Enterprise applications and AI transformation strategies",
    icon: Zap,
    count: "67 articles",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30"
  },
  {
    id: 7,
    name: "Data Science",
    description: "Data analysis, visualization, and insights extraction",
    icon: Database,
    count: "92 articles",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30"
  },
  {
    id: 8,
    name: "AI Research",
    description: "Latest breakthroughs and academic developments",
    icon: Users,
    count: "56 articles",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-20 relative dark-grid-pattern">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Explore Topics
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            AI Knowledge Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive deep into specific areas of artificial intelligence. From machine learning 
            fundamentals to cutting-edge research, find the topics that interest you most.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700/50 hover:${category.borderColor} transition-all duration-500 hover:scale-105 cursor-pointer h-full backdrop-blur-sm`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative p-8">
                    <div className={`w-16 h-16 rounded-2xl ${category.bgColor} ${category.borderColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 text-gradient-to-r ${category.color.replace('from-', 'text-').replace(' to-', '-500 group-hover:text-').replace('-500', '-400')}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`${category.borderColor} text-gray-300 text-xs`}
                      >
                        {category.count}
                      </Badge>
                      
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Popular Tags</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Neural Networks", "GPT", "Computer Vision", "Reinforcement Learning",
              "MLOps", "Transformers", "AI Ethics", "Chatbots", "Automation",
              "Data Analysis", "TensorFlow", "PyTorch", "OpenAI", "Research"
            ].map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="outline"
                  className="px-4 py-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                >
                  #{tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}