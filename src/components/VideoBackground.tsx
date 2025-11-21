import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
}

const VideoBackground = ({
  // IMPORTANT: Replace this with your own hosted video URL (e.g., from AWS S3 or your web server)
  videoUrl = "/background.mp4",
  posterUrl = "/bg-poster.png",
  className,
}: VideoBackgroundProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // 1. Preload and track video readiness
  useEffect(() => {
    let video: HTMLVideoElement | undefined;

    // Only attempt preloading if a valid URL is provided
    if (videoUrl) {
      video = document.createElement("video");
      video.src = videoUrl;
      video.preload = "auto";
      video.muted = true; // Essential for autoplaying

      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        // Delay showing the video slightly after it's fully ready
        // for a smoother transition away from the poster image.
        setTimeout(() => setShowVideo(true), 500);
      };

      video.addEventListener("canplaythrough", handleCanPlay);

      return () => {
        // Cleanup: remove the event listener and the temporary video element
        video?.removeEventListener("canplaythrough", handleCanPlay);
        // The temporary video element naturally gets garbage collected, but we remove it for clarity.
      };
    } else {
      // Fallback for cases where no video URL is provided
      setIsVideoLoaded(true);
      setShowVideo(true);
    }
  }, [videoUrl]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Poster/Placeholder Image/Gradient
        This covers the video area until the video has successfully loaded.
      */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          "bg-red-200", // Standard Tailwind colors used here
          "bg-cover bg-center",
          showVideo ? "opacity-0" : "opacity-100"
        )}
        style={{
          backgroundImage: posterUrl ? `url(${posterUrl})` : undefined,
        }}
      />

      {/* Video Element
        Only rendered when it is loaded. Note the opacity-40 applied as a dimming effect.
      */}
      {isVideoLoaded && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            // The video is visible but dimmed
            showVideo ? "opacity-100" : "opacity-0"
          )}
          src={videoUrl}
        />
      )}

      {/* Additional Gradient Overlay (Optional, for better text contrast)
        This gradient provides extra darkness/contrast at the bottom, which is often useful. 
      */}
    </div>
  );
};

export default VideoBackground;
