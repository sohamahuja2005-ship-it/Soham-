import React from 'react';
import { ArrowUpRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const exhibitionItems = [
    {
      num: '01',
      title: 'Mobile Banking App',
      category: 'Mobile UI/UX Design',
      btnLabel: 'View Case Study',
      project: PROJECTS[0],
      location: 'Fintech Systems · 2026',
      duration: '8 Weeks',
      dateRange: 'Jan — Mar 2026',
      phases: [
        { name: 'Research & User Journeys', span: 'Weeks 1–2', percent: 25 },
        { name: 'Wireframing & IA', span: 'Weeks 3–4', percent: 25 },
        { name: 'High-Fi UI & Prototyping', span: 'Weeks 5–6', percent: 25 },
        { name: 'Usability Testing & Polish', span: 'Weeks 7–8', percent: 25 },
      ],
    },
    {
      num: '02',
      title: 'E-Commerce Shopping App',
      category: 'App Design',
      btnLabel: 'View Case Study',
      project: PROJECTS[1],
      location: 'Luxury Retail · 2026',
      duration: '6 Weeks',
      dateRange: 'Nov — Dec 2025',
      phases: [
        { name: 'Lookbook Study & Benchmarking', span: 'Weeks 1–2', percent: 30 },
        { name: 'Cart Drawer UX & Layout Grids', span: 'Weeks 3–4', percent: 35 },
        { name: 'Interactive Micro-Interactions', span: 'Weeks 5–6', percent: 35 },
      ],
    },
    {
      num: '03',
      title: 'Weather Application',
      category: 'UI Design',
      btnLabel: 'View Case Study',
      project: PROJECTS[2],
      location: 'Atmospheric UI · 2026',
      duration: '4 Weeks',
      dateRange: 'Aug — Sep 2025',
      phases: [
        { name: 'Data Prioritization & Interviews', span: 'Week 1', percent: 25 },
        { name: 'Visual Hierarchy & Hourly Arc', span: 'Weeks 2–3', percent: 50 },
        { name: 'Glassmorphism & Contrast Tests', span: 'Week 4', percent: 25 },
      ],
    },
    {
      num: '04',
      title: 'Basic Calculator',
      category: 'Web Interface Design',
      btnLabel: 'View Project',
      project: PROJECTS[3],
      location: 'Swiss Modernist · 2026',
      duration: '3 Weeks',
      dateRange: 'Jun — Jul 2025',
      phases: [
        { name: 'Ergonomic Key Mapping', span: 'Week 1', percent: 33 },
        { name: 'Akzidenz Modernist UI Tokens', span: 'Week 2', percent: 33 },
        { name: 'Keyboard Physics & Logic Build', span: 'Week 3', percent: 34 },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F6F2] border-t border-[#E8E7E2] relative overflow-hidden">
      {/* Horizontal Scrolling Marquee Heading */}
      <div className="w-full overflow-hidden select-none mb-12 sm:mb-16 border-b border-[#050505] pb-4">
        <div className="animate-marquee-reverse flex items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-heading font-black text-5xl sm:text-7xl md:text-8xl text-[#050505] tracking-tight uppercase"
            >
              SELECTED WORK •
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#050505]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Case Study Lifecycles & Depth
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#050505] tracking-tight">
              PROJECT TIMELINES & PHASES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-sm md:text-right">
            Visualizing the research, wireframing, and iterative testing duration behind each production interface.
          </p>
        </div>

        {/* Exhibition-Style Rows with Visual Timelines */}
        <div className="divide-y divide-neutral-300">
          {exhibitionItems.map((item) => (
            <div
              key={item.num}
              onClick={() => onSelectProject(item.project)}
              className="group py-8 sm:py-10 transition-all duration-300 hover:bg-white/70 px-4 sm:px-8 rounded-3xl cursor-pointer space-y-6"
            >
              {/* Row Top: Number, Title, Category & Action */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Left: Number + Title */}
                <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                  <span className="font-heading font-mono text-base sm:text-lg text-neutral-400 group-hover:text-[#050505] transition-colors tabular-nums shrink-0 pt-1 sm:pt-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-heading italic font-black text-2xl sm:text-4xl md:text-5xl text-[#050505] tracking-tight group-hover:text-black group-hover:translate-x-1.5 transition-all">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1 md:hidden">
                      {item.category} · {item.location}
                    </p>
                  </div>
                </div>

                {/* Right: Meta & Outlined CTA */}
                <div className="flex items-center gap-6 self-start md:self-auto">
                  <div className="hidden lg:flex flex-col text-right">
                    <span className="text-xs uppercase font-mono tracking-wider text-neutral-800 font-bold">
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-500 font-mono mt-0.5 flex items-center gap-1 justify-end">
                      <Calendar className="w-3 h-3 text-[#FFB43B]" />
                      <span>{item.dateRange}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-full border border-[#050505] group-hover:border-[#FFB43B] group-hover:bg-[#FFB43B] group-hover:text-black text-xs font-semibold text-[#050505] transition-all flex items-center gap-2 cursor-pointer shadow-2xs whitespace-nowrap shrink-0"
                  >
                    <span>{item.btnLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Visual Project Duration Timeline Bar */}
              <div className="bg-[#FAF9F5] group-hover:bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200 group-hover:border-neutral-300 transition-colors space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-neutral-700">
                    <Clock className="w-3.5 h-3.5 text-[#FFB43B]" />
                    <span className="font-bold">Project Duration:</span>
                    <span className="text-[#050505] font-black bg-[#FFB43B]/20 px-2 py-0.5 rounded text-[11px]">
                      {item.duration}
                    </span>
                  </div>
                  <span className="text-neutral-500 text-[11px] hidden sm:inline">
                    {item.phases.length} Comprehensive Design Stages
                  </span>
                </div>

                {/* Segmented Timeline Progress Track */}
                <div className="w-full flex h-2 rounded-full overflow-hidden bg-neutral-200 gap-1 p-0.5">
                  {item.phases.map((ph, pIdx) => (
                    <div
                      key={pIdx}
                      style={{ width: `${ph.percent}%` }}
                      className="h-full bg-[#050505] group-hover:bg-[#FFB43B] transition-colors rounded-sm"
                      title={`${ph.name} (${ph.span})`}
                    />
                  ))}
                </div>

                {/* Stage Breakdown Chips */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                  {item.phases.map((phase, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex flex-col p-2 rounded-xl bg-white/70 group-hover:bg-neutral-50 border border-neutral-200/80 text-[11px]"
                    >
                      <span className="font-mono text-[10px] text-neutral-500">{phase.span}</span>
                      <span className="font-medium text-neutral-900 truncate mt-0.5" title={phase.name}>
                        {phase.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
