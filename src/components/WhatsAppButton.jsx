import React, { useState } from 'react';

const WhatsAppButton = ({ phoneNumber = '+94710856426' }) => { // Default to a demo LK number if none provided
  const [hovered, setHovered] = useState(false);
  const message = "Hi Nethma! I saw your portfolio and would like to connect.";
  const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="whatsapp-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`chat-bubble glass-card ${hovered ? 'visible' : ''}`}>
        <span>Hi! Let's chat 👋</span>
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn glass-card"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="wa-icon"
        >
          {/* FontAwesome WhatsApp Icon */}
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>

      <style jsx>{`
        .whatsapp-container {
          position: fixed;
          bottom: 40px;
          right: 40px;
          display: flex;
          align-items: center;
          gap: 15px;
          z-index: 1000;
        }

        .chat-bubble {
          padding: 10px 18px;
          border-radius: 20px 20px 0 20px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          border: 1px solid var(--accent);
          background: rgba(10, 10, 11, 0.8);
        }

        .chat-bubble.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .wa-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.3);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          position: relative;
        }

        /* Ambient glow effect behind button */
        .wa-btn::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25D366;
          filter: blur(20px);
          opacity: 0.2;
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .wa-btn:hover {
          transform: scale(1.1) rotate(-5deg);
          background: rgba(37, 211, 102, 0.25);
          border-color: #25D366;
        }

        .wa-btn:hover::before {
          opacity: 0.4;
        }

        .wa-icon {
          width: 32px;
          height: 32px;
          fill: #25D366;
          transition: fill 0.3s ease;
        }

        .wa-btn:hover .wa-icon {
          fill: #fff;
        }

        @media (max-width: 768px) {
          .whatsapp-container {
            bottom: 25px;
            right: 25px;
          }
          .wa-btn {
            width: 50px;
            height: 50px;
          }
          .wa-icon {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
