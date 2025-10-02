import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  vision: string;
}

const ContactFormWithModule: React.FC = () => {
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
    <div className={styles.contactFormContainer}>
      {!showConfirmation ? (
        <div className={styles.formWrapper}>
          <h1>Share Your Vision</h1>
          <p className={styles.subtitle}>Let's create something legendary together</p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
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

            <div className={styles.formGroup}>
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

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="vision">Tell us about your vision *</label>
              <textarea
                id="vision"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Your Vision
            </button>
          </form>
        </div>
      ) : (
        <div className={`${styles.confirmation} ${isHiding ? styles.hide : ''}`}>
          <div className={styles.confirmationIcon}>🚀</div>
          <div className={styles.confirmationMessage}>
            Thank you for sharing your vision! The Agency will follow up within
            one business day with next steps. We can't wait to create something
            legendary with you.
          </div>
          <div className={styles.countdown}>
            This message will self-destruct in{' '}
            <span className={styles.countdownNumber} key={countdown}>
              {countdown}
            </span>
            ...
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormWithModule;
