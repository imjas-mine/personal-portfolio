import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            I'm currently looking for new opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Contact Card */}
        <div className="p-8 lg:p-12 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
          <p className="text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Whether you have a project in mind, a job opportunity, or just want to connect —
            I'd love to hear from you.
          </p>

          {/* Primary Contact */}
          <a
            href="mailto:jasminkaur5858@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white text-lg font-medium rounded-xl transition-all hover:-translate-y-0.5"
          >
            <FaEnvelope size={20} />
            jasminkaur5858@gmail.com
          </a>

          {/* Other Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-10 border-t border-white/5">
            <div className="flex items-center gap-3 text-slate-400">
              <FaPhone size={16} className="text-purple-400" />
              <span>519-533-8833</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <FaMapMarkerAlt size={16} className="text-purple-400" />
              <span>Kitchener, Ontario</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/jasmine-kaur-852207229/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-purple-500/30 rounded-xl text-slate-400 hover:text-purple-400 transition-all"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/imjas-mine"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-purple-500/30 rounded-xl text-slate-400 hover:text-white transition-all"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
