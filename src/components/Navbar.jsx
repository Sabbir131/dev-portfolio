import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-1 z-50 flex justify-center">
      <nav className="w-full py-3">
        <div className="flex justify-center">
          <ul className="flex gap-6 bg-slate-800/80 backdrop-blur-md px-6 py-2 rounded-full text-sm text-slate-300 shadow-md">
            <li>
              <a href="#hero" className="hover:text-emerald-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-emerald-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
