import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { name: "Google Cloud Associate", issuer: "Google", year: "2024" },
  { name: "React Developer Expert", issuer: "Dicoding", year: "2023" },
  { name: "Fullstack JavaScript", issuer: "Hacktiv8", year: "2023" },
];

const Certificates = () => {
  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Licenses & <span className="text-secondary">Certifications</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/5 border border-white/5 rounded-xl hover:border-accent/30 transition-all cursor-pointer relative overflow-hidden group"
            >
              {/* Dekorasi Background */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full group-hover:bg-accent/20 transition-all"></div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-600 mt-4">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;