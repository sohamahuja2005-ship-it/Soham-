import React, { useEffect, useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, ExternalLink, Laptop, Layers, Target, Compass } from 'lucide-react';
import { Project } from '../data/portfolioData';
import {
  BankingInteractiveDemo,
  EcommerceInteractiveDemo,
  WeatherInteractiveDemo,
  CalculatorInteractiveDemo
} from './InteractivePrototypes';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'case-study' | 'interactive-demo'>('case-study');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="relative w-full max-w-4xl bg-[#F7F6F2] text-[#050505] rounded-[28px] shadow-2xl border border-[#E8E7E2] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur border-b border-[#E8E7E2] sticky top-0 z-20 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-heading font-black text-xl text-[#050505]">
              {project.number}
            </span>
            <span className="text-neutral-300">/</span>
            <div>
              <h2 id="case-study-title" className="font-heading font-bold text-base sm:text-lg text-[#050505] leading-none">
                {project.title}
              </h2>
              <p className="text-[11px] text-neutral-500 mt-0.5">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch */}
            <div className="hidden sm:flex items-center p-1 bg-[#E8E7E2] rounded-xl text-xs font-medium">
              <button
                onClick={() => setActiveTab('case-study')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeTab === 'case-study' ? 'bg-[#050505] text-white shadow-sm' : 'text-neutral-600 hover:text-black'}`}
              >
                Case Study
              </button>
              <button
                onClick={() => setActiveTab('interactive-demo')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === 'interactive-demo' ? 'bg-[#FFB43B] text-black font-semibold shadow-sm' : 'text-neutral-600 hover:text-black'}`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Prototype</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#050505] hover:text-white transition-colors flex items-center justify-center text-neutral-700 cursor-pointer"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Tab switch row */}
        <div className="sm:hidden flex border-b border-[#E8E7E2] bg-white px-4 py-2">
          <button
            onClick={() => setActiveTab('case-study')}
            className={`flex-1 py-1.5 text-xs text-center font-medium rounded-lg ${activeTab === 'case-study' ? 'bg-[#050505] text-white' : 'text-neutral-600'}`}
          >
            Case Study
          </button>
          <button
            onClick={() => setActiveTab('interactive-demo')}
            className={`flex-1 py-1.5 text-xs text-center font-medium rounded-lg ${activeTab === 'interactive-demo' ? 'bg-[#FFB43B] text-black font-semibold' : 'text-neutral-600'}`}
          >
            Live Prototype
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10 flex-1">
          {activeTab === 'interactive-demo' ? (
            <div className="py-4 space-y-6">
              <div className="text-center max-w-lg mx-auto space-y-2">
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-500">Interactive UI Sandbox</span>
                <h3 className="text-2xl font-bold font-heading">Test the Live Component</h3>
                <p className="text-xs text-neutral-600">
                  Interact with this functional component built directly from the high-fidelity design specifications and token system.
                </p>
              </div>

              {project.interactiveType === 'banking' && <BankingInteractiveDemo />}
              {project.interactiveType === 'ecommerce' && <EcommerceInteractiveDemo />}
              {project.interactiveType === 'weather' && <WeatherInteractiveDemo />}
              {project.interactiveType === 'calculator' && <CalculatorInteractiveDemo />}
            </div>
          ) : (
            <>
              {/* Hero Image Showcase */}
              <div className="rounded-3xl overflow-hidden bg-neutral-900/5 border border-[#E8E7E2] shadow-sm relative group flex items-center justify-center p-2 sm:p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur text-white px-3.5 py-1.5 rounded-full text-xs font-mono">
                  {project.category} · Mockup Preview
                </div>
              </div>

              {/* Tagline & Overview */}
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFB43B] bg-black px-2.5 py-1 rounded inline-block">
                  Project Brief
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-[#050505] tracking-tight">
                  {project.tagline}
                </h3>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
                  {project.overview}
                </p>
              </div>

              {/* Problem Statement & Design Goals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#E8E7E2]">
                <div className="space-y-3 bg-white p-6 rounded-2xl border border-[#E8E7E2]">
                  <div className="flex items-center gap-2 text-red-600">
                    <Target className="w-5 h-5" />
                    <h4 className="font-heading font-bold text-base text-[#050505]">Problem Statement</h4>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {project.problemStatement}
                  </p>
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Target Users</p>
                    <p className="text-xs text-neutral-700 mt-1">{project.targetUsers}</p>
                  </div>
                </div>

                <div className="space-y-3 bg-white p-6 rounded-2xl border border-[#E8E7E2]">
                  <div className="flex items-center gap-2 text-[#050505]">
                    <Compass className="w-5 h-5 text-[#FFB43B]" />
                    <h4 className="font-heading font-bold text-base text-[#050505]">Design Goals</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {project.designGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-[#FFB43B] shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Design Process */}
              <div className="space-y-4 pt-4 border-t border-[#E8E7E2]">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#FFB43B]" />
                  <h4 className="font-heading font-bold text-xl text-[#050505]">Design Process & Execution</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.designProcess.map((proc, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E8E7E2] space-y-1.5">
                      <span className="text-xs font-mono font-bold text-[#FFB43B]">{proc.step}</span>
                      <p className="text-xs text-neutral-700 leading-relaxed">{proc.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Decisions & Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E8E7E2]">
                <div className="space-y-3">
                  <h4 className="font-heading font-bold text-base text-[#050505]">Key UI Decisions</h4>
                  <div className="space-y-2">
                    {project.keyDecisions.map((dec, i) => (
                      <div key={i} className="text-xs text-neutral-700 bg-neutral-100/70 p-3 rounded-xl border border-neutral-200">
                        {dec}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-heading font-bold text-base text-[#050505]">Measurable Outcomes</h4>
                  <div className="space-y-2">
                    {project.outcomes.map((out, i) => (
                      <div key={i} className="text-xs text-neutral-800 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 font-medium flex items-start gap-2">
                        <span className="text-[#FFB43B] font-bold">•</span>
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Callout Banner */}
              <div className="bg-[#050505] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg">Want to experience this design live?</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Try the interactive prototype sandbox to experience the button micro-interactions and states.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('interactive-demo')}
                  className="px-5 py-2.5 bg-[#FFB43B] text-black font-semibold text-xs rounded-xl hover:bg-[#ffbe4f] transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
