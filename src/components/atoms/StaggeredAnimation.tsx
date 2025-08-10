import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredAnimationProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function StaggeredAnimation({ 
  children, 
  staggerDelay = 0.1,
  className = ""
}: StaggeredAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
