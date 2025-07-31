import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { AnimatedCounter } from "./AnimatedCounter";
import { AnimatedProgressRing } from "./AnimatedProgressRing";
import { FloatingParticles } from "./FloatingParticles";
import { MorphingBackground } from "./MorphingBackground";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building,
  Users,
  BarChart3,
  PieChart,
  Activity,
  Shield,
  Target,
  Award,
  Zap,
  Star,
  Sparkles,
  ArrowUp,
  ArrowDown,
  Flame,
  Crown,
  Medal,
  Trophy
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const bankData = [
  {
    name: "KHAN BANK",
    code: "KB",
    rank: 1,
    assets: "21.4B",
    profit: "348M",
    loans: "12.9B",
    npl: "4.05%",
    assetGrowth: "+5.0%",
    profitGrowth: "+20%",
    loanGrowth: "+16%",
    nplChange: "-0.38%",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "from-yellow-900/20 to-yellow-800/10",
    badges: ["Market Leader", "Profitability", "Excellence"]
  },
  {
    name: "TRADE & DEVELOPMENT BANK",
    code: "TDB",
    rank: 2,
    assets: "15.6B",
    profit: "112M",
    loans: "7.7B",
    npl: "3.69%",
    assetGrowth: "+4.0%",
    profitGrowth: "-36%",
    loanGrowth: "+27%",
    nplChange: "-0.48%",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-900/20 to-emerald-800/10",
    badges: ["Growth Focused", "Asset Quality", "Expansion"]
  },
  {
    name: "GOLOMT BANK",
    code: "GB",
    rank: 3,
    assets: "14.9B",
    profit: "215M",
    loans: "7.9B",
    npl: "2.75%",
    assetGrowth: "-3.0%",
    profitGrowth: "-21%",
    loanGrowth: "+10%",
    nplChange: "-0.28%",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-900/20 to-red-800/10",
    badges: ["Established", "Stability", "Legacy"]
  },
  {
    name: "XACBANK",
    code: "XB",
    rank: 4,
    assets: "6.8B",
    profit: "86M",
    loans: "4.2B",
    npl: "2.23%",
    assetGrowth: "+7.0%",
    profitGrowth: "+1%",
    loanGrowth: "+14%",
    nplChange: "+0.18%",
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-900/20 to-violet-800/10",
    badges: ["Stable", "Quality", "Consistent"]
  },
  {
    name: "STATE BANK",
    code: "SB",
    rank: 5,
    assets: "6.1B",
    profit: "30M",
    loans: "3.7B",
    npl: "5.01%",
    assetGrowth: "-2.0%",
    profitGrowth: "-33%",
    loanGrowth: "+9%",
    nplChange: "-0.58%",
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-900/20 to-blue-800/10",
    badges: ["Restructuring", "Potential", "Recovery"]
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
    case 2: return <Medal className="w-6 h-6 text-gray-300" />;
    case 3: return <Trophy className="w-6 h-6 text-orange-400" />;
    default: return <Star className="w-5 h-5 text-blue-400" />;
  }
};

