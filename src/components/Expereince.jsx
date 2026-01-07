import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Co-operators",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4NY3K5otZIj67vSbEZ_JbTbYUASk6_ShMA&s",
      role: "RPA Developer Co-op",
      duration: "May 2025 - August 2025",
      skills: ["UiPath", "Robotic Process Automation (RPA)", "C#", "VB.NET"],
      highlights: [
        "Developed and deployed automation solutions using UiPath to production, streamlining a core process and saving 50+ work hours per month.",
        "Provided production support for 10+ automation workflows, resolving 95% of issues within SLA and ensuring continuous uptime."
      ]
    },
    {
      company: "Ricoh",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrefXq2iaMEyDW-EUR7Y-NJbJ4_QnXz3KJA&s",
      role: "Software Developer Co-op",
      duration: "Sept 2024 - April 2025",
      skills: ["Java", "Spring Boot", "SQL Server", "SmartGWT", "Azure DevOps"],
      highlights: [
        "Developing new features and fixing bugs for RICOH Cloud stream, utilizing Java and Spring boot for backend, integrating smartGWT for dynamic front-end",
        "Worked with SQL Server for database management and integration.",
        "Analyze requirements and specification documents to design and implement coding solutions, working independently or as part of a team.",
        "Worked with Azure DevOps, Jira, and SourceTree for version control and project management.",
        "Develop comprehensive technical documentation and respond to technical inquiries from external software developers."
      ]
    },
    {
      company: "VARLab",
      logo: "https://conestogac.zohorecruit.com/recruit/viewCareerImage.do?page_id=624216000000338275&type=logo&file_name=VARlab.jpg",
      role: "Software Developer Co-op",
      duration: "May 2024 - August 2024",
      skills: ["React.js", "Tailwind CSS", "JavaScript"],
      highlights: [
        "Built an internal productivity tool using React.js, and tailwind CSS to create a meta-search interface that aggregates data from multiple third-party asset stores, improving the efficiency of asset discovery for the development team.",
        "Developed and integrated custom sorting and filtering functionalities, enhancing the search result's usability and enabling users to quickly access relevant data.",
        "Reduced the need for the asset team to supervise all potential purchases and compare from different stores individually"
      ]
    },
    {
      company: "City of Kitchener",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKAYuOjghdYK7J3p_Z27HOBjg04p0lAILPA&s",
      role: "Customer Service",
      duration: "June 2023 - Present",
      skills: ["Communication", "Customer Service", "Microsoft Excel"],
      highlights: [
        "Engaged virtually and in person with stakeholders and participants guiding them through various services",
        "Delivered trailed service to meet the needs of each participant, ensuring a seamless user experience, while addressing and resolving any concerns or complaints.",
        "Utilized Microsoft Excel to accurately record statistical information, input ticket data, and organize documentation of relevant program information."
      ]
    }
  ];

  return (
    <section id="work" className="py-24 bg-[#0a0a0f]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My professional journey and the roles that shaped my skills
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-purple-500/30 rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Company Logo - no white bg */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {exp.role} | {exp.company}
                      </h3>
                      <p className="text-slate-500">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-slate-400">
                        <span className="text-purple-500 mt-1.5 text-xs">●</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills - at the bottom */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-3 py-1 text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
