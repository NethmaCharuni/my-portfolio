import React, { useState } from 'react';

const Hero = ({ avatarUrl }) => {
  return (
    <section id="home" className="hero-section">
      {/* Background Blobs */}
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="hero-content">
        <div className="hello-badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="dot"></span>
          Hello!
        </div>
        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.2s' }}>
          I'm <span>Nethma Charuni</span>, <br />
          a <span className="text-orange">Full-Stack Developer</span> & <br />
          <span className="text-orange">UI/UX Designer</span>
        </h1>
        <p className="hero-bio animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Passionate about creating simple, user-centered designs, I specialize in building responsive web applications that are both functional and visually appealing.
        </p>

        <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn-primary">
            Download CV <span className="arrow-icon">→</span>
          </button>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/charuni-samarakoon-3a2b67297" target="_blank" rel="noreferrer" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/NethmaCharuni" target="_blank" rel="noreferrer" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image-container animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <div className="image-wrapper">
          <div className="glow-effect"></div>
          <img src={avatarUrl} alt="Nethma Charuni" className="hero-img" />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 100vh;
          padding: 100px 8% 40px;
          gap: 40px;
          background-color: var(--bg-light);
          position: relative;
          overflow: hidden;
        }

        .blob-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 77, 0, 0.15) 0%, rgba(255, 77, 0, 0) 70%);
          filter: blur(60px);
          border-radius: 50%;
          animation: blob 20s infinite alternate cubic-bezier(0.45, 0, 0.55, 1);
        }

        .blob-1 {
          top: -100px;
          right: -100px;
          animation-duration: 15s;
        }

        .blob-2 {
          bottom: -150px;
          left: -150px;
          animation-duration: 18s;
          background: radial-gradient(circle, rgba(255, 122, 0, 0.1) 0%, rgba(255, 77, 0, 0) 70%);
        }

        .hero-content {
          flex: 1.2;
          z-index: 10;
          position: relative;
        }

        .hello-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }

        .hello-badge .dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px var(--accent);
        }

        .section-title {
          font-size: 50px;
          color: white;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .main-title {
          font-size: 50px;
          color: white;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .hero-title {
          font-size: 50px;
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 25px;
          color: white;
        }

        .hero-title span.text-orange {
          color: var(--accent);
          background: none;
          -webkit-text-fill-color: initial;
        }

        .hero-bio {
          font-size: 19px;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 45px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 25px;
        }

        .arrow-icon {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .arrow-icon {
          transform: translateX(5px);
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          color: white;
          transition: var(--transition);
          opacity: 0.6;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .social-icon:hover {
          color: var(--accent);
          opacity: 1;
          transform: translateY(-5px);
          border-color: var(--accent-border);
          background: rgba(255, 77, 0, 0.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 5;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
        }

        .hero-img {
          width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.5));
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 77, 0, 0.3) 0%, rgba(255, 77, 0, 0) 70%);
          z-index: 1;
          pointer-events: none;
          filter: blur(50px);
        }

        @media (max-width: 1024px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding-top: 140px;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-bio {
            font-size: 17px;
          }
          .hero-actions {
            flex-direction: column;
            align-items: center;
            gap: 25px;
          }
          .image-wrapper {
             max-width: 380px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
