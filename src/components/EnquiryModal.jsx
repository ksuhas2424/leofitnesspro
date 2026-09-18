// src/components/EnquiryModal.jsx
import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import Button from './Button';
import contactInfo from '../data/contactInfo';

export const EnquiryModal = ({ plan, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  if (!plan) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSuccess(`Thank you! Your enquiry for ${plan.name} has been received. We will contact you at ${formData.phone} shortly.`);
    onClose();
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi LEO Fitness Pro, I am interested in joining the ${plan.name} plan (${plan.price || 'Student Offer'}). Please share registration details.`);
    window.open(`https://wa.me/${contactInfo.whatsappPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="lightbox-modal" onClick={onClose} style={{ zIndex: 2500 }}>
      <div
        className="contact-form-card"
        onClick={(e) => e.stopPropagation()}
        style={{ width: '100%', maxWidth: '480px', position: 'relative' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#666'
          }}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800 }}>
            ENQUIRE / JOIN PLAN
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--black)', marginTop: '4px' }}>
            {plan.name} {plan.price ? `(${plan.price})` : ''}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">YOUR NAME <span>*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="form-control"
              style={{ borderColor: errors.name ? '#FF4D4D' : '' }}
            />
            {errors.name && <span style={{ color: '#FF4D4D', fontSize: '0.8rem' }}>{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">PHONE NUMBER <span>*</span></label>
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
            <label className="form-label">EMAIL ADDRESS (OPTIONAL)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="form-control"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            <Button type="submit" variant="gold">
              CONFIRM ENQUIRY
            </Button>
            <Button type="button" variant="outline-gold" onClick={handleWhatsApp}>
              CHAT ON WHATSAPP
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
