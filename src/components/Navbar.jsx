import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar glass-card">
      <div className="logo">NC.</div>
      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="btn-primary hire-me">Hire Me</a>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8%;
          z-index: 1000;
          background: rgba(1, 22, 39, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-light);
          border-radius: 0;
        }

        .logo {
          font-size: 28px;
          font-weight: 800;
          color: var(--accent-secondary);
          letter-spacing: -1.5px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 15px;
          transition: var(--transition);
          letter-spacing: 0.5px;
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .nav-links, .hire-me {
            display: none;
          }
          .navbar {
            padding: 0 20px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
