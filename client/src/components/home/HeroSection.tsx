import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import NetworkBackground from "./NetworkBackground";
import Typewriter from "typewriter-effect";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const HeroSection = () => {
  const roles = [
    "SWE @ TD Bank",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Software Engineer"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <NetworkBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 z-[1]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <ScrollAnimationWrapper animation="zoom">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-foreground relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="relative">
                Aditya Manjrekar
                {/* Glow Effect */}
                <motion.span
                  className="absolute inset-0 blur-2xl opacity-30 bg-primary"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.h1>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.2}>
            <div className="text-3xl md:text-4xl font-semibold mb-6 text-primary min-h-[3rem] md:min-h-[4rem]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(roles[0])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(roles[1])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(roles[2])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(roles[3])
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
                options={{
                  cursor: "|",
                  delay: 50,
                  loop: true,
                  autoStart: true,
                  wrapperClassName: "text-primary"
                }}
              />
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.3}>
            <motion.p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 mt-6">
              Software Engineer at TD Bank and Computer Science student at York University. 
              Passionate about full-stack development, AI/ML, and building scalable applications 
              with Java, Spring Boot, React, Python, and modern web technologies.
            </motion.p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.4}>
            <div className="flex justify-center gap-4 mb-12">
              <Link to="projects" smooth={true} duration={500}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="text-base rounded-xl !bg-primary/60 backdrop-blur-lg !border !border-primary/40 hover:!bg-primary/70 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden"
                    style={{
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                    }}
                  >
                    View Projects
                  </Button>
                </motion.div>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-base rounded-xl !bg-card/60 backdrop-blur-lg !border !border-border/40 hover:!bg-card/70 hover:!border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    style={{
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Link>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.5}>
            <TooltipProvider>
              <div className="flex justify-center gap-6 mb-16">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="https://github.com/manjrekAdi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors relative"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={32} />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub Profile</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="https://www.linkedin.com/in/aditya-manjrekar-213b56275/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors relative"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={32} />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn Profile</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="mailto:manjrekadi05@gmail.com"
                      className="text-foreground/80 hover:text-primary transition-colors relative"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={32} />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send Email</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link to="about" smooth={true} duration={800}>
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer group"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              Scroll Down
            </span>
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown 
                size={24} 
                className="text-primary group-hover:text-primary/80 transition-colors"
              />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
