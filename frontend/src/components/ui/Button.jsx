import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'text-white hover:text-primary transition-colors';
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
