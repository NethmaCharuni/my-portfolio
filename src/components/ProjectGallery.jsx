import React, { useState } from 'react';

const ProjectGallery = () => {
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    //* UI/UX projects
    {
      title: 'University Portal Redesign',
      category: 'UI/UX',
      img: '/assets/Student Web Portal.png',
      description: 'A comprehensive UI/UX case study focused on fixing fragmented navigation and poor feedback loops in academic systems. Using research-driven wireframing and high-fidelity prototyping in Figma, I created an accessible, error-resistant environment for module registration and assignment management.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Research-driven Lo-fi & Hi-fi Wireframing',
        'Dynamic Student Dashboard with Deadline Tracking',
        'Module Management with Progress Filtering',
        'Integrated Assignment Submission System',
        'Fully Responsive Mobile-First Design',
        'Accessibility-Focused UI Hierarchy'
      ],
      figmaUrl: 'https://www.figma.com/design/J5cLvJghLjo09PkZU4hV3S/UNIVESITY?node-id=0-1&t=zwhxVulfH8JugfuC-1'
    },
    {
      title: 'BOC Smart App Redesign',
      category: 'UI/UX',
      img: '/assets/BOC.png',
      description: 'I redesigned the BOC Smart App to bridge the gap between legacy banking and modern user needs. My focus was shifting from a dated aesthetic to a professional, high-security interface with improved ergonomics.',
      software: 'Figma',
      role: 'UI/UX Designer',
      features: [
        'Visual Hierarchy: BOC Deep Blue for authority/safety',
        'Thumb-Driven UI: Relocated key actions for ergonomics',
        'Structural Clarity: Rounded cards for navigation',
        'Streamlined multi-factor authentication flow',
        'Modernized dashboard with real-time balance tracking'
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
      figmaUrl: 'https://www.figma.com/design/f8BVqBylMRxPiuHNqighxm/TalkGov?node-id=0-1&t=WlEY3p0cbJ1zJVQR-1'
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
    //*mobile app project start
    {
      title: 'PerimeterCalculator',
      category: 'Mobile App',
      software: 'Android Studio',
      img: '/assets/calculator.mp4',
      githubUrl: 'https://github.com/NethmaCharuni/PerimeterCalculator'
    },
    {
      title: 'Gym Management System',
      category: 'Mobile App',
      software: 'Android Studio, Flutter',
      img: '/assets/gym.mp4',
      githubUrl: 'https://github.com/NethmaCharuni/GymMobileApp'
    },
    //*frontend project start
    {
      title: 'Hospital Management System',
      category: 'Frontend',
      software: 'VS Code,HTML,CSS,JavaScript',
      img: '/assets/hospital.mp4',
      githubUrl: 'https://github.com/NethmaCharuni/Hopital-management-system'
    },
    //*full stack project start
    {
      title: 'Melody Master E-Commerce Website',
      category: 'Full Stack',
      software: 'VS Code,PHP,MySQL',
      img: '/assets/melodymaster.mp4',
      githubUrl: 'https://github.com/NethmaCharuni/melody-masters-ecommerce'
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentIndex(0);
  };

  const [itemsPerPage, setItemsPerPage] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setItemsPerPage(3);
      else if (window.innerWidth > 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const FigmaIcon = () => (
    <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 25.4835 20.2116 22.5907 22.3683 20.4652C24.5249 18.3397 27.4497 17.1458 30.5 17.1458C33.5503 17.1458 36.4751 18.3397 38.6317 20.4652C40.7884 22.5907 42 25.4835 42 28.5V39.9167H30.5C27.4497 39.9167 24.5249 38.7228 22.3683 36.5973C20.2116 34.4718 19 31.589 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 45.625C0 42.6085 1.2116 39.7157 3.36827 37.5902C5.52494 35.4647 8.44974 34.2708 11.5 34.2708H23V45.625C23 48.6415 21.7884 51.5343 19.6317 53.6598C17.4751 55.7853 14.5503 56.9792 11.5 56.9792C8.44974 56.9792 5.52494 55.7853 3.36827 53.6598C1.2116 51.5343 0 48.6415 0 45.625V45.625Z" fill="#0ACF83" />
      <path d="M0 28.5C0 25.4835 1.2116 22.5907 3.36827 20.4652C5.52494 18.3397 8.44974 17.1458 11.5 17.1458H23V39.9167H11.5C8.44974 39.9167 5.52494 38.7228 3.36827 36.5973C1.2116 34.4718 0 31.589 0 28.5V28.5Z" fill="#A259FF" />
      <path d="M0 11.375C0 8.35852 1.2116 5.4657 3.36827 3.34023C5.52494 1.21475 8.44974 0.0208333 11.5 0.0208333H23V22.7917H11.5C8.44974 22.7917 5.52494 21.5977 3.36827 19.4723C1.2116 17.3468 0 14.454 0 11.375V11.375Z" fill="#F24E1E" />
      <path d="M23 0.0208333H34.5C37.5503 0.0208333 40.4751 1.21475 42.6317 3.34023C44.7884 5.4657 46 8.35852 46 11.375C46 14.3915 44.7884 17.2843 42.6317 19.4098C40.4751 21.5353 37.5503 22.7292 34.5 22.7292H23V0.0208333Z" fill="#FF7262" />
    </svg>
  );


  const renderCategoryIcons = (category) => {
    switch (category) {
      case 'UI/UX':
        return <FigmaIcon />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Practical projects showcasing development & design experience.</p>
      </div>

      <div className="filter-container animate-fade-up">
        {['All', 'UI/UX', 'Mobile App', 'Frontend', 'Full Stack', 'Graphic Design'].map((cat, fIdx) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => handleFilterChange(cat)}
            style={{ animationDelay: `${0.1 + fIdx * 0.05}s` }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="carousel-main-container">
        <button className="nav-arrow prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-view">
          <div
            className="projects-slider"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {filteredProjects.map((proj, idx) => (
              <div
                key={`${filter}-${idx}`}
                className="project-card-outer animate-fade-up"
                style={{ animationDelay: `${0.2 + (idx % itemsPerPage) * 0.1}s` }}
                onClick={() => setSelectedProject(proj)}
              >
                <div className="project-card-inner">
                  <div className="project-img-container">
                    {proj.img.endsWith('.mp4') ? (
                      <video src={proj.img} autoPlay muted loop playsInline />
                    ) : (
                      <img src={proj.img} alt={proj.title} />
                    )}
                    <div className="overlay-plus">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="project-details">
                    <span className="proj-cat-badge">{proj.category}</span>
                    <h3 className="proj-title">{proj.title}</h3>
                    <div className="proj-footer">
                      <div className="icon-group">
                        {renderCategoryIcons(proj.category)}
                      </div>
                      <div className="arrow-link-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-arrow next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
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
                    <p>{selectedProject.software || 'Not specified'}</p>
                  </div>
                  <div className="detail-item">
                    <h4>Role</h4>
                    <p>{selectedProject.role || 'Designer & Developer'}</p>
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.figmaUrl && (
                    <a href={selectedProject.figmaUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      View Figma Design
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
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
          background-color: var(--bg-light);
          padding: 140px 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          padding: 0 8%;
        }

        .section-title {
          font-size: 40px;
          color: white;
          margin-bottom: 15px;
          font-weight: 800;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          font-size: 14px;
        }

        .filter-btn:hover {
          border-color: var(--accent-border);
          color: white;
          background: rgba(255, 77, 0, 0.05);
        }

        .filter-btn.active {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
          box-shadow: 0 10px 20px rgba(255, 77, 0, 0.3);
        }

        .carousel-main-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0 5%;
          gap: 20px;
        }

        .carousel-view {
          width: 100%;
          max-width: 1400px;
          overflow: hidden;
          padding: 20px 0;
        }

        .projects-slider {
          display: flex;
          width: 100%;
        }

        .project-card-outer {
          flex: 0 0 33.333%;
          padding: 0 15px;
          cursor: pointer;
        }

        .project-card-inner {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 24px;
          height: 100%;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
        }

        .project-card-outer:hover .project-card-inner {
          border-color: var(--accent-border);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 77, 0, 0.1);
        }

        .project-img-container {
          width: 100%;
          aspect-ratio: 1.4;
          overflow: hidden;
          border-radius: 20px;
          background: #000;
          margin-bottom: 25px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .overlay-plus {
          position: absolute;
          inset: 0;
          background: rgba(255, 77, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
          color: white;
          backdrop-filter: blur(4px);
        }

        .project-card-outer:hover .overlay-plus {
          opacity: 1;
        }

        .project-img-container img,
        .project-img-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card-outer:hover img,
        .project-card-outer:hover video {
          transform: scale(1.1);
        }

        .proj-cat-badge {
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: block;
          margin-bottom: 10px;
        }

        .proj-title {
          font-size: 19px;
          color: white;
          font-weight: 800;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .proj-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .icon-group {
          color: var(--accent);
          opacity: 0.8;
        }

        .arrow-link-icon {
          color: var(--text-muted);
          transition: var(--transition);
        }

        .project-card-outer:hover .arrow-link-icon {
          color: var(--accent);
          transform: translate(3px, -3px);
        }

        .nav-arrow {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
          flex-shrink: 0;
          backdrop-filter: blur(10px);
        }

        .nav-arrow:hover {
          background: var(--accent);
          border-color: var(--accent);
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(255, 77, 0, 0.3);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: #080808;
          width: 100%;
          max-width: 1100px;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          box-shadow: 0 50px 100px rgba(0,0,0,0.8);
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
        }

        .modal-image {
          position: relative;
          background: #000;
        }

        .modal-image img,
        .modal-image video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-details {
          padding: 60px;
          display: flex;
          flex-direction: column;
        }

        .modal-details h2 {
          font-size: 36px;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .modal-details .description {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 35px;
          font-size: 16px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 40px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .detail-item h4 {
          font-size: 12px;
          text-transform: uppercase;
          color: var(--accent);
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .detail-item p {
          color: white;
          font-weight: 600;
          font-size: 15px;
        }

        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 24px;
          cursor: pointer;
          z-index: 100;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .close-btn:hover {
          background: var(--accent);
          border-color: var(--accent);
          transform: rotate(90deg);
        }

        .modal-actions {
          display: flex;
          gap: 20px;
          margin-top: auto;
        }

        @media (max-width: 1100px) {
          .project-card-outer {
            flex: 0 0 50%;
          }
        }

        @media (max-width: 900px) {
          .modal-body {
            grid-template-columns: 1fr;
          }
          .modal-details {
            padding: 40px;
          }
          .modal-image {
             aspect-ratio: 16/9;
          }
        }

        @media (max-width: 768px) {
          .project-card-outer {
            flex: 0 0 100%;
          }
          .section-title {
            font-size: 38px;
          }
          .nav-arrow {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section >
  );
};

export default ProjectGallery;
