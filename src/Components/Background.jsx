const Background = () => {
  return (
    <section
      id="background"
      className="bg-white text-black px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          My Background
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">🎓 Education</h3>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>SMK Prakarya Internasional – RPL (2023 – Sekarang)</li>
              <li>SMP NUGRAHA – (2020 – 2023)</li>
              <li>SDN DAYEUHKOLOT 03 – (2014 – 2020)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">💼 Experience</h3>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                Magang Internal Sekolah – Pembuatan Aplikasi Media Sosial
              </li>
              <li>Final Project Web Sekolah – Tim 3 orang</li>
              <li>Aktif Organisasi Paskibra SMK</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;