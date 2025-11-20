import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HomeHero from "@/components/sections/HomeHero";
import HomeAbout from "@/components/sections/HomeAbout";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [homeSubSection, setHomeSubSection] = useState(0);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const homeVerticalContainerRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: number) => {
    setCurrentSection(section);
    if (section === 0) {
      setHomeSubSection(0);
    }
  };

  const handleHomeScrollDown = () => {
    setHomeSubSection(1);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Handle home section vertical scroll
      if (currentSection === 0) {
        if (e.deltaY > 0 && homeSubSection === 0) {
          setHomeSubSection(1);
        } else if (e.deltaY < 0 && homeSubSection === 1) {
          setHomeSubSection(0);
        } else if (e.deltaY > 0 && homeSubSection === 1) {
          setCurrentSection(1);
        }
      } else {
        // Handle horizontal scroll for other sections
        if (e.deltaY > 0 && currentSection < 3) {
          setCurrentSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
          if (currentSection === 1) {
            setCurrentSection(0);
            setHomeSubSection(1);
          } else {
            setCurrentSection(currentSection - 1);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, homeSubSection]);

  useEffect(() => {
    // Scroll home vertical container
    if (homeVerticalContainerRef.current) {
      homeVerticalContainerRef.current.style.transform = `translateY(-${
        homeSubSection * 100
      }vh)`;
    }
  }, [homeSubSection]);

  useEffect(() => {
    // Scroll horizontal container
    if (horizontalContainerRef.current) {
      const scrollPosition =
        currentSection === 0
          ? 0
          : (currentSection - 1) * window.innerWidth + window.innerWidth;
      horizontalContainerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    }
  }, [currentSection]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />

      <div
        ref={horizontalContainerRef}
        className="flex h-screen transition-transform duration-1000 ease-in-out"
        style={{ width: "400vw" }}
      >
        {/* Home Section (Vertical Scroll) */}
        <div className="relative w-screen h-screen overflow-hidden">
          <div
            ref={homeVerticalContainerRef}
            className="transition-transform duration-1000 ease-in-out"
            style={{ height: "200vh" }}
          >
            <HomeHero onScrollDown={handleHomeScrollDown} />
            <HomeAbout />
          </div>
        </div>

        {/* Other Sections (Horizontal Scroll) */}
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
