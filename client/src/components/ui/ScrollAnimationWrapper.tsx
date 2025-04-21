import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "zoom" | "rotate" | "parallax" | "scale" | "blur";
  delay?: number;
  threshold?: number;
}

const ScrollAnimationWrapper = ({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  threshold = 0.1
}: ScrollAnimationWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"]
  });

  // Spring-based scroll progress for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Different animation variants
  const animationVariants = {
    fade: {
      opacity: useTransform(smoothProgress, [0, threshold, 1], [0, 1, 1]),
      y: useTransform(smoothProgress, [0, threshold, 1], [50, 0, 0])
    },
    zoom: {
      scale: useTransform(smoothProgress, [0, threshold, 1], [0.8, 1, 1]),
      opacity: useTransform(smoothProgress, [0, threshold, 1], [0, 1, 1])
    },
    rotate: {
      rotate: useTransform(smoothProgress, [0, threshold, 1], [-10, 0, 0]),
      opacity: useTransform(smoothProgress, [0, threshold, 1], [0, 1, 1])
    },
    parallax: {
      y: useTransform(smoothProgress, [0, 1], [100, -100])
    },
    scale: {
      scale: useTransform(smoothProgress, [0, threshold, 1], [0.6, 1, 1]),
      opacity: useTransform(smoothProgress, [0, threshold, 1], [0, 1, 1])
    },
    blur: {
      filter: useTransform(
        smoothProgress,
        [0, threshold, 1],
        ["blur(10px)", "blur(0px)", "blur(0px)"]
      ),
      opacity: useTransform(smoothProgress, [0, threshold, 1], [0, 1, 1])
    }
  };

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial="initial"
      style={{
        ...animationVariants[animation],
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper; 