import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  id,
  name,
  disabled = false
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''} ${className}`}
    />
  );
};
