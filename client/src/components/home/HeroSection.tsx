import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import NetworkBackground from "./NetworkBackground";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <NetworkBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <ScrollAnimationWrapper animation="zoom">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
            >
              Aditya Manjrekar
            </motion.h1>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.2}>
            <div className="text-3xl md:text-4xl font-semibold mb-6 text-primary/90">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Data Scientist and Full Stack Developer")
                    .start();
                }}
                options={{
                  cursor: "|",
                  delay: 50,
                  loop: false,
                  autoStart: false,
                  wrapperClassName: "text-primary/90"
                }}
              />
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.3}>
            <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 mt-6">
              Computer Science student specializing in full-stack development with experience in
              Java, React, Angular, and data analytics.
            </motion.p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.4}>
            <div className="flex justify-center gap-4 mb-12">
              <Link to="projects" smooth={true} duration={500}>
                <Button size="lg" className="text-base">
                  View Projects
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button size="lg" variant="outline" className="text-base">
                  Contact Me
                </Button>
              </Link>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade" delay={0.5}>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/manjrekAdi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/m-adi05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:manjrekadi05@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
