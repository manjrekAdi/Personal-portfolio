import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
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
    <motion.div
      className="rounded-lg bg-card border border-border overflow-hidden card-hover"
      variants={itemVariants}
    >
      <div className="h-48 overflow-hidden relative bg-muted flex items-center justify-center">
        <svg
          className="w-1/4 h-1/4 text-muted-foreground opacity-30"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v5" />
          <circle cx="18" cy="18" r="3" />
          <path d="m14 18 1.5-1.5" />
          <path d="M19.5 16.5 21 15" />
          <path d="m21 19-1.5-1.5" />
          <path d="M16.5 21 15 19.5" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className={cn("text-muted-foreground mb-4 text-sm line-clamp-3")}>{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md bg-primary/20 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.projectUrl}
          className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center"
        >
          View Details <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
