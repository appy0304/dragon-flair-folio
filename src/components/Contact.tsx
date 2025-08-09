import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "appyanmolsen@gmail.com",
      href: "mailto:appyanmolsen@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7728801204",
      href: "tel:7728801204"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      href: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "appy0304",
      href: "https://github.com/appy0304"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "anmol003",
      href: "https://www.linkedin.com/in/anmol003/"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities in research, development, or collaboration. 
            I'm always excited to work on innovative projects!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-tech-primary/10">
                        <info.icon className="text-tech-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium text-tech-primary hover:text-tech-secondary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-card mt-8">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 text-tech-primary">Research Interests</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Currently working on lightweight authentication protocols for IoMT devices. 
                  Open to collaborations in cybersecurity, machine learning, and IoT security research.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send Message</h3>
            
            <Card className="glass-card">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input 
                        placeholder="Your Name"
                        className="bg-background/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input 
                      placeholder="Subject"
                      className="bg-background/50 border-border"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Your message..."
                      rows={6}
                      className="bg-background/50 border-border resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-tech-primary text-background hover:bg-tech-primary/90 tech-glow"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;