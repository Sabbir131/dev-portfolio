import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-emerald-400">John Doe</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-md mx-auto mb-6">
          A fullstack developer crafting elegant and modern web experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-emerald-500 rounded-full hover:bg-emerald-600">
            Contact Me
          </button>
          <button className="px-6 py-3 border border-slate-500 rounded-full hover:bg-slate-700">
            View Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
