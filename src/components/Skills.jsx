import React from 'react';
import {
  FaJava, FaReact, FaGitAlt, FaPython, FaDatabase, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiSpringboot, SiTailwindcss, SiPostgresql, SiJavascript,
  SiMicrosoftazure
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava />, color: "text-orange-500" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
    { name: "SQL", icon: <FaDatabase />, color: "text-purple-400" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "Azure DevOps", icon: <SiMicrosoftazure />, color: "text-blue-500" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
  ];

  const otherSkills = [
    "REST APIs", "Hibernate", "JPA", "JWT Authentication",
    "UiPath RPA", "C#", "VB.NET", "Agile/Scrum", "Jira"
  ];

  return (
    <section id='skills' className="py-24 bg-[#0a0a0f]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies I've worked with across my projects and professional experience
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-purple-500/30 rounded-xl transition-all hover:-translate-y-1"
            >
              <span className={`text-3xl sm:text-4xl ${skill.color} mb-3 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </span>
              <span className="text-sm text-slate-300 text-center font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="text-center">
          <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Also experienced with
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
