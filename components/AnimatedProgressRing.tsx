import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
  color?: string;
  glowColor?: string;
}

export function AnimatedProgressRing({
  percentage,
  size = 120,
  strokeWidth = 8,
  children,
  color = "#3b82f6",
  glowColor = "#3b82f6"
}: AnimatedProgressRingProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Animated progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 10px ${glowColor})`,
          }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}