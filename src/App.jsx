import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

import About from './components/About';

// Local asset paths from public directory
const assets = {
  heroAvatar: '/assets/my.png'
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero avatarUrl={assets.heroAvatar} />
        <About />
        <Skills />
        <ProjectGallery />
        <Contact />
      </main>

      <WhatsAppButton />

      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-light)' }}>
        <p>© 2026 Nethma Charuni. Built with ❤️ and React.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>GitHub Profile</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
