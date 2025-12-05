import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'ghost';
  color?: 'primary' | 'secondary' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'solid',
  color = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
    xl: "px-10 py-4 text-lg",
  };

  const colorStyles = {
    primary: "bg-brand-300 text-brand-900 hover:bg-brand-400 shadow-[0_4px_14px_0_rgba(134,239,172,0.39)] hover:shadow-[0_6px_20px_rgba(134,239,172,0.23)]", // Monotree Green
    secondary: "bg-purple-600 text-white hover:bg-purple-500",
    dark: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg shadow-zinc-900/20",
    white: "bg-white text-zinc-900 hover:bg-zinc-50 border border-zinc-200 shadow-sm",
  };

  const variantStyles = {
    solid: colorStyles[color as keyof typeof colorStyles] || colorStyles.dark,
    bordered: "border-2 border-current bg-transparent",
    light: "bg-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
    flat: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    ghost: "bg-transparent hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900",
  };

  if (variant === 'bordered' && color === 'primary') {
    variantStyles.bordered = "border-2 border-brand-300 text-brand-700 bg-transparent hover:bg-brand-50";
  }

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};