"use client";

import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import ProjectsSection from "./components/projects-section";
import ContactSection from "./components/contact-section";
import { GrainOverlay } from "@/components/motion/grain-overlay";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-background">
      <GrainOverlay />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
