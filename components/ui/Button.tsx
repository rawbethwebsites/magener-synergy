import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-white text-brand-black hover:bg-white": variant === "primary",
            "border border-brand-border bg-transparent hover:bg-brand-surface text-brand-white": variant === "outline",
            "bg-transparent hover:bg-brand-surface text-brand-white": variant === "ghost",
            "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black": variant === "gold",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-12 rounded-md px-8 text-base tracking-wide": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
