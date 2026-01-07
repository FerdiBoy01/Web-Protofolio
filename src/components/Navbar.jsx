import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Logic untuk highlight menu aktif saat di-scroll
      const sections = ['home', 'about', 'skills', 'projects', 'certificates'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
           const rect = element.getBoundingClientRect();
           // Jika bagian atas elemen ada di tengah layar
           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
             current = section;
           }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- FUNGSI ANIMASI PINDAH HALAMAN (SCROLL) ---
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    // Hapus tanda '#' untuk ID
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);

    if (element && window.lenis) {
       // Panggil animasi scroll Lenis
       window.lenis.scrollTo(element, {
         offset: -80, // Jarak agar tidak tertutup navbar
         duration: 2, // Durasi perjalanan (2 detik = Cinematic Slow)
         easing: (t) => 1 - Math.pow(1 - t, 4), // Easing 'Quartic Out' (Cepat di awal, sangat pelan di akhir)
       });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ];

  // Animasi Menu Mobile
  const menuVariants = {
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    open: { opacity: 1, y: "0%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <motion.a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-2 text-2xl font-bold text-white tracking-tighter cursor-pointer"
          >
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-2 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
              <FaTerminal className="text-sm text-cyan-400" />
            </div>
            <span>FERDI<span className="text-cyan-500">.</span></span>
          </motion.a>

          {/* DESKTOP MENU (Capsule Style) */}
          <ul className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              
              return (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    {/* Background Pill yang bergerak (Active State) */}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-pill" 
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CONNECT BUTTON */}
          <div className="hidden md:block">
             <a href="#footer" onClick={(e) => handleNavClick(e, '#footer')} className="px-6 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-cyan-500/30 hover:text-cyan-500 border border-transparent hover:border-cyan-500">
               LET'S TALK
             </a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center md:hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-600/20 rounded-full blur-[100px]"></div>
               <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-cyan-600/20 rounded-full blur-[100px]"></div>
            </div>

            <ul className="flex flex-col items-center space-y-6 relative z-10">
              {navLinks.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a 
                    href={item.href} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white hover:to-cyan-400 transition-all tracking-tighter"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;