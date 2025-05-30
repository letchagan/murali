
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = '#880808',
  text 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {/* Outer ring */}
        <div 
          className={`${sizeClasses[size]} rounded-full border-4 border-gray-200`}
          style={{ borderTopColor: color }}
        >
          <div 
            className={`${sizeClasses[size]} rounded-full border-4 border-transparent animate-spin`}
            style={{ borderTopColor: color }}
          ></div>
        </div>
        
        {/* Inner pulsing dot */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
