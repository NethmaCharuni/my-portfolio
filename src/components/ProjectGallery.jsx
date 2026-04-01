import React, { useState } from 'react';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    //* UI/UX projects
    {
      title: 'Bank of Ceylon (BOC) - Mobile App Redesign',
      category: 'UI/UX',
      img: '/assets/BOC.png',
      description: 'A comprehensive redesign of the Bank of Ceylon (BOC) mobile banking application. This project focuses on transforming the traditional banking interface into a modern, user-centric digital experience, improving usability and visual hierarchy.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Before vs After design comparison',
        'Streamlined user authentication flow',
        'Modernized dashboard and navigation',
        'Simplified transaction and service flows',
        'Enhanced visual language and accessibility',
        'User-centric interface optimization'
      ],
      figmaUrl: 'https://www.figma.com/design/mcm5rhZhTgs8lG5z6YKeji/simple-login?node-id=26-2&t=Vf5q3Pj5PQN5qBkm-1'
    }, {
      title: 'AI-Powered Analytics Dashboard',
      category: 'UI/UX',
      img: '/assets/AI.png',
      description: 'A modern, AI-integrated analytics dashboard that displays key metrics like revenue, active users, and conversion rates. This dashboard helps businesses make data-driven decisions with real-time insights.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Real-time analytics display',
        'AI-powered recommendations',
        'Smart notification system',
        'User behavior tracking',
        'Customizable dashboard widgets',
        'Dark/Light mode support'
      ],
      figmaUrl: 'https://www.figma.com/design/unL66lW6wFGhnAJDmnn6io/AI-Personalized-Interfaces?node-id=0-1&t=YOJKGhFI8XyEXa1i-1'
    },
    {
      title: 'Karusan Travels - Booking App',
      category: 'UI/UX',
      img: '/assets/2.png',
      description: 'A complete mobile app design for "Karusan Travels" agency. Includes user authentication flows, trip schedules, and a seamless booking experience with a premium dark mode interface.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'User authentication flow (10+ screens)',
        'Dark/Light mode support',
        'Trip scheduling interface',
        'Notification system',
        'User profile management'
      ],
      figmaUrl: 'https://www.figma.com/design/ZS4utf9pNNkLRjDFMHMONF/Karusan-mobile-app?node-id=0-1&t=YOJKGhFI8XyEXa1i-1'
    },
    {
      title: 'Mobile Authentication Interface',
      category: 'UI/UX',
      img: '/assets/4.png',
      description: 'Clean and modern authentication flows for mobile applications. This login interface prioritizes user experience with clear form fields and simple navigation.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Clean form design',
        'Social media integration',
        'Email validation',
        'Responsive mobile layout',
        'User-friendly error handling'
      ],
      figmaUrl: 'https://www.figma.com/design/mcm5rhZhTgs8lG5z6YKeji/simple-login?t=YOJKGhFI8XyEXa1i-1'
    },
    {
      title: 'Mobile Authentication Flow',
      category: 'UI/UX',
      img: '/assets/5.png',
      description: 'The signup and onboarding flow for mobile applications, designed to reduce friction and encourage user conversion through a guided step-by-step process.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Step-by-step onboarding',
        'Password strength meter',
        'Terms of service integration',
        'Responsive mobile layout',
        'Form state persistence'
      ],
      figmaUrl: 'https://www.figma.com/design/mcm5rhZhTgs8lG5z6YKeji/simple-login?node-id=7-60&t=YOJKGhFI8XyEXa1i-1'
    },
    {
      title: 'TalkGov - Government Services Portal',
      category: 'UI/UX',
      img: '/assets/6.png',
      description: 'A user-friendly web interface designed for South Australian citizens to access government services easily, search for offices, and track service requests.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Service search functionality',
        'Popular services quick access',
        'Location-based office finder',
        'Document checklist generator',
        'Request tracking system'
      ],
      figmaUrl: 'https://www.figma.com/design/f8BVqBylMRxPiuHNqighxm/TalkGov?node-id=0-1&t=hNIZl2LRp1pIT5jH-1'
    },
    {
      title: 'ABC Resort & Spa - Luxury Landing Page',
      category: 'UI/UX',
      img: '/assets/7.png',
      description: 'A sophisticated landing page design for a luxury resort. The minimalistic approach captures the essence of luxury through elegant typography and a calm color palette.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Hero section with call-to-action',
        'Brand storytelling through typography',
        'Responsive layout',
        'Luxury-focused visual hierarchy'
      ],
      figmaUrl: 'https://www.figma.com/design/lWvhOmMmGGE4yzXQ5hhGat/design?node-id=1-2&t=4R0Fjr7Od77HWWUt-1'
    },
    //*mobile app project start
    {
      title: 'PerimeterCalculator',
      category: 'Mobile App',
      img: '/assets/calculator.mp4',
      githubUrl: 'https://github.com/NethmaCharuni/PerimeterCalculator.git'
    },
    {
      title: 'Gym Management System',
      category: 'Mobile App',
      img: '/assets/gum.mp4',
      githubUrl: 'https://github.com/nethma-charuni/Gym-Management-System'
    },

    //*frontend project start
    {
      title: 'Hospital Management System',
      category: 'Frontend',
      img: '/assets/hospital.mp4',
      githubUrl: 'https://github.com/NethmaCharuni/Hopital-management-system.git'
    },

    //*full stack project start
    {
      title: 'Melody Master E-Commerce Website',
      category: 'Full Stack',
      img: '/assets/melodymaster.mp4',
      githubUrl: 'https://github.com/NethmaCharuni/melody-masters-ecommerce.git'
    },

    //*graphic project start
    {
      title: "Allusion'25",
      software: 'Canva, Photoshop',
      description: 'Bold layered typography with vibrant gradient overlays, high-contrast text hierarchy, and dynamic asymmetrical composition to amplify student energy.',
      category: 'Graphic Design',
      img: '/assets/1.png'
    },
    {
      title: "International Men's Day",
      software: 'Canva',
      description: 'Minimalist monochromatic layout with clean sans-serif fonts, precise symmetrical alignment, and subtle texture overlays for a professional tone.',
      category: 'Graphic Design',
      img: '/assets/2.jpg'
    },
    {
      title: 'Praying For World Peace',
      software: 'Photoshop',
      description: 'Grid-based portrait layout with soft glow effects, color-blocked panels, and drop shadows to create depth and highlight judge credibility.',
      category: 'Graphic Design',
      img: '/assets/3.jpg'
    },
    {
      title: 'Grand Finale 2025',
      software: 'Canva, Photoshop',
      description: 'Structured portrait boxes with varied font weights, neutral background with accent color pops, and consistent framing for visual unity.',
      category: 'Graphic Design',
      img: '/assets/4.jpg'
    },
    {
      title: 'First Appearance of Colour TV',
      software: 'Photoshop',
      description: 'Split-screen design blending black-and-white to color transition, mixed vintage and modern typography, and retro texture filters.',
      category: 'Graphic Design',
      img: '/assets/5.jpg'
    },
    {
      title: 'Convocation 2025',
      software: 'Canva',
      description: 'Elegant serif typography with gold gradient accents, centered composition, ample white space, and subtle silhouette overlays for emotional warmth.',
      category: 'Graphic Design',
      img: '/assets/6.jpg'
    },
    {
      title: 'Talent Round 2025',
      software: 'Canva',
      description: 'Clean block-style layout with bold section headers, bullet-point details, brand color consistency, and clear visual hierarchy for quick scanning.',
      category: 'Graphic Design',
      img: '/assets/7.jpg'
    },
    {
      title: 'Talent Round 2025',
      software: 'Canva, Photoshop',
      description: 'Warm earth-tone palette, seamless integration of Sinhala and English text, decorative borders, and cultural iconography for authentic local appeal.',
      category: 'Graphic Design',
      img: '/assets/8.jpg'
    },
    {
      title: 'Talent Round 2025',
      software: 'Photoshop',
      description: 'Tactile-inspired dot pattern textures, raised effect simulations, soft blue tones, minimalist layout, and accessible-focused typography.',
      category: 'Graphic Design',
      img: '/assets/9.jpg'
    },
    {
      title: 'Volunteer Opportunity',
      software: 'Canva, Photoshop',
      description: 'Layered multilingual text blocks as visual elements, balanced color contrast, cultural script integration, and global-friendly design aesthetics.',
      category: 'Graphic Design',
      img: '/assets/10.jpg'
    },
    {
      title: 'Digital Branding Concept',
      software: 'Photoshop',
      description: 'A modern branding concept utilizing sleek typography and a vibrant color palette to create a memorable visual identity.',
      category: 'Graphic Design',
      img: '/assets/11.jpg'
    },
    {
      title: 'Social Media Campaign',
      software: 'Canva, Photoshop',
      description: 'Dynamic social media post designs tailored for high engagement, featuring bold imagery and clear call-to-actions.',
      category: 'Graphic Design',
      img: '/assets/12.jpg'
    },
    {
      title: 'Corporate Presentation Design',
      software: 'Photoshop',
      description: 'Professional presentation slides designed for clarity and impact, incorporating consistent brand elements and clean layouts.',
      category: 'Graphic Design',
      img: '/assets/13.jpg'
    },
    {
      title: 'Logo Design - Brand Identity',
      software: 'Photoshop',
      description: 'A minimalist logo design exploring brand identity and modern aesthetics.',
      category: 'Graphic Design',
      img: '/assets/logo1.png'
    },
    {
      title: 'International Mother Language Day',
      software: 'Photoshop',
      description: 'Dynamic social media post designs tailored for high engagement, featuring bold imagery and clear call-to-actions.',
      category: 'Graphic Design',
      img: '/assets/15.png'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="text-gradient">Featured Projects</h2>
        <div className="filter-tabs">
          {['All', 'UI/UX', 'Frontend', 'Mobile App', 'Full Stack', 'Graphic Design'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="project-card glass-card"
            onClick={() => setSelectedProject(proj)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-image">
              {proj.img.endsWith('.mp4') ? (
                <>
                  <video
                    src={proj.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="project-video"
                  />
                  <div className="video-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </>
              ) : (
                <img src={proj.img} alt={proj.title} />
              )}
            </div>
            <div className="project-info">
              <div className="project-header-meta">
                <span className="project-cat">{proj.category}</span>
                {proj.software && (
                  <div className="card-software-tags">
                    {proj.software.split(', ').slice(0, 2).map(s => (
                      <span key={s} className="card-software-tag">{s}</span>
                    ))}
                  </div>
                )}
              </div>
              <h3>{proj.title}</h3>
              {proj.description && <p className="project-desc">{proj.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-body">
              <div className="modal-image">
                {selectedProject.img.endsWith('.mp4') ? (
                  <video
                    src={selectedProject.img}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : (
                  <img src={selectedProject.img} alt={selectedProject.title} />
                )}
              </div>
              <div className="modal-info">
                <div className="modal-meta-header">
                  <span className="project-cat">{selectedProject.category}</span>
                  {selectedProject.role && <span className="project-role"><b>Role:</b> {selectedProject.role}</span>}
                </div>
                <h2 className="text-gradient">{selectedProject.title}</h2>

                {selectedProject.software && (
                  <div className="software-used">
                    <h4>Software Used</h4>
                    <div className="software-tags">
                      {selectedProject.software.split(', ').map(s => (
                        <span key={s} className="software-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-details">
                  <h4>Project Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                {selectedProject.features && (
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul className="features-list">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.githubUrl && (
                  <div style={{ marginTop: '20px' }}>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Source Code →
                    </a>
                  </div>
                )}

                {selectedProject.figmaUrl && (
                  <div style={{ marginTop: '20px' }}>
                    <a
                      href={selectedProject.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Figma Design →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          padding-top: 50px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 50px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .filter-tabs {
          display: flex;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          padding: 8px;
          border-radius: 16px;
          border: 1px solid var(--glass-border);
        }

        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 8px 20px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 500;
          transition: var(--transition);
        }

        .filter-btn.active {
          background: var(--accent);
          color: var(--bg-dark);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          overflow: hidden;
          padding: 0;
          transition: var(--transition);
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        .project-image {
          height: 250px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .project-image img, 
        .project-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img,
        .project-card:hover .project-video {
          transform: scale(1.05);
        }

        .video-overlay {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 2;
        }

        .play-icon {
          color: white;
          font-size: 12px;
          margin-left: 2px;
        }

        .project-info {
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .project-cat {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent);
          font-weight: 700;
          white-space: nowrap;
        }

        .card-software-tags {
          display: flex;
          gap: 6px;
        }

        .card-software-tag {
          font-size: 10px;
          background: rgba(255, 157, 0, 0.1);
          color: var(--accent);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(255, 157, 0, 0.2);
          font-weight: 600;
        }

        .project-info h3 {
          margin: 0;
          font-size: 20px;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .project-desc {
          font-size: 14px;
          color: var(--text-secondary);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.5;
        }

        .view-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .section-header {
            flex-direction: column;
            text-align: center;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          position: relative;
          overflow-y: auto;
          animation: modalFadeIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 25px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--glass-border);
          color: white;
          font-size: 30px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: var(--transition);
        }

        .close-btn:hover {
          background: var(--accent);
          color: var(--bg-dark);
          transform: rotate(90deg);
        }

        .modal-body {
          display: flex;
          gap: 40px;
          padding: 50px;
        }

        .modal-image {
          flex: 1.2;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image img, .modal-image video {
          width: 100%;
          height: auto;
          max-height: 70vh;
          object-fit: contain;
        }

        .modal-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .modal-info h2 {
          font-size: 32px;
          line-height: 1.2;
        }

        .modal-meta-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .project-role {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .software-used h4, .project-details h4, .project-features h4 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .features-list li {
          color: var(--text-secondary);
          font-size: 14px;
          position: relative;
          padding-left: 20px;
        }

        .features-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }

        .software-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .software-tag {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
        }

        .project-details p {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .modal-body {
            flex-direction: column;
            padding: 40px 25px;
          }
          .modal-content {
            max-height: 95vh;
          }
          .modal-image img, .modal-image video {
            max-height: 50vh;
          }
          .modal-info h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectGallery;
