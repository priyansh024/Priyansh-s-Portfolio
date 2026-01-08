import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Wrench, Lightbulb, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "bg-orange-500",
    skills: ["Java", "SQL", "C", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "bg-blue-500",
    skills: ["Spring Boot", "Spring MVC", "Spring Security"],
  },
  {
    title: "ORM & Libraries",
    icon: Server,
    color: "bg-green-500",
    skills: ["Spring Data JPA", "Hibernate"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-purple-500",
    skills: ["MySQL", "Oracle"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "bg-pink-500",
    skills: ["Postman", "Maven", "Git & GitHub", "VS Code", "Eclipse", "MySQL Workbench"],
  },
  {
    title: "Concepts",
    icon: Lightbulb,
    color: "bg-amber-500",
    skills: ["REST APIs", "JWT Auth", "Role-Based Auth", "OOPs", "DSA", "Operating Systems"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] blob-soft rounded-full opacity-50 -z-10 translate-x-1/2" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Expertise & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build robust backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-3xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
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
