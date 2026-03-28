import { ButtonHTMLAttributes } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center tracking-[0.2em] uppercase transition-all duration-300 font-black whitespace-nowrap active:scale-[0.98] outline-none';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-zinc-200 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]',
    secondary: 'bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-800',
    outline: 'border-2 border-zinc-900 text-zinc-400 hover:text-white hover:border-white',
  };
  
  const sizes = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-12 py-5 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
