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
      <div
        className="
          flex items-center gap-2
          px-6 py-4 rounded-full
          border border-white/20
          bg-white/10
          backdrop-blur-xl
          shadow-[0_8px_20px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <div
          onClick={() => onNavigate(0)}
          className="mr-4 p-1 rounded-full overflow-hidden flex items-center justify-center w-10 h-10 bg-white/30 text-white font-semibold backdrop-blur-lg shadow-inner
            /* --- Liquid Hover Animation --- */
    /* Custom bezier for elastic 'overshoot' effect */
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    /* Scale up 'liquidly' and slightly brighten background on hover */
    hover:scale-110 hover:bg-white/20"
        >
          <img src="/logo.png" alt="" />
        </div>

        {/* Navigation */}
        {navItems.map(({ icon: Icon, label, section }) => (
          <button
            key={section}
            onClick={() => onNavigate(section)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
              currentSection === section
                ? "bg-white/30 text-white font-semibold backdrop-blur-lg shadow-inner"
                : "text-white/70 hover:text-white hover:bg-white/20"
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
