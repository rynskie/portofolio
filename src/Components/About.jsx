const About = () => {
  return (
    <section id="about" className="section bg-beige">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-red mb-6"></div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">
              I&apos;m a vocational student specializing in software engineering, with a passion for UI/UX design and digital marketing.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              During my internship, I gained experience in affiliate marketing, product research, video editing, and website redevelopment.
            </p>
            <p className="text-lg leading-relaxed">
              I enjoy creating simple, engaging digital experiences that connect with users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;