import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Shield, Code, Trophy } from "lucide-react";

const certifications = [
  {
    title: "CCNA",
    issuer: "Cisco Networking Academy",
    icon: Globe,
    color: "bg-blue-500",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    icon: Code,
    color: "bg-green-500",
  },
  {
    title: "Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: Shield,
    color: "bg-red-500",
  },
  {
    title: "Java Programming",
    issuer: "Professional Certification",
    icon: Code,
    color: "bg-orange-500",
  },
  {
    title: "Wittyhack's Hackathon",
    issuer: "36-Hour Hackathon",
    icon: Trophy,
    color: "bg-purple-500",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Certifications & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 group text-center"
            >
              <div className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
