import { Button } from "../ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import BubblesBackground from "../BubbleBackground";

const popup = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Contact = () => {
  return (
    <section className="relative h-screen w-screen flex items-center overflow-hidden animated-background bg-linear-to-r from-rose-300 via-yellow-200 to-red-300">
      <div className="flex absolute top-0 left-0 right-0 bottom-0">
        <BubblesBackground />
      </div>

      <div className="container mx-auto px-16">
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Left - Content */}
          <motion.div
            variants={popup}
            className="
              space-y-8 
              bg-white/10 
              backdrop-blur-xl 
              border border-white/20 
              rounded-2xl 
              p-10 
              shadow-2xl 
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              hover:scale-110 hover:bg-white/20
            "
          >
            <motion.h2
              variants={fade}
              className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-b from-white/80 to-white/20"
            >
              Begin a Creative
              <br />
              Journey
            </motion.h2>

            <motion.div variants={popup}>
              <Button
                size="lg"
                className="
                  bg-white/20 
                  backdrop-blur-xl 
                  border border-white/30 
                  text-background 
                  hover:bg-white/30 
                  rounded-lg 
                  px-8 
                  text-lg 
                  transition-all 
                  duration-300 
                  hover:scale-105
                "
              >
                Get Started Now
              </Button>
            </motion.div>

            <motion.hr
              variants={fade}
              className="border-t-2 border-white/30 w-3/4"
            />

            <motion.div className="space-y-4" variants={fade}>
              <p className="text-white/80">
                <span className="font-semibold">Email Address:</span>{" "}
                gacdesign.support@gmail.com
              </p>

              <div className="flex items-center gap-4">
                <span className="font-semibold text-white/80">Socials</span>

                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      variants={popup}
                      whileHover={{ scale: 1.15 }}
                      className="
                        w-12 h-12 
                        rounded-full 
                        bg-white/20 
                        backdrop-blur-xl 
                        border border-white/20 
                        text-background 
                        flex items-center justify-center 
                        transition-transform duration-300
                      "
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
