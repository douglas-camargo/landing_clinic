import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface StaggeredAnimationProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: 'horizontal' | 'vertical' | 'alternate';
  duration?: number;
}

export default function StaggeredAnimation({ 
  children, 
  className = "",
  staggerDelay = 0.2,
  direction = 'alternate',
  duration = 0.8
}: StaggeredAnimationProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getDirection = (index: number) => {
    switch (direction) {
      case 'horizontal':
        return index % 2 === 0 ? 'left' : 'right';
      case 'vertical':
        return index % 2 === 0 ? 'up' : 'down';
      case 'alternate':
        return index % 2 === 0 ? 'left' : 'right';
      default:
        return 'up';
    }
  };

  const getInitialPosition = (dir: string) => {
    switch (dir) {
      case 'left':
        return { x: -100, opacity: 0, scale: 0.9 };
      case 'right':
        return { x: 100, opacity: 0, scale: 0.9 };
      case 'up':
        return { y: 60, opacity: 0, scale: 0.95 };
      case 'down':
        return { y: -60, opacity: 0, scale: 0.95 };
      default:
        return { y: 60, opacity: 0, scale: 0.95 };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: (dir: string) => getInitialPosition(dir),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          custom={getDirection(index)}
          variants={itemVariants}
          style={{ 
            transformOrigin: 'center',
            willChange: 'transform, opacity'
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
