import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  User, 
  Send, 
  BrainCircuit, 
  Flame, 
  ExternalLink,
  CheckCircle,
  Zap
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const AICareerSpotlight = ({ onOpenModal }) => {
  const project = projectsData[0];

  const samplePrompts = [
    "What career path should I choose if I enjoy Python and AI?",
    "How can I combine Flask and Machine Learning?",
    "What skills are needed for an AI Developer Internship?"
  ];

  const preconfiguredAnswers = {
    "What career path should I choose if I enjoy Python and AI?": 
      "Based on your interest in Python and AI, here are top career paths:\n\n1. AI Developer / ML Engineer: Focus on Python, Scikit-Learn, TensorFlow/PyTorch, and LLM APIs like Gemini.\n2. Data Scientist: Combine statistical analysis with ML models (KNN, Decision Trees, K-Means).\n3. AI Web Integrator: Build interactive AI applications using Flask or FastAPI backends with React frontends.\n\nRecommended next steps: Work on prompt engineering and build real-world project portfolios like your AI Career Counselor!",
    
    "How can I combine Flask and Machine Learning?":
      "Great question! Combining Flask and ML follows a simple pipeline:\n\n1. Train your ML model in Python (or use Gemini/OpenAI API).\n2. Create a Flask REST endpoint (`@app.route('/api/predict')`).\n3. Pass user inputs from your HTML/JS frontend to Flask via fetch requests.\n4. Process inputs, query the ML model, and return JSON responses to update the UI dynamically.",
    
    "What skills are needed for an AI Developer Internship?":
      "For an AI Developer Internship, focus on:\n\n- Core Python & Data Structures (DSA)\n- Foundational ML Algorithms (KNN, Decision Trees, K-Means)\n- Practical LLM Integration (Gemini API, Prompt Engineering)\n- Web Basics (HTML, CSS, JavaScript, Flask)\n- Clear documentation & GitHub portfolio code!"
  };

  const [selectedPrompt, setSelectedPrompt] = useState(samplePrompts[0]);
  const [messages, setMessages] = useState([
    { sender: 'user', text: samplePrompts[0] },
    { 
      sender: 'ai', 
      text: preconfiguredAnswers[samplePrompts[0]], 
      isTyping: false 
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);

  const triggerAiResponse = (userText) => {
    setIsAiThinking(true);
    
    const newMessages = [
      ...messages,
      { sender: 'user', text: userText }
    ];
    setMessages(newMessages);

    setTimeout(() => {
      let aiText = preconfiguredAnswers[userText];
      if (!aiText) {
        aiText = `Based on your interest in "${userText}", Ritesh's AI Career Counselor recommends combining Python backend logic (Flask) with Gemini AI API prompt engineering to build scalable web applications. Focus on practical projects and algorithmic foundations!`;
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: aiText, isTyping: false }
      ]);
      setIsAiThinking(false);
    }, 1000);
  };

  const handleSelectPrompt = (promptText) => {
    setSelectedPrompt(promptText);
    triggerAiResponse(promptText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim() || isAiThinking) return;
    const text = inputVal.trim();
    setInputVal('');
    triggerAiResponse(text);
  };

  return (
    <div className="framer-grid-container p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-300 relative overflow-hidden my-12 shadow-2xl">
      <div className="crosshair-corner crosshair-top-left" />
      <div className="crosshair-corner crosshair-top-right" />
      <div className="crosshair-corner crosshair-bottom-left" />
      <div className="crosshair-corner crosshair-bottom-right" />

      {/* Flagship Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-400 text-black shadow-md">
            <BrainCircuit className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-brand font-mono">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Featured AI Project Spotlight
            </div>
            <h3 className="text-3xl font-black text-black">
              AI Career Counselor
            </h3>
          </div>
        </div>

        <button
          onClick={() => onOpenModal(project)}
          className="px-5 py-2.5 rounded-full text-xs font-black text-white bg-cyan-500 hover:bg-cyan-600 transition-all flex items-center gap-2 shadow-md"
        >
          <span className="text-white-brand">View Architecture Details</span>
          <ExternalLink className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT: Project Narrative & Features */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-black text-sm sm:text-base leading-relaxed font-black">
            {project.description}
          </p>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-black text-cyan-brand uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, fIdx) => (
                <li key={fIdx} className="text-xs text-black font-black flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <h4 className="text-xs font-mono font-black text-black uppercase tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-300 text-black text-xs font-mono font-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Live Interactive Chatbot Simulator Mockup on Pure White */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border-2 border-slate-300 overflow-hidden shadow-xl bg-white text-black">
            
            <div className="bg-slate-100 px-4 py-3 border-b-2 border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-black font-mono">
                  Gemini Career AI Counselor (Interactive Demo)
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500 text-white font-black">
                Demo Mockup
              </span>
            </div>

            <div className="p-4 space-y-4 h-80 overflow-y-auto font-sans text-xs bg-white">
              
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-400 flex items-center justify-center text-black shrink-0 font-bold">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[85%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500 text-white rounded-tr-none font-black'
                      : 'bg-slate-50 text-black border-2 border-slate-200 rounded-tl-none font-extrabold'
                  }`}>
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-500 text-white flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isAiThinking && (
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-7 h-7 rounded-lg bg-cyan-400 flex items-center justify-center text-black shrink-0">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl text-black font-mono text-xs flex items-center gap-2 border border-slate-300 font-bold">
                    <Zap className="w-3.5 h-3.5 animate-pulse text-amber-500" />
                    <span>Gemini AI is generating career roadmap...</span>
                  </div>
                </div>
              )}

            </div>

            <div className="p-3 bg-slate-100 border-t-2 border-slate-200">
              <div className="text-[10px] text-black font-mono font-black mb-2">Click sample prompt to test response:</div>
              <div className="flex flex-wrap gap-1.5">
                {samplePrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPrompt(p)}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-200 border border-slate-300 text-black text-[11px] font-bold truncate max-w-full text-left transition-colors"
                  >
                    "{p}"
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-3 bg-white border-t-2 border-slate-200 flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about AI career guidance..."
                className="flex-1 bg-slate-50 border-2 border-slate-300 rounded-xl px-3.5 py-2 text-xs text-black font-bold placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                disabled={isAiThinking}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-black text-xs transition-all flex items-center gap-1.5 disabled:opacity-50 shadow-sm"
              >
                <span className="text-white-brand">Send</span>
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};
