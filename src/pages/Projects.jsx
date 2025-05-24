import { motion } from "framer-motion";
import proj1Img from "../assets/images/proj1.jpg";
import proj2Img from "../assets/images/proj2.jpg";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A minimal portfolio built with React, Tailwind, and Framer Motion.",
    image: proj1Img,
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Tracker",
    desc: "A task tracker app with streak calendar feature.",
    image: proj2Img,
    live: "https://task-tracker.vercel.app",
    github: "https://github.com/yourusername/task-tracker",
  },
  {
    title: "Task Tracker",
    desc: "A task tracker app with streak calendar feature.",
    image: proj2Img,
    live: "https://task-tracker.vercel.app",
    github: "https://github.com/yourusername/task-tracker",
  },
  {
    title: "Task Tracker",
    desc: "A task tracker app with streak calendar feature.",
    image: proj2Img,
    live: "https://task-tracker.vercel.app",
    github: "https://github.com/yourusername/task-tracker",
  },
];

const Projects = () => {
  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-3xl font-bold mb-8 text-emerald-400">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 p-4 rounded-lg text-left shadow-md"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-md mb-4 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold mb-2 text-emerald-300">
              {proj.title}
            </h3>
            <p className="text-slate-400 mb-4">{proj.desc}</p>
            <div className="flex gap-3">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-500 text-black rounded-full text-sm hover:bg-emerald-600 transition"
              >
                Live Demo
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-slate-500 rounded-full text-sm hover:bg-slate-700 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
