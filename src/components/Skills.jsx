import React from 'react';

const Skills = ({ bgImageUrl }) => {
  const skillCategories = [
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing']
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Graphic Design',
      skills: ['Photoshop', 'Illustrator', 'Branding', 'Typography', 'Logo Design']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="text-gradient">My Skills</h2>
        <p>A comprehensive toolkit for digital excellence</p>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card glass-card">
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-illustration">
          <img src={bgImageUrl} alt="Skills Decoration" />
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
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

        .skills-container {
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .skills-grid {
          flex: 1.5;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .skill-card {
          padding: 40px;
          background: transparent;
          border: 1px solid var(--border-light);
          border-radius: 20px;
          transition: var(--transition);
        }

        .skill-card:hover {
          border-color: var(--accent);
          transform: translateY(-8px);
          background: rgba(0, 168, 255, 0.05);
        }

        .skill-card h3 {
          margin-bottom: 24px;
          color: white;
          font-size: 24px;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 10px;
          display: inline-block;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-tag {
          background: transparent;
          color: var(--accent);
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          border: 1.5px solid var(--accent);
          transition: var(--transition);
        }

        .skill-tag:hover {
          background: var(--accent);
          color: #011627;
          transform: scale(1.05);
        }

        .skills-illustration {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .skills-illustration img {
          width: 100%;
          max-width: 450px;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.05));
        }

        @media (max-width: 1024px) {
          .skills-container {
            flex-direction: column-reverse;
            gap: 40px;
          }
          .section-header h2 {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
