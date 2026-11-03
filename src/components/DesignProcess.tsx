import React from 'react';
import { Search, Layout, Palette, Cpu, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Search,
  Layout,
  Palette,
  Cpu,
};

export function DesignProcess() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F6F2] border-t border-[#E8E7E2] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-4 border-b border-[#050505]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Methodology & Workflow
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#050505] tracking-tight">
              MY DESIGN PROCESS
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-sm md:text-right">
            A structured, human-centered approach translating ambiguous user needs into polished digital systems.
          </p>
        </div>

        {/* 4 Process Steps in Horizontal Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.iconName] || Search;
            return (
              <div
                key={step.number}
                className="group bg-white rounded-[28px] p-6 sm:p-8 border border-[#E8E7E2] hover:border-[#050505] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-2xs hover:shadow-lg relative overflow-hidden"
              >
                {/* Accent top indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-[#050505] tabular-nums group-hover:text-[#FFB43B] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#F7F6F2] group-hover:bg-[#050505] group-hover:text-white transition-colors flex items-center justify-center text-neutral-700">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFB43B]" />
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#050505] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="pt-4 border-t border-[#E8E7E2] space-y-2">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider block">
                    Core Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-[11px] text-neutral-600 font-medium"
                      >
                        {item}{dIdx < step.deliverables.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFB43B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
