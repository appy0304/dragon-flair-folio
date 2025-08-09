import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-tech-primary text-lg mb-4 hero-text">
            M.Tech Student & Research Enthusiast
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text">
            <span className="text-gradient">Anmol Sen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto hero-text">
            Computer Science Engineering student specializing in Information Security and Privacy, 
            with expertise in Machine Learning, IoT, and full-stack development
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 stagger-animation">
            <Button 
              size="lg" 
              className="tech-glow bg-tech-primary text-background hover:bg-tech-primary/90 animate-pulse-glow"
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-tech-secondary text-tech-secondary hover:bg-tech-secondary hover:text-background"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8 stagger-animation">
            <a 
              href="mailto:appyanmolsen@gmail.com"
              className="text-muted-foreground hover:text-tech-primary transition-colors"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anmol003/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/appy0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-tech-primary transition-colors"
            >
              <Github size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground stagger-animation">
            <div className="flex items-center justify-center space-x-2">
              <Phone size={16} />
              <span>7728801204</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin size={16} />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;