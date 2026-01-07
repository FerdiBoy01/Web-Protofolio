import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

// Kata-kata yang akan berganti otomatis
const titles = ["Fullstack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Explorer"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Logika untuk mengganti teks setiap 3 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  // Varian animasi untuk Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* --- BACKGROUND CANGGIH --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Grid Pattern halus */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px] opacity-20" />
        {/* Efek Vignette (pinggiran gelap) */}
        <div className="absolute inset-0 bg-dark/80 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        
        {/* Bola Cahaya (Glow Orbs) */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/40 rounded-full blur-[150px] -z-10" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[150px] -z-10" 
        />
      </div>


      {/* --- KONTEN UTAMA --- */}
      <div className="max-w-7xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full pt-20 lg:pt-0">
        
        {/* BAGIAN KIRI: TEKS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Badge Kecil */}
          <motion.div variants={childVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
             <span className="text-sm text-gray-300 font-medium">Available for work</span>
          </motion.div>

          {/* Nama */}
          <motion.h2 variants={childVariants} className="text-xl text-accent font-semibold tracking-wider mb-2">
            HELLO, I'M FERDI
          </motion.h2>

          {/* Judul Utama dengan Efek Typewriter */}
          <div className="h-20 md:h-24 mb-6 relative overflow-hidden">
            <AnimatePresence mode='wait'>
              <motion.h1
                key={titles[index]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-5xl md:text-7xl font-extrabold leading-tight absolute top-0 left-0 w-full whitespace-nowrap bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent"
              >
                {titles[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Deskripsi */}
          <motion.p variants={childVariants} className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
            Membangun pengalaman digital yang imersif dengan kode yang bersih dan desain yang modern. Fokus pada performa dan detail estetika.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div variants={childVariants} className="flex flex-wrap gap-4">
            <button className="group px-8 py-4 bg-accent hover:bg-indigo-600 text-white rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:scale-105">
              Lihat Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white rounded-full font-bold transition-all flex items-center gap-2 backdrop-blur-md">
              <FaGithub size={20}/>
              Github Profile
            </button>
          </motion.div>
        </motion.div>


        {/* BAGIAN KANAN: VISUAL ABSTRAK (Pengganti Foto) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
           {/* Elemen Visual Abstrak Berputar */}
           <div className="relative w-[400px] h-[400px]">
              {/* Lingkaran Luar Berputar Pelan */}
              <div className="absolute inset-0 border border-accent/30 rounded-full animate-slow-spin" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
              <div className="absolute inset-4 border border-secondary/30 rounded-full animate-reverse-slow-spin" style={{ borderRadius: '60% 40% 30% 70% / 50% 40% 50% 60%' }}></div>
              
              {/* Kotak Kaca di Tengah */}
              <div className="absolute inset-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl z-10 rotate-12 hover:rotate-0 transition-all duration-700 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Ilustrasi Kode Sederhana di dalam kotak */}
                  <div className="text-left p-6 text-sm font-mono text-gray-300 relative z-20">
                    <p><span className="text-accent">const</span> <span className="text-secondary">developer</span> = {`{`}</p>
                    <p className="pl-4">name: <span className="text-green-400">'Ferdi'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-orange-400">'React'</span>, <span className="text-orange-400">'Node'</span>],</p>
                    <p className="pl-4">hardWorker: <span className="text-accent">true</span></p>
                    <p>{`}`};</p>
                    <p className="mt-4 text-gray-500">// Siap menciptakan</p>
                    <p className="text-gray-500">// sesuatu yang luar biasa.</p>
                  </div>
              </div>

              {/* Partikel Melayang Kecil */}
              <motion.div animate={{ y: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 w-12 h-12 bg-accent/30 backdrop-blur-md rounded-xl border border-white/20 z-0" />
              <motion.div animate={{ y: [20, -20, 20] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 left-10 w-16 h-16 bg-secondary/30 backdrop-blur-md rounded-full border border-white/20 z-0" />
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;