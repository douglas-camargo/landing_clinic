import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'fade' | 'scale' | 'rotate';
  duration?: number;
  delay?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function ScrollAnimatedSection({ 
  children, 
  direction = 'up',
  duration = 0.8,
  delay = 0,
  className = "",
  stagger = false,
  staggerDelay = 0.1
}: ScrollAnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -100, opacity: 0, scale: 0.9 };
      case 'right':
        return { x: 100, opacity: 0, scale: 0.9 };
      case 'up':
        return { y: 60, opacity: 0, scale: 0.95 };
      case 'down':
        return { y: -60, opacity: 0, scale: 0.95 };
      case 'fade':
        return { opacity: 0, scale: 0.8 };
      case 'scale':
        return { scale: 0, opacity: 0 };
      case 'rotate':
        return { rotate: -10, opacity: 0, scale: 0.8 };
      default:
        return { y: 60, opacity: 0, scale: 0.95 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'rotate':
        return { rotate: 0, opacity: 1, scale: 1 };
      default:
        return { x: 0, y: 0, opacity: 1, scale: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isVisible ? getFinalPosition() : getInitialPosition()}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier para transición más suave
        type: "spring",
        stiffness: 100,
        damping: 15
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
