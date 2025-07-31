import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, User, ArrowRight, Star, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

const featuredPosts = [
  {
    id: 1,
    title: "The Future of Large Language Models: GPT-5 and Beyond",
    excerpt: "Exploring the next generation of AI language models and their potential impact on society, business, and technology.",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    date: "2 days ago",
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    featured: true,
    trending: true
  },
  {
    id: 2,
    title: "Building Ethical AI: A Comprehensive Guide",
    excerpt: "Learn how to develop AI systems that are fair, transparent, and beneficial for all stakeholders.",
    author: "Prof. Michael Rodriguez",
    readTime: "12 min read",
    date: "5 days ago",
    category: "AI Ethics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    featured: true
  },
  {
    id: 3,
    title: "Computer Vision Revolution: Real-World Applications",
    excerpt: "Discover how computer vision is transforming industries from healthcare to autonomous vehicles.",
    author: "Dr. Emily Watson",
    readTime: "10 min read",
    date: "1 week ago",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    featured: true
  }
];

export function FeaturedPostsSection() {
  return (
    <section className="py-20 relative">
      <div className="morphing-bg opacity-30" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-400/30">
            <Star className="w-4 h-4 mr-2" />
            Featured Content
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Featured AI Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and impactful articles on artificial intelligence, 
            machine learning, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full backdrop-blur-sm">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={featuredPosts[0].image} 
                  alt={featuredPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                {featuredPosts[0].trending && (
                  <Badge className="absolute top-4 left-4 bg-red-500/90 text-white border-red-400">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                )}
                
                <Badge className="absolute top-4 right-4 bg-blue-500/90 text-white border-blue-400">
                  {featuredPosts[0].category}
                </Badge>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPosts[0].readTime}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Side Featured Posts */}
          <div className="space-y-8">
            {featuredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    
                    <Badge className="absolute top-3 right-3 bg-blue-500/90 text-white border-blue-400 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 glow-blue"
          >
            View All Featured Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}