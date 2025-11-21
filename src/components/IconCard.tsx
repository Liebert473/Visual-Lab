import React from "react";
import { Leaf, type LucideIcon } from "lucide-react";

interface GlassIconCardProps {
  /** The Lucide icon component */
  Icon: LucideIcon;
  /** Size of the icon in pixels */
  iconSize?: number;
  /** CSS classes for icon color (e.g. "text-white", "text-sky-900") */
  iconColor?: string;
  /** Optional extra class names for the wrapper */
  className?: string;
}

export const GlassIconCard: React.FC<GlassIconCardProps> = ({
  Icon = Leaf,
  iconSize = 48,
  iconColor = "text-white",
  className = "",
}) => {
  // The liquid spring physics curve
  const liquidEase =
    "transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

  return (
    <div
      className={`
        relative group
        flex items-center justify-center
        w-30 h-30
        rounded-full
        overflow-hidden
        
        /* --- Glassmorphism Base --- */
        bg-white/5           /* Very transparent white */
        backdrop-blur-md      /* Blurs the page background behind it */
        border border-white/20 /* Subtle edge definition */
        shadow-lg
        
        /* --- Liquid Animation --- */
        ${liquidEase}
        hover:scale-110       /* Grows with spring physics */
        hover:shadow-2xl      /* Shadow deepens on lift */
        
        ${className}
      `}
    >
      {/* --- Internal Abstract Blobs (Decoration) --- */}
      {/* Blob 1: Top Left */}
      <div
        className={`
        absolute top-[-20%] left-[-20%]
        w-24 h-24 rounded-full
        bg-white/30 blur-xl
        ${liquidEase}
        group-hover:translate-x-2 group-hover:translate-y-2 /* Slight parallax movement */
      `}
      />

      {/* Blob 2: Bottom Right */}
      <div
        className={`
        absolute bottom-[-10%] right-[-10%]
        w-32 h-32 rounded-full
        bg-white/20 blur-lg
        ${liquidEase}
        group-hover:-translate-x-2 group-hover:-translate-y-2
      `}
      />

      {/* --- The Icon --- */}
      <div className="relative z-10">
        <Icon size={iconSize} className={`${iconColor} drop-shadow-md`} />
      </div>

      {/* Optional: Glossy Overlay for extra shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none rounded-2xl" />
    </div>
  );
};
