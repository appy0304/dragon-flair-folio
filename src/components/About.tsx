import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const highlights = [
    "NET Qualified (93.30%)",
    "GATE CSE Qualified (Score: 241)", 
    "3 Star CodeChef (Max Rating: 1692)",
    "27th Rank Globally in CodeChef Contest",
    "Multiple Certifications in ML & Development"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about cybersecurity, machine learning, and building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-tech-primary">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently pursuing my M.Tech in Computer Science Engineering with specialization 
                  in Information Security and Privacy at SVNIT, Surat. With a strong foundation in 
                  computer science and a passion for cybersecurity research, I focus on developing 
                  lightweight authentication schemes for IoT and medical devices.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-tech-secondary">Research Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My research work involves designing and analyzing lightweight three-factor 
                  authentication schemes for Internet of Medical Things (IoMT) devices, 
                  focusing on security, efficiency, and practical implementation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-tech-accent">Key Achievements</h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tech-primary rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-tech-primary">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Cybersecurity', 'IoT', 'Database Systems', 'Android Development', 'Research'].map((interest) => (
                    <Badge key={interest} variant="secondary" className="bg-tech-primary/10 text-tech-primary border-tech-primary/20">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;