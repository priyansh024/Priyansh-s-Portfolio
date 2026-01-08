import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock, Zap, Database, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Online Voting System",
    role: "Java Backend Developer",
    description:
      "Developed a secure online voting platform with modular backend architecture. Designed and implemented 15+ RESTful APIs for voters, candidates, and votes.",
    techStack: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "JWT", "MySQL", "Bootstrap"],
    highlights: [
      { icon: Lock, text: "JWT Authentication & Role-Based Authorization" },
      { icon: Database, text: "MySQL with Spring Data JPA & Hibernate" },
      { icon: Zap, text: "Optimized API Response Time" },
      { icon: Users, text: "3-Member Team Collaboration" },
    ],
    github: "#",
  },
  {
    title: "Huffman File Compressor",
    role: "Java Developer",
    description:
      "Built a file compressor and decompressor using Huffman Coding algorithm. Achieved 25-40% compression using priority queues and tree data structures.",
    techStack: ["Java", "DSA", "Huffman Coding"],
    highlights: [
      { icon: Zap, text: "25-40% Compression Rate" },
      { icon: Database, text: "Priority Queue Implementation" },
      { icon: Lock, text: "Bit-Level Encoding/Decoding" },
    ],
    github: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing my backend development skills
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 border-gradient"
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium text-sm">{project.role}</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button asChild size="sm" variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <highlight.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
