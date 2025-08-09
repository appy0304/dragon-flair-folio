import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Shield, Coffee, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Autism Prediction System",
      description: "Advanced machine learning system leveraging multiple algorithms including Decision Tree, Random Forest, and XGBoost. Achieved 92% accuracy with SMOTE technique for handling class imbalance and hyperparameter tuning for optimal predictions.",
      icon: Brain,
      technologies: ["Python", "Scikit-learn", "Machine Learning", "SMOTE", "Pandas", "NumPy"],
      achievements: ["92% Accuracy", "Cross-class accuracy", "Hyperparameter optimization"]
    },
    {
      title: "Lightweight IoMT Authentication",
      description: "Research project developing a lightweight authentication protocol using Chebyshev chaotic maps to secure medical IoT systems. Achieves mutual authentication with minimal computational cost and protects against major security attacks.",
      icon: Shield,
      technologies: ["Cryptography", "IoT Security", "Chaotic Maps", "Authentication", "AVISPA"],
      achievements: ["Mutual Authentication", "Minimal Computational Cost", "Security Analysis"]
    },
    {
      title: "Covid Vaccine Slot Finder App",
      description: "Android application to help users find available vaccine slots. Provides information about vaccination centers including name, address, availability, type of vaccine, and dates. Backend framework built with Java and XML.",
      icon: Search,
      technologies: ["Android Studio", "Java", "XML", "API Integration"],
      achievements: ["Real-time slot tracking", "User-friendly interface", "Complete vaccination info"]
    },
    {
      title: "Coffee Ordering App",
      description: "Full-stack coffee ordering application allowing users to select quantity and receive bills. Built with Java backend framework and XML for frontend development, providing seamless ordering experience.",
      icon: Coffee,
      technologies: ["Android Studio", "Java", "XML", "Backend Development"],
      achievements: ["Order management", "Bill generation", "Intuitive UI"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative solutions in ML, security, and mobile development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group hover:tech-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <project.icon className="text-tech-primary" size={28} />
                  <span>{project.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-tech-secondary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-tech-primary/10 text-tech-primary border-tech-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-tech-accent">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-tech-primary rounded-full"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-background"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-tech-secondary text-background hover:bg-tech-secondary/90"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;