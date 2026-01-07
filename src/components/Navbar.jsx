import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'py-4 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/5'
        : 'py-6 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          Jasmine<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex items-center gap-10'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={handleNav}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleNav}></div>

        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0a0a0f] border-l border-purple-500/20 transition-transform duration-300 ${nav ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="p-8">
            <button
              onClick={handleNav}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white"
            >
              <AiOutlineClose size={24} />
            </button>

            <ul className="mt-16 space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block text-lg text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block w-full py-3 text-center text-white bg-purple-600 rounded-lg font-medium"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
