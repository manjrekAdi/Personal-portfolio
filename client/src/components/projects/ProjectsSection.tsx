import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";

type ProjectCategory = "all" | "aiml" | "research" | "webdev" | "hardware";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "aiml", label: "AI & ML" },
    { value: "research", label: "Research" },
    { value: "webdev", label: "Web Development" },
    { value: "hardware", label: "Hardware & Embedded" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.categories.includes(activeCategory);
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper animation="zoom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            A selection of my recent work across various domains and technologies.
          </p>
        </ScrollAnimationWrapper>

        {/* Project Categories Filter */}
        <ScrollAnimationWrapper animation="fade" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.value}
                className={cn(
                  "px-4 py-2 rounded-md transition-all duration-300",
                  activeCategory === category.value
                    ? "bg-primary text-white scale-105"
                    : "bg-card hover:bg-muted"
                )}
                onClick={() => setActiveCategory(category.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: 0.3 + index * 0.1
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ScrollAnimationWrapper
              key={project.id}
              animation={index % 3 === 0 ? "fade" : index % 3 === 1 ? "scale" : "rotate"}
              delay={index * 0.1}
              className="h-full"
            >
              <ProjectCard project={project} />
            </ScrollAnimationWrapper>
          ))}
        </motion.div>

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

export default ProjectsSection;
