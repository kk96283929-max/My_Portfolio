import { Code2, Palette, Zap } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions with modern best practices",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating intuitive interfaces that users love to interact with",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project",
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center animate-fade-in">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            {/* Profile Image */}
            <div className="w-full md:w-1/3 animate-slide-up">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <img 
                    src="src\assets\mine.png" 
                    alt="Profile" 
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* About Text */}
            <div className="w-full md:w-2/3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate UI/UX designer with a keen eye for detail and a drive to create
                exceptional digital experiences. With expertise in modern design tools and methodologies,
                I bring ideas to life through thoughtful design and user-centered approaches.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My focus is on creating intuitive, accessible, and visually stunning interfaces that
                not only look great but also provide seamless user experiences. I believe great design
                is where creativity meets functionality.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-slide-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
