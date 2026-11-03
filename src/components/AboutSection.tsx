import React from 'react';
import { Crosshair, Plus } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function AboutSection() {
  // Generate radiating petal shapes like in the reference screenshot
  // Symmetrical fan of elongated rounded pill capsules radiating upwards/outwards
  const petals = [
    { angle: -80, length: 170, delay: '0s' },
    { angle: -65, length: 200, delay: '0.1s' },
    { angle: -50, length: 220, delay: '0.2s' },
    { angle: -35, length: 235, delay: '0.3s' },
    { angle: -20, length: 245, delay: '0.4s' },
    { angle: -5, length: 250, delay: '0.5s' },
    { angle: 10, length: 250, delay: '0.6s' },
    { angle: 25, length: 245, delay: '0.7s' },
    { angle: 40, length: 235, delay: '0.8s' },
    { angle: 55, length: 220, delay: '0.9s' },
    { angle: 70, length: 200, delay: '1.0s' },
    { angle: 85, length: 170, delay: '1.1s' },
  ];

  return (
    <section id="about" className="relative bg-[#050505] text-white py-20 sm:py-28 overflow-hidden">
      {/* Corner Crosshairs & Fine Coordinate Elements */}
      <div className="absolute top-8 left-8 text-neutral-600 hidden sm:flex items-center gap-2">
        <Crosshair className="w-5 h-5 text-neutral-500" />
        <span className="text-[10px] font-mono tracking-widest text-neutral-500">SEC_02 // ABOUT</span>
      </div>
      <div className="absolute top-8 right-8 text-neutral-600 hidden sm:flex items-center gap-2">
        <span className="text-[10px] font-mono tracking-widest text-neutral-500">COORD: 28.6139° N</span>
        <Crosshair className="w-5 h-5 text-neutral-500" />
      </div>
      <div className="absolute bottom-8 left-8 text-neutral-600 hidden sm:flex items-center gap-2">
        <Plus className="w-4 h-4 text-neutral-600" />
        <span className="text-[10px] font-mono text-neutral-500">SYSTEM: SOHAM AHUJA</span>
      </div>
      <div className="absolute bottom-8 right-8 text-neutral-600 hidden sm:flex items-center gap-2">
        <span className="text-[10px] font-mono text-neutral-500">DESIGN THINKING</span>
        <Plus className="w-4 h-4 text-neutral-600" />
      </div>

      {/* Thin Vertical Alignment Lines */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-neutral-800 hidden md:block" />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-neutral-800 hidden md:block" />

      {/* Marquee Header: "ABOUT • ABOUT • ABOUT • ABOUT •" */}
      <div className="w-full overflow-hidden select-none mb-12 sm:mb-16 border-b border-neutral-800 pb-4">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight uppercase"
            >
              ABOUT •
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Radial Abstract Composition Behind Monochrome Portrait */}
          <div className="relative w-full max-w-md sm:max-w-lg aspect-square flex items-center justify-center mb-12 sm:mb-16">
            
            {/* The Radiating White Pill Capsules (Replicating Reference Design) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full" viewBox="-250 -250 500 500" fill="none">
                {petals.map((petal, i) => {
                  const rad = (petal.angle * Math.PI) / 180;
                  const x2 = Math.sin(rad) * petal.length;
                  const y2 = -Math.cos(rad) * petal.length;
                  return (
                    <line
                      key={i}
                      x1="0"
                      y1="0"
                      x2={x2}
                      y2={y2}
                      stroke="#FFFFFF"
                      strokeWidth="28"
                      strokeLinecap="round"
                      opacity="0.95"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Main Black-and-White Portrait (Cutout / Rounded Container overlapping) */}
            <div className="relative z-10 w-72 sm:w-84 md:w-96 aspect-square rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 bg-neutral-900 group">
              <img
                src="/assets/aistudio/soham_ahuja_about_bw.png"
                alt="Soham Ahuja - Artistic Portrait"
                className="w-full h-full object-cover object-center contrast-110 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* About Description Block */}
          <div className="max-w-3xl text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#FFB43B] px-3 py-1 rounded bg-white/5 border border-white/10 inline-block">
              Philosophy & Method
            </span>

            <p className="font-heading font-medium text-xl sm:text-2xl md:text-3xl text-white leading-relaxed">
              &ldquo;{PERSONAL_INFO.aboutExtended[0]}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
              {PERSONAL_INFO.aboutExtended[1]}
            </p>

            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
              {PERSONAL_INFO.aboutExtended[2]}
            </p>

            {/* Quick credentials strip */}
            <div className="pt-8 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-[11px] font-mono text-neutral-500 uppercase">Focus</p>
                <p className="font-heading font-bold text-sm text-white mt-0.5">UI/UX & Systems</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-[11px] font-mono text-neutral-500 uppercase">Location</p>
                <p className="font-heading font-bold text-sm text-white mt-0.5">Ahmedabad, Gujarat</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-[11px] font-mono text-neutral-500 uppercase">Mindset</p>
                <p className="font-heading font-bold text-sm text-white mt-0.5">Human-Centered</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-[11px] font-mono text-neutral-500 uppercase">Availability</p>
                <p className="font-heading font-bold text-sm text-[#FFB43B] mt-0.5">Open for Roles</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
