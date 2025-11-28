import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import LazyImage from "@/components/ui/LazyImage";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative bg-card/60 backdrop-blur-lg rounded-3xl border border-border/40 overflow-hidden h-full flex flex-col shadow-lg card-3d"
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: -5,
        z: 10
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {project.image && (
        <div className="w-full h-48 overflow-hidden">
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            skeletonClassName="rounded-t-3xl"
          />
        </div>
      )}
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
