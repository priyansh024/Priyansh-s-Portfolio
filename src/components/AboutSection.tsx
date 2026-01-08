import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Users, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      title: "Backend Focus",
      description: "Passionate about building robust backend systems with Java and Spring Boot",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experience working in collaborative team-based project environments",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Strong understanding of DSA, OOPs, and software design principles",
    },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and aspirations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Education Card */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8 border-gradient">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="text-primary font-medium">Medicaps University</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Aug 2022 – June 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year Computer Science Engineering student with a deep passion for 
                backend development. My journey in software development started with curiosity 
                about how systems work under the hood, which led me to focus on building 
                secure and scalable server-side applications.
              </p>
              <p>
                With hands-on experience in Java, Spring Boot, and RESTful API development, 
                I've worked on real-world projects that handle authentication, database 
                management, and API design. I believe in writing clean, maintainable code 
                that solves real problems.
              </p>
              <p>
                My goal is to grow as a backend/software developer in a professional 
                environment where I can contribute to meaningful projects while continuously 
                learning and improving my craft.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
