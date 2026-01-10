import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Lock, Zap, Database, Users, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Online Voting System",
    role: "Java Backend Developer",
    description:
      "Developed a secure online voting platform with modular backend architecture. Designed and implemented 15+ RESTful APIs for voters, candidates, and votes.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
    highlights: [
      { icon: Lock, text: "JWT Auth & RBAC" },
      { icon: Database, text: "Spring Data JPA" },
      { icon: Zap, text: "Optimized APIs" },
      { icon: Users, text: "Team of 3" },
    ],
    github: "https://github.com/priyansh024/Online-voting-system",
    featured: true,
  },
  {
    title: "Huffman File Compressor",
    role: "Java Developer",
    description:
      "Built a file compressor and decompressor using Huffman Coding algorithm. Achieved 25-40% compression using priority queues and tree data structures.",
    techStack: ["Java", "DSA", "Huffman Coding"],
    highlights: [
      { icon: Zap, text: "25-40% Compression" },
      { icon: Database, text: "Priority Queues" },
      { icon: Lock, text: "Bit-Level Encoding" },
    ],
    github: "https://github.com/priyansh024/Huffman-file-compressor",
    featured: false,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] blob-orange rounded-full opacity-20 -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing my backend development expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-card rounded-3xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 group ${
                project.featured ? "lg:row-span-1" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {project.role}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-foreground text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <highlight.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
