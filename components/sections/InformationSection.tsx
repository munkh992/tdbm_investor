import { motion } from "motion/react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { 
  FileText, 
  Shield, 
  BarChart3, 
  Phone, 
  Download, 
  Calendar,
  Globe,
  Users,
  ChevronRight,
  Award
} from "lucide-react";

export function InformationSection() {
  const sections = [
    {
      id: "resources",
      title: "Resources & Disclosures",
      icon: FileText,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      items: [
        { name: "Annual Reports", type: "PDF", size: "12.5 MB", date: "2024" },
        { name: "Quarterly Earnings", type: "PDF", size: "3.2 MB", date: "Q4 2024" },
        { name: "SEC Filings", type: "HTML", size: "Various", date: "Current" },
        { name: "Proxy Statements", type: "PDF", size: "8.1 MB", date: "2024" },
        { name: "Form 10-K", type: "PDF", size: "15.3 MB", date: "2024" },
      ]
    },
    {
      id: "governance",
      title: "Corporate Governance",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      items: [
        { name: "Board of Directors", type: "Profile", description: "Leadership team profiles and experience" },
        { name: "Committee Charters", type: "Document", description: "Audit, Risk, and Compensation committees" },
        { name: "Code of Conduct", type: "Policy", description: "Ethical guidelines and compliance standards" },
        { name: "ESG Framework", type: "Report", description: "Environmental, Social, and Governance initiatives" },
      ]
    },
    {
      id: "statements",
      title: "Financial Statements",
      icon: BarChart3,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      items: [
        { name: "Balance Sheet", metric: "$5.2T", change: "+3.2%" },
        { name: "Income Statement", metric: "$48.3B", change: "+5.7%" },
        { name: "Cash Flow", metric: "$12.1B", change: "+2.1%" },
        { name: "Equity Statement", metric: "$284.5B", change: "+4.3%" },
      ]
    },
    {
      id: "services",
      title: "Investor Services",
      icon: Users,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      services: [
        { name: "Dividend Information", description: "Dividend history, dates, and reinvestment options" },
        { name: "Stock Information", description: "Real-time quotes, historical data, and analysis" },
        { name: "Event Calendar", description: "Earnings calls, conferences, and investor meetings" },
        { name: "Email Alerts", description: "Automated notifications for key announcements" },
      ]
    }
  ];

  const contactInfo = {
    title: "Investor Contact",
    phone: "+1 (212) 270-6000",
    email: "investor.relations@globalbank.com",
    address: "270 Park Avenue, New York, NY 10017",
    hours: "Monday - Friday, 8:00 AM - 6:00 PM EST"
  };

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Information Sections */}
      {sections.map((section, sectionIndex) => {
        const IconComponent = section.icon;
        
        return (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className={`group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:${section.borderColor} transition-all duration-500 backdrop-blur-sm`}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${section.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Section Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${section.bgColor} ${section.borderColor} border rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>
                
                {/* Content based on section type */}
                {section.items && (
                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300 group/item cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center space-x-3">
                          <Download className="w-4 h-4 text-gray-400 group-hover/item:text-blue-400 transition-colors" />
                          <div>
                            <div className="text-white font-medium">{item.name}</div>
                            {item.size && (
                              <div className="text-xs text-gray-400 flex items-center space-x-2">
                                <span>{item.type}</span>
                                <span>•</span>
                                <span>{item.size}</span>
                                {item.date && (
                                  <>
                                    <span>•</span>
                                    <span>{item.date}</span>
                                  </>
                                )}
                              </div>
                            )}
                            {item.description && (
                              <div className="text-xs text-gray-400">{item.description}</div>
                            )}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-blue-400 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.services && (
                  <div className="grid grid-cols-1 gap-4">
                    {section.services.map((service, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="text-white font-medium mb-1">{service.name}</h4>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Financial Statements specific content */}
                {section.id === "statements" && section.items && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {section.items.map((item, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-black/20 rounded-lg text-center hover:bg-black/40 transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <div className="text-2xl font-bold text-white mb-1">{item.metric}</div>
                        <div className="text-sm text-gray-400 mb-1">{item.name}</div>
                        <div className={`text-xs font-medium ${
                          item.change && item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {item.change}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        );
      })}

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm">
          <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                {contactInfo.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-4 h-4 text-orange-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <Award className="w-4 h-4 text-orange-400 mt-0.5" />
                <div>
                  <div>{contactInfo.address}</div>
                  <div className="text-sm text-gray-400">{contactInfo.hours}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <Button 
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 border-0"
                size="lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Investor Meeting
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}