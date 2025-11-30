import React from 'react';
import clsx from 'clsx';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-oneirism-orange to-[#ff3d00] text-white shadow-[0_4px_30px_rgba(255,87,34,0.3)] hover:shadow-[0_4px_40px_rgba(255,87,34,0.5)] border border-white/10",
    secondary: "bg-white/5 text-white hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20",
    outline: "bg-transparent text-white border border-oneirism-orange/50 hover:border-oneirism-orange hover:bg-oneirism-orange/5"
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-5 text-base"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "relative overflow-hidden rounded-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-3 group",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Sheen Effect */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-[sheen_1s_ease-in-out]" />
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default Button;