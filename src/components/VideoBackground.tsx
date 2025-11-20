import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  videoUrl?: string;
  posterUrl?: string;
  className?: string;
}

const VideoBackground = ({ 
  videoUrl = "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c02e63b21c14c5a7ea8a6e7d5b7b91&profile_id=164&oauth2_token_id=57447761",
  posterUrl,
  className 
}: VideoBackgroundProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Preload video
    const video = document.createElement('video');
    video.src = videoUrl;
    video.preload = 'auto';
    
    video.addEventListener('canplaythrough', () => {
      setIsVideoLoaded(true);
      setTimeout(() => setShowVideo(true), 500);
    });

    return () => {
      video.remove();
    };
  }, [videoUrl]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Poster/Placeholder Image */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-slate-blue via-ocean-blue to-slate-blue transition-opacity duration-1000",
          showVideo ? "opacity-0" : "opacity-100"
        )}
        style={{
          backgroundImage: posterUrl ? `url(${posterUrl})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Video */}
      {isVideoLoaded && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            showVideo ? "opacity-40" : "opacity-0"
          )}
          src={videoUrl}
        />
      )}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
    </div>
  );
};

export default VideoBackground;
