import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, className, children }) => (
  <div 
    className={`
      w-[70px] h-[70px] min-w-[70px] min-h-[70px] 
      sm:w-[90px] sm:h-[90px] sm:min-w-[90px] sm:min-h-[90px]
      rounded-full overflow-hidden flex items-center justify-center 
      ${className || ''}
    `}
  >
    {src ? <AvatarImage src={src} alt={alt || 'Avatar'} /> : null}
    {children}
  </div>
);

export const AvatarImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-full rounded-full object-cover"
  />
);

export const AvatarFallback: React.FC<{ fallbackText?: string; children?: React.ReactNode }> = ({ fallbackText, children }) => (
  <div
    className="
      w-full h-full rounded-full 
      flex items-center justify-center 
      bg-gray-300 text-white 
      text-base sm:text-2xl 
      font-bold
    "
  >
    {fallbackText || children}
  </div>
);