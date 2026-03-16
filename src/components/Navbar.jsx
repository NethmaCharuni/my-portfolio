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
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          z-index: 1000;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          transition: var(--transition);
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .nav-links, .hire-me {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
