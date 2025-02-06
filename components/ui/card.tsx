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
        "rounded-xl shadow-md bg-[#141414] border border-transparent hover:border-white hover:border-opacity-40 transition-all duration-300 w-full",
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
        "p-4 sm:p-4",
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
        "p-3 sm:p-4 dark:border-[#141414]",
        className
      )}
    >
      {children}
    </div>
  );
}