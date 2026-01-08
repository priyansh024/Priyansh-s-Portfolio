import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-xl mb-1">
              Priyansh<span className="text-primary">.</span>
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
            </p>
          </div>

          <p className="text-background/60 text-sm">
            © {currentYear} Priyansh Mewada. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/priyansh-mewada"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/priyansh-mewada"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:priyanshmewada24@gmail.com"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
