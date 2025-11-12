import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Certificates = () => {
  const certificates = [
    {
      title: " Hackathon ",
      issuer: " CODIN NINJAS ",
      date: "2025",
      image: "/hack hathon certificate_page-0001.jpg",
      link: "https://drive.google.com/file/d/1zPS4fnWHutH0VBmPdgUwgk_hk7xcz6hV/view?usp=drive_link"
    },
    
     {
      title: "UI/UX Design Professional",
      issuer: "Itronic Solutions",
      date: "2025",
      image: "/ui ux.jpg",
      link: "https://drive.google.com/file/d/1jsOBTAWFKxnP0ew5eWuw1n2dXlTQth6a/view?usp=sharing"
    },
    {
      title: "Machine Learning with Python",
      issuer: "Itronic Solutions",
      date: "2025",
      image: "/python certificate.jpg",
      link: "https://drive.google.com/file/d/1L4tCy_gtJop1GfGpTUqcni4PZIFLwed6/view?usp=drive_link"
    },
    {
      title: "Data Base Management Expert",
      issuer: "Itronic Solutions",
      date: "2025",
      image: "/data base management system.jpg",
      link: "https://drive.google.com/file/d/1AM4tYuSZ11ReX8NhZadaHlNgKYwQZYzF/view?usp=drive_link"
    },
    {
      title: "Design Systems Expert",
      issuer: "Tech Academy",
      date: "2022",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Certificates & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and courses that showcase my commitment to continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground/70 mb-4">{cert.date}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
