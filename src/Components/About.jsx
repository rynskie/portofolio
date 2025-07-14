import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white text-black px-6 md:px-20 py-16"
    >
      <div className="flex-1 space-y-6 mb-10 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold">Who is Rezky?</h2>
        <p className="text-lg leading-relaxed text-black">
          Saya adalah seorang siswa dari SMK Prakarya Internasional jurusan
          Rekayasa Perangkat Lunak dan Gim. Saat ini saya sedang fokus belajar
          frontend development menggunakan HTML, CSS, JavaScript, dan React.
          Saya memiliki ketertarikan tinggi terhadap teknologi dan desain
          interaktif yang modern.
        </p>
        <p className="text-md text-black">
          Saya siap untuk terus berkembang dan berkontribusi dalam dunia IT
          melalui projek-projek nyata maupun program PKL.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={aboutImg}
          alt="About Rezky"
          className="rounded-xl w-80 h-auto object-cover shadow-xl"
        />
      </div>
    </section>
  );
};

export default About;