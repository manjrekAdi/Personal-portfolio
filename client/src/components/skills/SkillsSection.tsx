import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import TabGroup from "@/components/ui/TabGroup";
import SkillProgress from "@/components/ui/SkillProgress";
import { 
  programmingSkills, 
  aiMlSkills, 
  webDevSkills, 
  otherTechSkills 
} from "@/lib/data";

type SkillCategory = "programming" | "aiml" | "webdev" | "other";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("programming");
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const tabs = [
    { id: "programming", label: "Programming Languages" },
    { id: "aiml", label: "AI & Machine Learning" },
    { id: "webdev", label: "Web Development" },
    { id: "other", label: "Other Technologies" },
  ];

  const getSkillsForCategory = (category: SkillCategory) => {
    switch (category) {
      case "programming":
        return programmingSkills;
      case "aiml":
        return aiMlSkills;
      case "webdev":
        return webDevSkills;
      case "other":
        return otherTechSkills;
      default:
        return programmingSkills;
    }
  };

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab as SkillCategory);
  };

  const skills = getSkillsForCategory(activeTab);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skills</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          A comprehensive overview of my technical skills and proficiencies.
        </p>

        {/* Skills Categories */}
        <TabGroup tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />

        {/* Skills Content */}
        <motion.div 
          className="p-6 rounded-lg bg-card border border-border mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillProgress
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
