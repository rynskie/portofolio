import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative text-white pt-20 pb-32 px-6 md:px-20 bg-black overflow-hidden">
      <motion.div
        className="absolute -top-40 left-0 w-full h-80 bg-black z-0"
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          clipPath: "ellipse(100% 50% at 50% 100%)",
        }}
      />
      <div className="relative z-10 text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-300">
          Jika kamu tertarik untuk bekerja sama atau ingin menghubungi saya,
          silakan kontak melalui:
        </p>

        <div className="text-sm md:text-base space-y-1 text-gray-200">
          <p>Email: <a href="mailto:rezkyapril21@gmail.com" className="text-blue-400 hover:underline">rezkyapril21@gmail.com</a></p>
          <p>Telepon: 0821-1727-7977</p>
          <p>Instagram: <a href="https://instagram.com/reqi17" target="_blank" className="text-blue-400 hover:underline">@reqi17</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;