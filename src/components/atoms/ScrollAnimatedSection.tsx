import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  className?: string;
}

export default function ScrollAnimatedSection({ 
  children, 
  direction = 'up',
  duration = 0.8,
  className = ""
}: ScrollAnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -40, opacity: 0 };
      case 'right':
        return { x: 40, opacity: 0 };
      case 'up':
        return { y: 40, opacity: 0 };
      case 'down':
        return { y: -40, opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isVisible ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()}
      transition={{ 
        duration,
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
}
