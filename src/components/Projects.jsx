import React from "react";
import projectData from "../Data/projects.json";
import Project from "./Project";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of projects I've worked on
          </p>
        </div>

        {/* Projects List - Vertical stack */}
        <div className="space-y-8">
          {projectData.projects.map((item, key) => (
            <Project key={key} item={item} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/imjas-mine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-slate-400 hover:text-white border border-white/10 hover:border-purple-500/30 rounded-lg transition-all"
          >
            <FaGithub size={20} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
