import { motion } from "framer-motion";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative bg-card rounded-lg border border-border overflow-hidden h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        
        {/* Description */}
        <p className="text-muted-foreground mb-4 flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech: string, index: number) => (
            <motion.span
              key={tech}
              className="px-2 py-1 rounded-md text-sm bg-primary/10 text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
                delay: 0.1 * index,
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
