import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
            >
              Priyansh{" "}
              <span className="text-gradient">Mewada</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground font-display mb-6"
            >
              Java Backend Developer | Spring Boot | REST APIs
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed"
            >
              Building secure, scalable backend systems with Java and Spring Boot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="glow-sm">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
                <img
                  src={profileImage}
                  alt="Priyansh Mewada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
