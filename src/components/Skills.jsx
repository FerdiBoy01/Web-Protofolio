import React from 'react';
import { FaReact, FaNodeJs, FaLaravel, FaAndroid } from 'react-icons/fa'; // Pastikan install react-icons

const skills = [
  { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "Android", icon: <FaAndroid className="text-green-400" /> },
  // Tambahkan skill lain
];

const Skills = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Technical <span className="text-secondary">Arsenal</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors flex flex-col items-center gap-4">
              <div className="text-5xl">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;