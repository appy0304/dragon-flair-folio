import React from 'react';
import { 
  Code, 
  Database, 
  Cpu, 
  Globe, 
  Shield, 
  Smartphone, 
  Cloud, 
  Brain,
  Server,
  Lock
} from 'lucide-react';

const FloatingIcons: React.FC = () => {
  const icons = [
    { Icon: Code, position: { top: '10%', left: '15%' } },
    { Icon: Database, position: { top: '20%', right: '20%' } },
    { Icon: Cpu, position: { top: '60%', left: '10%' } },
    { Icon: Globe, position: { top: '80%', right: '15%' } },
    { Icon: Shield, position: { top: '30%', left: '80%' } },
    { Icon: Smartphone, position: { top: '70%', left: '75%' } },
    { Icon: Cloud, position: { top: '15%', left: '60%' } },
    { Icon: Brain, position: { top: '50%', right: '10%' } },
    { Icon: Server, position: { top: '40%', left: '5%' } },
    { Icon: Lock, position: { top: '85%', left: '40%' } },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, position }, index) => (
        <div
          key={index}
          className="absolute floating-icon opacity-20"
          style={position}
        >
          <Icon 
            size={24} 
            className="text-tech-primary animate-pulse"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;