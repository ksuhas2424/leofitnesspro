// src/components/MembershipPlans.jsx
import React from 'react';
import { Check, Crown, GraduationCap, Sparkles, Award } from 'lucide-react';
import plansData from '../data/plans';
import Button from './Button';

export const MembershipPlans = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="membership-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <h2 className="section-title">MEMBERSHIP PLANS</h2>
          <div className="gold-down-arrow" />
        </div>

        {/* 5 Membership Cards Grid */}
        <div className="plans-grid">
          {plansData.map((plan) => {
            const isFeaturedGold = plan.featured;
            const isStudent = plan.isStudentOffer;

            let cardClass = 'plan-card';
            if (isFeaturedGold) {
              cardClass += ' featured-gold';
            } else if (isStudent) {
              cardClass += ' theme-dark';
            }

            return (
              <div key={plan.id} className={cardClass}>
                {/* Badge if present */}
                {plan.badge && <div className="plan-badge">{plan.badge}</div>}

                {/* Card Top Icon */}
                <div className="plan-card-icon">
                  {isStudent ? (
                    <GraduationCap size={40} />
                  ) : isFeaturedGold ? (
                    <Crown size={40} />
                  ) : plan.id === 'yearly' ? (
                    <Award size={40} />
                  ) : (
                    <Sparkles size={36} />
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="plan-name">{plan.name}</h3>

                {/* Price or Student Tagline */}
                {isStudent ? (
                  <div className="plan-price-wrap">
                    <div className="student-tagline">{plan.tagline}</div>
                    <div className="student-notice">{plan.notice}</div>
                  </div>
                ) : (
                  <div className="plan-price-wrap">
                    <div className="plan-price">{plan.price}</div>
                    <div className="plan-duration">{plan.duration}</div>
                  </div>
                )}

                {/* Benefits List */}
                <ul className="plan-benefits-list">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="benefit-item">
                      <Check className="benefit-icon" size={18} strokeWidth={3} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Button
                  variant={isFeaturedGold ? 'white' : isStudent ? 'gold' : 'gold'}
                  onClick={() => onSelectPlan(plan)}
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
