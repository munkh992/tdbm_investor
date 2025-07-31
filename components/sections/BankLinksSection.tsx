import { motion } from "motion/react";
import { Card } from "../ui/card";
import { ExternalLink, Building2, TrendingUp } from "lucide-react";

export function BankLinksSection() {
  const banks = [
    {
      name: "JPMorgan Chase & Co.",
      region: "United States",
      url: "https://jpmorganchase.com/investor-relations",
      assets: "$3.7T",
      logo: "🏦",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Bank of America",
      region: "United States", 
      url: "https://investor.bankofamerica.com",
      assets: "$3.2T",
      logo: "🏛️",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Industrial & Commercial Bank of China",
      region: "China",
      url: "https://www.icbc.com.cn/en/investor",
      assets: "$5.7T",
      logo: "🏢",
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Wells Fargo & Company",
      region: "United States",
      url: "https://www.wellsfargo.com/about/investor-relations",
      assets: "$1.9T", 
      logo: "🏪",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Goldman Sachs Group",
      region: "United States",
      url: "https://www.goldmansachs.com/investor-relations",
      assets: "$1.6T",
      logo: "💼",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "HSBC Holdings plc",
      region: "United Kingdom",
      url: "https://www.hsbc.com/investors",
      assets: "$3.0T",
      logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      color: "from-red-500 to-red-700"
    },
    {
      name: "BNP Paribas",
      region: "France",
      url: "https://invest.bnpparibas.com",
      assets: "$2.9T",
      logo: "🇫🇷",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Bank of China",
      region: "China",
      url: "https://www.boc.cn/en/investor",
      assets: "$4.1T",
      logo: "🇨🇳",
      color: "from-red-600 to-red-700"
    }
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <Building2 className="w-8 h-8 text-blue-400 mr-3" />
          Global Banking Partners
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Access investor relations resources from leading financial institutions worldwide. 
          Connect with comprehensive reports, financial data, and strategic insights.
        </p>
      </motion.div>

      {/* Banks Grid */}
      <div className="space-y-4">
        {banks.map((bank, index) => (
          <motion.div
            key={bank.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden bg-gradient-to-r from-slate-900/90 to-slate-800/90 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer backdrop-blur-sm">
              <motion.a
                href={bank.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${bank.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Logo */}
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {bank.logo}
                    </div>
                    
                    {/* Bank Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {bank.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{bank.region}</span>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{bank.assets}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* External Link Icon */}
                  <motion.div
                    className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer" />
                </div>
              </motion.a>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-slate-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h4 className="text-lg font-semibold text-white mb-2">
          Partnership Network
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          Our platform aggregates investor relations data from over 50 global financial institutions, 
          providing unified access to comprehensive financial reports, earnings calls, and strategic announcements.
        </p>
      </motion.div>
    </motion.div>
  );
}