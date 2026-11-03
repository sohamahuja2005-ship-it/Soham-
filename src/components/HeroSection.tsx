import React from 'react';
import { ArrowUpRight, Globe, Sparkles, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function HeroSection() {
  const scrollToPortfolio = () => {
    const el = document.querySelector('#projects') || document.querySelector('#portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Typography & Intro (cols: 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
            {/* Main Heading: 2 lines, oversized typography */}
            <div className="space-y-0">
              <h1 className="font-heading font-black text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[124px] leading-[0.88] tracking-[-0.035em] text-[#050505] text-balance">
                Digital
                <br />
                <span className="text-[#050505]">Experiences</span>
              </h1>
            </div>

            {/* Intro text */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-normal leading-relaxed max-w-xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* LinkedIn Direct Link */}
            <div className="pt-1">
              <a
                href={PERSONAL_INFO.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full border border-neutral-300 hover:border-[#050505] bg-white hover:bg-[#050505] text-neutral-800 hover:text-white transition-all shadow-xs hover:shadow text-xs font-medium cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-[#0077b5] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
                <span className="font-heading font-semibold text-xs tracking-tight">Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FFB43B] transition-colors" />
              </a>
            </div>

            {/* Main CTA: Circular black button with white diagonal arrow + Text */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={scrollToPortfolio}
                className="group flex items-center gap-3 cursor-pointer focus:outline-none"
                aria-label="Explore My Work"
              >
                <div className="w-14 h-14 rounded-full bg-[#050505] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFB43B] group-hover:text-black shadow-lg">
                  <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </div>
                <div className="text-left">
                  <span className="font-heading font-bold text-base sm:text-lg text-[#050505] group-hover:text-black transition-colors block leading-tight">
                    Explore My Work
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">
                    View selected case studies
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with Vibrant Orange Container (cols: 5) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              
              {/* Vibrant Orange Image Container */}
              <div className="relative bg-[#FFB43B] rounded-[36px] overflow-hidden shadow-2xl p-4 sm:p-5 aspect-[4/5] flex items-end justify-center">
                
                {/* Decorative Abstract Accent Glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 via-transparent to-black/30 pointer-events-none" />

                {/* Designer Portrait Image */}
                <img
                  src="/assets/aistudio/soham_ahuja_portrait.png"
                  alt="Soham Ahuja - UI/UX Designer"
                  className="w-full h-full object-cover object-center rounded-[28px] shadow-md relative z-10"
                  referrerPolicy="no-referrer"
                />

                {/* Handwritten script label "Creative Mind" in Caveat */}
                <div className="absolute top-6 left-6 z-20 pointer-events-none">
                  <span className="font-accent text-3xl sm:text-4xl text-black font-bold tracking-wide drop-shadow-xs -rotate-6 block">
                    Creative Mind
                  </span>
                </div>

                {/* Globe Icon Badge in Top Right */}
                <div className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-[#050505] text-white flex items-center justify-center shadow-lg hover:rotate-12 transition-transform">
                  <Globe className="w-5 h-5 text-neutral-200" />
                </div>

                {/* Floating micro thumbnail pill badges mirroring reference layout */}
                <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2.5">
                  {/* Mini avatar badge */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-white flex items-center justify-center overflow-hidden shadow-md">
                    <img
                      src="/assets/aistudio/soham_ahuja_portrait.png"
                      alt="Thumbnail avatar"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Badge 3: Arrow jump button */}
                  <button
                    onClick={scrollToPortfolio}
                    className="w-12 h-12 rounded-full bg-[#050505] text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-md cursor-pointer"
                    title="Jump to portfolio"
                  >
                    <ArrowDown className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Editorial Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 font-mono px-2">
                <span>PORTRAIT // 2026 EDITION</span>
                <span>AHMEDABAD, GUJARAT · REMOTE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
