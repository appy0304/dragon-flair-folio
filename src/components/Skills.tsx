import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Machine Learning & Libraries",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "NumPy", level: 90 },
        { name: "Pandas", level: 88 },
        { name: "Matplotlib", level: 80 }
      ]
    },
    {
      title: "Database & Query Languages",
      icon: Database,
      skills: [
        { name: "SQL", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "Database Design", level: 80 },
        { name: "Query Optimization", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "Android Studio", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "MySQL Workbench", level: 78 }
      ]
    }
  ];

  const areas = [
    "Machine Learning (ML)",
    "Database Management Systems (DBMS)", 
    "Object-Oriented Programming (OOP)",
    "Computer Networks (CN)",
    "Operating Systems (OS)",
    "Data Structures & Algorithms (DSA)"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expertise across multiple domains of computer science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <category.icon className="text-tech-primary" size={24} />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-center">Areas of Interest</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {areas.map((area, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-tech-primary/5 border border-tech-primary/20 hover:bg-tech-primary/10 transition-colors"
                >
                  <span className="text-tech-primary font-medium">{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;