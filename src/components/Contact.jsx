import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Contact = ({ isDark = true }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Open mailto client
    window.location.href = `mailto:${personalData.contact.email}?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className={`py-24 relative z-10 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0b1017] border-white/10' : 'bg-white border-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-black shadow-xs ${
            isDark ? 'bg-[#131b27] border-white/10 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-900'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Direct Communication</span>
          </div>

          <h2 className={`font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-slate-950'
          }`}>
            GET IN TOUCH
          </h2>

          <p className={`text-base sm:text-lg font-black ${
            isDark ? 'text-slate-300' : 'text-slate-800'
          }`}>
            Available for internship opportunities, AI development projects, and research collaborations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* LEFT: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalData.contact.email}`}
              className={`p-6 rounded-3xl border shadow-md hover:border-cyan-500 hover:shadow-xl transition-all flex items-center gap-4 group ${
                isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
              }`}
            >
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono font-black text-slate-400">Email Address</div>
                <div className={`text-sm sm:text-base font-black truncate group-hover:text-cyan-500 transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {personalData.contact.email}
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalData.contact.phone}`}
              className={`p-6 rounded-3xl border shadow-md hover:border-cyan-500 hover:shadow-xl transition-all flex items-center gap-4 group ${
                isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
              }`}
            >
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-black text-slate-400">Phone Number</div>
                <div className={`text-sm sm:text-base font-black group-hover:text-cyan-500 transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {personalData.contact.phone}
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className={`p-6 rounded-3xl border shadow-md flex items-center gap-4 ${
              isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
            }`}>
              <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-500 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono font-black text-slate-400">Current Location</div>
                <div className={`text-sm sm:text-base font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {personalData.location}
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 pt-2">
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-3.5 px-4 rounded-2xl border text-xs font-mono font-black flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-md ${
                  isDark ? 'bg-[#131b27] border-white/10 text-white hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-100'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 px-4 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-mono font-black flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-md"
              >
                <LinkedinIcon className="w-4 h-4 text-white" />
                <span className="text-white-brand">LinkedIn</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Direct Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl border shadow-xl space-y-6 ${
                isDark ? 'bg-[#131b27] border-white/10' : 'bg-white border-slate-300'
              }`}
            >
              <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Send Direct Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label className={`block text-xs font-mono font-black mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-bold focus:outline-none focus:border-cyan-500 transition-colors ${
                      isDark ? 'bg-[#080c14] border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono font-black mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-bold focus:outline-none focus:border-cyan-500 transition-colors ${
                      isDark ? 'bg-[#080c14] border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono font-black mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-bold focus:outline-none focus:border-cyan-500 transition-colors ${
                      isDark ? 'bg-[#080c14] border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01]"
              >
                <span className="text-white-brand">Send Message</span>
                <Send className="w-4 h-4 text-white" />
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-black text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Message prepared in your default mail app!
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
