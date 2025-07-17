import React from 'react';
import { Heart, Clock, Users, CheckCircle } from 'lucide-react';

function KesiapanKomitmen() {
  return (
    <section id="rumahTangga" className="px-4 md:px-16 py-12 bg-gradient-to-b from-[#00B8C4]/50 to-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Kesiapan Komitmen
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Memahami kapan waktu yang tepat untuk memulai atau mempertahankan sebuah hubungan. 
          Bukan tentang buru-buru jadian, tapi siap untuk menjalaninya dengan sehat.
        </p>
      </div>

      {/* Introduction Text */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Halo Calon Pasangan Hebat! 💕
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            "Kalau sekarang masih sendiri dulu, gapapa deh. Aku gak maksa untuk harus punya pasangan sekarang!" 
            Kesiapan komitmen adalah tentang merasa tenang dan damai meskipun memilih untuk sendiri dulu, 
            sampai nanti akhirnya menemukan pasangan yang benar-benar tepat.
          </p>
        </div>
      </div>

      {/* Main Title for Cards */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Mengapa Kesiapan Komitmen Itu Penting?
        </h3>
        <p className="text-lg text-gray-600">
          Memiliki kesiapan komitmen sangat berpengaruh pada kualitas hubungan yang akan dijalani
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Ketika Siap Card - Featured */}
        <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] text-white p-8 rounded-3xl relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-bold mb-2">Ketika Kamu</h4>
              <h4 className="text-2xl font-bold">Sudah Siap</h4>
            </div>
            <div className="bg-white/20 p-4 rounded-2xl">
              <CheckCircle size={32} className="text-white" />
            </div>
          </div>
          <p className="text-lg mb-6 text-white/90 leading-relaxed">
            Orang yang siap untuk menjalin hubungan akan lebih aktif dan terbuka dalam membangun kedekatan. 
            Mereka juga akan lebih bisa menikmati hubungan karena merasa banyak hal positif yang bisa didapat.
          </p>
          <div className="mb-6">
            <h5 className="font-semibold mb-2">Tanda-tanda Kesiapan:</h5>
            <ul className="text-sm space-y-1 text-white/80">
              <li>• Lebih memerhatikan penampilan</li>
              <li>• Lebih berani menunjukkan ketertarikan</li>
              <li>• Punya niat yang jelas untuk serius</li>
            </ul>
          </div>
          <button className="px-6 py-3 rounded-full bg-white text-[#008C99] font-semibold transition duration-200 hover:bg-blue-50 hover:scale-105">
            Evaluasi Diri
          </button>
        </div>

        {/* Ketika Belum Siap Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Ketika Belum</h4>
              <h4 className="text-2xl font-bold text-gray-800">Siap</h4>
            </div>
            <div className="bg-[#008C99] p-4 rounded-2xl">
              <Clock size={32} className="text-white" />
            </div>
          </div>
          <p className="text-lg mb-6 text-gray-600 leading-relaxed">
            Jika belum siap, kemungkinan besar kamu akan merasa hubungan itu berat, bikin capek, 
            dan malah menjadi suatu beban. Bahkan bisa mulai membandingkan dengan hal-hal lain.
          </p>
          <div className="mb-6">
            <h5 className="font-semibold mb-2 text-gray-800">Tanda-tanda Belum Siap:</h5>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Merasa hubungan sebagai beban</li>
              <li>• Membandingkan pasangan dengan orang lain</li>
              <li>• Merasa hidup sendiri lebih enak</li>
            </ul>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#008C99] text-white font-semibold transition duration-200 hover:bg-[#00B8C4] hover:scale-105">
            Refleksi Diri
          </button>
        </div>

        {/* Pentingnya Persiapan Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Pentingnya</h4>
              <h4 className="text-2xl font-bold text-gray-800">Persiapan</h4>
            </div>
            <div className="bg-[#008C99] p-4 rounded-2xl">
              <Heart size={32} className="text-white" />
            </div>
          </div>
          <p className="text-lg mb-6 text-gray-600 leading-relaxed">
            Penting untuk benar-benar bertanya ke diri sendiri: "Aku beneran udah siap belum ya buat bangun komitmen?" 
            Agar keraguan dapat terminimalisir.
          </p>
          <div className="mb-6">
            <h5 className="font-semibold mb-2 text-gray-800">Pertanyaan Refleksi:</h5>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>• Apakah saya siap berkomitmen?</li>
              <li>• Apa motivasi saya menjalin hubungan?</li>
              <li>• Apakah saya sudah mengenal diri sendiri?</li>
            </ul>
          </div>
          <button className="px-6 py-3 rounded-full bg-[#008C99] text-white font-semibold transition duration-200 hover:bg-[#00B8C4] hover:scale-105">
            Mulai Refleksi
          </button>
        </div>
      </div>

      {/* Additional Feature Card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-pink-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Commitment Readiness Assessment
              </h4>
              <p className="text-lg text-gray-600">
                Evaluasi tingkat kesiapan komitmen kamu dengan tools interaktif berdasarkan Teori Kesiapan Hubungan
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-4 rounded-2xl">
              <Users size={32} className="text-white" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold transition duration-200 hover:scale-105 hover:shadow-lg">
              Mulai Assessment
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-pink-400 text-pink-600 font-semibold transition duration-200 hover:bg-pink-50 hover:scale-105">
              Panduan Lengkap
            </button>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center mt-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Investasi Terbaik untuk Masa Depan Hubungan 🌟
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dengan mempersiapkan diri secara matang sebelum berkomitmen, kamu akan memiliki fondasi yang kuat 
            untuk menjalani hubungan yang sehat dan bahagia. Ingat, yang penting bukan buru-buru jadian, 
            tapi siap untuk menjalaninya dengan sepenuh hati dan semangat untuk tumbuh bersama pasangan.
          </p>
          <p className="text-lg font-semibold text-[#008C99]">
            Mari kita persiapkan diri dengan baik! 💪
          </p>
        </div>
      </div>
    </section>
  );
}

export default KesiapanKomitmen;