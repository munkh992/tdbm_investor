import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypingAnimation({ text, speed = 100, className = "" }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className={className}>
      <span>{displayedText}</span>
      <motion.span
        className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
        animate={{
          opacity: isTyping ? [1, 1, 0, 0] : [1, 0],
        }}
        transition={{
          duration: isTyping ? 1 : 0.5,
          repeat: isTyping ? Infinity : 0,
          ease: "linear"
        }}
      />
    </div>
  );
}