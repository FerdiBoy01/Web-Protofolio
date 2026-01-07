import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaHeart, FaArrowUp, FaTerminal } from 'react-icons/fa';

const Footer = () => {
  
  // Fungsi Scroll Halus menggunakan Lenis (Konsisten dengan App.jsx)
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(targetId, {
        offset: -80,
        duration: 2, 
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      const element = document.querySelector(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/FerdiBoy01", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "#", color: "hover:text-blue-500" },
    { icon: <FaInstagram />, href: "#", color: "hover:text-pink-500" },
    { icon: <FaWhatsapp />, href: "#", color: "hover:text-green-500" }, 
  ];

  return (
    <footer id="footer" className="relative bg-[#050505] pt-24 pb-10 overflow-hidden">
      
      {/* --- BACKGROUND GLOW --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Cahaya di bawah footer */}
         <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* === 1. CTA SECTION (Call to Action) === */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0a0a0a] border border-white/10 rounded-[30px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden group"
        >
          {/* Dekorasi Background CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-700"></div>
          
          <div className="text-center md:text-left z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Ready to create <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Something active?</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Mari diskusikan ide hebatmu. Saya siap membantu mengubah konsep menjadi produk digital berkualitas.
            </p>
          </div>
          
          <div className="z-10">
            <a 
              href="mailto:emailmu@example.com" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform flex items-center gap-2"
            >
              Start a Project
            </a>
          </div>
        </motion.div>


        {/* === 2. MAIN FOOTER CONTENT === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mt-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter cursor-pointer w-fit">
               <div className="bg-cyan-500/10 border border-cyan-500/20 p-2 rounded-lg">
                  <FaTerminal className="text-sm text-cyan-400" />
               </div>
               <span>FERDI<span className="text-cyan-500">.</span></span>
            </a>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Fullstack Developer yang berfokus pada performa, desain yang bersih, dan interaksi pengguna yang mulus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-cyan-400 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Connect</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:border-white/30 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              Based in <span className="text-gray-300">Pekanbaru, Indonesia</span>
            </p>
          </div>

        </div>


        {/* === 3. BOTTOM BAR === */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          <p>&copy; {new Date().getFullYear()} Ferdi Portfolio. All rights reserved.</p>
          
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse mx-1" /> & React
          </p>

          {/* Back to Top Button */}
          <button 
            onClick={(e) => handleScroll(e, '#home')}
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all group"
            title="Back to Top"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;