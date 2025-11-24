import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center bg-warm-beige overflow-hidden">
      <div className="area absolute top-0 bottom-0 left-0 right-0">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <motion.div
        className="container mx-auto px-16 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <div className="grid grid-cols-2 gap-16">
          {/* ---------------- LEFT COLUMN ---------------- */}
          <motion.div
            className="space-y-12 animate-fade-in"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="
              p-6 rounded-xl
              bg-white/10 backdrop-blur-md border border-white/20
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
            >
              <h2 className="text-7xl font-bold mb-8 flex items-center gap-2 bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white to-white/20">
                AB
                <span className="inline-block w-4 h-4 rounded-full bg-white animate-pulse"></span>
                UT US
              </h2>
              <p className="text-lg text-foreground/80">
                At Visual Lab design agency, we explore the intersection of
                form, function, and creativity.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeUp}
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="
              border-l-4 pl-6 space-y-6
              bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white to-white/20">
                OUR TEAM
              </h3>
              <p className="text-foreground/80 uppercase font-bold text-sm tracking-wide">
                ZIN WIN HTUN, ZAY LIN KHANT, THET HTAR SWE, SAI AUNG KHAM
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="
              border-l-4 pl-6 space-y-6
              bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white to-white/20">
                QUICK FAST-ROUND REVISIONS
              </h3>
              <div>
                <p className="text-3xl font-bold bg-clip-text text-white">
                  {"< 2 DAYS AVERAGE"}
                </p>
                <p className="text-sm text-foreground/60">
                  for a Basic to Standard plan
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeUp}
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="
              border-l-4 pl-6
              bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
            >
              <p className="text-white italic">
                We deliver excellent design with balance and precision.
              </p>
            </motion.div>
          </motion.div>

          {/* ---------------- RIGHT COLUMN ---------------- */}
          <motion.div
            className="space-y-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {/* Vision */}
            <motion.div
              variants={fadeUp}
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="
              space-y-6 p-6 rounded-lg
              bg-white/10 backdrop-blur-md border border-white/20
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
            >
              <h3 className="text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white to-white/20">
                VISION
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Our vision is to redefine the way design shapes
                experiences—creating work that is precise and attractive.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeUp}
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="
              space-y-6 p-6 rounded-lg
              bg-white/10 backdrop-blur-md border border-white/20
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
            >
              <h3 className="text-4xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white to-white/20">
                MISSION
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Our mission is to deliver excellent design and turn ideas into
                functional, elegant solutions.
              </p>
            </motion.div>

            <hr className="border-t-2 border-white/30" />

            {/* Cheap Prices */}
            <motion.div
              variants={fadeUp}
              whileInView="visible"
              transition={{ duration: 0.6 }}
              className="
              border-l-4 pl-6 space-y-6
              bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-4
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white to-white/20">
                CHEAP PRICES
              </h3>
              <p className="text-3xl font-bold text-white">{"< 30,000 MMK"}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
