// src/components/Footer.jsx
import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Phone, Clock } from 'lucide-react';
import contactInfo from '../data/contactInfo';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/logo.png"
                alt="Leo Fitness Pro Logo"
                style={{ height: '44px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo-badge.svg";
                }}
              />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold)' }}>
                {contactInfo.brandName}
              </div>
            </div>
            <p style={{ color: '#AAA', fontSize: '0.88rem', lineHeight: '1.6', maxWidth: '280px' }}>
              Unleash your ultimate strength with state-of-the-art equipment, expert certified trainers, and personalized transformation blueprints.
            </p>
            <div className="social-icons-row">
              <a
                href={contactInfo.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={contactInfo.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={contactInfo.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#plans" className="footer-link">Membership Plans</a></li>
              <li><a href="#gallery" className="footer-link">Our Gallery</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">CONTACT US</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', gap: '10px', color: '#CCC', fontSize: '0.88rem' }}>
                <MapPin size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span>{contactInfo.address.line1} {contactInfo.address.area}</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', color: '#CCC', fontSize: '0.88rem' }}>
                <Phone size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span>{contactInfo.phone}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="footer-col-title">TIMINGS</h4>
            <div style={{ display: 'flex', gap: '10px', color: '#CCC', fontSize: '0.88rem' }}>
              <Clock size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
              <div>
                <strong>Daily Timings:</strong><br />
                {contactInfo.openingHours.morning}<br />
                {contactInfo.openingHours.evening}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © {contactInfo.copyrightYear} {contactInfo.brandName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
