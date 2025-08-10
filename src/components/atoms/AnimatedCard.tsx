import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedCard({ 
  children, 
  delay = 0,
  className = ""
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Cubic bezier para transición más suave
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
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
