import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { AICareerSpotlight } from './AICareerSpotlight';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === "All Projects") return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative z-10 border-t-2 border-slate-300 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant All-Caps Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 border-b-2 border-slate-300 pb-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border-2 border-slate-300 text-black text-xs font-mono font-black shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              <span>Selected Portfolio Work</span>
            </div>

            <h2 className="font-bebas text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
              PROJECTS
            </h2>
          </div>

          <button
            onClick={() => setActiveCategory("All Projects")}
            className="px-7 py-3.5 rounded-full bg-cyan-500 text-white font-black text-xs shadow-md hover:bg-cyan-600 transition-all flex items-center gap-2"
          >
            <span className="text-white-brand">View all projects</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          </button>
        </div>

        {/* 1. Flagship Featured Project Interactive Spotlight */}
        <AICareerSpotlight onOpenModal={(proj) => setSelectedProject(proj)} />

        {/* 2. Filter & Grid of All 8 Projects */}
        <div className="mt-16 space-y-8">
          
          {/* Category Filter Pills - Active tab in Bright Cyan */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-black transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500 text-white shadow-md font-black border-2 border-cyan-500 scale-105'
                      : 'bg-white text-black hover:bg-slate-100 border-2 border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredProjects.map((proj) => (
              <ProjectCard 
                key={proj.id} 
                project={proj} 
                onOpenModal={(p) => setSelectedProject(p)} 
              />
            ))}
          </div>

        </div>

        {/* Modal render */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

      </div>
    </section>
  );
};
