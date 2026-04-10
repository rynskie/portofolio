import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-beige bg-opacity-90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center py-4">
        <div className="text-xl font-bold text-blue">Rezky</div>
        <div className="space-x-4">
          <a href="#hero" className="hover:text-light-blue transition">Home</a>
          <a href="#about" className="hover:text-light-blue transition">About</a>
          <a href="#skills" className="hover:text-light-blue transition">Skills</a>
          <a href="#experience" className="hover:text-light-blue transition">Experience</a>
          <a href="#projects" className="hover:text-light-blue transition">Projects</a>
          <a href="#contact" className="hover:text-light-blue transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;