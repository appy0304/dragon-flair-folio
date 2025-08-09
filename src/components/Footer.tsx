import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gradient">Anmol Sen</h3>
            <p className="text-sm text-muted-foreground">
              M.Tech Student & Research Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:appyanmolsen@gmail.com"
              className="text-muted-foreground hover:text-tech-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anmol003/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/appy0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Anmol Sen. Built with passion for technology and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;