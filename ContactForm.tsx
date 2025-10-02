import React, { useState, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  vision: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    vision: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (showConfirmation && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showConfirmation && countdown === 0) {
      setIsHiding(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setIsHiding(false);
        setCountdown(5);
        setFormData({ name: '', email: '', phone: '', vision: '' });
      }, 500);
    }
  }, [showConfirmation, countdown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowConfirmation(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-form-container">
      {!showConfirmation ? (
        <div className="form-wrapper">
          <h1>Share Your Vision</h1>
          <p className="subtitle">Let's create something legendary together</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="vision">Tell us about your vision *</label>
              <textarea
                id="vision"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit Your Vision</button>
          </form>
        </div>
      ) : (
        <div className={`confirmation ${isHiding ? 'hide' : ''}`}>
          <div className="confirmation-icon">🚀</div>
          <div className="confirmation-message">
            Thank you for sharing your vision! The Agency will follow up within
            one business day with next steps. We can't wait to create something
            legendary with you.
          </div>
          <div className="countdown">
            This message will self-destruct in{' '}
            <span className="countdown-number" key={countdown}>
              {countdown}
            </span>
            ...
          </div>
        </div>
      )}

      <style jsx>{`
        .contact-form-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 40px;
          max-width: 500px;
          width: 100%;
        }

        h1 {
          color: #333;
          margin-bottom: 10px;
          font-size: 28px;
        }

        .subtitle {
          color: #666;
          margin-bottom: 30px;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
          font-size: 14px;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid #e0e0e0;
          border-radius: 6px;
          font-size: 14px;
          transition: border-color 0.3s;
          font-family: inherit;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #667eea;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        button:active {
          transform: translateY(0);
        }

        .confirmation {
          text-align: center;
          animation: fadeIn 0.5s ease-in;
        }

        .confirmation.hide {
          animation: fadeOut 0.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.9);
          }
        }

        .confirmation-icon {
          font-size: 64px;
          margin-bottom: 20px;
          animation: bounce 0.6s ease-in-out;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .confirmation-message {
          font-size: 18px;
          color: #333;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .countdown {
          font-size: 14px;
          color: #666;
          font-weight: 500;
          margin-top: 20px;
        }

        .countdown-number {
          display: inline-block;
          font-size: 24px;
          font-weight: bold;
          color: #667eea;
          animation: pulse 0.5s ease-in-out;
          min-width: 30px;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
