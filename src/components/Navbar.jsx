import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-dark/30 border-b border-white/10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
      >
        FERDI.
      </motion.div>
      <ul className="flex space-x-8 text-sm font-medium text-gray-300">
        {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
          <motion.li 
            key={index}
            whileHover={{ scale: 1.1, color: "#fff" }}
            className="cursor-pointer hover:text-accent transition-colors"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;