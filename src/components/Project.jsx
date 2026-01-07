import React from "react";
import { getImageUrl } from "../utils";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ item }) => {
  // Handle both string and array descriptions
  const descriptionPoints = Array.isArray(item.description)
    ? item.description
    : [item.description];

  return (
    <div className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-purple-500/30 rounded-2xl overflow-hidden transition-all duration-300">

      {/* Large Project Image - Full Width */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          src={getImageUrl(item.image)}
          alt={item.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent"></div>

        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            {item.title}
          </h3>

          {/* Links on image */}
          <div className="flex items-center gap-3">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all"
              >
                <FaGithub size={16} />
                <span>Code</span>
              </a>
            )}
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-all"
              >
                <FaExternalLinkAlt size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description as bullet points */}
        <ul className="space-y-2 mb-5">
          {descriptionPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-400 leading-relaxed">
              <span className="text-purple-500 mt-1.5 text-xs">●</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
