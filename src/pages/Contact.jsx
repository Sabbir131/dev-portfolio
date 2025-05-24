import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-16 text-gray-200"
    >
      <h2 className="text-3xl font-bold mb-8 text-emerald-400 text-center">
        Contact Me
      </h2>

      <div className="flex flex-wrap md:flex-nowrap gap-12 items-center">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-5 min-w-[280px]"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            required
            className="bg-gray-800 border border-gray-700 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400 transition w-full"
          />
          <button
            type="submit"
            className="w-max bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-full font-semibold transition self-start"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex-1 min-w-[200px] flex flex-col items-center justify-center gap-8 text-emerald-400 h-full">
          <p className="text-center mb-4 text-gray-300">
            Or connect with me on social media:
          </p>
          <div className="flex gap-6 text-4xl md:text-3xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-emerald-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-emerald-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-emerald-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="hover:text-emerald-500 transition cursor-pointer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
