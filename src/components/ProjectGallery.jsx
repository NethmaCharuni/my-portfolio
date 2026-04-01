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
        <p>A collection of my recent work in design and development</p>
      </div>

      <div className="filter-container">
        {['All', 'UI/UX', 'Mobile App', 'Frontend', 'Full Stack', 'Graphic Design'].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="project-card"
            onClick={() => setSelectedProject(proj)}
          >
            <div className="project-image">
              {proj.img.endsWith('.mp4') ? (
                <video src={proj.img} autoPlay muted loop playsInline className="project-video" />
              ) : (
                <img src={proj.img} alt={proj.title} />
              )}
              <div className="project-overlay">
                <span>View Project</span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-cat">{proj.category}</span>
              <h3>{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>&times;</button>
            <div className="modal-body">
              <div className="modal-image">
                {selectedProject.img.endsWith('.mp4') ? (
                  <video src={selectedProject.img} autoPlay muted loop playsInline controls />
                ) : (
                  <img src={selectedProject.img} alt={selectedProject.title} />
                )}
              </div>
              <div className="modal-details">
                <span className="project-cat">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="description">{selectedProject.description}</p>

                <div className="details-grid">
                  <div className="detail-item">
                    <h4>Software</h4>
                    <p>{selectedProject.software}</p>
                  </div>
                  <div className="detail-item">
                    <h4>Role</h4>
                    <p>{selectedProject.role || 'Designer & Developer'}</p>
                  </div>
                </div>

                {selectedProject.features && (
                  <div className="features-section">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="modal-actions">
                  {selectedProject.figmaUrl && (
                    <a href={selectedProject.figmaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      View Figma Design
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .projects-section {
          background-color: var(--bg-accent);
          padding-top: 100px;
          padding-bottom: 120px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: 48px;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 18px;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 24px;
          border-radius: 100px;
          border: 1px solid var(--border-light);
          background: white;
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          font-size: 15px;
        }

        .filter-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .filter-btn.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: var(--bg-card);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          transition: var(--transition);
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 168, 255, 0.2);
          border-color: var(--accent);
        }

        .project-image {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: var(--bg-accent);
        }

        .project-image img, 
        .project-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .project-card:hover .project-image img,
        .project-card:hover .project-video {
          transform: scale(1.08);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(1, 22, 39, 0.95), transparent);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 30px;
          opacity: 0;
          transition: var(--transition);
        }

        .project-overlay span {
          color: white;
          font-weight: 700;
          font-size: 16px;
          transform: translateY(10px);
          transition: var(--transition);
          background: rgba(255,255,255,0.05);
          padding: 8px 20px;
          border-radius: 100px;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-overlay span {
          transform: translateY(0);
        }

        .project-info {
          padding: 25px;
        }

        .project-cat {
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: block;
          margin-bottom: 8px;
        }

        .project-info h3 {
          font-size: 22px;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(1, 22, 39, 0.85);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          background: var(--bg-card);
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          border-radius: 30px;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          border: 1px solid var(--border-light);
        }

        .close-btn {
          position: absolute;
          top: 25px;
          right: 25px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--bg-accent);
          border: 1px solid var(--border-light);
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: var(--transition);
          color: var(--text-muted);
        }

        .close-btn:hover {
          background: var(--accent);
          color: #011627;
          transform: rotate(90deg);
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
        }

        .modal-image {
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid var(--border-light);
          min-height: 500px;
        }

        .modal-image img, 
        .modal-image video {
          width: 100%;
          height: auto;
          max-height: 85vh;
          object-fit: contain;
          padding: 30px;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));
        }

        .modal-details {
          padding: 60px 50px;
          display: flex;
          flex-direction: column;
        }

        .modal-details h2 {
          font-size: 36px;
          margin-bottom: 20px;
          color: var(--accent-secondary);
          line-height: 1.2;
        }

        .description {
          color: var(--text-secondary);
          font-size: 17px;
          margin-bottom: 35px;
          line-height: 1.8;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 35px;
          padding: 25px;
          background: var(--bg-accent);
          border-radius: 20px;
          border: 1px solid var(--accent-border);
        }

        .detail-item h4 {
          font-size: 13px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .detail-item p {
          font-weight: 700;
          color: var(--text-primary);
          font-size: 16px;
        }

        .features-section h4 {
          font-size: 18px;
          margin-bottom: 18px;
          color: var(--accent-secondary);
          font-weight: 800;
        }

        .features-section ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 45px;
        }

        .features-section li {
          position: relative;
          padding-left: 28px;
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 500;
        }

        .features-section li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 900;
        }

        .modal-actions {
          display: flex;
          gap: 15px;
          margin-top: auto;
        }

        .modal-actions .btn-primary, 
        .modal-actions .btn-outline {
          flex: 1;
          justify-content: center;
          font-size: 15px;
          padding: 14px;
        }

        @media (max-width: 1024px) {
          .modal-body {
            grid-template-columns: 1fr;
          }
          .modal-image {
            border-right: none;
            border-bottom: 1px solid var(--border-light);
            min-height: auto;
          }
          .modal-details {
            padding: 40px 30px;
          }
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .section-header h2 {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectGallery;
