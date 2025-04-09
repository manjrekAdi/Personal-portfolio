import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import LiveProjectsSection from "@/components/projects/LiveProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import BooksSection from "@/components/books/BooksSection";
import ContactSection from "@/components/contact/ContactSection";

const Home = () => {
  useEffect(() => {
    document.title = "Ali Rezaei - Software Engineer & Researcher";
    
    // Set meta tags for better SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Ali Rezaei is a software engineer and researcher specializing in AI, machine learning, and XR technologies.';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <LiveProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <BooksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
