import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt, FaAward, FaCheckCircle } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "Google Cloud Associate Engineer",
      issuer: "Google Cloud Platform",
      date: "Nov 2024 - Nov 2027",
      id: "GCP-12345-XYZ",
      link: "#", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      tags: ["Cloud", "Infrastructure"]
    },
    {
      title: "Belajar Fundamental Aplikasi Android",
      issuer: "Dicoding Indonesia",
      date: "Des 2023",
      id: "DCD-ANDROID-001",
      link: "#",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop",
      tags: ["Mobile", "Kotlin"]
    },
    {
      title: "React Developer Expert",
      issuer: "Hacktiv8",
      date: "Jan 2024",
      id: "H8-REACT-2024",
      link: "#",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      tags: ["Frontend", "React"]
    },
    {
      title: "Architecting on AWS",
      issuer: "Amazon Web Services",
      date: "Feb 2024",
      id: "AWS-ARCH-99",
      link: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
      tags: ["AWS", "Architecture"]
    }
  ];

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } } 
  };
  
  const cardVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } } 
  };

  return (
    <section id="certificates" className="relative min-h-screen bg-[#050505] py-20 px-4 md:px-6 overflow-hidden">
      
      {/* --- BACKGROUND GLOW --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-900/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-cyan-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-2 block">Achievements</span>
          
          {/* Responsive Header Title: Stack on Mobile, Row on Desktop */}
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
             <span>Licenses &</span> 
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Certifications.</span>
          </h2>
          
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xl mx-auto px-4">
            Validasi kompetensi profesional dari institusi teknologi terkemuka.
          </p>
        </motion.div>

        {/* --- GRID CERTIFICATES --- */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              whileHover={{ y: -8 }}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col hover:border-cyan-500/30 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)] transition-all duration-500 h-full"
            >
              
              {/* === IMAGE HEADER === */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                {/* Gambar: Berwarna di Mobile (grayscale-0), Hitam Putih di Desktop (md:grayscale) */}
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale-0 md:grayscale md:group-hover:grayscale-0"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90"></div>

                {/* Badge Verified */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/60 backdrop-blur-md border border-cyan-500/30 px-2 md:px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                   <FaCheckCircle className="text-cyan-400 text-[10px] md:text-xs" />
                   <span className="text-[9px] md:text-[10px] font-bold text-white tracking-wider uppercase">Verified</span>
                </div>
                
                {/* Icon Award */}
                <div className="absolute bottom-0 left-4 md:left-6 translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/20 transition-all z-10">
                   <FaAward className="text-xl md:text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* === CONTENT BODY === */}
              <div className="p-5 md:p-6 pt-8 md:pt-10 flex flex-col flex-grow">
                
                {/* Judul & Issuer */}
                <div className="mb-4">
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{cert.issuer}</p>
                </div>

                {/* ID & Date */}
                <div className="space-y-2 mb-6">
                   <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 font-mono bg-white/5 p-2 rounded-lg break-all">
                      <span className="text-cyan-500 shrink-0">ID:</span> {cert.id}
                   </div>
                   <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400">
                      <FaCalendarAlt className="text-gray-600" />
                      <span>{cert.date}</span>
                   </div>
                </div>

                {/* Tags & Action (Footer) - RESPONSIVE FIX */}
                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                   {/* Tags (Flex Wrap agar tidak nabrak) */}
                   <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] md:text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                   </div>
                   
                   <a 
                     href={cert.link} 
                     className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all transform hover:rotate-[-45deg] shrink-0"
                     title="Lihat Sertifikat"
                   >
                     <FaExternalLinkAlt size={10} />
                   </a>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* --- LINKEDIN CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.5 }} 
          className="mt-12 md:mt-16 text-center"
        >
           <button className="px-6 md:px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all font-bold text-xs md:text-sm tracking-wide shadow-lg hover:shadow-white/20">
             Show All Credentials on LinkedIn
           </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;