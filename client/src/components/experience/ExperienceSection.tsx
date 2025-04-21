import { motion } from "framer-motion";
import { experienceItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper animation="zoom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Experience</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            My professional journey and work experience.
          </p>
        </ScrollAnimationWrapper>

        {/* Experience Timeline */}
        <div className="timeline-container relative max-w-4xl mx-auto">
          {experienceItems.map((experience, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation={index % 2 === 0 ? "fade" : "scale"}
              delay={index * 0.2}
            >
              <div className="mb-12 md:mb-16 relative">
                <div className="timeline-dot"></div>
                <motion.div
                  className={cn(
                    "md:w-1/2 bg-card rounded-lg p-6 border border-border shadow-md",
                    index % 2 === 0
                      ? "md:ml-auto md:pl-8"
                      : "md:mr-auto md:pr-8"
                  )}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
                      <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        <span className="text-primary mr-2">✓</span> {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Decorative Elements */}
        <ScrollAnimationWrapper
          animation="parallax"
          className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        >
          <div />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          animation="parallax"
          className="absolute -left-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        >
          <div />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default ExperienceSection;
