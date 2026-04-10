const Contact = () => {
  return (
    <section id="contact" className="section bg-beige text-center">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-2xl">📧</span>
            <a href="mailto:rezkyapril21@gmail.com" className="text-lg">rezkyapril21@gmail.com</a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-2xl">📱</span>
            <span className="text-lg">0821-1727-7977</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-2xl">📸</span>
            <a href="https://instagram.com/reqi17" target="_blank" rel="noopener noreferrer" className="text-lg">@reqi17</a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-2xl">💼</span>
            <a href="https://linkedin.com/in/rezkyapril" target="_blank" rel="noopener noreferrer" className="text-lg">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;