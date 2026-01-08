import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "SQL", "C", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring MVC", "Spring Security"],
  },
  {
    title: "ORM & Libraries",
    skills: ["Spring Data JPA", "Hibernate"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Oracle"],
  },
  {
    title: "Tools",
    skills: ["Postman", "Maven", "Git & GitHub", "VS Code", "Eclipse", "MySQL Workbench"],
  },
  {
    title: "Concepts",
    skills: ["REST APIs", "JWT Authentication", "Role-Based Auth", "OOPs", "DSA", "Operating Systems"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
