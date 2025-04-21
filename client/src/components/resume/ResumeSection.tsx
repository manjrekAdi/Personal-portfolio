import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  const handleDownload = () => {
    // The URL is relative to the public directory
    const resumeUrl = "/resume.pdf";
    
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank"; // Open in new tab
    link.rel = "noopener noreferrer";
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Resume</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center gap-3 shadow-lg hover:shadow-primary/20"
            >
              <Download size={22} />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection; 