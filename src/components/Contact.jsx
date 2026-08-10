import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }

      setSubmitted(true);

      const mailtoUrl = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 800);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
            READY TO GET STARTED?
          </h2>

          <p className="text-base sm:text-lg text-black font-black">
            Have an opportunity, project idea, or collaboration in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Full Body 3D Developer Character + Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Full-body character card */}
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-300 shadow-xl text-center">
              <img 
                src="/dev-desk.jpg" 
                alt="Full Body Developer Character" 
                className="w-full max-h-64 object-contain rounded-2xl mb-4"
              />
              <h4 className="text-2xl font-black text-black">Let's Connect & Collaborate</h4>
              <p className="text-xs text-black font-extrabold mt-1">
                Kalapaneni Ritesh Chowdary • AI & ML Developer
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-100 border border-cyan-400 text-black font-bold">
                  <Mail className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-black uppercase font-black">Email Address</div>
                  <a 
                    href={`mailto:${personalData.contact.email}`}
                    className="text-xs sm:text-sm font-black text-black hover:text-cyan-600 transition-colors break-all"
                  >
                    {personalData.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalData.contact.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-black hover:bg-slate-200 font-bold"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-black" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white border-2 border-slate-300 shadow-md hover:border-cyan-500 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-emerald-100 border border-emerald-400 text-black font-bold">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-black uppercase font-black">Phone Number</div>
                  <a 
                    href={`tel:${personalData.contact.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-black text-black hover:text-emerald-600 transition-colors"
                  >
                    {personalData.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalData.contact.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-black hover:bg-slate-200 font-bold"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-black" />}
              </button>
            </div>

          </div>

          {/* RIGHT: Contact Form on Pure White */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border-2 border-slate-300 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-black">Message Prepared!</h3>
                  <p className="text-sm text-black font-black max-w-sm mx-auto">
                    Opening your default email client to send the message directly to Ritesh at <span className="text-cyan-600 font-mono font-black">{personalData.contact.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-cyan-500 text-white text-xs font-black hover:bg-cyan-600 transition-colors shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-3xl font-black text-black mb-2">Send a Direct Message</h3>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-black">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className={`w-full bg-white border-2 ${
                        errors.name ? 'border-red-500' : 'border-slate-300 focus:border-cyan-500'
                      } rounded-xl px-4 py-3 text-sm text-black font-bold placeholder-slate-400 focus:outline-none transition-colors shadow-sm`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 font-black flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-black">Your Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full bg-white border-2 ${
                        errors.email ? 'border-red-500' : 'border-slate-300 focus:border-cyan-500'
                      } rounded-xl px-4 py-3 text-sm text-black font-bold placeholder-slate-400 focus:outline-none transition-colors shadow-sm`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 font-black flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-black">Subject *</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="AI Internship Opportunity / Project Collaboration"
                      className={`w-full bg-white border-2 ${
                        errors.subject ? 'border-red-500' : 'border-slate-300 focus:border-cyan-500'
                      } rounded-xl px-4 py-3 text-sm text-black font-bold placeholder-slate-400 focus:outline-none transition-colors shadow-sm`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-600 font-black flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.subject}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-black">Message *</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Ritesh, I came across your portfolio and would like to discuss..."
                      className={`w-full bg-white border-2 ${
                        errors.message ? 'border-red-500' : 'border-slate-300 focus:border-cyan-500'
                      } rounded-xl px-4 py-3 text-sm text-black font-bold placeholder-slate-400 focus:outline-none transition-colors shadow-sm`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 font-black flex items-center gap-1"><AlertCircle className="w-3 h-3"/>{errors.message}</p>}
                  </div>

                  {/* Bright Cyan Button matching user request */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-black text-base text-white bg-cyan-500 hover:bg-cyan-600 shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95"
                  >
                    <span className="text-white-brand">Send Message</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
