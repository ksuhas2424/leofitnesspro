// src/components/Button.jsx
import React from 'react';

export const Button = ({
  children,
  variant = 'gold', // 'gold' | 'white' | 'outline-gold' | 'dark'
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  ...props
}) => {
  let variantClass = 'btn-gold';

  if (variant === 'white') {
    variantClass = 'btn-white';
  } else if (variant === 'outline-gold') {
    variantClass = 'btn-outline-gold';
  } else if (variant === 'dark') {
    variantClass = 'btn-card btn-gold';
  }

  return (
    <button
      type={type}
      className={`btn-card ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        {children}
        {Icon && <Icon size={18} />}
      </span>
    </button>
  );
};

export default Button;
