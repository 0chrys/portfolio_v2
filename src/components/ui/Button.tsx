"use client";

import { useRef } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  id,
  target,
  rel,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 cursor-pointer overflow-hidden group";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/40",
    secondary:
      "border border-border text-foreground hover:border-accent hover:text-accent bg-surface hover:shadow-md",
    ghost: "text-muted hover:text-foreground bg-transparent border border-transparent hover:border-border/50 transition-all",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={combinedClass}
        id={id}
        target={target}
        rel={rel}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      className={combinedClass}
      id={id}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent-hover to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
}
