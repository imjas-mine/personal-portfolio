import React from "react";
import { getImageUrl } from "../utils";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-r from-[#151b34] to-[#030d35] flex flex-col justify-center items-center font-roboto px-4"
    >
      <div className="bg-slate-950 w-[90%] max-w-[1200px] flex flex-col items-center py-10 mt-20 rounded-lg shadow-lg">
        <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent py-6">
          ABOUT
        </h1>
        
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row w-full h-fit items-center">
          
          {/* Text Section */}
          <div className="text-white w-full md:w-[50%] flex flex-col  text-lg md:text-xl p-6 md:p-10">
            <p>
              Hi! I am Jasmine.🙋‍♀️
            </p>
            <br />
            <p>
              I am pursuing Software Engineering Technology, and I'm set to
              graduate in April 2026. Currently, I work as a Software Developer Co-op
              at <span className="font-bold">Ricoh</span>, where I hone my skills in <span className="font-bold">Java, Spring Boot, SQL Server and SmartGWT </span>.  
              I have also worked at <span className="font-bold">VARLab</span> as a Software Developer, focusing on <span className="font-bold">React.js Frontend Development.</span>
            </p>
            <br />
            <p>
              Additionally, I work with the City of Kitchener in customer service, where I develop strong communication and teamwork skills.  
              My combination of technical expertise and interpersonal experience enables me to deliver well-rounded solutions that meet user needs effectively.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[50%] flex justify-center items-center mt-6 md:mt-0">
            <img className="h-[250px] md:h-[400px] rounded-lg shadow-md" src={getImageUrl("about.jpg")} alt="About Me" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
