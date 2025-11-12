import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Lovely Professional University",
      period: "2025 - Present",
      description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
      achievements: [
        "GPA: ",

      ],
    },
    {
      degree: "Bachelor of Science ",
      institution: "DR. Ram Manohar Lohiya Awadh University",
      period: "2021 - 2024",
      description: "Focus on Mathematics , Analytical Ability .",
      achievements: [
        "CGPA: 8.1/10.0",
        "Academic Excellence Award",
        
      ],
    },
    {
      degree: "INTERMEDIATE ",
      institution: "JR INTER COLLEGE JAMON AMETHI",
      period: "2019 - 2020",
      description: "Focus on Mathematics , BASIC KNOWLEDGE OF COMPUTER.",
      achievements: [
        "PERCENTAGE: 63%",
        
        
      ],
    },
    {
      degree: "Matriculation ",
      institution: "JANTA INTER COLLEGE JAMON AMETHI",
      period: "2018 - 2019",
      description: "Focus on Mathematics , Analytical Ability, Reasoning .",
      achievements: [
        "PERCENTAGE: 81.6%",
        "First Division",
        
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-semibold text-card-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-lg text-primary font-medium mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm text-card-foreground">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
