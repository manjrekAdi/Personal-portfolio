import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ScrollAnimationWrapper from "../ui/ScrollAnimationWrapper";

const footerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const linkHoverVariants = {
  initial: { x: 0 },
  hover: { 
    x: 5,
    transition: { duration: 0.2 }
  }
};

const socialHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border/50 text-foreground">
      <ScrollAnimationWrapper animation="fade" threshold={0.1}>
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <motion.div
              variants={footerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">About</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate developer focused on creating beautiful and functional web experiences. Let's build something amazing together.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={footerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <motion.li key={link} variants={linkHoverVariants} whileHover="hover">
                    <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              variants={footerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/manjrekAdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialHoverVariants}
                  whileHover="hover"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aditya-manjrekar-213b56275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialHoverVariants}
                  whileHover="hover"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:manjrekadi05@gmail.com"
                  variants={socialHoverVariants}
                  whileHover="hover"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaTwitter size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Copyright Section */}
          <motion.div
            className="mt-8 pt-8 border-t border-border/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Aditya Manjrekar. All rights reserved.
            </p>
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
    </footer>
  );
};

export default Footer;
