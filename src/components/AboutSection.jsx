import { BookOpenText, CodeXml, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Developer
            </h3>
            <p className="text-muted-foreground">
              What excites me most about computer science is the challenge of
              solving complex problems and turning ideas into real, working
              systems. I enjoy optimizing workflows, automating repetitive
              tasks, and exploring new technologies through both academic and
              personal projects.
            </p>
            <p className="text-muted-foreground">
              Outside of coding, I enjoy staying active through working out, 
              participating in intramural team sports, and am an avid alpine skier. 
              Aside from sports, I am passionate about music and especially enjoy attending concerts and festivals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="Milin_Nicholas_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">McGill University</p>
                  <p className="text-muted-foreground">
                    B.Sc. in Computer Science <br /> Minor in Mathematics
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpenText className="h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Course Work</h4>
                  <p className="text-muted-foreground">
                    Machine Learning, Algorithm Design, <br />
                    Data Structures, Software Design, <br />
                    Operating Systems, Calculus, Statistics
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CodeXml className="h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Coding Competitions</h4>
                  <p className="text-muted-foreground">
                    McHacks 12 <br />
                    McGill CodeJam 14 <br />
                  </p>
                  <a
                    href="https://devpost.com/nicholas-milin/challenges"
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-sm font-medium"
                  >
                    {" "}
                    View my Devpost
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
