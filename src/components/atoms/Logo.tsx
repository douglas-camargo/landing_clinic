interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };
  
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} bg-blue-600 rounded-full flex items-center justify-center`}>
        <span className="text-white font-bold text-lg">C+</span>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-gray-800`}>
          Clínica Caracas
        </span>
      )}
    </div>
  );
};
