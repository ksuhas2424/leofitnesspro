// src/components/Hero.jsx
import React from 'react';
import Button from './Button';

export const Hero = ({ onExplorePlans }) => {
  return (
    <section id="hero" className="hero-section">
      {/* Oversized Transparent Logo Watermark */}
      <img
        src="/logo.png"
        alt="Leo Fitness Pro Background Watermark"
        className="hero-watermark"
      />

      <div className="container hero-grid">
        {/* Left Column: Heading & Subtitle */}
        <div className="hero-content-left">
          <h1 className="hero-main-title">
            <span className="hero-title-black">UNLEASH</span>
            <span className="hero-title-black">YOUR</span>
            <span className="hero-title-gold">STRENGTH</span>
            <div className="hero-title-underline" />
          </h1>

          <div className="hero-subtext-box">
            <p className="hero-subtext-primary">
              PREMIUM FITNESS • PERSONAL TRAINING
            </p>
            <p className="hero-subtext-secondary">
              TRANSFORM YOURSELF
            </p>
          </div>
        </div>

        {/* Right Column: User's Hero Athlete Image */}
        <div className="hero-image-right">
          <div className="athlete-img-wrapper">
            <img
              src="/herosection.png"
              alt="Leo Fitness Pro Muscular Athlete"
              className="athlete-hero-img"
              onError={(e) => {
                // Fallback to SVG if png fails to load
                e.target.onerror = null;
                e.target.src = "/hero-athlete.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
