import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

// Local asset paths from public directory
const assets = {
  heroAvatar: '/assets/my.png',
  skillsBg: '/assets/skillsBg.png',
  contactImg: '/assets/contactImg.png'
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero avatarUrl={assets.heroAvatar} />
        <Skills bgImageUrl={assets.skillsBg} />
        <ProjectGallery />
        <Contact illustrationUrl={assets.contactImg} />
      </main>

      <WhatsAppButton />

      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2026 Nethma Charuni. Built with ❤️ and React.</p>
      </footer>
    </div>
  );
}

export default App;
