import { 
  Smartphone, 
  Shield, 
  Bot, 
  Cloud, 
  Users, 
  TrendingUp, 
  DollarSign,
  Zap,
  BarChart3,
  Activity,
  Building,
  Target,
  Award,
  Code,
  Lock,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";

export const performanceStats = [
  { percentage: 95, label: "System Uptime", icon: Activity, color: "#3b82f6", value: "95%" },
  { percentage: 73, label: "Revenue Growth", icon: TrendingUp, color: "#06b6d4", value: "73%" },
  { percentage: 89, label: "Customer Satisfaction", icon: Users, color: "#8b5cf6", value: "89%" },
  { percentage: 67, label: "Process Automation", icon: Zap, color: "#f59e0b", value: "67%" }
];

export const transformationAreas = [
  { 
    icon: Smartphone, 
    title: "Mobile & Online Banking", 
    desc: "24/7 access and convenience through intuitive mobile apps and web platforms", 
    color: "blue" 
  },
  { 
    icon: Bot, 
    title: "AI & Automation", 
    desc: "Enhancing service and efficiency through intelligent automation and machine learning", 
    color: "cyan" 
  },
  { 
    icon: Cloud, 
    title: "Cloud Computing", 
    desc: "Scalability and flexibility with secure, modern cloud infrastructure solutions", 
    color: "indigo" 
  },
  { 
    icon: Shield, 
    title: "Cybersecurity", 
    desc: "Safety and trust in digital services through advanced security measures", 
    color: "red" 
  }
];

export const benefits = [
  "Improved customer experience",
  "Faster services", 
  "Lower costs",
  "Better data insights",
  "Improved compliance",
  "Staying competitive"
];

export const challenges = [
  "Legacy systems",
  "High implementation cost", 
  "Data security concerns",
  "Staff reskilling",
  "Regulatory complexity"
];

export const futureTrends = [
  { year: "2025", title: "Open Banking APIs", icon: Code, colors: ["#3b82f6", "#60a5fa"] },
  { year: "2026", title: "AI-driven fraud detection", icon: Shield, colors: ["#06b6d4", "#67e8f9"] },
  { year: "2027", title: "Blockchain-based transactions", icon: Lock, colors: ["#8b5cf6", "#a78bfa"] },
  { year: "2028", title: "Cloud-native banking", icon: Cloud, colors: ["#ec4899", "#f472b6"] },
  { year: "2029", title: "Personalized customer experiences", icon: Users, colors: ["#3b82f6", "#06b6d4"] }
];

export const caseStudies = [
  { icon: Building, title: "Global Bank A", percentage: 40, color: "#3b82f6", desc: "Cost reduction through AI automation and cloud migration" },
  { icon: Target, title: "Regional Bank B", percentage: 60, color: "#06b6d4", desc: "Improved customer satisfaction with mobile-first approach" },
  { icon: Award, title: "Digital Bank C", percentage: 300, color: "#8b5cf6", desc: "Faster loan processing with digital transformation" }
];

export const socialLinks = [
  { icon: Facebook, color: "#1877f2" },
  { icon: Linkedin, color: "#0077b5" },
  { icon: Twitter, color: "#1da1f2" }
];

export const navigationLinks = ["About Us", "Contact", "Privacy Policy", "Careers"];

export const services = [
  "Digital Strategy",
  "Technology Implementation", 
  "Process Automation",
  "Security Solutions"
];