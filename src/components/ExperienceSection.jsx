import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Hydro Ottawa",
      position: "Summer Student",
      years: "2024-2025",
      responsibilities: [
        "Supported the Regulatory Affairs team in preparing responses to intervenor questions for Hydro Ottawa's 2026 Rate Application",
        "Collected and organized data to develop forecasting scenarios in anticipation of regulatory inquiries",
        "Conducted regression testing and analyzed the statistical significance of data trends",
      ],
      achievements: [
        "Developed efficient macros in Microsoft Excel and Google Sheets to automate forecasting scenario, increasing development speed by over 200%",
        "Gained hands-on experience with JDE Hubble, using it to query databases and generate detailed reports",
        "Designed dynamic, formula-based tracking sheets that automatically updated based on new inputs",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="gradient-border p-8 card-hover">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {experience.company} - {experience.position}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{experience.years}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {experience.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
