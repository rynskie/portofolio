import { motion } from "framer-motion";
import pp from "../assets/pp.jpg";

const Header = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 md:px-20 py-16 overflow-hidden">
      <motion.div
        className="flex-1 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to <br />
          <span className="text-gray-300">My Portfolio</span>
        </h1>
        <p className="text-lg font-medium">
          Rezky April / Frontend Developer
        </p>
        <a
          href="#contact"
          className="inline-block mt-4 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </motion.div>
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <img
          src={pp}
          alt="Rezky April"
          className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default Header;