import React from 'react';
import { motion } from 'framer-motion';
// Pastikan import ini menggunakan kurung kurawal {} agar tidak error
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import fotoku from '../assets/images/fotoku.jpg'

const About = () => {
  const githubUsername = "FerdiBoy01"; // Ganti dengan username GitHub-mu

  // Tema warna untuk GitHub Calendar (Ungu/Indigo)
  const theme = {
    dark: ['#161b22', '#4c1d95', '#6d28d9', '#8b5cf6', '#c4b5fd'],
  };

  return (
    <section id="about" className="py-24 px-6 relative bg-dark overflow-hidden flex flex-col justify-center">
      {/* --- Background Effects --- */}
      <div className="absolute top-20 left-[-10%] w-72 h-72 bg-accent/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-72 h-72 bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* === BAGIAN ATAS: FOTO & BIODATA === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* --- KOLOM KIRI: FOTO PROFIL (4 Kolom) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start relative"
          >
            {/* Container Foto dengan Efek Bingkai Miring */}
            <div className="relative w-72 h-80 md:w-80 md:h-96 group">
              {/* Bingkai Belakang (Miring & Glow) */}
              <div className="absolute inset-0 border-2 border-accent/40 rounded-2xl rotate-6 group-hover:rotate-3 group-hover:scale-105 transition-all duration-500 backdrop-blur-sm bg-white/5"></div>
              
              {/* Bingkai Kedua (Glow Halus) */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Foto Asli */}
              {/* PENTING: Pastikan foto ada di folder 'public/assets/profile.jpg' */}
              <img 
                src={fotoku}
                alt="Profile Photo" 
                className="w-full h-full object-cover rounded-2xl relative z-10 shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>


          {/* --- KOLOM KANAN: BIO & STATS (7 Kolom) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Judul & Teks Bio */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                A little bit <br/>
                <span className="bg-gradient-to-r from-accent via-purple-400 to-secondary bg-clip-text text-transparent">About Me.</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hai! Saya <span className="text-white font-semibold">Ferdi</span>, seorang Fullstack Developer yang berbasis di Indonesia. Saya suka mengubah ide kompleks menjadi antarmuka yang sederhana, indah, dan intuitif.
                </p>
                <p>
                  Fokus utama saya saat ini adalah membangun aplikasi web yang skalabel menggunakan ekosistem JavaScript modern, sambil terus mengeksplorasi potensi AI dalam pengembangan perangkat lunak.
                </p>
              </div>
            </div>

            {/* Statistik Cepat (Dipindahkan ke sini agar rapi) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/10">
               <StatItem number="3+" label="Years Exp." />
               <StatItem number="20+" label="Projects" />
               <StatItem number="100%" label="Commitment" highlight />
               <StatItem number="24/7" label="Learning" />
            </div>

            {/* Tombol Aksi */}
            <div className="flex gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-accent text-white rounded-full font-semibold shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all">
                Download CV
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all">
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>


        {/* === BAGIAN BAWAH: GITHUB ACTIVITY === */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full flex flex-col items-center border-t border-white/10 pt-16"
        >
           <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
             <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             GitHub Contributions
           </h3>

           {/* Container Glass Kalender */}
           <div className="p-4 md:p-6 bg-black/30 border border-white/5 rounded-2xl backdrop-blur-md shadow-xl w-full flex justify-center overflow-x-auto hover:border-accent/20 transition-colors">
              <GitHubCalendar 
                username={githubUsername} 
                blockSize={14} 
                blockMargin={4} 
                fontSize={14}
                colorScheme="dark"
                theme={theme}
                renderBlock={(block, activity) => (
                  <Tooltip id="github-tooltip" content={`${activity.count} activities on ${activity.date}`} place="top" style={{ backgroundColor: "#6366f1", borderRadius: "8px" }}>
                    {React.cloneElement(block, {
                      'data-tooltip-id': 'github-tooltip',
                      style: { cursor: 'pointer', ...block.props.style }
                    })}
                  </Tooltip>
                )}
              />
              <Tooltip id="github-tooltip" />
           </div>
        </motion.div>

      </div>
    </section>
  );
};

// Komponen Item Statistik yang Lebih Minimalis
const StatItem = ({ number, label, highlight }) => (
  <div className="flex flex-col items-center justify-center p-2">
    <h3 className={`text-3xl font-bold ${highlight ? 'text-accent' : 'text-white'}`}>
      {number}
    </h3>
    <p className="text-sm text-gray-500 text-center">{label}</p>
  </div>
);

export default About;