import { OffsetGallery } from "../OffsetGallery";
import { Button } from "../ui/button";
import { GlassIconCard } from "../IconCard";
import { Feather } from "lucide-react";
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

const HomeAbout = () => {
  return (
    <section className="relative w-screen flex items-center justify-center overflow-hidden  animated-background h-screen bg-linear-to-r from-red-300 via-sky-200 to-blue-400">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* ---------------- LEFT SIDE ---------------- */}
        <motion.div
          className="relative animate-fade-in"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={popup}
        >
          <OffsetGallery
            leftImageSrc="/image (1).png"
            rightImageSrc="/image (1).jpeg"
          />

          <div className="absolute bottom-20 left-30">
            <motion.div variants={popup}>
              <GlassIconCard Icon={Feather} iconColor="text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <motion.div
          className="space-y-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={popup}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-black to-black/20">
            CREATIVITY WITH PURPOSE
          </h2>

          <p className="text-lg text-foreground/80 leading-relaxed">
            A well-built design doesn't happen by accident. It comes from
            clarity, intention, and design that actually understands what your
            audience cares about.
          </p>

          <motion.div variants={popup}>
            <Button
              size="lg"
              className="
                rounded-full px-8 text-foreground
                bg-white/10 backdrop-blur-md border border-white/20
                shadow-sm
                transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:scale-110 hover:bg-white/20
              "
            >
              Turn ideas into <span className="font-bold ml-1">reality.</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
