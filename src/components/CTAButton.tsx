import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  size?: "default" | "lg" | "sm";
}

const CTAButton = ({ text, className, onClick, size = "default" }: CTAButtonProps) => {
  return (
    <Button 
      onClick={onClick}
      size={size}
      className={cn(
        "cta-gradient text-white font-semibold shadow-lg hover:opacity-90 transition-all",
        size === "lg" ? "text-lg py-6 px-8" : "",
        className
      )}
    >
      {text}
    </Button>
  );
};

export default CTAButton;
