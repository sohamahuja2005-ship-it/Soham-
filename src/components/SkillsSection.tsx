import React, { useState } from 'react';
import { Layers, PenTool, Layout, Monitor, Sparkles, Code2, Sliders, Check } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'skills' | 'tools'>('all');

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F7F6F2] border-t border-[#E8E7E2] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-4 border-b border-[#050505]">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Capabilities & Mastery
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#050505] tracking-tight">
              WHAT I DO
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-[#E8E7E2] self-start md:self-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-[#050505] text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              All Overview
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'skills' ? 'bg-[#050505] text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Design Disciplines
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'tools' ? 'bg-[#050505] text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Design & Dev Tools
            </button>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Design Skills Column (cols: 7) */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <div className={`${activeTab === 'skills' ? 'lg:col-span-12' : 'lg:col-span-7'} space-y-4`}>
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFB43B]" />
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#050505]">
                    Design Disciplines
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-400">10 Core Areas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SKILLS_DATA.design.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group bg-white p-4.5 rounded-2xl border border-[#E8E7E2] hover:border-[#050505] transition-all duration-300 flex items-center justify-between shadow-2xs hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${skill.highlight ? 'bg-[#FFB43B]/15 text-black font-bold' : 'bg-neutral-100 text-neutral-600'}`}>
                        <Check className="w-4 h-4 text-[#050505]" />
                      </div>
                      <span className="font-heading font-medium text-sm text-[#050505] group-hover:text-black">
                        {skill.name}
                      </span>
                    </div>
                    {skill.highlight && (
                      <span className="text-[10px] font-mono font-medium text-[#FFB43B] bg-black px-2 py-0.5 rounded">
                        Focus
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design Tools Column (cols: 5) */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className={`${activeTab === 'tools' ? 'lg:col-span-12' : 'lg:col-span-5'} space-y-4`}>
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#050505]" />
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#050505]">
                    Software & Tech Stack
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-400">Production Tools</span>
              </div>

              <div className="space-y-2.5">
                {SKILLS_DATA.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group bg-white p-4 rounded-2xl border border-[#E8E7E2] hover:border-[#050505] transition-all duration-300 flex items-center justify-between shadow-2xs hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading font-black text-xs ${tool.highlight ? 'bg-[#050505] text-[#FFB43B]' : 'bg-neutral-100 text-neutral-800'}`}>
                        {tool.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-sm text-[#050505]">
                          {tool.name}
                        </p>
                        <p className="text-[11px] text-neutral-500">{tool.category}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full group-hover:bg-[#FFB43B] group-hover:text-black transition-colors">
                      {tool.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E8E7E2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFB43B] flex items-center justify-center text-black font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-[#050505]">Design System & Component Architecture</p>
              <p className="text-xs text-neutral-600">Bridging the gap between Figma design tokens and semantic production code.</p>
            </div>
          </div>
          <span className="text-xs font-mono text-neutral-500 whitespace-nowrap">
            Figma ↔ Code Alignment
          </span>
        </div>

      </div>
    </section>
  );
}
