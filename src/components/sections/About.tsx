const About = () => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center bg-warm-beige overflow-hidden">
      <div className="container mx-auto px-16 py-20">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-7xl font-bold text-foreground mb-8 flex items-center gap-2">
                AB
                <span className="inline-block w-4 h-4 rounded-full bg-foreground animate-pulse"></span>
                UT US
              </h2>
              <p className="text-lg text-foreground/80">
                At GAC design agency, we explore the intersection of form, function, and creativity.
              </p>
            </div>
            
            <div className="border-l-4 border-foreground pl-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">OUR TEAM</h3>
              <p className="text-foreground/80 uppercase text-sm tracking-wide">
                ZIN WIN HTUN, ZAY LIN KHANT, THET HTAR SWE, SAI AUNG KHAM
              </p>
            </div>
            
            <div className="border-l-4 border-foreground pl-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">QUICK FAST-ROUND REVISIONS</h3>
              <div>
                <p className="text-3xl font-bold text-foreground">{'< 2 DAYS AVERAGE'}</p>
                <p className="text-sm text-foreground/60">for a Basic to Standard plan</p>
              </div>
            </div>
            
            <div className="border-l-4 border-foreground pl-6">
              <p className="text-foreground/80 italic">
                We deliver excellent design with balance and precision.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-foreground">VISION</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our vision is to redefine the way design shapes experiences—creating work that is precise and attractive.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-foreground">MISSION</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our mission is to deliver excellent design and turn ideas into functional, elegant solutions.
              </p>
            </div>
            
            <hr className="border-t-2 border-foreground" />
            
            <div className="border-l-4 border-foreground pl-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">CHEAP PRICES</h3>
              <p className="text-3xl font-bold text-foreground">{'< 30,000 MMK'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
