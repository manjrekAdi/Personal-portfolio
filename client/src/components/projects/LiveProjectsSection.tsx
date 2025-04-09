import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { liveProjects } from "@/lib/data";

const LiveProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? liveProjects.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === liveProjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="live-projects" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Live Projects</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Explore my active projects and live demos across different platforms and technologies.
        </p>

        {/* Live Projects Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {liveProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-6 md:p-10 bg-card rounded-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 rounded-md bg-primary/20 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Live Demo <ExternalLink size={16} className="ml-2" />
                          </a>
                        </Button>
                        <Button asChild variant="outline">
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            GitHub Repo <Github size={16} className="ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="w-full h-64 md:h-96 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                        <svg
                          className="w-1/3 h-1/3 text-muted-foreground opacity-50"
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
                          <path d="M4 3.1A2.1 2.1 0 0 1 6.1 1h11.8A2.1 2.1 0 0 1 20 3.1v14.8a2.1 2.1 0 0 1-2.1 2.1h-4.9V23l-3-3-3 3v-3H6.1A2.1 2.1 0 0 1 4 17.9z" />
                          <path d="M8 12h8" />
                          <path d="M8 8h8" />
                          <path d="M8 16h5.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-background text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
            onClick={goToPrevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-background text-primary p-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
            onClick={goToNextSlide}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {liveProjects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full bg-primary transition-opacity ${
                  currentSlide === index ? "opacity-100" : "opacity-40"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveProjectsSection;
