import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up"
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  const initialAnimation = {
    opacity: 0,
    ...directionOffset[direction]
  };

  return (
    <motion.div
      ref={sectionRef}
      className={className}
      initial={initialAnimation}
      animate={
        isVisible
          ? { opacity: 1, x: 0, y: 0 }
          : initialAnimation
      }
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
        duration: 0.8
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 