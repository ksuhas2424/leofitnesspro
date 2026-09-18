// src/components/Contact.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Send } from 'lucide-react';
import contactInfo from '../data/contactInfo';
import Button from './Button';

export const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    if (!formData.message.trim()) newErrors.message = 'Please type a message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      onShowToast('Please fill in all required fields.', 'error');
      return;
    }

    // Success response
    onShowToast('Thank you for reaching out! We have received your message and will respond shortly.', 'success');
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
  };

  const handleGetDirections = () => {
    window.open(contactInfo.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Heading */}
        <div className="section-title-wrap">
          <div className="section-title-lines">
            <h2 className="section-title">CONTACT US</h2>
          </div>
          <p className="section-subtitle">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Business Info & Logo */}
          <div className="contact-info-left">
            <div className="contact-brand-block">
              <img
                src="/logo.png"
                alt="Leo Fitness Pro Logo"
                className="contact-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo-badge.svg";
                }}
              />
              <h3 className="contact-brand-title">{contactInfo.brandName}</h3>
            </div>

            <div className="contact-detail-list">
              {/* Address */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">ADDRESS</span>
                  {contactInfo.address.line1}<br />
                  {contactInfo.address.area}<br />
                  {contactInfo.address.stateZip}
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">PHONE</span>
                  <a href={`tel:${contactInfo.rawPhone}`} style={{ color: 'inherit', fontWeight: 600 }}>
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Clock size={22} />
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">OPENING HOURS</span>
                  <strong>{contactInfo.openingHours.title}</strong><br />
                  {contactInfo.openingHours.morning}<br />
                  {contactInfo.openingHours.evening}
                </div>
              </div>
            </div>

            {/* GET DIRECTIONS BUTTON */}
            <div>
              <Button
                variant="gold"
                onClick={handleGetDirections}
                icon={Navigation}
                style={{ padding: '16px 32px' }}
              >
                GET DIRECTIONS
              </Button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">SEND US A MESSAGE</h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">YOUR NAME <span>*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-control"
                  style={{ borderColor: errors.name ? '#FF4D4D' : '' }}
                />
                {errors.name && <span style={{ color: '#FF4D4D', fontSize: '0.8rem' }}>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">PHONE <span>*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="085229 94219"
                  className="form-control"
                  style={{ borderColor: errors.phone ? '#FF4D4D' : '' }}
                />
                {errors.phone && <span style={{ color: '#FF4D4D', fontSize: '0.8rem' }}>{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS <span>*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="form-control"
                  style={{ borderColor: errors.email ? '#FF4D4D' : '' }}
                />
                {errors.email && <span style={{ color: '#FF4D4D', fontSize: '0.8rem' }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">MESSAGE <span>*</span></label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you achieve your fitness goals?"
                  className="form-control"
                  style={{ borderColor: errors.message ? '#FF4D4D' : '' }}
                />
                {errors.message && <span style={{ color: '#FF4D4D', fontSize: '0.8rem' }}>{errors.message}</span>}
              </div>

              <Button type="submit" variant="gold" icon={Send} style={{ width: '100%', marginTop: '10px' }}>
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
