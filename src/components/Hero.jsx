import React, { useState } from 'react';

const Hero = ({ avatarUrl }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const cvs = [
    { label: 'Nethma Charuni UIUX', file: '/assets/Nethma Charuni UIUX.pdf?v=20260401' },
    { label: 'Frontend Developer', file: '/assets/NethmaCharuniFED.pdf?v=20260401' },
    { label: 'Graphic Designer', file: '/assets/NethmaCharuniGD.pdf?v=20260401' }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h2 className="greeting">Hi, I'm <span className="text-gradient">Nethma Charuni</span></h2>
        <p className="bio">
          I'm a passionate <b>UI/UX Designer</b>, <b>Frontend Developer</b>, and <b>Graphic Designer</b>.
          I specialize in creating pixel-perfect, user-centric digital experiences that blend aesthetic
          excellence with functional precision.
        </p>

        <div className="hero-actions">
          <div className="cv-dropdown-container">
            <button
              className="btn-primary"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Download CV
              <span className="arrow">{showDropdown ? '▲' : '▼'}</span>
            </button>

            {showDropdown && (
              <div className="cv-dropdown glass-card">
                {cvs.map((cv, index) => (
                  <a
                    key={index}
                    href={cv.file}
                    download={index === 0 ? "Nethma Charuni UIUX.pdf" : ""}
                    className="dropdown-item"
                  >
                    {cv.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="image-blob">
          <img src={avatarUrl} alt="Nethma 3D Avatar" className="hero-avatar" />
        </div>
        <div className="floating-badge hi-badge">Hi! 👋</div>
      </div>

      <style jsx>{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 100vh;
          padding-top: 100px;
          gap: 50px;
          background-color: var(--bg-light);
        }

        .hero-content {
          flex: 1.2;
        }

        .greeting {
          font-size: 64px;
          margin-bottom: 20px;
          line-height: 1.1;
          color: white;
        }

        .text-gradient {
          background: linear-gradient(90deg, var(--accent), var(--accent-secondary));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bio {
          font-size: 18px;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 600px;
          font-weight: 400;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          position: relative;
        }

        .cv-dropdown-container {
          position: relative;
        }

        .cv-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          width: 220px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 100;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
          border-radius: 12px;
        }

        .dropdown-item {
          padding: 15px 20px;
          color: white;
          text-decoration: none;
          transition: var(--transition);
          font-size: 14px;
          font-weight: 500;
        }

        .dropdown-item:hover {
          background: var(--bg-accent);
          color: var(--accent);
        }

        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .image-blob {
          width: 480px;
          height: 480px;
          background: #8ecae6;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: morph 8s ease-in-out infinite;
          border: none;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.2));
          transform: scale(1.1);
          transform-origin: bottom;
        }

        .hi-badge {
          position: absolute;
          top: 15%;
          right: 15%;
          background: var(--bg-card);
          color: var(--accent);
          padding: 12px 24px;
          border-radius: 20px 20px 20px 0;
          font-weight: 700;
          box-shadow: var(--shadow-md);
          animation: float 3s ease-in-out infinite;
          border: 1px solid var(--accent-border);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @media (max-width: 1024px) {
          .hero-section {
            flex-direction: column-reverse;
            text-align: center;
            padding-top: 120px;
            gap: 30px;
          }
          .hero-actions {
            justify-content: center;
          }
          .bio {
            margin-left: auto;
            margin-right: auto;
          }
          .image-blob {
            width: 320px;
            height: 320px;
          }
          .greeting {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
