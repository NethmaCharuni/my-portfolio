import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      description: 'Crafting visually stunning, user-centered interfaces that feel intuitive and engaging.',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM17 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      title: 'Web Development',
      description: 'Building high-performance, responsive, and dynamic web experiences.',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M9.4 16.6l4.6-4.6-4.6-4.6L8 8.8l3.2 3.2L8 15.2l1.4 1.4zm5.2 0l4.6-4.6-4.6-4.6-1.4 1.4 3.2 3.2-3.2 3.2 1.4 1.4zM5 20h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zm0-14h14v12H5V6z" />
        </svg>
      ),
      skills: ['HTML', 'CSS', 'JavaScript', 'C++', 'Python', 'React', 'Node.js', 'API Integration']
    },
    {
      title: 'Graphic Design',
      description: 'Generating unique brand identities and visual assets through creative design.',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM5 18a2 2 0 100 4 2 2 0 000-4zm4 1h10a1 1 0 100-2H9a1 1 0 100 2z" />
        </svg>
      ),
      skills: ['Photoshop', 'Canva', 'Branding', 'Typography', 'Affinity']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header animate-fade-up">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Core technical areas reflecting both creative and development expertise.</p>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card animate-fade-up" style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
              <div className="card-top">
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <p className="category-desc">{cat.description}</p>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 140px 0;
          background-color: var(--bg-light);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          padding: 0 20px;
        }

        .section-title {
          font-size: 40px;
          color: white;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .skills-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 30px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 45px;
          border-radius: 32px;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.05);
          min-height: 380px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .skill-card:hover {
          border-color: var(--accent-border);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 77, 0, 0.05);
        }

        .category-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          color: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          box-shadow: 0 10px 20px rgba(255, 77, 0, 0.2);
        }

        .category-icon svg {
          width: 28px;
          height: 28px;
        }

        .skill-card h3 {
          font-size: 24px;
          color: white;
          margin-bottom: 12px;
          font-weight: 800;
        }

        .category-desc {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 35px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.03);
          color: white;
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: var(--transition);
          cursor: default;
        }

        .skill-tag:hover {
          background: var(--accent);
          color: white;
          border-color: var(--accent);
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 77, 0, 0.3);
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
          .section-title {
            font-size: 40px;
          }
          .skill-card {
            padding: 35px;
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 36px;
          }
          .skills-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
