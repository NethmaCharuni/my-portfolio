import React from 'react';

const About = () => {
    const features = [
        {
            title: 'Creative Design',
            description: 'Visually engaging interfaces that captivate users.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.6 1.5-1.5 0-.4-.1-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
                </svg>
            )
        },
        {
            title: 'Clean Code',
            description: 'Maintainable, efficient, and high-quality frontend solutions.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            title: 'User Focus',
            description: 'Intuitive designs centered around user satisfaction.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            )
        },
        {
            title: 'Quality',
            description: 'Polished, reliable, and consistent digital experiences.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            )
        }
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About me</h2>
                <p className="about-description">
                    I am a third-year Software Engineering undergraduate with a strong interest in full-stack development, UI/UX design, and frontend engineering. I enjoy crafting engaging user interfaces and seamless user experiences—from wireframes and prototypes to fully functional web applications. By balancing design thinking with solid backend and frontend skills, I focus on building scalable, responsive, and user-centric digital products.
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .about-section {
          padding: 100px 8%;
          background-color: var(--bg-light);
          text-align: center;
        }

        .about-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 48px;
          color: white;
          margin-bottom: 40px;
          font-weight: 800;
        }

        .about-description {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: var(--transition);
        }

        .feature-item:hover {
          transform: translateY(-10px);
        }

        .feature-icon {
          color: var(--accent);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .feature-item:hover .feature-icon {
          transform: scale(1.1);
          filter: drop-shadow(0 0 10px var(--accent-glow));
        }

        .feature-item h3 {
          font-size: 20px;
          color: white;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .feature-item p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }
          .about-description {
            font-size: 16px;
            margin-bottom: 50px;
          }
          .features-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
