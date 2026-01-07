import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';

const About = () => {
  // Ganti username ini dengan username GitHub aslimu
  const githubUsername = "FerdiBoy_ "; 

  // Konfigurasi Tema Warna untuk Kalender (Supaya tidak hijau, tapi Ungu/Indigo)
  const theme = {
    dark: ['#161b22', '#4c1d95', '#6d28d9', '#8b5cf6', '#c4b5fd'], // Gradasi ungu gelap ke terang
  };

  return (
    <section id="about" className="py-20 px-6 relative bg-dark overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* --- BAGIAN ATAS: Split Layout (Bio & Stats) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Kolom Kiri: Story */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Code, Eat, <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Sleep</span>, Repeat.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Halo! Saya <span className="text-white font-semibold">Ferdi</span>. Saya bukan sekadar menulis kode, saya membangun solusi. 
              Perjalanan saya dimulai dari rasa penasaran tentang bagaimana sebuah website bekerja, dan sekarang saya tenggelam dalam ekosistem <span className="text-accent">Fullstack Development</span>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Saya percaya pada prinsip <i>"Clean Code"</i> dan selalu antusias mempelajari teknologi baru seperti AI dan Blockchain untuk diintegrasikan ke dalam aplikasi web modern.
            </p>
            
            {/* Download CV Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Kolom Kanan: Stats Card (Mirip Activity Overview) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
             <StatCard number="20+" label="Projects Completed" delay={0.1} />
             <StatCard number="3+" label="Years Experience" delay={0.2} />
             <StatCard number="85+" label="Total Contributions" delay={0.3} highlight />
             <StatCard number="100%" label="Commitment" delay={0.4} />
          </motion.div>
        </div>

        {/* --- BAGIAN BAWAH: GITHUB CALENDAR (Highlight Utama) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col items-center"
        >
           <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
             <span className="text-accent">GitHub</span> Activity
             <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-400 font-normal">Live Data</span>
           </h3>

           {/* Container Glass untuk Kalender */}
           <div className="p-4 md:p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-sm shadow-[0_0_50px_rgba(99,102,241,0.1)] hover:border-accent/30 transition-all duration-500 w-full flex justify-center overflow-x-auto">
              
              {/* Komponen Kalender */}
              <GitHubCalendar 
                username={githubUsername} 
                blockSize={14} 
                blockMargin={4} 
                fontSize={14}
                colorScheme="dark"
                theme={theme}
                renderBlock={(block, activity) => (
                  <Tooltip id="github-tooltip" content={`${activity.count} activities on ${activity.date}`} place="top">
                    {React.cloneElement(block, {
                      'data-tooltip-id': 'github-tooltip',
                      style: { cursor: 'pointer', ...block.props.style } // Tambahkan cursor pointer
                    })}
                  </Tooltip>
                )}
              />
              <Tooltip id="github-tooltip" style={{ backgroundColor: "#6366f1", borderRadius: "8px" }} />
           </div>
           
           <p className="mt-6 text-gray-500 text-sm text-center max-w-2xl">
             Grafik di atas menunjukkan kontribusi kode saya secara <i>real-time</i>. Semakin terang warnanya, semakin banyak kode yang saya tulis hari itu. Konsistensi adalah kunci!
           </p>
        </motion.div>

      </div>
    </section>
  );
};

// Komponen Kecil untuk Kotak Statistik
const StatCard = ({ number, label, delay, highlight }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring" }}
    viewport={{ once: true }}
    className={`p-6 rounded-2xl border ${highlight ? 'bg-accent/10 border-accent/50' : 'bg-white/5 border-white/10'} hover:bg-white/10 transition-colors flex flex-col justify-center items-center text-center group`}
  >
    <h3 className={`text-4xl font-bold mb-1 ${highlight ? 'text-accent' : 'text-white'} group-hover:scale-110 transition-transform`}>
      {number}
    </h3>
    <p className="text-sm text-gray-400">{label}</p>
  </motion.div>
);

export default About;
