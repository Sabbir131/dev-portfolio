import React from "react";
import { motion } from "framer-motion";

// Import skill icons
import reactIcon from "../assets/skills/react.png";
import nodeIcon from "../assets/skills/node.png";
import tailwindIcon from "../assets/skills/tailwind.png";
import tsIcon from "../assets/skills/typescript.png";

// Skills data
const skills = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "TypeScript", icon: tsIcon },
];

const Skills = () => {
  return (
    <section className="py-16 text-center px-4 bg-slate-900">
      <h2 className="text-3xl font-bold mb-10 text-emerald-400">Skills</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 p-4 bg-slate-800 rounded-full flex items-center justify-center shadow-lg"
            animate={{
              y: [0, -5, 0, 5, 0], // subtle float up and down
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2, // staggered start
            }}
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
