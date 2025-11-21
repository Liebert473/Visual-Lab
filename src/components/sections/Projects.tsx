import { motion, type Variants } from "framer-motion";

const popup: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "POSTER",
      subtitle: "JESKO ABSOLUT KOENIGSEGG",
      category: "Poster Design",
      gradient: "from-slate-800 to-slate-900",
    },
    {
      title: "NEW PEAK",
      subtitle: "Nike Running Shoes",
      category: "Poster Design",
      gradient: "from-teal to-ocean-blue",
    },
    {
      title: "3D MODELED",
      subtitle: "Wireless Earbuds",
      category: "3D Modeling",
      gradient: "from-slate-400 to-slate-600",
    },
    {
      title: "3D MODELED",
      subtitle: "Abstract Golden Forms",
      category: "3D Art",
      gradient: "from-yellow-600 to-yellow-800",
    },
  ];

  return (
    <section className="relative w-screen flex flex-col bg-slate-blue overflow-hidden animated-background h-screen bg-linear-to-r from-rose-300 via-teal-500 to-blue-600">
      <motion.div
        className="grid grid-cols-3 gap-12 w-full p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* ---------------------- COLUMN 1 ---------------------- */}
        <motion.div className="grid grid-rows-8 gap-4" variants={popup}>
          {/* Title */}
          <motion.div className="row-span-2 flex items-center" variants={popup}>
            <h1 className="text-6xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white/80 to-white/20">
              PROJECTS
            </h1>
          </motion.div>

          {/* Fixed Image */}
          <motion.div
            className="row-span-5 relative h-full overflow-hidden rounded-xl max-h-[500px] hover:scale-105 transition-all"
            variants={popup}
          >
            <img
              src="/poster1.jpg"
              alt="Poster"
              className="w-full h-full object-cover hover:scale-105 transition-all"
            />
          </motion.div>

          {/* Text */}
          <motion.div className="row-span-1 flex items-center" variants={popup}>
            <p className="text-3xl font-semibold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white/80 to-white/20">
              POSTER
            </p>
          </motion.div>
        </motion.div>

        {/* ---------------------- COLUMN 2 ---------------------- */}
        <motion.div className="grid grid-rows-8 gap-4" variants={popup}>
          <motion.div
            className="row-span-7 relative h-full overflow-hidden rounded-xl hover:scale-105 transition-all"
            variants={popup}
          >
            <img
              src="/poster1.png"
              alt="Poster"
              className="
                w-full h-full object-cover
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:scale-105 hover:bg-white/20
              "
            />
          </motion.div>

          <motion.div className="row-span-1 flex items-center" variants={popup}>
            <p className="text-3xl font-semibold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white/80 to-white/20">
              POSTER
            </p>
          </motion.div>
        </motion.div>

        {/* ---------------------- COLUMN 3 ---------------------- */}
        <motion.div className="grid grid-rows-8 gap-4" variants={popup}>
          {/* Image 1 */}
          <motion.div
            className="row-span-3 relative h-full overflow-hidden rounded-xl hover:scale-105 transition-all"
            variants={popup}
          >
            <img
              src="/3d2.png"
              alt="3D Model"
              className="
                w-full h-full object-cover
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:scale-105 hover:bg-white/20
              "
            />
          </motion.div>

          {/* Text 1 */}
          <motion.div className="row-span-1 flex items-center" variants={popup}>
            <p className="text-3xl font-semibold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white/80 to-white/20">
              3D MODELED
            </p>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="row-span-3 relative h-full overflow-hidden rounded-xl hover:scale-105 transition-all"
            variants={popup}
          >
            <img
              src="/3d.png"
              alt="3D Model"
              className="
                w-full h-full object-cover
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:scale-105 hover:bg-white/20
              "
            />
          </motion.div>

          {/* Text 2 */}
          <motion.div className="row-span-1 flex items-center" variants={popup}>
            <p className="text-3xl font-semibold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white/80 to-white/20">
              3D MODELED
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
