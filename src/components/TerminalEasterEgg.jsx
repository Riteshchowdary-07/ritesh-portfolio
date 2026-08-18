import React, { useState } from 'react';
import { X, Terminal as TerminalIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export const TerminalEasterEgg = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { text: 'Ritesh Developer CLI v1.0.0 (Type "help" or "sudo hire ritesh")', type: 'system' }
  ]);
  const [inputVal, setInputVal] = useState('');

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${cmd}`, type: 'user' }];
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === 'sudo hire ritesh') {
      newHistory.push({
        text: '⚡ ACCESS GRANTED. Let\'s build something amazing!',
        type: 'success'
      });
      newHistory.push({
        text: `Contact Ritesh directly: ${personalData.contact.email} | Phone: ${personalData.contact.phone}`,
        type: 'info'
      });

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (err) {
        // ignore
      }
    } else if (lowerCmd === 'help') {
      newHistory.push({
        text: 'Available commands:\n  sudo hire ritesh  - Unlock instant hiring status\n  skills            - List Ritesh\'s technical skills\n  projects          - Show featured AI projects\n  clear             - Clear terminal screen\n  exit              - Close terminal overlay',
        type: 'info'
      });
    } else if (lowerCmd === 'skills') {
      newHistory.push({
        text: 'Skills: Python, Java, C++, OpenCV, YOLOv8, KNN, Decision Trees, K-Means, HTML, CSS, JS, Flask, DSA',
        type: 'info'
      });
    } else if (lowerCmd === 'projects') {
      newHistory.push({
        text: 'Projects: 1. AI Career Counselor  2. Trivia-X Traffic Signals  3. Hospital Bed System',
        type: 'info'
      });
    } else if (lowerCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lowerCmd === 'exit') {
      onClose();
      return;
    } else {
      newHistory.push({
        text: `command not found: ${cmd}. Type "help" for available commands or try "sudo hire ritesh"`,
        type: 'error'
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-white border-2 border-slate-300 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs text-black">
        
        {/* Terminal Header */}
        <div className="bg-slate-100 px-4 py-3 border-b-2 border-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="ml-2 text-black font-black flex items-center gap-1.5 text-[11px]">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-600" /> ritesh@dev-environment:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-black hover:text-cyan-600 font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen */}
        <div className="p-4 h-72 overflow-y-auto space-y-2 bg-slate-50 border-b-2 border-slate-200">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap font-black ${
                item.type === 'success'
                  ? 'text-emerald-700 font-bold text-sm'
                  : item.type === 'user'
                  ? 'text-cyan-700'
                  : item.type === 'error'
                  ? 'text-red-600'
                  : 'text-black'
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Command Form */}
        <form onSubmit={handleCommand} className="p-3 bg-white flex items-center gap-2">
          <span className="text-cyan-600 font-black">$</span>
          <input
            type="text"
            autoFocus
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'sudo hire ritesh' or 'help'..."
            className="flex-1 bg-transparent border-none text-black font-black focus:outline-none font-mono text-xs placeholder-slate-400"
          />
          <button type="submit" className="px-3 py-1 bg-cyan-500 text-white rounded text-[11px] font-black">
            Run
          </button>
        </form>

      </div>
    </div>
  );
};
