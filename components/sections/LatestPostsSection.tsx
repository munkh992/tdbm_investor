import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Clock, User, ArrowRight, BookOpen, Calendar } from "lucide-react";

const latestPosts = [
  {
    id: 1,
    title: "Understanding Transformer Architecture: A Deep Dive",
    excerpt: "Explore the revolutionary transformer model that powers modern AI applications like ChatGPT and BERT.",
    author: "Dr. Alex Chen",
    readTime: "15 min read",
    date: "Jan 15, 2025",
    category: "Deep Learning",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tags: ["Transformers", "Neural Networks", "NLP"]
  },
  {
    id: 2,
    title: "Practical Computer Vision with OpenCV and Python",
    excerpt: "Learn to build real-world computer vision applications using OpenCV, from basics to advanced techniques.",
    author: "Sarah Johnson",
    readTime: "12 min read",
    date: "Jan 12, 2025",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    tags: ["OpenCV", "Python", "Image Processing"]
  },
  {
    id: 3,
    title: "The Rise of Multimodal AI: Beyond Text and Images",
    excerpt: "Discover how AI systems are learning to understand and generate content across multiple modalities.",
    author: "Prof. Maria Rodriguez",
    readTime: "10 min read",
    date: "Jan 10, 2025",
    category: "AI Research",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop",
    tags: ["Multimodal", "Research", "Innovation"]
  },
  {
    id: 4,
    title: "Building Responsible AI: Ethics in Practice",
    excerpt: "A comprehensive guide to implementing ethical AI principles in your machine learning projects.",
    author: "Dr. James Wilson",
    readTime: "18 min read",
    date: "Jan 8, 2025",
    category: "AI Ethics",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["Ethics", "Responsible AI", "Governance"]
  },
  {
    id: 5,
    title: "MLOps Best Practices: From Development to Production",
    excerpt: "Learn how to streamline your machine learning workflow with modern MLOps tools and practices.",
    author: "Emily Zhang",
    readTime: "14 min read",
    date: "Jan 5, 2025",
    category: "MLOps",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
    tags: ["MLOps", "DevOps", "Production"]
  },
  {
    id: 6,
    title: "Quantum Machine Learning: The Next Frontier",
    excerpt: "Explore the intersection of quantum computing and machine learning for unprecedented computational power.",
    author: "Dr. David Kumar",
    readTime: "20 min read",
    date: "Jan 3, 2025",
    category: "Quantum AI",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    tags: ["Quantum", "Future Tech", "Research"]
  }
];

export function LatestPostsSection() {
  return (
    <section className="py-20 relative">
      <div className="morphing-bg opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-400/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Fresh Content
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Latest AI Articles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay up-to-date with the latest developments in artificial intelligence, 
            machine learning, and emerging technologies. New articles published weekly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  
                  <Badge className="absolute top-3 right-3 bg-blue-500/90 text-white border-blue-400 text-xs">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline"
                        className="text-xs border-gray-600 text-gray-400"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Author and Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            variant="outline"
            className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Load More Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Never Miss an Update
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest AI insights delivered directly to your inbox. 
            Join 10,000+ AI enthusiasts and professionals.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 glow-blue"
          >
            Subscribe Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}