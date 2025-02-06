import React from "react";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div 
      className={classNames(
        "rounded-xl shadow-md bg-neutral-900",  // Using Tailwind's neutral color instead of arbitrary value
        "border border-transparent",
        "hover:border-white/40",  // Using opacity modifier instead of separate opacity class
        "transition-all duration-300",
        "w-full min-w-0",  // Add min-w-0 to prevent flex item shrinking
        "transform-gpu",    // Use GPU acceleration for smoother animations
        "relative",        // Ensure proper stacking context
        "overflow-hidden", // Prevent content from spilling
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div 
      className={classNames(
        "p-4",  // Consistent padding
        "flex-1",  // Allow content to take available space
        "overflow-auto",  // Handle overflow gracefully
        "min-h-0",  // Prevent flex item expansion
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: CardProps) {
  return (
    <div 
      className={classNames(
        "p-4",  // Consistent padding
        "border-t border-neutral-800",  // Using Tailwind's neutral color
        "mt-auto",  // Push footer to bottom
        className
      )}
    >
      {children}
    </div>
  );
}