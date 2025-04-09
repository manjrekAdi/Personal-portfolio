import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ProjectCard from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

type ProjectCategory = "all" | "aiml" | "research" | "webdev" | "hardware";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

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
      },
    },
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          A selection of my recent work across various domains and technologies.
        </p>

        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                activeCategory === category.value
                  ? "bg-primary text-white"
                  : "bg-card hover:bg-muted"
              )}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
