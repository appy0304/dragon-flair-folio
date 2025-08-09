import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gradient">
          ANMOL SEN
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground hover:text-tech-primary transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </nav>

        <Button 
          variant="outline" 
          className="tech-glow border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-background"
        >
          Download Resume
        </Button>
      </div>
    </header>
  );
};

export default Header;