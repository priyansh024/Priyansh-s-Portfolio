import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, CheckCircle2, Target, Rocket } from "lucide-react";

const highlights = [
  {
    icon: CheckCircle2,
    text: "50+ Complete Projects",
  },
  {
    icon: CheckCircle2,
    text: "8+ Years of Experience",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-[200px] h-[200px] blob-soft rounded-full opacity-60 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-3xl p-8 card-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl">Education</h3>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-secondary/50 rounded-2xl p-5">
                    <h4 className="font-semibold text-foreground mb-1">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <p className="text-primary font-medium text-sm">Medicaps University</p>
                    <p className="text-muted-foreground text-sm mt-1">Aug 2022 – June 2026</p>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary text-primary-foreground rounded-2xl p-4 text-center">
                    <p className="text-2xl font-display font-bold">5+</p>
                    <p className="text-sm opacity-90">Certifications</p>
                  </div>
                  <div className="bg-foreground text-background rounded-2xl p-4 text-center">
                    <p className="text-2xl font-display font-bold">15+</p>
                    <p className="text-sm opacity-90">APIs Built</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              Designing Solutions, Not Just Code
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a final-year Computer Science Engineering student with a deep passion for 
                backend development. My journey in software development started with curiosity 
                about how systems work under the hood.
              </p>
              <p>
                With hands-on experience in Java, Spring Boot, and RESTful API development, 
                I've worked on real-world projects handling authentication, database 
                management, and API design. I believe in writing clean, maintainable code 
                that solves real problems.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 bg-primary/5 rounded-2xl p-4 border border-primary/10"
              >
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Strong Foundation</h4>
                  <p className="text-sm text-muted-foreground">
                    Deep understanding of OOPs, REST APIs, databases, and DSA
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4 bg-foreground/5 rounded-2xl p-4 border border-foreground/10"
              >
                <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Career Goal</h4>
                  <p className="text-sm text-muted-foreground">
                    To grow as a backend/software developer in a professional environment
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
