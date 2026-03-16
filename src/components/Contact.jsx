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
      <div className="contact-card glass-card">
        <div className="contact-info">
          <h2 className="text-gradient">Get In Touch</h2>
          <p>Let's discuss your next breakthrough project.</p>
          <div className="illustration-wrapper">
            <img src={illustrationUrl} alt="Contact Illustration" />
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Tell me about your project" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {resultMessage && <p className="form-status">{resultMessage}</p>}
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

        .form-status {
          text-align: center;
          margin-top: 10px;
          color: var(--accent);
          font-size: 14px;
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
