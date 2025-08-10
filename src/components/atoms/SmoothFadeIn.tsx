import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SmoothFadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SmoothFadeIn({ 
  children, 
  delay = 0,
  className = ""
}: SmoothFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1,
        delay,
        ease: [0.6, 0.01, -0.05, 0.95], // Custom cubic bezier para transición muy suave
        opacity: { duration: 0.8 },
        y: { duration: 1 }
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
