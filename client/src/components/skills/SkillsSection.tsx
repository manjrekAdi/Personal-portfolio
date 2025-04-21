import { useState } from "react";
import { motion } from "framer-motion";
import TabGroup from "@/components/ui/TabGroup";
import SkillProgress from "@/components/ui/SkillProgress";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import { 
  programmingSkills, 
  aiMlSkills, 
  webDevSkills, 
  otherTechSkills 
} from "@/lib/data";

type SkillCategory = "programming" | "aiml" | "webdev" | "other";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("programming");

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
    <section id="skills" className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper animation="zoom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skills</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            A comprehensive overview of my technical skills and proficiencies.
          </p>
        </ScrollAnimationWrapper>

        {/* Skills Categories */}
        <ScrollAnimationWrapper animation="fade" delay={0.2}>
          <TabGroup tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />
        </ScrollAnimationWrapper>

        {/* Skills Content */}
        <ScrollAnimationWrapper animation="scale" delay={0.3}>
          <motion.div 
            className="p-6 rounded-lg bg-card border border-border mt-8"
            layout
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="space-y-6"
              layout
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  layout
                >
                  <SkillProgress
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>

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

export default SkillsSection;
