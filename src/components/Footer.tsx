import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F6F2] border-t border-[#E8E7E2] pt-16 sm:pt-20 pb-6 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-14 border-b border-[#E8E7E2]">
          
          {/* Left: Custom SA Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-[#050505] flex items-center justify-center text-white font-heading font-black text-xs tracking-tighter">
                S
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] flex items-center justify-center text-[#050505] font-heading font-black text-xs tracking-tighter">
                A
              </div>
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-[#050505]">Soham Ahuja</p>
              <p className="text-[11px] text-neutral-500 font-mono">UI/UX Designer · Creative Systems</p>
            </div>
          </div>

          {/* Center: Attribution */}
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            Designed with creativity by Soham Ahuja.
          </p>

          {/* Right: Navigation Links */}
          <nav className="flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-700">
            <button
              onClick={() => scrollTo('#home')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('#projects')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('#achievements')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Achievements
            </button>
            <button
              onClick={() => scrollTo('#skills')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Giant Oversized Typography "DESIGNER" (Mirroring bottom "vidéaste" in reference screenshot) */}
        <div className="pt-8 sm:pt-12 select-none overflow-hidden">
          <div className="w-full text-center">
            <h2 className="font-heading font-black text-[18vw] sm:text-[19vw] lg:text-[20vw] leading-[0.78] tracking-[-0.05em] text-[#050505] uppercase whitespace-nowrap pointer-events-none">
              DESIGNER
            </h2>
          </div>
        </div>

        {/* Bottom Copyright & Timestamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-2 border-t border-[#E8E7E2]/60 mt-4">
          <p>© 2026 Soham Ahuja. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>PORTFOLIO SPECIFICATION 2026</span>
            <span className="hidden sm:inline">·</span>
            <span>SPACE GROTESK & INTER</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
