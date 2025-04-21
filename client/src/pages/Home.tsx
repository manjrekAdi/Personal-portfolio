import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ContactSection from "@/components/contact/ContactSection";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const Home = () => {
  useEffect(() => {
    document.title = "Aditya Manjrekar - Software Developer";
    
    // Set meta tags for better SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Aditya Manjrekar is a computer science student and software developer specializing in full-stack development, Java, and React applications.';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimateOnScroll>
        <HeroSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.2}>
        <AboutSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.3}>
        <ProjectsSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.3}>
        <SkillsSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.4}>
        <ExperienceSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.5}>
          <ResumeSection />
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.6}>
        <ContactSection />
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
