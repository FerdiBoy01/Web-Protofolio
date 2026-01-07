import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAndroid, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiLaravel, SiMysql, SiPostman, SiFigma, SiKotlin, SiExpress, SiNextdotjs, SiDocker } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend & UI",
      icon: <FaLayerGroup/>,
      desc: "Building immersive user interfaces.",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      ]
    },
    {
      id: "backend",
      title: "Backend & Core",
      icon: <FaServer/>,
      desc: "Robust server-side logic & DB.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#ffffff" },
        { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      ]
    },
    {
      id: "mobile",
      title: "Mobile & Tools",
      icon: <FaTools/>,
      desc: "Cross-platform & utilities.",
      skills: [
        { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
        { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      ]
    }
  ];

  // Variabel Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="skills" className="relative min-h-screen bg-[#050505] py-8 px-6 overflow-hidden flex flex-col justify-center">
      
      {/* --- BACKGROUND GLOW (Matching Hero/About) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Blob Cyan Tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase mb-2 block">My Arsenal</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Proficiency.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Kumpulan teknologi yang saya gunakan untuk mengubah ide menjadi solusi digital yang nyata dan scalable.
          </p>
        </motion.div>

        {/* --- GRID CARDS --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENT: SKILL CARD ---
const SkillCard = ({ category }) => {
  // Animasi Floating untuk Icon di dalam card
  const floatingVariant = (delay) => ({
    animate: {
      y: [-2, 2, -2],
      transition: { duration: 3, delay: delay, repeat: Infinity, ease: "easeInOut" }
    }
  });

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
      }}
      whileHover={{ y: -5 }}
      className="bg-[#0a0a0a] border border-white/10 rounded-[30px] p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 shadow-2xl"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Header Card */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
          {category.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
          <p className="text-xs text-gray-500 font-mono mt-1">{category.desc}</p>
        </div>
      </div>

      {/* Grid Icons */}
      <div className="grid grid-cols-3 gap-4 relative z-10">
        {category.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={floatingVariant(idx * 0.2)}
            animate="animate"
            className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer group/item"
          >
            {/* Icon dengan warna asli */}
            <div 
              className="text-3xl transition-transform duration-300 group-hover/item:scale-110" 
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            {/* Nama Skill */}
            <span className="text-[10px] font-bold text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-wider">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Dekorasi Garis Tech */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default Skills;