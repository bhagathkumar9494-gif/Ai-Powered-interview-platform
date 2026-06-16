import React from 'react';

export const Input = ({ label, type = 'text', className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-textSecondary">{label}</label>}
      <input
        type={type}
        className={`input-field ${className}`}
        {...props}
      />
    </div>
  );
};
