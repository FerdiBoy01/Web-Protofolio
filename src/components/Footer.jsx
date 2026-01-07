import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">FERDI<span className="text-accent">.</span></h2>
          <p className="text-gray-500 text-sm mt-2">Building the web, one line at a time.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {[FaGithub, FaLinkedin, FaInstagram, FaEnvelope].map((Icon, index) => (
            <a 
              key={index} 
              href="#" 
              className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-accent hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Ferdi Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;