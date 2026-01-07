import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 bg-dark-950 border-t border-dark-800">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Brand */}
                    <div className="text-center md:text-left">
                        <div className="text-lg font-outfit font-semibold text-white mb-1">
                            Jasmine Kaur
                        </div>
                        <p className="text-sm text-dark-500">
                            Software Developer
                        </p>
                    </div>

                    {/* Center - Social */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/imjas-mine"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-dark-400 hover:text-white transition-colors"
                            title="GitHub"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jasmine-kaur-852207229/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-dark-400 hover:text-white transition-colors"
                            title="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href="mailto:jasminkaur5858@gmail.com"
                            className="p-2 text-dark-400 hover:text-white transition-colors"
                            title="Email"
                        >
                            <FaEnvelope size={18} />
                        </a>
                    </div>

                    {/* Right - Copyright & Back to Top */}
                    <div className="flex items-center gap-6">
                        <p className="text-sm text-dark-500">
                            © {currentYear} Jasmine Kaur
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="p-2 text-dark-400 hover:text-white transition-colors"
                            title="Back to top"
                        >
                            <FaArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
