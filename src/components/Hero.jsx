import React, { useState } from 'react';
import uiCv from '../assets/NethmaCharuniUi.pdf';
import fedCv from '../assets/NethmaCharuniFED.pdf';
import gdCv from '../assets/NethmaCharuniGD.pdf';

const Hero = ({ avatarUrl }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const cvs = [
    { label: 'UI/UX Designer', file: uiCv },
    { label: 'Frontend Developer', file: fedCv },
    { label: 'Graphic Designer', file: gdCv }
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
                  <a key={index} href={cv.file} download className="dropdown-item">
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
          padding-top: 150px;
          gap: 50px;
        }

        .hero-content {
          flex: 1;
        }

        .greeting {
          font-size: 56px;
          margin-bottom: 24px;
        }

        .bio {
          font-size: 18px;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 600px;
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
        }

        .dropdown-item {
          padding: 15px 20px;
          color: var(--text-primary);
          text-decoration: none;
          transition: var(--transition);
        }

        .dropdown-item:hover {
          background: rgba(255, 157, 0, 0.1);
          color: var(--accent);
        }

        .hero-image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .image-blob {
          width: 450px;
          height: 450px;
          background: linear-gradient(135deg, rgba(255, 157, 0, 0.2), transparent);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: morph 8s ease-in-out infinite;
          border: 1px solid var(--glass-border);
        }

        @keyframes morph {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3));
          transform: scale(1.1);
          transform-origin: bottom;
        }

        .hi-badge {
          position: absolute;
          top: 10%;
          right: 15%;
          background: var(--accent);
          color: var(--bg-dark);
          padding: 10px 20px;
          border-radius: 20px 20px 20px 0;
          font-weight: 700;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 1024px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
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
        }
      `}</style>
    </section>
  );
};

export default Hero;
