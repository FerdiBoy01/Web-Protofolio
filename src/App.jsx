import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* Container utama dengan background pattern halus (opsional) */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}

export default App;