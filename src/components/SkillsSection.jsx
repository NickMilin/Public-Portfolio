"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
const basePath = import.meta.env.BASE_URL;

const basePath = import.meta.env.BASE_URL;

const skills = [
  {
    name: "Python",
    category: "backend",
    logo: `${basePath}logos/Python.svg`,
    description: "Versatile programming",
  },

  {
    name: "Java",
    category: "backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description: "Object-oriented programming",
  },

  {
    name: "C",
    category: "backend",
    logo: `${basePath}logos/C.svg`,
    description: "Low-level programming",
  },

  {
    name: "C++",
    category: "backend",
    logo: `${basePath}logos/C++.svg`,
    description: "Object-oriented systems",
  },

  {
    name: "HTML",
    category: "frontend",
    logo: `${basePath}logos/HTML.svg`,
    description: "Markup for web content",
  },

  {
    name: "JavaScript",
    category: "frontend",
    logo: `${basePath}logos/JavaScript.svg`,
    description: "Dynamic web development",
  },

  {
    name: "CSS",
    category: "frontend",
    logo: `${basePath}logos/CSS.svg`,
    description: "Styling web pages",
  },

  {
    name: "React",
    category: "frontend",
    logo: `${basePath}logos/React.svg`,
    description: "Component-based UI",
  },

  {
    name: "Tailwind CSS",
    category: "frontend",
    logo: `${basePath}logos/Tailwind.svg`,
    description: "Utility-first CSS",
  },

  {
    name: "R",
    category: "backend",
    logo: `${basePath}logos/R.svg`,
    description: "Statistical computing",
  },

  {
    name: "OCaml",
    category: "backend",
    logo: `${basePath}logos/Ocaml.svg`,
    description: "Functional programming",
  },

  {
    name: "Selenium",
    category: "tools",
    logo: `${basePath}logos/Selenium.svg`,
    description: "Automated browser testing",
  },

  {
    name: "Bash",
    category: "tools",
    logo: `${basePath}logos/Bash.svg`,
    description: "Command-line scripting",
  },

  {
    name: "Git",
    category: "tools",
    logo: `${basePath}logos/Git.svg`,
    description: "Version control",
  },

  {
    name: "GitHub",
    category: "tools",
    logo: `${basePath}logos/Github.svg`,
    description: "Code hosting & collaboration",
  },

  {
    name: "GitLab",
    category: "tools",
    logo: `${basePath}logos/Gitlab.svg`,
    description: "DevOps platform",
  },

  {
    name: "IntelliJ",
    category: "tools",
    logo: `${basePath}logos/IntelliJ.svg`,
    description: "Java IDE",
  },

  {
    name: "PyCharm",
    category: "tools",
    logo: `${basePath}logos/PyCharm.svg`,
    description: "Python IDE",
  },

  {
    name: "VS Code",
    category: "tools",
    logo: `${basePath}logos/VS Code.svg`,
    description: "Code editor",
  },
];


const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I work with to
          bring ideas to life.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium",
                "hover:scale-105 hover:shadow-lg",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "group relative bg-card p-6 rounded-xl shadow-sm border border-border",
                "hover:shadow-xl hover:scale-105 hover:border-primary/50",
                "transition-all duration-300 cursor-pointer",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Logo */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg p-2 transition-all duration-300",
                      "group-hover:scale-110 group-hover:rotate-3",
                      "bg-gradient-to-br from-primary/10 to-primary/5"
                    )}
                  >
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      className={cn(
                        "w-full h-full object-contain",
                        skill.name === "GitHub" && "invert-logo",
                        skill.name === "Bash" && "invert-logo"
                      )}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="w-full h-full bg-primary/20 rounded flex items-center justify-center text-primary font-bold text-lg hidden">
                      {skill.name.charAt(0)}
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-lg bg-primary/20 blur-xl transition-opacity duration-300",
                      hoveredSkill === skill.name ? "opacity-50" : "opacity-0"
                    )}
                  />
                </div>

                {/* Skill Name */}
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>

                  {/* Description on hover */}
                  <p
                    className={cn(
                      "text-xs text-muted-foreground mt-1 transition-all duration-300",
                      hoveredSkill === skill.name
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-2"
                    )}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Animated border */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl border-2 border-primary transition-opacity duration-300",
                  hoveredSkill === skill.name ? "opacity-100" : "opacity-0"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
