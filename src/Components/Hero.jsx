import { useEffect } from 'react';
import pp from '../assets/pp.jpg';

const Hero = () => {
  useEffect(() => {
    // Fade in animation
    const elements = document.querySelectorAll('.hero-element');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 200);
    });
  }, []);

  return (
    <section id="hero" className="section bg-cream text-center relative min-h-screen flex flex-col justify-center">
      <div className="container">
        {/* Floating elements around image */}
        <div className="relative flex justify-center items-center mb-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-12 h-12 flex items-center justify-center text-2xl float hero-element opacity-0">⚽</div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 flex items-center justify-center text-2xl float hero-element opacity-0">🎮</div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 flex items-center justify-center text-2xl float hero-element opacity-0">📷</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16 w-12 h-12 flex items-center justify-center text-2xl float hero-element opacity-0">🏆</div>

          <img
            src={pp}
            alt="Rezky April"
            className="w-48 h-48 rounded-full object-cover shadow-lg hero-element opacity-0"
          />
        </div>

        {/* Text */}
        <div className="hero-element opacity-0">
          <h1 className="text-5xl font-bold mb-2">Rezky April</h1>
          <p className="text-xl text-blue mb-4">Junior UI/UX Designer & Digital Marketing</p>
          <p className="text-lg mb-6">Creating simple and engaging digital experiences</p>

          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue text-white px-6 py-3 rounded hover:bg-light-blue">View Projects</a>
            <a href="#contact" className="bg-red text-white px-6 py-3 rounded hover:bg-opacity-80">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;