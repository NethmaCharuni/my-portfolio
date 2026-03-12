import React from 'react';

const Contact = ({ illustrationUrl }) => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-card glass-card">
                <div className="contact-info">
                    <h2 className="text-gradient">Get In Touch</h2>
                    <p>Let's discuss your next breakthrough project.</p>
                    <div className="illustration-wrapper">
                        <img src={illustrationUrl} alt="Contact Illustration" />
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Tell me about your project" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
            </div>

            <style jsx>{`
        .contact-card {
          display: flex;
          padding: 60px;
          gap: 60px;
        }

        .contact-info {
          flex: 1;
        }

        .contact-info h2 {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 40px;
        }

        .illustration-wrapper {
          display: flex;
          justify-content: center;
        }

        .illustration-wrapper img {
          width: 80%;
          animation: float 4s ease-in-out infinite;
        }

        .contact-form {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 15px 20px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 16px;
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.08);
        }

        .w-full {
          width: 100%;
          justify-content: center;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 900px) {
          .contact-card {
            flex-direction: column;
            padding: 40px;
          }
          .illustration-wrapper {
            margin-bottom: 40px;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
