import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, ExternalLink, FileText, Sparkles, X, ShieldCheck, Download } from 'lucide-react';
import { ACHIEVEMENTS, Achievement } from '../data/portfolioData';

export function AchievementSection() {
  const [filter, setFilter] = useState<'all' | 'ux' | 'ai'>('all');
  const [selectedCert, setSelectedCert] = useState<Achievement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (filter === 'ux') return item.category === 'Google UX Certificate';
    if (filter === 'ai') return item.category.includes('AI');
    return true;
  });

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#F7F6F2] border-t border-[#E8E7E2] relative overflow-hidden">
      {/* Marquee Banner Ribbon */}
      <div className="w-full overflow-hidden select-none mb-12 border-b border-[#050505] pb-4">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#050505] tracking-tight uppercase"
            >
              GOOGLE CERTIFIED • UX DESIGN SPECIALIZATION • COURSERA VERIFIED •
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-300">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-2">
              Official Credentials & Certificates
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#050505] tracking-tight">
              ACHIEVEMENTS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mt-2">
              Authorized by Google and completed through Coursera, demonstrating full-spectrum mastery from foundational UX research to production Figma design systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-full border border-[#E8E7E2] self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#050505] text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              All Certificates ({ACHIEVEMENTS.length})
            </button>
            <button
              onClick={() => setFilter('ux')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'ux' ? 'bg-[#050505] text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Google UX Design (7)
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'ai' ? 'bg-[#050505] text-white shadow-xs' : 'text-neutral-600 hover:text-black'
              }`}
            >
              AI Acceleration (1)
            </button>
          </div>
        </div>

        {/* Featured Specialization Spotlight Bar */}
        <div className="mb-10 p-6 sm:p-8 rounded-[32px] bg-[#050505] text-white border border-neutral-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB43B] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFB43B]">
                Google Career Certificates Program
              </span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
              Google UX Design Specialization & AI Certification
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Earned by Soham Ahuja across 8 intensive modules covering the complete user experience lifecycle: empathy research, wireframing, Figma design tokens, usability testing, and AI-accelerated workflows.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-left">
              <span className="text-[10px] uppercase font-mono text-neutral-400 block">Total Credentials</span>
              <span className="font-heading font-bold text-base text-[#FFB43B]">8 Certificates</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-left">
              <span className="text-[10px] uppercase font-mono text-neutral-400 block">Verification Body</span>
              <span className="font-heading font-bold text-base text-white">Coursera / Google</span>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className={`group bg-white rounded-[28px] p-6 border transition-all duration-300 flex flex-col justify-between space-y-5 shadow-2xs hover:shadow-xl relative overflow-hidden ${
                item.highlight ? 'border-neutral-400 hover:border-[#050505]' : 'border-[#E8E7E2] hover:border-neutral-400'
              }`}
            >
              {/* Card Header: Number & Date */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="font-heading font-black text-2xl text-[#050505] tabular-nums group-hover:text-[#FFB43B] transition-colors">
                  {item.number}
                </span>
                <span className="text-xs font-mono text-neutral-500 bg-[#FAF9F5] px-2.5 py-1 rounded-full border border-neutral-200">
                  {item.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#0070e0] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Authorized</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#050505] group-hover:text-black leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed pt-1 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider block">
                  Core Competencies
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.skills.slice(0, 3).map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono bg-[#FAF9F5] text-neutral-700 px-2 py-0.5 rounded border border-neutral-200"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: View PDF & Verify Online */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCert(item)}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#050505] hover:bg-neutral-800 text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FFB43B]" />
                  <span>View PDF</span>
                </button>

                <a
                  href={item.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-neutral-100 hover:bg-[#FFB43B] hover:text-black text-neutral-700 transition-colors flex items-center justify-center cursor-pointer"
                  title={`Verify credential ${item.credentialId} on Coursera`}
                  aria-label="Verify credential on Coursera"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Bottom Orange Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFB43B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom Verification Note Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#E8E7E2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#050505] text-[#FFB43B] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-[#050505]">Official Coursera Verified Certificates</p>
              <p className="text-xs text-neutral-600">All certificates signed by Amanda Brophy, Global Director of Google Career Certificates.</p>
            </div>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            All 8 Verified by Coursera
          </span>
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCert(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-[#F7F6F2] text-[#050505] rounded-[28px] shadow-2xl border border-[#E8E7E2] overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur border-b border-[#E8E7E2] sticky top-0 z-20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#050505] text-[#FFB43B] flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#050505]">
                    {selectedCert.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 font-mono">
                    Google Career Certificate · ID: {selectedCert.credentialId} · Issued {selectedCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFB43B] text-black font-semibold text-xs hover:bg-[#ffbe4f] transition-colors"
                >
                  <span>Verify on Coursera</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 font-medium text-xs hover:bg-neutral-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#050505] hover:text-white transition-colors flex items-center justify-center text-neutral-700 cursor-pointer"
                  aria-label="Close certificate modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Content: PDF Embed Frame */}
            <div className="flex-1 p-4 sm:p-6 bg-neutral-100 min-h-[500px] flex flex-col">
              <div className="w-full flex-1 rounded-2xl overflow-hidden border border-neutral-300 shadow-inner bg-white min-h-[460px]">
                <iframe
                  src={selectedCert.pdfUrl}
                  title={selectedCert.title}
                  className="w-full h-full min-h-[500px] border-none"
                />
              </div>

              {/* Mobile action row */}
              <div className="sm:hidden flex items-center justify-between gap-3 pt-4">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-[#FFB43B] text-black text-center text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5"
                >
                  <span>Verify on Coursera</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="py-2 px-4 bg-neutral-200 text-neutral-800 text-xs font-medium rounded-xl flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
