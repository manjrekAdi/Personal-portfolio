import { motion } from "framer-motion";
import { Code, GraduationCap, Lightbulb, Microscope } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper animation="zoom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            Computer Science student with a passion for software development, data analytics, and full-stack web applications.
          </p>
        </ScrollAnimationWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {/* Education Section */}
          <ScrollAnimationWrapper animation="fade" delay={0.2} className="h-full">
            <motion.div 
              className="p-6 rounded-lg bg-card border border-border card-hover h-full flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground flex-grow">
                <div>
                  <p className="font-medium text-foreground">York University</p>
                  <p>Bachelor of Science in Computer Science (Sept 2021 - Expected Apr 2026)</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Relevant Coursework</p>
                  <p>Object-Oriented Programming, Data Structures and Algorithms, Database Management Systems, Web Development</p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          
          {/* Technical Focus */}
          <ScrollAnimationWrapper animation="fade" delay={0.3} className="h-full">
            <motion.div 
              className="p-6 rounded-lg bg-card border border-border card-hover h-full flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Code className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Technical Focus</h3>
              </div>
              
              <div className="flex-grow">
                <p className="mb-4 text-muted-foreground">I specialize in software engineering with a focus on:</p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Full-Stack Web Development",
                    "Java & Spring Boot Applications",
                    "React & Angular Frameworks",
                    "Data Analysis & Visualization",
                    "Database Design & Management"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <span className="text-primary mr-2">✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          
          {/* Research Interests */}
          <ScrollAnimationWrapper animation="scale" delay={0.4} className="h-full">
            <motion.div 
              className="p-6 rounded-lg bg-card border border-border card-hover h-full flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Microscope className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Research Interests</h3>
              </div>
              
              <div className="flex-grow">
                <p className="mb-4 text-muted-foreground">My interests focus on the intersection of:</p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Data Science & Machine Learning",
                    "Artificial Intelligence & Deep Learning",
                    "Full Stack Development & Cloud Computing",
                    "Quantum Computing & Quantum ML",
                    "Large Language Models & AI Applications"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-primary mr-2">✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          
          {/* Professional Philosophy */}
          <ScrollAnimationWrapper animation="rotate" delay={0.5} className="h-full">
            <motion.div 
              className="p-6 rounded-lg bg-card border border-border card-hover h-full flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Lightbulb className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Professional Philosophy</h3>
              </div>
              
              <div className="flex-grow">
                <p className="mb-4 text-muted-foreground">I believe in:</p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Clean, modular coding practices",
                    "Rigorous testing and documentation",
                    "Interdisciplinary collaboration",
                    "Continuous learning and improvement",
                    "Ethical technology development"
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <span className="text-primary mr-2">✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
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

export default AboutSection;
