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
          font-size: 40px;
          margin-bottom: 10px;
        }

        .skills-container {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .skills-grid {
          flex: 1.5;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .skill-card {
          padding: 30px;
          transition: var(--transition);
        }

        .skill-card:hover {
          border-color: var(--accent);
          transform: translateY(-5px);
        }

        .skill-card h3 {
          margin-bottom: 20px;
          color: var(--accent);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 14px;
          border: 1px solid var(--glass-border);
        }

        .skills-illustration {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .skills-illustration img {
          width: 100%;
          max-width: 400px;
          filter: drop-shadow(0 0 30px var(--accent-glow));
        }

        @media (max-width: 1024px) {
          .skills-container {
            flex-direction: column-reverse;
          }
        }
      `}</style>
        </section>
    );
};

export default Skills;
