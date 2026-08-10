import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, User, CornerDownLeft } from 'lucide-react';
import { aiAssistantKnowledge, personalData } from '../data/portfolioData';

export const AskRiteshAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: `Hi! I'm Ritesh's Portfolio AI Assistant. Ask me anything about Ritesh's skills, education, experience, or projects!`
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userQuery = input.trim();
    const newMessages = [...messages, { sender: 'user', text: userQuery }];
    setMessages(newMessages);
    setInput('');

    // Query knowledge base
    const lowerQuery = userQuery.toLowerCase();
    let matchedAnswer = null;

    for (const item of aiAssistantKnowledge) {
      if (item.keywords.some((kw) => lowerQuery.includes(kw))) {
        matchedAnswer = item.answer;
        break;
      }
    }

    if (!matchedAnswer) {
      matchedAnswer = "I don't have that information in Ritesh's portfolio yet.";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'assistant', text: matchedAnswer }
      ]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-bold text-xs shadow-2xl shadow-cyan-500/40 border border-white/20 flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all group animate-bounce"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
          </div>
          <span>Ask Ritesh AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      )}

      {/* Assistant Window */}
      {isOpen && (
        <div className="glass-card w-[90vw] sm:w-96 rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col h-[460px] animate-fadeIn bg-[#080c16]">
          
          {/* Topbar */}
          <div className="p-4 bg-[#0d1222] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1">
                  Ask Ritesh AI <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                </h4>
                <p className="text-[10px] text-slate-400 font-mono">Portfolio Knowledge Bot</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none font-medium'
                      : 'bg-slate-900 text-slate-200 border border-white/10 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Preset Buttons */}
          <div className="px-3 py-2 bg-[#0a0f1d] border-t border-white/10 flex flex-wrap gap-1">
            {['Skills', 'CGPA & Education', 'Projects', 'Contact Info'].map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(`Tell me about Ritesh's ${preset}`);
                }}
                className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 border border-white/10 font-mono"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} className="p-3 bg-[#060810] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Ritesh's background..."
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:opacity-90 transition-opacity"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
