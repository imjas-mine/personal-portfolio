import React from "react";
import { getImageUrl } from "../utils";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f]">
      {/* Subtle grid pattern for continuity with hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A little bit about who I am and what I do
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-violet-500/10 rounded-2xl blur-2xl"></div>
            <img
              className="relative w-full rounded-2xl border border-purple-500/20"
              src={getImageUrl("about.jpg")}
              alt="About Jasmine"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a Software Engineering Technology student at Conestoga College,
                graduating in April 2026. I was honored to receive a regional scholarship
                for academic excellence.
              </p>

              <p>
                I'm a software developer with hands-on experience in full-stack development
                and automation. I've built responsive interfaces with React.js, developed
                scalable backend services with Java Spring Boot, and created process
                automation solutions with UiPath.
              </p>

              <p>
                What drives me is the opportunity to solve real problems with clean,
                maintainable code. I enjoy collaborating with teams, learning new
                technologies, and building products that make a difference.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-3xl font-bold text-purple-400">3</div>
                <div className="text-sm text-slate-500 mt-1">Co-op Terms</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-3xl font-bold text-purple-400">20+</div>
                <div className="text-sm text-slate-500 mt-1">Projects</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-3xl font-bold text-purple-400">2026</div>
                <div className="text-sm text-slate-500 mt-1">Graduating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
