import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#050505] text-white shadow-xl hover:bg-[#FFB43B] hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 animate-in fade-in zoom-in-75 border border-white/20"
      aria-label="Back to top"
      title="Return to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
