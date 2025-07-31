import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";
import { motion } from "framer-motion";
import { TrendingUp, Flame, Activity } from "lucide-react";

const flameData = [
  { month: 'Jan', performance: 45, efficiency: 40 },
  { month: 'Feb', performance: 52, efficiency: 48 },
  { month: 'Mar', performance: 48, efficiency: 45 },
  { month: 'Apr', performance: 61, efficiency: 58 },
  { month: 'May', performance: 55, efficiency: 52 },
  { month: 'Jun', performance: 67, efficiency: 65 },
  { month: 'Jul', performance: 73, efficiency: 70 },
  { month: 'Aug', performance: 69, efficiency: 67 },
  { month: 'Sep', performance: 78, efficiency: 75 },
  { month: 'Oct', performance: 82, efficiency: 79 },
  { month: 'Nov', performance: 85, efficiency: 82 },
  { month: 'Dec', performance: 80, efficiency: 78 },
];

export function PerformanceChart() {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = () => {
        if (current < 80) {
          current += 1;
          setAnimatedValue(current);
          setTimeout(increment, 30);
        }
      };
      increment();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Performance Metrics */}
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center blue-glow">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-white">Digital Performance</h3>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl lg:text-7xl mb-4 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {animatedValue}%
            </div>
            <div className="w-full bg-gray-800 rounded-full h-3 mb-6 overflow-hidden">
              <motion.div 
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
            <p className="text-lg text-gray-300">
              Banks implementing digital transformation see an average of 80% improvement 
              in operational efficiency and customer satisfaction.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-4 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg border border-blue-700/30">
            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl text-blue-400 mb-1">65%</div>
            <div className="text-sm text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 rounded-lg border border-cyan-700/30">
            <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl text-cyan-400 mb-1">92%</div>
            <div className="text-sm text-gray-400">Process Efficiency</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Flame Chart */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-700/50 blue-glow">
          <div className="mb-6">
            <h4 className="text-xl mb-2 text-white">Performance Growth Trajectory</h4>
            <p className="text-gray-400">Digital transformation impact over time</p>
          </div>
          
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={flameData}>
                <defs>
                  <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="50%" stopColor="#1d4ed8" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="flameStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#60a5fa"/>
                    <stop offset="50%" stopColor="#3b82f6"/>
                    <stop offset="100%" stopColor="#2563eb"/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  domain={[0, 100]}
                />
                <Area
                  type="monotone"
                  dataKey="performance"
                  stroke="url(#flameStroke)"
                  strokeWidth={3}
                  fill="url(#flameGradient)"
                  dot={{ r: 4, fill: "#3b82f6" }}
                  activeDot={{ r: 6, fill: "#60a5fa" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <span>Starting Point</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Peak Performance: 85%
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}