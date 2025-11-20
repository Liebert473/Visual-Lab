import { Button } from "../ui/button";

const HomeAbout = () => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center bg-slate-blue overflow-hidden">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Images */}
        <div className="relative animate-fade-in">
          <div className="grid grid-cols-2 gap-6">
            {/* Top left image */}
            <div className="aspect-square bg-ocean-blue/20 rounded-lg backdrop-blur-sm overflow-hidden hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-ocean-blue/30 to-transparent" />
            </div>
            
            {/* Bottom left decorative */}
            <div className="aspect-square bg-warm-beige/20 rounded-full backdrop-blur-sm flex items-center justify-center hover:rotate-12 transition-transform duration-500">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <path d="M50 10 L60 40 L50 50 L40 40 Z" fill="hsl(var(--primary))" />
                <path d="M50 50 L60 60 L50 90 L40 60 Z" fill="hsl(var(--primary))" />
              </svg>
            </div>
            
            {/* Center large image */}
            <div className="col-span-2 aspect-[4/5] bg-teal/30 rounded-lg backdrop-blur-sm overflow-hidden hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-teal/40 to-ocean-blue/40" />
            </div>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            CREATIVITY WITH PURPOSE
          </h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed">
            A well-built design doesn't happen by accident. It comes from clarity, intention, 
            and design that actually understands what your audience cares about.
          </p>
          
          <Button 
            size="lg"
            className="bg-warm-beige text-foreground hover:bg-warm-sand transition-all duration-300 hover:scale-105 rounded-full px-8"
          >
            Turn ideas into <span className="font-bold ml-1">reality.</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
