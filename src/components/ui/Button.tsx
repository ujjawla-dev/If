import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "outline";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", fullWidth = true, children, ...props }, ref) => {
    
    let variantStyles = "";
    
    if (variant === "primary") {
      variantStyles = "btn-gradient text-white shadow-lg";
    } else if (variant === "glass") {
      variantStyles = "btn-glass text-white border border-white/20";
    } else if (variant === "outline") {
      // Changed to match the orange outline and dark background in the check-email screenshot
      variantStyles = "bg-[#151835A3] text-white border-[1.5px] border-[#151835A3]/80 shadow-[0_4px_14px_0_rgba(230,102,62,0.1)]";
    }

    const widthClass = fullWidth ? "w-full" : "w-auto";

    return (
      <button
        ref={ref}
        className={`h-14 px-8 rounded-full font-medium transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 ${widthClass} ${variantStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
