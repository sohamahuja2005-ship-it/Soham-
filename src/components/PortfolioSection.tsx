import React from 'react';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  return (
    <section id="projects" className="relative py-20 sm:py-32 bg-[#F7F6F2] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Heading: "PROJECTS" oversized typography that slightly overlaps grid */}
        <div className="relative mb-6 sm:mb-10 select-none">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
                Curated Projects / 2026
              </span>
              <h2 className="font-heading font-black text-6xl sm:text-8xl md:text-9xl lg:text-[140px] leading-[0.85] tracking-[-0.04em] text-[#050505]">
                projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xs sm:text-right pb-2">
              Asymmetrical showcase of selected mobile, web, and interface system case studies.
            </p>
          </div>
          <div className="h-[2px] w-full bg-[#050505]" />
        </div>

        {/* Asymmetrical Project Collage Grid (Desktop 3 columns with varying heights & overlaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-8 items-start">
          
          {/* Project 01: Mobile Banking App (Col span 7, dominant large card) */}
          <div className="lg:col-span-7 group">
            <div
              onClick={() => onSelectProject(PROJECTS[0])}
              className="bg-white rounded-[32px] p-4 sm:p-6 border border-[#E8E7E2] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative rounded-[24px] overflow-hidden bg-neutral-900 aspect-[16/10] sm:aspect-[16/11]">
                <img
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono">
                  {PROJECTS[0].number} / 04
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFB43B] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Meta & Content */}
              <div className="pt-6 pb-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                    {PROJECTS[0].category}
                  </span>
                  <span className="text-xs font-semibold text-[#050505] group-hover:text-[#FFB43B] transition-colors flex items-center gap-1">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#050505] tracking-tight group-hover:text-black">
                  {PROJECTS[0].title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {PROJECTS[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Project 02: E-Commerce Shopping App (Col span 5, tall vertical card) */}
          <div className="lg:col-span-5 group lg:-mt-4">
            <div
              onClick={() => onSelectProject(PROJECTS[1])}
              className="bg-white rounded-[32px] p-4 sm:p-6 border border-[#E8E7E2] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative rounded-[24px] overflow-hidden bg-neutral-100 aspect-[4/5]">
                <img
                  src={PROJECTS[1].image}
                  alt={PROJECTS[1].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono">
                  {PROJECTS[1].number} / 04
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFB43B] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-6 pb-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                    {PROJECTS[1].category}
                  </span>
                  <span className="text-xs font-semibold text-[#050505] group-hover:text-[#FFB43B] transition-colors flex items-center gap-1">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#050505] tracking-tight">
                  {PROJECTS[1].title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {PROJECTS[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Project 03: Weather App (Col span 5, rounded with vibrant warm tone) */}
          <div className="lg:col-span-5 group">
            <div
              onClick={() => onSelectProject(PROJECTS[2])}
              className="bg-white rounded-[32px] p-4 sm:p-6 border border-[#E8E7E2] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative rounded-[24px] overflow-hidden bg-neutral-900 aspect-[4/4]">
                <img
                  src={PROJECTS[2].image}
                  alt={PROJECTS[2].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono">
                  {PROJECTS[2].number} / 04
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFB43B] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-6 pb-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                    {PROJECTS[2].category}
                  </span>
                  <span className="text-xs font-semibold text-[#050505] group-hover:text-[#FFB43B] transition-colors flex items-center gap-1">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#050505] tracking-tight">
                  {PROJECTS[2].title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {PROJECTS[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Project 04: Basic Calculator (Col span 7, horizontal desktop showcase) */}
          <div className="lg:col-span-7 group">
            <div
              onClick={() => onSelectProject(PROJECTS[3])}
              className="bg-white rounded-[32px] p-4 sm:p-6 border border-[#E8E7E2] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative rounded-[24px] overflow-hidden bg-neutral-100 aspect-[16/10] sm:aspect-[16/11]">
                <img
                  src={PROJECTS[3].image}
                  alt={PROJECTS[3].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-mono">
                  {PROJECTS[3].number} / 04
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFB43B] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-6 pb-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-500 tracking-wider">
                    {PROJECTS[3].category}
                  </span>
                  <span className="text-xs font-semibold text-[#050505] group-hover:text-[#FFB43B] transition-colors flex items-center gap-1">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#050505] tracking-tight">
                  {PROJECTS[3].title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {PROJECTS[3].description}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
