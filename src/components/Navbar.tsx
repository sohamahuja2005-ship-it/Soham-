import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#E8E7E2] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#F7F6F2] border-b border-[#E8E7E2]/70 py-4.5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        {/* Left Side: Custom Minimalist Geometric Logo "SA" */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2.5 focus:outline-none shrink-0"
          aria-label="Soham Ahuja Homepage"
        >
          {/* Geometric Custom SA mark inspired by reference */}
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-[#050505] flex items-center justify-center text-white font-heading font-black text-xs tracking-tighter transition-transform group-hover:scale-105">
              S
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#050505] flex items-center justify-center text-[#050505] font-heading font-black text-xs tracking-tighter transition-transform group-hover:scale-105">
              A
            </div>
          </div>
          <span className="font-heading font-bold text-sm tracking-tight hidden sm:inline-block">
            Soham Ahuja
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs lg:text-[13px] font-medium text-neutral-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 transition-colors hover:text-[#050505] whitespace-nowrap ${
                  isActive ? 'text-[#050505] font-semibold' : ''
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#050505] rounded-full animate-in fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Far Right: Availability Indicator & Contact Button */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8E7E2] text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB43B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB43B]"></span>
            </span>
            <span className="text-[11px] font-medium text-neutral-700">{PERSONAL_INFO.availability}</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="px-4 py-2 bg-[#050505] text-white hover:bg-neutral-800 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FFB43B]" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white border border-[#E8E7E2] flex items-center justify-center text-neutral-800 hover:text-black cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E7E2] bg-[#F7F6F2] px-6 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E8E7E2] text-xs text-neutral-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB43B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB43B]"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-heading font-semibold text-neutral-800 hover:text-[#FFB43B] py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
