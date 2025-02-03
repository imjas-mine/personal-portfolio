import React from "react";
import projectData from "../Data/projects.json";
import Project from "./Project";
const Projects = () => {
  return (
    <div id="projects" className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto">
      <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent mt-32">
        PROJECTS
      </h1>
      <div className="flex  w-full flex-wrap justify-center items-center">
        {projectData.projects.map((item, key) => (
          <Project key={key} item={item}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