const BankCard = ({ bank, index }: { bank: typeof bankData[0], index: number }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative group"
      whileHover={{ 
        y: -10,
        scale: 1.02,
        rotateY: 5,
        rotateX: 2
      }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="bg-gradient-to-br from-gray-900/80 to-black/60 border-gray-700/50 backdrop-blur-sm relative overflow-hidden h-full">
        {/* Animated rank indicator */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${bank.color}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
        />

        {/* Animated background glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${bank.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          animate={{
            background: [
              `linear-gradient(45deg, ${bank.bgColor.split(' ')[1]} 0%, transparent 50%)`,
              `linear-gradient(135deg, ${bank.bgColor.split(' ')[3]} 0%, transparent 50%)`,
              `linear-gradient(45deg, ${bank.bgColor.split(' ')[1]} 0%, transparent 50%)`
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Floating sparkles */}
        {bank.rank <= 3 && (
          <motion.div
            className="absolute top-4 right-4 opacity-70 group-hover:opacity-100"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        )}

        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              className={`w-16 h-16 bg-gradient-to-br ${bank.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}
              whileHover={{ 
                scale: 1.1,
                rotate: 10
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated inner glow */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <span className="text-white text-lg font-bold relative z-10">
                {bank.code}
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {getRankIcon(bank.rank)}
              <span className="text-2xl font-bold text-white">#{bank.rank}</span>
            </motion.div>
          </div>

          <CardTitle className="text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">
            {bank.name}
          </CardTitle>

          <div className="flex flex-wrap gap-2 mb-4">
            {bank.badges.map((badge, badgeIndex) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + badgeIndex * 0.1 + 0.5 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-blue-900/50 text-blue-300 border-blue-700/50 hover:bg-blue-800/50 transition-colors"
                >
                  {badge}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="grid grid-cols-2 gap-4">
            {/* Assets */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30 hover:border-blue-500/50 transition-colors group/metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Building className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-400 uppercase">Assets</span>
              </div>
              <div className="text-lg font-bold text-white group-hover/metric:text-blue-300 transition-colors">
                {bank.assets}
              </div>
              <div className={`text-xs flex items-center gap-1 ${
                bank.assetGrowth.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {bank.assetGrowth.startsWith('+') ? 
                  <ArrowUp className="w-3 h-3" /> : 
                  <ArrowDown className="w-3 h-3" />
                }
                {bank.assetGrowth}
              </div>
            </motion.div>

            {/* Profit */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30 hover:border-green-500/50 transition-colors group/metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-xs text-gray-400 uppercase">Profit</span>
              </div>
              <div className="text-lg font-bold text-white group-hover/metric:text-green-300 transition-colors">
                {bank.profit}
              </div>
              <div className={`text-xs flex items-center gap-1 ${
                bank.profitGrowth.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {bank.profitGrowth.startsWith('+') ? 
                  <ArrowUp className="w-3 h-3" /> : 
                  <ArrowDown className="w-3 h-3" />
                }
                {bank.profitGrowth}
              </div>
            </motion.div>

            {/* Loans */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30 hover:border-purple-500/50 transition-colors group/metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-gray-400 uppercase">Loans</span>
              </div>
              <div className="text-lg font-bold text-white group-hover/metric:text-purple-300 transition-colors">
                {bank.loans}
              </div>
              <div className={`text-xs flex items-center gap-1 ${
                bank.loanGrowth.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {bank.loanGrowth.startsWith('+') ? 
                  <ArrowUp className="w-3 h-3" /> : 
                  <ArrowDown className="w-3 h-3" />
                }
                {bank.loanGrowth}
              </div>
            </motion.div>

            {/* NPL */}
            <motion.div 
              className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30 hover:border-orange-500/50 transition-colors group/metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-orange-400" />
                <span className="text-xs text-gray-400 uppercase">NPL</span>
              </div>
              <div className="text-lg font-bold text-white group-hover/metric:text-orange-300 transition-colors">
                {bank.npl}
              </div>
              <div className={`text-xs flex items-center gap-1 ${
                bank.nplChange.startsWith('-') ? 'text-green-400' : 'text-red-400'
              }`}>
                {bank.nplChange.startsWith('-') ? 
                  <ArrowDown className="w-3 h-3" /> : 
                  <ArrowUp className="w-3 h-3" />
                }
                {bank.nplChange}
              </div>
            </motion.div>
          </div>

          {/* Performance indicator */}
          <motion.div 
            className="mt-4 p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.8 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Performance Score</span>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Activity className="w-4 h-4 text-blue-400" />
              </motion.div>
            </div>
            <div className="flex items-center justify-center">
              <AnimatedProgressRing
                percentage={bank.rank === 1 ? 92 : bank.rank === 2 ? 78 : bank.rank === 3 ? 71 : bank.rank === 4 ? 68 : 55}
                size={60}
                strokeWidth={4}
                color={bank.rank === 1 ? "#fbbf24" : bank.rank === 2 ? "#10b981" : bank.rank === 3 ? "#f97316" : bank.rank === 4 ? "#8b5cf6" : "#06b6d4"}
                glowColor={bank.rank === 1 ? "#fbbf24" : bank.rank === 2 ? "#10b981" : bank.rank === 3 ? "#f97316" : bank.rank === 4 ? "#8b5cf6" : "#06b6d4"}
              >
                <span className="text-xs font-bold text-white">
                  {bank.rank === 1 ? "92%" : bank.rank === 2 ? "78%" : bank.rank === 3 ? "71%" : bank.rank === 4 ? "68%" : "55%"}
                </span>
              </AnimatedProgressRing>
            </div>
          </motion.div>
        </CardContent>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${bank.color.includes('yellow') ? '#fbbf24' : bank.color.includes('green') ? '#10b981' : bank.color.includes('orange') ? '#f97316' : bank.color.includes('purple') ? '#8b5cf6' : '#06b6d4'}, transparent)`
          }}
        />
      </Card>
    </motion.div>
  );
};

export function MongoliaBankingDashboard() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);
  
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.dashboard-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
      <FloatingParticles />
      
      {/* Hero Header */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden dashboard-section"
        style={{ y: headerY }}
      >
        <MorphingBackground />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY }}
        >
          <motion.div 
            className="absolute top-10 left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-1/4 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [360, 180, 0],
              x: [0, -60, 0],
              y: [0, 60, 0]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.6, 1],
              rotate: [0, -180, -360],
              x: [0, 80, 0],
              y: [0, -40, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6
            }}
          />
        </motion.div>

        <motion.div 
          className="relative z-10 container mx-auto px-6 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Animated logo/brand */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Building className="w-10 h-10 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-50 blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="text-left">
              <motion.div 
                className="text-3xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                🏦 MONGOLIA
              </motion.div>
              <motion.div 
                className="text-2xl bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                BANKING SECTOR
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-6xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Executive Performance Dashboard
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            Q2 2025 Financial Analysis • Real-time Banking Intelligence
          </motion.p>

          {/* Key Stats Header */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { value: "15.6B", label: "TDB Total Assets", change: "+4.0% YTD", icon: Building },
              { value: "7.7B", label: "TDB Loan Portfolio", change: "+27% YTD", icon: BarChart3 },
              { value: "112M", label: "TDB Net Profit", change: "-36% YoY", icon: DollarSign },
              { value: "3.69%", label: "TDB NPL Ratio", change: "Best in Sector", icon: Shield }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  
                  <AnimatedCounter 
                    end={parseFloat(stat.value.replace(/[^\d.]/g, ''))} 
                    suffix={stat.value.replace(/[\d.]/g, '')}
                    className="text-2xl text-white mb-2"
                  />
                  
                  <div className="text-sm text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-xs text-blue-300">{stat.change}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl">
                Explore Analytics
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-900/30 hover:border-cyan-400 backdrop-blur-sm">
                View Insights
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* TDB Strategic Focus */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-gray-900 relative dashboard-section">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Target className="w-8 h-8 text-green-400" />
              </motion.div>
              <motion.h2 
                className="text-4xl text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.5)",
                    "0 0 40px rgba(5, 150, 105, 0.7)",
                    "0 0 20px rgba(16, 185, 129, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TDB Strategic Focus Analysis
              </motion.h2>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Executive Summary */}
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <Card className="bg-gradient-to-br from-green-900/30 to-emerald-800/20 border-green-700/50 backdrop-blur-sm h-full relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />

                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-300">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Target className="w-6 h-6" />
                    </motion.div>
                    TDB Executive Summary
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "24.1%", label: "Market Share (Assets)", color: "text-green-400" },
                      { value: "21.3%", label: "Market Share (Loans)", color: "text-green-400" },
                      { value: "0.72%", label: "Return on Assets", color: "text-red-400" },
                      { value: "16.7%", label: "Fee Income Growth", color: "text-green-400" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-black/30 rounded-lg p-4 border border-green-800/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <AnimatedCounter 
                          end={parseFloat(item.value)} 
                          suffix="%" 
                          className={`text-lg ${item.color}`}
                        />
                        <div className="text-sm text-gray-300 mt-1">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    className="bg-purple-900/20 rounded-lg p-4 border-l-4 border-purple-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <strong className="text-purple-300">Strategic Thesis:</strong> TDB appears to be trading short-term profits for long-term market positioning, betting that scale economies will eventually drive superior returns.
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Competitive Positioning */}
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-800/20 border-blue-700/50 backdrop-blur-sm h-full relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                />

                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-300">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <BarChart3 className="w-6 h-6" />
                    </motion.div>
                    TDB Competitive Positioning
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-green-300 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Strengths
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {[
                        "Asset Quality Leadership: Lowest NPL ratio (3.69%)",
                        "Growth Momentum: Highest loan portfolio expansion",
                        "Revenue Diversification: Strong fee income growth",
                        "Market Position: Solid #2 ranking with trajectory"
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-red-300 mb-3 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" />
                      Challenges
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {[
                        "Profitability Pressure: Significant earnings decline",
                        "Operating Efficiency: Elevated cost base from expansion",
                        "Margin Compression: Net interest income declined 20%"
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                          viewport={{ once: true }}
                        >
                          <Zap className="w-3 h-3 text-red-400 mt-1 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bank Rankings */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative dashboard-section">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Trophy className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <motion.h2 
                className="text-4xl text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(250, 204, 21, 0.5)",
                    "0 0 40px rgba(251, 191, 36, 0.7)",
                    "0 0 20px rgba(250, 204, 21, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Bank Performance Rankings
              </motion.h2>
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Trophy className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Q2 2025 Comprehensive Banking Performance Analysis
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bankData.map((bank, index) => (
              <BankCard key={bank.code} bank={bank} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-blue-950 border-t border-gray-800 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center relative overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(6, 182, 212, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                />
                <Building className="w-6 h-6 text-white relative z-10" />
              </motion.div>
              <span className="text-2xl text-white">Mongolia Banking Dashboard</span>
            </div>
            
            <div className="text-center text-gray-400 space-y-2">
              <p><strong>Q2 2025</strong> | Data Source: Bank Financial Statements</p>
              <p className="text-sm">This analysis is based on publicly available financial data and management commentary.</p>
              <p className="text-sm">Forward-looking statements involve risks and uncertainties.</p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              &copy; 2025 Mongolia Banking Intelligence. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}