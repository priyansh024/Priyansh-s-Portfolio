import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "CCNA",
    issuer: "Cisco Networking Academy",
    icon: "🌐",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    icon: "🐍",
  },
  {
    title: "Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: "🔒",
  },
  {
    title: "Java Programming Certificate",
    issuer: "Professional Certification",
    icon: "☕",
  },
  {
    title: "Wittyhack's 36-Hour Hackathon",
    issuer: "Hackathon Participation",
    icon: "🏆",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{cert.icon}</div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
                <Award className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
