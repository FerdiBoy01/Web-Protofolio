import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Smart School System",
      category: "Web App",
      description: "Platform manajemen sekolah komprehensif: PPDB, absensi, dan panel admin guru/siswa.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      color: "from-blue-600 to-indigo-600", 
      glow: "#4f46e5", 
      links: { demo: "#", repo: "#" }
    },
    {
      id: 2,
      title: "Passkey Auth",
      category: "Backend Security",
      description: "Implementasi login tanpa password menggunakan standar WebAuthn dan biometrik.",
      tech: ["Node.js", "React", "Prisma"],
      color: "from-cyan-600 to-teal-600",
      glow: "#0891b2", 
      links: { demo: "#", repo: "#" }
    },
    {
      id: 3,
      title: "Android Multi-Tools",
      category: "Mobile App",
      description: "Kumpulan alat utilitas native: Kalkulator ilmiah, konversi unit, dan catatan.",
      tech: ["Kotlin", "Android Studio", "RoomDB"],
      color: "from-violet-600 to-purple-600",
      glow: "#7c3aed", 
      links: { demo: "#", repo: "#" }
    },
    {
      id: 4,
      title: "NusantaraVerse 3D",
      category: "Interactive Web",
      description: "Konsep museum digital 3D interaktif untuk eksplorasi budaya Indonesia.",
      tech: ["Three.js", "React Fiber", "Blender"],
      color: "from-indigo-600 to-blue-600",
      glow: "#4338ca", 
      links: { demo: "#", repo: "#" }
    },
     {
      id: 5,
      title: "Crypto Portfolio",
      category: "Web App",
      description: "Dashboard realtime untuk memantau harga dan portofolio aset kripto via API publik.",
      tech: ["React", "Tailwind", "CoinGecko API"],
      color: "from-blue-500 to-cyan-500",
      glow: "#0ea5e9", 
      links: { demo: "#", repo: "#" }
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="relative min-h-screen bg-[#050505] py-8 px-6 overflow-hidden">
      
      {/* --- BACKGROUND GLOW --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Blob Biru Tengah Bawah */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-16 text-center md:text-left"
        >
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight flex items-center justify-center md:justify-start gap-3">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Works.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xl mx-auto md:mx-0">
            Sebuah etalase dari projek-projek yang telah saya kerjakan dengan penuh dedikasi.
          </p>
        </motion.div>

        {/* --- GRID PROJECTS --- */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          transition={{ staggerChildren: 0.15 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              // Hover Shadow Glow sesuai warna project
              style={{ "--hover-color": project.glow }}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[var(--hover-color)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col h-full"
            >
              
              {/* === IMAGE AREA (Gradient Placeholder) === */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:brightness-110 transition-all`}>
                 {/* Pattern Overlay */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light pointer-events-none"></div>
                 <div className="absolute inset-0 bg-black/10"></div>

                 {/* Icon Besar */}
                 <div className="text-white/30 text-6xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 drop-shadow-lg">
                    {project.category.includes("Mobile") ? <FaMobileAlt /> : <FaLaptopCode />}
                 </div>

                 {/* Overlay Button Container (Desktop Hover / Mobile Always) */}
                 <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 p-4">
                    <a href={project.links.demo} className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-lg">
                      <FaExternalLinkAlt /> Demo
                    </a>
                    <a href={project.links.repo} className="p-3 bg-[#111] text-white border border-white/20 rounded-full hover:scale-105 transition-transform hover:border-white">
                      <FaGithub size={18} />
                    </a>
                 </div>
              </div>

              {/* === CONTENT AREA === */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Judul & Kategori */}
                <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">{project.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded bg-white/5 whitespace-nowrap">
                      {project.category}
                    </span>
                </div>

                {/* Deskripsi */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-[10px] font-medium bg-blue-900/20 border border-blue-500/20 text-blue-300 rounded hover:bg-blue-500/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* --- MORE PROJECTS LINK --- */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-center mt-16"
        >
          <a 
            href="https://github.com/FerdiBoy01" 
            target="_blank" 
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400 pb-1"
          >
            <FaLayerGroup />
            <span>Lihat Arsip Lengkap di GitHub</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;