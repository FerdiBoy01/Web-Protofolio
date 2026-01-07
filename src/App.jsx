import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import './index.css'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // --- SETTING SCROLL CINEMATIC ---
    const lenis = new Lenis({
      duration: 1.5, // Durasi scroll (semakin tinggi semakin lambat & smooth)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efek 'rem' yang halus
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Simpan instance ke window agar bisa diakses Navbar
    window.lenis = lenis;

    // Loading Simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2200);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      
      {/* Preloader */}
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Main Content */}
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
         <Navbar />
         
         {/* ID Section ditambahkan di sini atau di dalam komponen masing-masing */}
         <div id="home"><Hero /></div>
         <div id="about"><About /></div>
         <div id="skills"><Skills /></div>
         <div id="projects"><Projects /></div>
         <div id="certificates"><Certificates /></div>
         <div id="footer"><Footer /></div>
      </div>

    </div>
  );
}

export default App;