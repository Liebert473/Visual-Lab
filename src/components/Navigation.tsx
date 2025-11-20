import { Home, Info, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

const Navigation = ({ currentSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { icon: Home, label: "Home", section: 0 },
    { icon: Info, label: "About", section: 1 },
    { icon: Briefcase, label: "Projects", section: 2 },
    { icon: Mail, label: "Contact", section: 3 },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="flex items-center gap-2 bg-background/80 backdrop-blur-xl px-6 py-4 rounded-full shadow-lg border border-border">
        {/* Logo */}
        <div className="mr-4 flex items-center justify-center w-10 h-10">
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
            <path d="M12 2L12 12L2 12" stroke="hsl(var(--ocean-blue))" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 12L22 12L22 22" stroke="hsl(var(--ocean-blue))" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="3" fill="hsl(var(--ocean-blue))"/>
          </svg>
        </div>
        
        {/* Nav Items */}
        {navItems.map(({ icon: Icon, label, section }) => (
          <button
            key={section}
            onClick={() => onNavigate(section)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
              currentSection === section
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent text-muted-foreground hover:text-accent-foreground"
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
