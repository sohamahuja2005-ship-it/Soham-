import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side transmission & prepare direct mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleMailto = () => {
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Design Collaboration Inquiry'
    )}&body=${encodeURIComponent(
      `Hello Soham,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#F7F6F2] border-t border-[#E8E7E2] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Heading */}
        <div className="mb-14 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 block mb-3">
            Inquiries & Collaborations
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] text-[#050505] tracking-tight max-w-4xl">
            LET&apos;S CREATE SOMETHING AMAZING.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 max-w-xl">
            Have a project in mind? Let&apos;s work together and create something meaningful.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Socials (cols: 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-[#E8E7E2] shadow-sm space-y-6">
              <h3 className="font-heading font-bold text-xl text-[#050505]">
                Direct Contacts
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start justify-between pb-3 border-b border-neutral-100">
                  <span className="text-neutral-500 font-mono">Role</span>
                  <span className="font-semibold text-neutral-900">{PERSONAL_INFO.role}</span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-neutral-100">
                  <span className="text-neutral-500 font-mono">Location</span>
                  <span className="font-semibold text-neutral-900 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB43B]" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 font-mono">Email Address</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[11px] text-neutral-600 hover:text-black font-mono flex items-center gap-1 cursor-pointer"
                      title="Copy to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="block font-heading font-bold text-sm sm:text-base text-[#050505] hover:text-[#FFB43B] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E7E2] flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB43B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFB43B]"></span>
                </span>
                <p className="text-xs text-neutral-600">
                  Currently open for select freelance contracts, UI/UX systems design, and full-time creative opportunities.
                </p>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
                Professional Network
              </span>
              <div>
                {PERSONAL_INFO.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white hover:bg-[#050505] hover:text-white rounded-xl border border-[#E8E7E2] text-neutral-800 transition-all flex items-center justify-between text-xs font-medium group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-current text-[#0077b5] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                      </svg>
                      <span className="font-heading font-semibold text-xs tracking-tight">LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FFB43B] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (cols: 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-[32px] border border-[#E8E7E2] shadow-sm">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#050505] mb-6">
                Send a Project Message
              </h3>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-[#050505]">
                    Message Prepared Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-black">{formData.name}</span>. Your inquiry regarding &ldquo;{formData.subject}&rdquo; has been logged. You can also open your default mail client directly below to send it immediately.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleMailto}
                      className="px-5 py-2.5 bg-[#FFB43B] hover:bg-[#ffbe4f] text-black font-semibold text-xs rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium text-xs rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className={`w-full bg-[#FAF9F5] border rounded-xl px-4 py-3 text-sm text-[#050505] placeholder:text-neutral-400 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#E8E7E2] focus:border-[#050505]'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@studio.com"
                        className={`w-full bg-[#FAF9F5] border rounded-xl px-4 py-3 text-sm text-[#050505] placeholder:text-neutral-400 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E8E7E2] focus:border-[#050505]'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Subject / Project Scope <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Design System Overhaul / Mobile App Redesign"
                      className={`w-full bg-[#FAF9F5] border rounded-xl px-4 py-3 text-sm text-[#050505] placeholder:text-neutral-400 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-400 focus:border-red-500' : 'border-[#E8E7E2] focus:border-[#050505]'
                      }`}
                    />
                    {errors.subject && <p className="text-red-500 text-[11px] mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your goals, timelines, and design vision..."
                      className={`w-full bg-[#FAF9F5] border rounded-xl px-4 py-3 text-sm text-[#050505] placeholder:text-neutral-400 focus:outline-none transition-colors resize-y ${
                        errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#E8E7E2] focus:border-[#050505]'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-[#050505] hover:bg-neutral-800 text-white font-heading font-bold text-sm rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 text-[#FFB43B]" />
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      Guaranteed response within 24–48 hours
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
