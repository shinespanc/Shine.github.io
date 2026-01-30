import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { BookingPanel } from "./BookingPanel";

interface BookingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "outline" | "ghost";
}

export function BookingButton({ className, variant = "primary", ...props }: BookingButtonProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/30",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "text-primary hover:bg-primary/5",
  };

  return (
    <>
      <button
        onClick={() => setIsPanelOpen(true)}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span>Book Now</span>
        <ExternalLink className="w-4 h-4" />
      </button>
      <BookingPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
}
