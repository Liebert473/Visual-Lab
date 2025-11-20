import { ChevronDown } from "lucide-react";
import VideoBackground from "../VideoBackground";

interface HomeHeroProps {
  onScrollDown: () => void;
}

const HomeHero = ({ onScrollDown }: HomeHeroProps) => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight animate-scale-in">
          ALL-IN-ONE CREATIVE
          <br />
          DESIGN AGENCY
        </h1>
        
        {/* Bottom section */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/90 text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Make something amazing.
          </p>
          
          <button
            onClick={onScrollDown}
            className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8 text-white/80" />
          </button>
        </div>
        
        {/* Decorative logo bottom left */}
        <div className="absolute bottom-12 left-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="w-24 h-24 bg-primary/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <rect x="10" y="50" width="30" height="40" fill="hsl(var(--ocean-blue))" />
              <circle cx="70" cy="30" r="15" fill="hsl(var(--teal))" />
              <path d="M50 80 L60 60 L70 80 Z" fill="hsl(var(--ocean-blue-dark))" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
