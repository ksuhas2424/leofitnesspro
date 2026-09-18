// src/components/Features.jsx
import React from 'react';
import { Dumbbell, Apple, UserCheck } from 'lucide-react';
import featuresData from '../data/features';

export const Features = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell size={36} strokeWidth={2} />;
      case 'Apple':
        return <Apple size={36} strokeWidth={2} />;
      case 'UserCheck':
        return <UserCheck size={36} strokeWidth={2} />;
      default:
        return <Dumbbell size={36} strokeWidth={2} />;
    }
  };

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-circle">
                {getIcon(feature.iconName)}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
