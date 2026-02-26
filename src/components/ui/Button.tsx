"use client";

import { type ComponentProps, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverted";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
  secondary:
    "border border-gray-200 text-gray-900 hover:bg-gray-50 bg-white",
  ghost:
    "text-gray-500 hover:text-gray-900 hover:bg-gray-50",
  inverted:
    "bg-white text-gray-900 hover:bg-emerald-50 shadow-sm",
};

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, as, href, ...props }, ref) => {
    const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-150 ${variants[variant]} ${className}`;

    if (as === "a" && href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
