import { IoIosBookmarks } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { LuAlarmClock } from "react-icons/lu";

function RelationshipReadiness() {
  return (
    <section id="parenting" className="px-16 py-45 bg-gradient-to-b from-[#00B8C4]/50 to-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Kesiapan Berkomitmen dalam Hubungan
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Membangun hubungan yang sehat bukan tentang seberapa cepat kita menjalin komitmen, 
          melainkan seberapa siap kita untuk bertumbuh bersama tanpa kehilangan jati diri. 
          Kecerdasan emosi menjadi kunci utama dalam menciptakan hubungan yang harmonis dan berkelanjutan.
        </p>
        <div className="bg-gradient-to-r from-[#00B8C4]/50 to-cyan-50 p-6 rounded-2xl max-w-4xl mx-auto">
          <p className="text-gray-700 text-md leading-relaxed">
            <strong>Tahukah Anda?</strong> Kecerdasan emosi dalam hubungan mencakup kemampuan mengenali, 
            memahami, dan mengelola emosi diri sendiri maupun pasangan. Ini melibatkan empati, komunikasi efektif, 
            dan kemampuan menyelesaikan konflik secara konstruktif untuk membangun fondasi hubungan yang kuat.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Kecerdasan Emosi Card - Featured */}
        <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] text-white p-6 rounded-3xl relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Kecerdasan</h3>
              <h3 className="text-xl font-bold">Emosi</h3>
            </div>
            <div className="bg-white/20 p-3 rounded-2xl">
              <IoIosBookmarks className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-white/90">
            Pelajari cara mengenali dan mengelola emosi diri serta memahami perasaan pasangan. 
            Kembangkan empati dan komunikasi yang efektif untuk hubungan yang harmonis.
          </p>
          <button className="px-6 py-2 rounded-full bg-white text-[#008C99] text-sm transition duration-200 hover:bg-white hover:text-[#008C99] border-2 border-transparent hover:border-[#008C99] cursor-pointer">
            Mulai Belajar
          </button>
        </div>

        {/* Mengelola Konflik Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Mengelola</h3>
              <h3 className="text-xl font-bold text-gray-800">Konflik</h3>
            </div>
            <div className="bg-[#008C99] p-3 rounded-2xl">
              <FaUserFriends className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-gray-500">
            Pelajari cara menyelesaikan konflik tanpa menyakiti atau melarikan diri. 
            Kembangkan kemampuan berkompromi dan menghargai perbedaan dalam hubungan.
          </p>
          <button className="px-6 py-2 rounded-full bg-[#008C99] text-white text-sm transition duration-200 hover:bg-white hover:text-[#008C99] border-2 border-transparent hover:border-[#008C99] cursor-pointer">
            Pelajari Teknik
          </button>
        </div>

        {/* Membangun Kepercayaan Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Membangun</h3>
              <h3 className="text-xl font-bold text-gray-800">Kepercayaan</h3>
            </div>
            <div className="bg-[#008C99] p-3 rounded-2xl">
              <RiTeamFill className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-gray-500">
            Pahami pentingnya membangun kepercayaan secara perlahan dan konsisten. 
            Belajar menjaga perasaan orang lain dan menciptakan rasa aman dalam hubungan.
          </p>
          <button className="px-6 py-2 rounded-full bg-[#008C99] text-white text-sm transition duration-200 hover:bg-white hover:text-[#008C99] border-2 border-transparent hover:border-[#008C99] cursor-pointer">
            Panduan Trust
          </button>
        </div>

        {/* Refleksi Diri Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Refleksi</h3>
              <h3 className="text-xl font-bold text-gray-800">Diri</h3>
            </div>
            <div className="bg-[#008C99] p-3 rounded-2xl">
              <LuAlarmClock className="text-white" />
            </div>
          </div>
          <p className="text-md mb-6 text-gray-500">
            Evaluasi kesiapan Anda berkomitmen melalui pertanyaan reflektif mendalam. 
            Pahami motivasi dan kemampuan diri sebelum membangun hubungan yang serius.
          </p>
          <button className="px-6 py-2 rounded-full bg-[#008C99] text-white text-sm transition duration-200 hover:bg-white hover:text-[#008C99] border-2 border-transparent hover:border-[#008C99] cursor-pointer">
            Mulai Refleksi
          </button>
        </div>
      </div>

      {/* Reflection Questions Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Mari Berefleksi Bersama
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-700 font-medium mb-2">💭 Apa alasanku ingin memiliki pasangan?</p>
            <p className="text-gray-700 font-medium mb-2">💪 Apakah aku bisa merasa cukup dan utuh walau belum memiliki pasangan?</p>
            <p className="text-gray-700 font-medium mb-2">🎭 Bagaimana caraku menanggapi situasi yang sedih atau emosional?</p>
            <p className="text-gray-700 font-medium mb-2">🧠 Sudahkah aku belajar mengelola emosi dengan sehat?</p>
            <p className="text-gray-700 font-medium">⚖️ Jika ada konflik, mampukah aku menyelesaikannya tanpa menyakiti?</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-gray-700 font-medium mb-2">🤝 Apakah aku siap menghargai perbedaan dan berkompromi?</p>
            <p className="text-gray-700 font-medium mb-2">❤️ Siapkah aku menjaga perasaan orang lain?</p>
            <p className="text-gray-700 font-medium mb-2">🔒 Apakah aku siap membangun kepercayaan secara konsisten?</p>
            <p className="text-gray-700 font-medium mb-2">💚 Apa arti "hubungan sehat" dalam versiku?</p>
            <p className="text-gray-700 font-medium">🌱 Apakah aku sudah siap bertumbuh bersama pasangan?</p>
          </div>
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Hubungan Sehat Dimulai dari Diri Sendiri
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Kesiapan berkomitmen bukan tentang kesempurnaan, melainkan tentang kematangan emosi dan 
            kemampuan bertumbuh bersama. Mulailah perjalanan membangun hubungan yang sehat dengan 
            memahami diri sendiri terlebih dahulu.
          </p>
          <button className="px-8 py-3 bg-[#008C99] text-white rounded-full text-lg font-semibold hover:bg-[#00B8C4] transition duration-200">
            Mulai Perjalanan Kesiapan Berkomitmen
          </button>
        </div>
      </div>
    </section>
  );
}

export default RelationshipReadiness;