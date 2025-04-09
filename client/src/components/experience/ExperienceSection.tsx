import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { experienceItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Experience</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          My professional journey and work experience.
        </p>

        {/* Experience Timeline */}
        <motion.div
          className="timeline-container relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {experienceItems.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-12 md:mb-16 relative"
              variants={itemVariants}
            >
              <div className="timeline-dot"></div>
              <div
                className={cn(
                  "md:w-1/2 bg-card rounded-lg p-6 border border-border shadow-md",
                  index % 2 === 0
                    ? "md:ml-auto md:pl-8"
                    : "md:mr-auto md:pr-8"
                )}
              >
                <div className="flex justify-between items-start mb-3 flex-wrap">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                    {experience.period}
                  </span>
                </div>
                <h4 className="text-muted-foreground mb-4">{experience.company}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">✓</span> {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
