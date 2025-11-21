"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cherry } from "lucide-react";
import VideoBackground from "../VideoBackground";
import { GlassIconCard } from "../IconCard";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

interface HomeHeroProps {
  onScrollDown: () => void;
}

const HomeHero = ({ onScrollDown }: HomeHeroProps) => {
  const words = [
    { text: "All-In-One" },
    { text: "creative" },
    {
      text: "Design Agency",
      className: "text-sky-500",
    },
  ];

  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />

      {/* Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 text-center px-8 w-fit"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.7 }}
          className="
    text-6xl md:text-8xl font-bold text-white mb-8 
    w-[900px] flex justify-center
    tracking-tight 
    bg-white/10 backdrop-blur-xl border border-white/20
    px-6 py-4 rounded-2xl shadow-2xl
  "
        >
          <TypewriterEffectSmooth className="text-4xl" words={words} />
        </motion.h1>

        {/* Bottom Section */}
        <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
            className="
              text-white/90 
              transition-all
              text-xl mb-8 
              bg-white/10 backdrop-blur-xl border border-white/20
              px-5 py-2 rounded-lg shadow-xl
              hover:scale-105 hover:bg-white/20
            "
          >
            Make something amazing.
          </motion.p>

          {/* Scroll Button */}
          <motion.button
            onClick={onScrollDown}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.2 }}
            className="
            hover:scale-105 hover:bg-white/20
              p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20
             transition-all
              shadow-xl
            "
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8 text-white/80" />
          </motion.button>
        </div>

        {/* Decorative Glass Icon (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute -bottom-40 left-0"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <GlassIconCard Icon={Cherry} iconColor="text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
