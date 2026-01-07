import React from "react";
import { getImageUrl } from "../utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0f]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0a0a0f] to-violet-800/10"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Intro line - balanced size */}
            <p className="text-3xl sm:text-4xl lg:text-5xl text-slate-400 font-light mb-2">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6">
              Jasmine Kaur
            </h1>

            {/* Role */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-purple-400 font-medium mb-8">
              Software Developer
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              I believe in progress over perfection. Every project is a chance to learn,
              grow, and build something meaningful. Currently crafting full-stack solutions
              and always eager to take on new challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white text-lg font-semibold rounded-lg transition-all"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 border border-slate-600 hover:border-purple-500 hover:text-purple-400 text-white text-lg font-medium rounded-lg transition-all text-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-purple-600/20 via-violet-500/10 to-purple-600/20 rounded-full blur-3xl"></div>

              {/* Image */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/10">
                <img
                  className="w-full h-full object-cover"
                  src={getImageUrl("jasmine.jpg")}
                  alt="Jasmine Kaur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
