import { useEffect } from "react";
import { setupScrollTrigger } from "@/lib/gsap";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import WorkExperience from "@/components/work-experience";
import EducationSection from "@/components/education-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    setupScrollTrigger();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkExperience />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}