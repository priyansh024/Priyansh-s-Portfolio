import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] blob-orange rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-90 -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] blob-soft rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -z-10" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[20%] hidden lg:block"
      >
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[15%] hidden lg:block"
      >
        <div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
          <Database className="w-5 h-5 text-foreground" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-60 left-[10%] hidden lg:block"
      >
        <Sparkles className="w-8 h-8 text-primary/60" />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold mb-4 text-lg"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-2 text-foreground leading-tight"
            >
              Priyansh Mewada
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-display font-bold mb-6"
            >
              A <span className="text-gradient">Java Backend Developer</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed"
            >
              Building secure, scalable backend systems with Java and Spring Boot. 
              Passionate about clean code and robust API design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/resume.pdf" download="Priyansh_Mewada_Resume.pdf">
                  Download CV
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact" className="group">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center mr-2 group-hover:bg-background group-hover:text-foreground transition-colors">
                    <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                  </div>
                  Contact Me
                </a>
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 mt-12"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">5+</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Projects</p>
                  <p className="text-muted-foreground">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">15+</span>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">REST APIs</p>
                  <p className="text-muted-foreground">Developed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-2 right-0 lg:right-10 bg-card card-shadow rounded-2xl px-5 py-4 z-10"
            >
              <p className="text-3xl font-display font-bold text-foreground">B.Tech</p>
              <p className="text-sm text-muted-foreground">CSE Student</p>
            </motion.div>

            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden border-4 border-card card-shadow">
                <img
                  src={profileImage}
                  alt="Priyansh Mewada"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
