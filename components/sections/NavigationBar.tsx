import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Building2, Globe, FileText, Users, Phone } from "lucide-react";

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Overview", icon: Building2, href: "#overview" },
    { name: "Reports", icon: FileText, href: "#reports" },
    { name: "Governance", icon: Users, href: "#governance" },
    { name: "Global", icon: Globe, href: "#global" },
    { name: "Contact", icon: Phone, href: "#contact" },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-slate-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">
              Investor Relations
            </span>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <IconComponent className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              className="bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              size="sm"
            >
              Investor Portal
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}