import React from "react";
import { TypeAnimation } from "react-type-animation";
import { getImageUrl } from "../utils";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#151b34] to-[#030d35] flex flex-col md:flex-row items-center justify-center h-screen px-6 text-center md:text-left">
      {/* Text Section */}
      <div className="about w-full md:w-[50%] mb-6 md:mb-0">
        <div className="text-6xl text-white">
          Hi! I am{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Jasmine.
          </span>
        </div>
        <div className="text-2xl text-white mt-7">
          <TypeAnimation
            sequence={[
              "I am a student of Software Engineering Technology.",
              1000,
              "I am a curious learner.",
              1000,
              "I am a Software Developer.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", lineHeight: "1.2em" }}
            repeat={Infinity}
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="image w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white">
        <img
          className="animate-float w-full h-full object-cover"
          src={getImageUrl("jasmine.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
