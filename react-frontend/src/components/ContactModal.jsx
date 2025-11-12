import { useState } from 'react';
import './ContactModal.css';

function ContactModal({ isOpen, onClose, carName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close-btn" onClick={onClose}>✕</button>
        
        <h2>📞 Contact Dealer</h2>
        <p className="contact-subtitle">
          Interested in <strong>{carName}</strong>? Fill out the form below and we'll get back to you!
        </p>

        {submitted ? (
          <div className="contact-success">
            <div className="success-check">✓</div>
            <p>Message sent successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="contact-name">Name *</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Email *</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-phone">Phone *</label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any questions or special requests?"
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
