import { motion } from "motion/react";
import { Button } from "../ui/button";
import { 
  Brain,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  Heart,
  Shield,
  Award,
  Users
} from "lucide-react";

const footerLinks = {
  aiTopics: [
    { name: "Machine Learning", href: "#" },
    { name: "Deep Learning", href: "#" },
    { name: "Computer Vision", href: "#" },
    { name: "Natural Language", href: "#" },
    { name: "AI Ethics", href: "#" }
  ],
  research: [
    { name: "Latest Papers", href: "#" },
    { name: "Research Labs", href: "#" },
    { name: "AI Conferences", href: "#" },
    { name: "Expert Interviews", href: "#" },
    { name: "Breakthrough News", href: "#" }
  ],
  community: [
    { name: "AI Forums", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Discussions", href: "#" },
    { name: "Events", href: "#" },
    { name: "Contributors", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Guidelines", href: "#" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" }
];

const achievements = [
  { icon: Users, value: "25K+", label: "AI Enthusiasts" },
  { icon: Award, value: "2.5K+", label: "Articles Published" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
  { icon: Heart, value: "4.8/5", label: "User Rating" }
];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Insights
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Your comprehensive hub for AI insights, cutting-edge research, and expert analysis. 
                Join thousands who stay ahead of the artificial intelligence revolution.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hello@aiinsights.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA 94105</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-black/60 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* AI Topics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h4 className="text-white font-semibold mb-6 text-lg">AI Topics</h4>
                <ul className="space-y-3">
                  {footerLinks.aiTopics.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Research */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4 className="text-white font-semibold mb-6 text-lg">Research</h4>
                <ul className="space-y-3">
                  {footerLinks.research.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Community */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-6 text-lg">Community</h4>
                <ul className="space-y-3">
                  {footerLinks.community.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-pink-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Achievements Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <motion.div
                  key={index}
                  className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-600 transition-all duration-500 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:border-blue-400/50 transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-2xl font-bold text-white mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {achievement.value}
                  </motion.div>
                  
                  <div className="text-gray-400 text-sm">{achievement.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 AI Insights. All rights reserved. Built with{" "}
              <Heart className="w-4 h-4 inline-flex text-red-400 mx-1" />
              for AI enthusiasts.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-black/60 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-current hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Status Indicator */}
            <motion.div 
              className="flex items-center text-sm"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-gray-400">All systems operational</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
        animate={{
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </footer>
  );
}