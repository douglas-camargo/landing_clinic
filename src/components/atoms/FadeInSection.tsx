import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInSection({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = ""
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Cubic bezier para transición más suave
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
