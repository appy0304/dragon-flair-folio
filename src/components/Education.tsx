import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "M.Tech in Computer Science Engineering",
      specialization: "Information Security and Privacy",
      institution: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
      duration: "2023 - 2025",
      grade: "79%",
      status: "Current"
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "University College of Engineering and Technology, Bikaner",
      duration: "2019 - 2023",
      grade: "84%",
      status: "Completed"
    },
    {
      degree: "Class XII",
      institution: "Bhuvnesh Bal Vidhyalaya, Kota",
      duration: "2017 - 2018",
      grade: "N/A",
      status: "Completed"
    },
    {
      degree: "Class X",
      institution: "Bhuvnesh Bal Vidhyalaya, Kota",
      duration: "2015 - 2016",
      grade: "87%",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      icon: "🤖"
    },
    {
      title: "Android App Development",
      issuer: "Certification Authority",
      year: "08/2022 - 09/2022",
      icon: "📱"
    },
    {
      title: "NPTEL Certification - Software Testing",
      issuer: "NPTEL",
      icon: "🧪"
    },
    {
      title: "STEM Program",
      issuer: "Deloitte",
      year: "09/2022 - 09/2022",
      icon: "🎯"
    }
  ];

  const achievements = [
    {
      title: "NET Qualified (Computer Science)",
      description: "2025 with 93.30%",
      color: "tech-primary"
    },
    {
      title: "GATE CSE Qualified",
      description: "2023 (Score: 241)",
      color: "tech-secondary"
    },
    {
      title: "CodeChef 3 Star",
      description: "Max Rating: 1692, Secured 27th Rank globally in Starter 52 Division 3, 2022",
      color: "tech-accent"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic journey and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-tech-primary" />
              Academic Background
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-tech-primary">{edu.degree}</h4>
                      {edu.specialization && (
                        <p className="text-tech-secondary font-medium">{edu.specialization}</p>
                      )}
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="mt-3 md:mt-0 text-right">
                      <Badge variant="outline" className="border-tech-primary text-tech-primary mb-2">
                        {edu.status}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                  {edu.grade !== "N/A" && (
                    <div className="flex items-center">
                      <Award size={16} className="mr-2 text-tech-accent" />
                      <span className="text-sm font-medium">Grade: {edu.grade}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{cert.icon}</span>
                        <div>
                          <h4 className="font-semibold text-sm">{cert.title}</h4>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                          {cert.year && (
                            <p className="text-xs text-tech-primary">{cert.year}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="p-4">
                      <h4 className={`font-semibold mb-2 text-${achievement.color}`}>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;