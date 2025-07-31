export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
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

export const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingElementAnimation = {
  scale: [1, 1.3, 1],
  rotate: [0, 180, 360],
  x: [0, 50, 0],
  y: [0, -30, 0]
};

export const floatingElementTransition = {
  duration: 15,
  repeat: Infinity,
  ease: "easeInOut"
};

export const textGlowAnimation = {
  textShadow: [
    "0 0 20px rgba(59, 130, 246, 0.3)",
    "0 0 30px rgba(6, 182, 212, 0.4)",
    "0 0 20px rgba(59, 130, 246, 0.3)"
  ]
};

export const sparkleAnimation = {
  y: [-10, -20, -10],
  opacity: [0.4, 0.8, 0.4],
  rotate: [0, 180, 360]
};