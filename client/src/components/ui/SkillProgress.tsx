import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface SkillProgressProps {
  name: string;
  percentage: number;
}

const SkillProgress = ({ name, percentage }: SkillProgressProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(progressRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isVisible, isAnimated]);

  return (
    <div className="mb-4" ref={progressRef}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: isAnimated ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
