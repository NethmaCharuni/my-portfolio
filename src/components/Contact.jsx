import React, { useState } from 'react';

const Contact = ({ illustrationUrl }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage("");

    const formData = new FormData(event.target);
    // Replace this with your Web3Forms Access Key
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
      <div className="contact-container">
        <div className="contact-info">
          <span className="subtitle">Get In Touch</span>
          <h2 className="text-gradient">Let's build something <br /> amazing together</h2>
          <p>Whether you have a specific project in mind or just want to say hi, my inbox is always open.</p>

          <div className="contact-methods">
            <div className="method-item">
              <span className="icon">✉</span>
              <div>
                <h4>Email</h4>
                <p>charuninethma@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="illustration-wrapper">
            <img src={illustrationUrl} alt="Contact Illustration" />
          </div>
        </div>

        <div className="form-wrapper">
          <form className="contact-form" onSubmit={onSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Nethma Charuni" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="example@gmail.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="What's on your mind?" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {resultMessage && <p className="form-status">{resultMessage}</p>}
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: var(--bg-light);
          padding-top: 120px;
          padding-bottom: 120px;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: flex-start;
        }

        .subtitle {
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
          display: block;
          margin-bottom: 15px;
        }

        .contact-info h2 {
          font-size: 48px;
          margin-bottom: 25px;
          line-height: 1.2;
          color: white;
        }

        .contact-info p {
          color: var(--text-secondary);
          font-size: 18px;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .contact-methods {
          margin-bottom: 40px;
        }

        .method-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: var(--bg-card);
          border-radius: 16px;
          border: 1px solid var(--border-light);
          max-width: 400px;
        }

        .method-item .icon {
          width: 50px;
          height: 50px;
          background: var(--bg-accent);
          color: var(--accent);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: var(--shadow-sm);
        }

        .method-item h4 {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 2px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .method-item p {
          font-weight: 700;
          color: white;
          margin-bottom: 0;
          font-size: 16px;
        }

        .illustration-wrapper {
          display: flex;
          justify-content: flex-start;
          margin-top: 40px;
        }

        .illustration-wrapper img {
          width: 70%;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
          animation: float 4s ease-in-out infinite;
        }

        .form-wrapper {
          background: var(--bg-card);
          padding: 50px;
          border-radius: 30px;
          border: 1px solid var(--border-light);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .contact-form h3 {
          font-size: 24px;
          color: white;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .form-group input, 
        .form-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 18px 20px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 16px;
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, 
        .form-group textarea:focus {
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 4px var(--accent-glow);
        }

        .form-status {
          text-align: center;
          margin-top: 20px;
          color: var(--accent);
          font-weight: 600;
        }

        .w-full {
          width: 100%;
          justify-content: center;
          padding: 18px;
          font-size: 16px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .form-wrapper {
            padding: 40px 30px;
          }
          .contact-info h2 {
            font-size: 36px;
          }
          .illustration-wrapper {
             display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
