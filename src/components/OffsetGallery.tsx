import React from "react";

interface OffsetGalleryProps {
  leftImageSrc: string;
  rightImageSrc: string;
  backgroundColor?: string;
}

export const OffsetGallery: React.FC<OffsetGalleryProps> = ({
  leftImageSrc,
  rightImageSrc,
  backgroundColor = "bg-none",
}) => {
  // Custom easing for that "liquid/elastic" feel
  // This curve expands quickly, overshoots slightly, and settles (spring physics)
  const liquidTransition =
    "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

  return (
    <div
      className={`w-full h-screen flex justify-center items-center gap-12 ${backgroundColor} p-10 overflow-hidden`}
    >
      {/* --- Left Item: Glassmorphism + Liquid Grow --- */}
      {/* Kept static -translate-y-12 for layout, added hover:scale for animation */}
      <div
        className={`
        transform -translate-y-12 
        hover:scale-110 hover:z-10
        ${liquidTransition}
      `}
      >
        <div
          className="
          bg-white/30 backdrop-blur-md border border-white/20 shadow-xl
          p-4 pb-12 rounded-sm max-w-xs relative
        "
        >
          {/* Gloss overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-sm pointer-events-none"></div>

          <img
            src={leftImageSrc}
            alt="Scenic View"
            className="w-full h-auto object-cover aspect-[3/4] rounded-sm"
          />
        </div>
      </div>

      {/* --- Right Item: Standard + Liquid Grow --- */}
      {/* Kept static translate-y-12 for layout, added hover:scale for animation */}
      <div
        className={`
        transform translate-y-12 
        hover:scale-110 hover:z-10
        ${liquidTransition}
      `}
      >
        <div className="rounded-lg overflow-hidden shadow-2xl max-w-xs">
          <img
            src={rightImageSrc}
            alt="Abstract Texture"
            className="w-full h-auto object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </div>
  );
};
