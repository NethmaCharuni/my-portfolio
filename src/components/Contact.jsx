import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "58d9b577-fac4-4956-93e2-5b3bc6b5603c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage("Message sent successfully!");
        event.target.reset();
      } else {
        setResultMessage(data.message || "Something went wrong.");
      }
    } catch {
      setResultMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-title-wrapper animate-fade-up">
        <h2 className="main-title">Let's  Connect</h2>
        <p className="section-subtitle-main">Have a project in mind? Let's build something amazing together.</p>
      </div>

      <div className="contact-container">
        {/* Left Column: Get in Touch */}
        <div className="contact-info">
          <div className="info-header animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="section-subtitle">Get in Touch</h3>
            <div className="title-underline"></div>
            <p className="description">
              Let's collaborate to build engaging, responsive, and user-friendly digital experiences.
            </p>
          </div>

          <div className="info-cards">
            {[
              { label: 'EMAIL', value: 'nethmacharunu@gmail.com', icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /> },
              { label: 'PHONE', value: '+94 70 165 7269', icon: <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /> },
              { label: 'LOCATION', value: 'Colombo, Sri Lanka', icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /> }
            ].map((info, iIdx) => (
              <div key={iIdx} className="info-card animate-fade-up" style={{ animationDelay: `${0.2 + iIdx * 0.1}s` }}>
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    {info.icon}
                  </svg>
                </div>
                <div className="info-content">
                  <span className="label">{info.label}</span>
                  <p className="value">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="form-card-outer animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="form-card">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>NAME</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-field">
                  <label>EMAIL</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-field">
                <label>SUBJECT</label>
                <input type="text" name="subject" placeholder="Project Inquiry" required />
              </div>
              <div className="form-field">
                <label>MESSAGE</label>
                <textarea name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <span className="arrow-icon">→</span>}
              </button>
              {resultMessage && <p className="form-status">{resultMessage}</p>}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 140px 0;
          background-color: var(--bg-light);
          position: relative;
        }

        .section-title-wrapper {
          text-align: center;
          margin-bottom: 80px;
        }

        .main-title {
          font-size: 40px;
          color: white;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .section-subtitle-main {
          color: var(--text-secondary);
          font-size: 16px;
        }

        .contact-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 70px;
          padding: 0 40px;
        }

        .section-subtitle {
          font-size: 30px;
          color: white;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .title-underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), var(--accent-secondary));
          border-radius: 2px;
          margin-bottom: 30px;
        }

        .description {
          color: var(--text-secondary);
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 50px;
          max-width: 480px;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 28px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }

        .info-card:hover {
          border-color: var(--accent-border);
          background: rgba(255, 77, 0, 0.03);
          transform: translateX(12px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .info-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(255, 77, 0, 0.2);
        }

        .info-content .label {
          display: block;
          font-size: 11px;
          font-weight: 800;
          color: var(--accent);
          letter-spacing: 1.5px;
          margin-bottom: 6px;
        }

        .info-content .value {
          color: white;
          font-size: 17px;
          font-weight: 700;
          margin: 0;
        }

        .form-card-outer {
           position: relative;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 50px;
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(20px);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .form-field {
          margin-bottom: 30px;
        }

        .form-field label {
          display: block;
          font-size: 12px;
          font-weight: 800;
          color: var(--text-muted);
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          transition: var(--transition);
        }

        .form-field:focus-within label {
           color: var(--accent);
        }

        .form-field input, 
        .form-field textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 18px 24px;
          color: white;
          font-size: 16px;
          transition: var(--transition);
        }

        .form-field input:focus, 
        .form-field textarea:focus {
          border-color: var(--accent-border);
          background: rgba(255, 255, 255, 0.06);
          outline: none;
          box-shadow: 0 0 20px rgba(255, 77, 0, 0.05);
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          padding: 18px !important;
          border-radius: 16px !important;
        }

        .arrow-icon {
          margin-left: 10px;
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .arrow-icon {
          transform: translateX(5px);
        }

        .form-status {
          margin-top: 25px;
          color: var(--accent);
          font-weight: 700;
          text-align: center;
          font-size: 15px;
        }

        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .main-title {
            font-size: 42px;
          }
          .section-subtitle {
            font-size: 32px;
          }
          .form-card {
            padding: 40px;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
