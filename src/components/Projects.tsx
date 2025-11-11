import { ExternalLink, Github } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Dice Roller App",
      description: "A Dice game.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      links: {
        demo: "https://kk96283929-max.github.io/dice/",
        github: "https://github.com/kk96283929-max/dice",
      },
    },
    {
      title: "food_multi_theme",
      description: "Collaborative FOOD management tool with real-time updates, team collaboration, and progress tracking.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      links: {
        demo: "https://kk96283929-max.github.io/food_multi_theme/",
        github: "https://github.com/kk96283929-max/food_multi_theme",
      },
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-border bg-card"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo} className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
