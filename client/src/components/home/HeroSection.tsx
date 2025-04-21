import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import NetworkBackground from "./NetworkBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 md:pt-32 flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto backdrop-blur-sm bg-background/20 p-8 rounded-2xl shadow-lg border border-primary/10"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aditya Manjrekar
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-medium text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Software Developer
        </motion.h2>
        
        <motion.p 
            className="max-w-2xl mx-auto text-muted-foreground mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Computer Science student specializing in full-stack development with experience in Java, React, Angular, and data analytics.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
            <Button 
              asChild 
              size="lg" 
              className="bg-primary/90 hover:bg-primary shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
            <a href="#projects">View Projects</a>
          </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="backdrop-blur-sm bg-background/20 border-primary/20 hover:bg-background/30 hover:border-primary/40 transition-all duration-300"
            >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
        
        <motion.div 
            className="flex justify-center space-x-6 text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://github.com/manjrekAdi" 
            target="_blank" 
            rel="noopener noreferrer" 
              className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/m-adi05/" 
            target="_blank" 
            rel="noopener noreferrer" 
              className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:manjrekadi05@gmail.com" 
              className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
