import React from 'react';
import { motion } from 'framer-motion';

// Contoh data dummy (ganti dengan project aslimu)
const projects = [
  { title: "E-Commerce AI", desc: "Platform belanja dengan rekomendasi AI", tech: ["React", "Node", "Python"] },
  { title: "Crypto Dashboard", desc: "Realtime tracking harga crypto", tech: ["Vue", "Tailwind", "API"] },
  { title: "Smart School", desc: "Sistem manajemen sekolah terintegrasi", tech: ["Laravel", "MySQL"] },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured <span className="text-accent">Projects</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all shadow-lg hover:shadow-accent/20 group"
          >
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 overflow-hidden relative">
              {/* Tempat Gambar Project */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-500">
                [Image Placeholder]
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full border border-accent/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;