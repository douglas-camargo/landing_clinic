import React from 'react';

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
}

export default function TextArea({
  placeholder,
  value,
  onChange,
  rows = 4,
  className = '',
  id,
  name,
  disabled = false
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''} ${className}`}
    />
  );
};
