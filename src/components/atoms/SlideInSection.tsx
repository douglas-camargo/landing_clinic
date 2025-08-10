import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideInSection({ 
  children, 
  direction = 'up',
  delay = 0, 
  duration = 0.8,
  className = ""
}: SlideInSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -30, opacity: 0 };
      case 'right':
        return { x: 30, opacity: 0 };
      case 'up':
        return { y: 30, opacity: 0 };
      case 'down':
        return { y: -30, opacity: 0 };
      default:
        return { y: 30, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Cubic bezier para transición más suave
      }}
      style={{ 
        transformOrigin: 'center',
        willChange: 'transform, opacity'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
