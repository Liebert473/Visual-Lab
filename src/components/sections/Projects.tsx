const Projects = () => {
  const projects = [
    {
      title: "POSTER",
      subtitle: "JESKO ABSOLUT KOENIGSEGG",
      category: "Poster Design",
      gradient: "from-slate-800 to-slate-900"
    },
    {
      title: "NEW PEAK",
      subtitle: "Nike Running Shoes",
      category: "Poster Design",
      gradient: "from-teal to-ocean-blue"
    },
    {
      title: "3D MODELED",
      subtitle: "Wireless Earbuds",
      category: "3D Modeling",
      gradient: "from-slate-400 to-slate-600"
    },
    {
      title: "3D MODELED",
      subtitle: "Abstract Golden Forms",
      category: "3D Art",
      gradient: "from-yellow-600 to-yellow-800"
    }
  ];

  return (
    <section className="relative h-screen w-screen flex items-center bg-slate-blue overflow-hidden">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-5 gap-8 items-start">
          {/* Title Column */}
          <div className="col-span-1 animate-fade-in">
            <h2 className="text-7xl font-bold text-foreground sticky top-32">
              PROJECTS
            </h2>
          </div>
          
          {/* Projects Grid */}
          <div className="col-span-4 grid grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative animate-fade-in hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${project.gradient} overflow-hidden shadow-lg`}>
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xl font-bold text-foreground">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
