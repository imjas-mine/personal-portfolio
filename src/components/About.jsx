import React from "react";
import {getImageUrl} from "../utils";
const About = () => {
  return (
    <div id="about" className="bg-gradient-to-r from-[#151b34]  to-[#030d35] flex flex-col justify-center items-center font-roboto ">
      <div className="bg-slate-950 w-[85%] flex flex-col items-center h-[600px] mt-20">
        <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-5xl bg-clip-text text-transparent py-10">
          ABOUT
        </h1>
        <div className="flex w-full h-fit">
          
          <div className="text-white w-[50%] flex flex-col justify-center items-center text-xl pr-10 pl-32">
            <p>
              Hi! I am Jasmine.🙋‍♂️
                    <br />
                    <br />
              <p>
                I am pursuing Software Engineering Technology, I'm set to
                graduate in April 2026. I am currently working as a Software Developer co-op
                at <span className="font-bold">Ricoh</span> where I 
                have honed my skills in Java, Spring boot and smartGWT. I have also worked 
                  at VARLab as a Software Developer where I honed my skills in front-end using React Framework.
                
              </p>
             
            </p>
            <br />
            <p>
              I am also working with the city of kitchener in customer service, 
              where I develop valuable communication and teamwork skills. This combination of technical knowledge and interpersonal experience allows me to approach problems from a well-rounded perspective, ensuring that I can both meet user needs and deliver innovative solutions in a professional setting.
            </p>
           
          </div>
          <div className="w-[50%] flex  justify-center items-center ">
            <img className="h-[400px]" src={getImageUrl("about.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
