/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { DesignProcess } from './components/DesignProcess';
import { SkillsSection } from './components/SkillsSection';
import { SelectedWork } from './components/SelectedWork';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AchievementSection } from './components/AchievementSection';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'achievements', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#050505] selection:bg-[#FFB43B] selection:text-black font-sans relative">
      {/* Top Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section: Oversized Typography & Vibrant Orange Image Container */}
        <HeroSection />

        {/* 2. About Me Section: Full-Width Black Drama & Radial Monochrome Composition */}
        <AboutSection />

        {/* 3. Portfolio: Asymmetrical Collage Grid */}
        <PortfolioSection onSelectProject={setSelectedProject} />

        {/* 4. Design Process: 4-Step Methodology */}
        <DesignProcess />

        {/* 5. Achievement Bar: Honors, Awards & Credentials */}
        <AchievementSection />

        {/* 6. Skills & Tools: "WHAT I DO" Capabilities */}
        <SkillsSection />

        {/* 6. Selected Work: Exhibition-Style Numbered List with Horizontal Marquee */}
        <SelectedWork onSelectProject={setSelectedProject} />

        {/* 7. Contact Section: Editorial Form & Direct Details */}
        <ContactSection />
      </main>

      {/* 8. Minimalist Footer with Giant "DESIGNER" Typography */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTopButton />

      {/* Full Case Study Detail & Live Prototype Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
