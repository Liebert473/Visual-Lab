import { Button } from "../ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative h-screen w-screen flex items-center bg-warm-sand overflow-hidden">
      <div className="container mx-auto px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold text-foreground">
              Begin a Creative
              <br />
              Journey
            </h2>
            
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 text-lg transition-all duration-300 hover:scale-105"
            >
              Get Started Now
            </Button>
            
            <hr className="border-t-2 border-foreground w-3/4" />
            
            <div className="space-y-4">
              <p className="text-foreground/80">
                <span className="font-semibold">Email Address:</span> gacdesign.support@gmail.com
              </p>
              
              <div className="flex items-center gap-4">
                <span className="font-semibold text-foreground/80">Socials</span>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Decorative Image */}
          <div className="relative h-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/50 to-transparent rounded-lg backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
