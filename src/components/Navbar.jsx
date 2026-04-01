import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo cursor-pointer animate-fade-up">NETHMA</div>
      <div className="nav-links animate-fade-up">
        {['home', 'about', 'projects', 'skills'].map((item, idx) => (
          <a
            key={item}
            href={`#${item}`}
            className={item === 'home' ? 'active' : ''}
            style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
          </a>
        ))}
      </div>
      <div className="nav-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <a href="#contact" className="btn-primary contact-btn">Contact</a>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8%;
          z-index: 1000;
          background: rgba(8, 8, 8, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }

        .logo {
          font-size: 22px;
          font-weight: 900;
          color: white;
          letter-spacing: -1px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.5px;
          transition: var(--transition);
          opacity: 0.6;
          position: relative;
          padding: 8px 0;
        }

        .nav-links a:hover, .nav-links a.active {
          opacity: 1;
          color: var(--accent);
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent);
          border-radius: 2px;
        }

        .contact-btn {
          padding: 12px 28px !important;
          font-size: 14px;
          border-radius: 14px !important;
        }

        @media (max-width: 1024px) {
          .navbar {
            padding: 0 4%;
            height: 90px;
          }
          .nav-links {
            gap: 25px;
          }
        }

        @media (max-width: 850px) {
          .nav-links, .nav-actions {
            display: none;
          }
          .navbar {
            padding: 0 30px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
