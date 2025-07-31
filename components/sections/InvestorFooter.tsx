import { motion } from "motion/react";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Globe,
  Shield,
  FileText,
  AlertTriangle
} from "lucide-react";

export function InvestorFooter() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-cyan-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" },
  ];

  const footerLinks = {
    investor: [
      { name: "Annual Reports", href: "#" },
      { name: "Quarterly Earnings", href: "#" },
      { name: "SEC Filings", href: "#" },
      { name: "Stock Information", href: "#" },
      { name: "Dividend Information", href: "#" },
    ],
    corporate: [
      { name: "Board of Directors", href: "#" },
      { name: "Corporate Governance", href: "#" },
      { name: "Code of Conduct", href: "#" },
      { name: "ESG Reports", href: "#" },
      { name: "Risk Management", href: "#" },
    ],
    resources: [
      { name: "Financial Calendar", href: "#" },
      { name: "Presentations", href: "#" },
      { name: "Webcasts", href: "#" },
      { name: "Email Alerts", href: "#" },
      { name: "Contact IR", href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <motion.div 
        className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-slate-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-xl flex items-center justify-center mr-4 shadow-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-300 to-slate-300 bg-clip-text text-transparent">
                  Global Investor Relations
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Connecting institutional and retail investors with comprehensive financial data, 
                strategic insights, and transparent reporting from leading global financial institutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>investor.relations@globalbank.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (212) 270-6000</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>270 Park Avenue, New York, NY</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-10 h-10 bg-slate-800/60 border border-slate-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-current hover:scale-110`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Footer Links */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Investor Relations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                  Investor Relations
                </h4>
                <ul className="space-y-2">
                  {footerLinks.investor.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Corporate Governance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                  Corporate Governance
                </h4>
                <ul className="space-y-2">
                  {footerLinks.corporate.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                  Resources
                </h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <motion.li key={index} whileHover={{ x: 5 }}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Disclaimer Section */}
          <motion.div 
            className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="text-red-300 font-semibold text-sm">Important Disclaimer</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  This website contains forward-looking statements that involve risks and uncertainties. 
                  Past performance does not guarantee future results. Investment decisions should be made 
                  based on individual financial circumstances and risk tolerance. Please consult with 
                  qualified financial advisors before making investment decisions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Regulatory Information */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center">
              <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-white font-medium text-sm mb-1">FDIC Insured</div>
              <div className="text-gray-400 text-xs">Member FDIC</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center">
              <FileText className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <div className="text-white font-medium text-sm mb-1">SEC Registered</div>
              <div className="text-gray-400 text-xs">Investment Advisor</div>
            </div>
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 text-center">
              <Globe className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-white font-medium text-sm mb-1">Global Presence</div>
              <div className="text-gray-400 text-xs">50+ Countries</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-slate-800 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-xs">
              © 2025 Global Investor Relations Platform. All rights reserved. 
              Licensed under applicable financial regulations.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Legal Notices
              </a>
            </div>

            {/* Status Indicator */}
            <motion.div 
              className="flex items-center text-xs"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-gray-500">Markets Open</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </footer>
  );
}