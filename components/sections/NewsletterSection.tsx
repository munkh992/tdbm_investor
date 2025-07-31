import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { 
  Mail, 
  Bell, 
  Gift, 
  Users,
  CheckCircle,
  Sparkles,
  Zap,
  ArrowRight,
  Star
} from "lucide-react";

const newsletterFeatures = [
  {
    icon: Zap,
    title: "Weekly AI Insights",
    description: "Get the latest AI research and trends delivered every Monday"
  },
  {
    icon: Gift,
    title: "Exclusive Content",
    description: "Access to premium AI guides and expert analysis"
  },
  {
    icon: Bell,
    title: "Early Access",
    description: "Be the first to know about new AI breakthroughs and updates"
  },
  {
    icon: Users,
    title: "Community Updates",
    description: "Stay connected with AI researchers and industry leaders"
  }
];

const stats = [
  { number: "25K+", label: "AI Enthusiasts" },
  { number: "95%", label: "Open Rate" },
  { number: "4.8", label: "Rating", icon: Star }
];

export function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");
    setName("");
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/60 backdrop-blur-xl border border-gray-800 rounded-[3rem] overflow-hidden relative">
            {/* Glow Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
              {/* Left Side - Content */}
              <div className="p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1 }}
                >
                  {/* Badge */}
                  <motion.div 
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-blue-400 font-medium text-sm tracking-wide flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI INSIGHTS NEWSLETTER
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Stay Ahead of the AI Revolution
                  </h2>

                  {/* Description */}
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Join thousands of AI professionals getting weekly insights, research updates, 
                    and exclusive analysis delivered to their inbox.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {newsletterFeatures.map((feature, index) => {
                      const IconComponent = feature.icon;
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          className="flex items-start group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:border-blue-400/50 transition-all duration-300">
                            <IconComponent className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                              {feature.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Stats */}
                  <motion.div 
                    className="flex items-center space-x-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <span className="text-2xl font-bold text-blue-400">{stat.number}</span>
                          {stat.icon && <stat.icon className="w-5 h-5 text-yellow-400 ml-1 fill-current" />}
                        </div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div 
                    className="flex flex-wrap gap-4 text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      No spam, unsubscribe anytime
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Weekly AI insights
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - Form */}
              <div className="p-12 lg:p-16 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-r-[3rem]" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative z-10 h-full flex flex-col justify-center"
                >
                  {!isSubscribed ? (
                    <>
                      <div className="text-center mb-8">
                        <motion.div 
                          className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                          animate={{
                            boxShadow: [
                              "0 20px 40px rgba(59, 130, 246, 0.3)",
                              "0 20px 60px rgba(139, 92, 246, 0.4)",
                              "0 20px 40px rgba(59, 130, 246, 0.3)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Mail className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
                        <p className="text-gray-400">Join our AI community and stay informed</p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="newsletter-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-4 bg-black/40 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="newsletter-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-4 bg-black/40 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting || !email || !name}
                            className="w-full py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                            ) : (
                              <Mail className="w-5 h-5 mr-2" />
                            )}
                            {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                            {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                          </Button>
                        </motion.div>
                      </form>

                      {/* Privacy */}
                      <p className="text-xs text-gray-500 text-center mt-6">
                        By subscribing, you agree to our{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                          Terms of Service
                        </a>
                      </p>
                    </>
                  ) : (
                    // Success State
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 20px 40px rgba(16, 185, 129, 0.3)",
                            "0 20px 60px rgba(16, 185, 129, 0.5)",
                            "0 20px 40px rgba(16, 185, 129, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">Welcome Aboard! 🎉</h3>
                      <p className="text-gray-300 mb-8 text-lg">
                        Thank you for subscribing! Check your inbox for your first AI insights guide 
                        and start your AI journey today.
                      </p>
                      
                      <Button
                        onClick={() => setIsSubscribed(false)}
                        variant="outline"
                        className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                      >
                        Subscribe Another Email
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}