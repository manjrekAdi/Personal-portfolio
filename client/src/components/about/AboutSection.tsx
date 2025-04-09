import { motion } from "framer-motion";
import { GraduationCap, Code, Microscope, Lightbulb } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Computer Science and Neuropsychology student with a passion for AI, machine learning, and XR technologies.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Education Section */}
          <motion.div 
            className="p-6 rounded-lg bg-card border border-border card-hover"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Lassonde Engineering - York University</p>
                <p>Computer Science and Neuropsychology Hons. BSc. (2021-2026)</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Canada School of Public Service</p>
                <p>Project Management and Business Operations (2023-2024)</p>
              </div>
            </div>
          </motion.div>
          
          {/* Technical Focus */}
          <motion.div 
            className="p-6 rounded-lg bg-card border border-border card-hover"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Code className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Technical Focus</h3>
            </div>
            
            <p className="mb-4 text-muted-foreground">I specialize in software engineering with a focus on:</p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Machine Learning & AI",
                "XR/VR Technologies",
                "Data Analysis & Visualization",
                "Full-Stack Development",
                "Embedded Systems"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Research Interests */}
          <motion.div 
            className="p-6 rounded-lg bg-card border border-border card-hover"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Microscope className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Research Interests</h3>
            </div>
            
            <p className="mb-4 text-muted-foreground">My research focuses on the intersection of:</p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Neuroscience & Cognitive Computing",
                "Human-Computer Interaction",
                "Large Language Models",
                "Computer Vision",
                "Visuomotor Neuroscience"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Professional Philosophy */}
          <motion.div 
            className="p-6 rounded-lg bg-card border border-border card-hover"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                <Lightbulb className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Professional Philosophy</h3>
            </div>
            
            <p className="mb-4 text-muted-foreground">I believe in:</p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Clean, modular coding practices",
                "Rigorous testing and documentation",
                "Interdisciplinary collaboration",
                "Continuous learning and improvement",
                "Ethical technology development"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
