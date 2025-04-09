import { Link } from "wouter";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Ali Rezaei. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-xl text-muted-foreground">
            <a 
              href="https://github.com/AliRezaei-Code" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ali-r-652a7970" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:alirez@my.yorku.ca" 
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+14372389820" 
              className="hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
