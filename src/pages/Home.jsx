import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/ModernBackground";
import React from "react";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { RevealOnScroll } from "../components/RevealOnScroll";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Background Effects */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <ExperienceSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <SkillsSection />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <ProjectsSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <ContactSection />
        </RevealOnScroll>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
