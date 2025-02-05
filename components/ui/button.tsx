import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  onClick,
  asChild,
}: ButtonProps) {
  const baseStyles = 'py-1.5 sm:py-2 px-3 sm:px-2 focus:outline-none';
  const variantStyles = {
    primary: 'text-black bg-[#212121] border-transparent',
    secondary: 'bg-[#141414] text-white hover:bg-gray-700 rounded-full',
    tertiary: 'bg-transparent text-black rounded-full',
  };

  const buttonClassNames = classNames(
    baseStyles,
    variantStyles[variant],
    className
  );

  if (asChild) {
    return <>{children}</>;
  }

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
}