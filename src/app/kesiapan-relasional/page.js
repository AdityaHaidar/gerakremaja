"use client";

import { useState } from "react";
import { Heart, MessageCircle, Users, Target, CheckCircle, ArrowRight, BookOpen, Shield, Lightbulb } from "lucide-react";

function KesiapanRelasionalPage() {
    const [activeSection, setActiveSection] = useState('intro');

    const sections = [
        { id: 'intro', title: 'Pengenalan', icon: Heart },
        { id: 'komunikasi', title: 'Komunikasi Terbuka', icon: MessageCircle },
        { id: 'peran', title: 'Pembagian Peran', icon: Users },
        { id: 'konflik', title: 'Resolusi Konflik', icon: Shield }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#7FD8E8]/10 to-[#0798C5]/10 rounded-full -top-1/4 -left-1/4"></div>
            </div>

            <div className="absolute top-1/2 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-l from-[#7FD8E8]/10 to-[#0798C5]/10 rounded-full -top-1/4 -right-1/4"></div>
            </div>

            {/* Header Section */}
            <header className="px-6 sm:px-8 lg:px-16 py-8 lg:py-12 relative z-10">
                <div className="container mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl w-fit mx-auto mb-6 text-white">
                        <Heart className="text-2xl sm:text-3xl" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
                        Kesiapan Relasional
                    </h1>
                    <p className="text-lg sm:text-xl text-[#0798C5] font-semibold mb-6">
                        Pondasi Kuat untuk Keluarga Bahagia
                    </p>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                            Halo Pasangan Hebat! Selamat datang di sesi yang akan membahas pondasi paling penting dalam setiap hubungan: 
                            kesiapan relasional. Ini bukan cuma soal cinta, tapi bagaimana kalian berdua bisa jadi tim yang solid, 
                            siap menghadapi berbagai fase kehidupan bersama, terutama saat akan menikah, baru menikah, atau merencanakan 
                            kehadiran buah hati. Membangun hubungan yang kuat itu butuh kerja sama, bukan cuma berdua, tapi juga dengan 
                            sekitar. Yuk, kita selami bersama!
                        </p>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="px-6 sm:px-8 lg:px-16 mb-8 relative z-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                                        activeSection === section.id
                                            ? 'bg-[#0798C5] text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <Icon className="text-lg" />
                                    <span className="hidden sm:inline">{section.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="px-6 sm:px-8 lg:px-16 pb-16 relative z-10">
                <div className="container mx-auto">
                    
                    {/* Intro Section */}
                    {activeSection === 'intro' && (
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-12 mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 rounded-2xl text-white">
                                        <BookOpen className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Apa itu Kesiapan Relasional?</h2>
                                </div>
                                
                                <div className="space-y-6 text-gray-600 leading-relaxed">
                                    <p className="text-base lg:text-lg">
                                        Jadi, apa sih kesiapan relasional itu? Gampangnya, ini adalah kesiapan kalian berdua untuk 
                                        bisa bekerja sama, berkomunikasi dengan baik, dan menyelesaikan masalah sebagai sebuah tim. 
                                        Ini bukan cuma soal cinta, tapi juga bagaimana kalian berdua bisa menjalin hubungan yang 
                                        harmonis dan sehat.
                                    </p>
                                    
                                    <p className="text-base lg:text-lg">
                                        Kenapa ini penting? Karena perjalanan berkeluarga itu penuh tantangan dan perubahan. 
                                        Dengan kesiapan relasional yang baik, kalian akan lebih mudah beradaptasi, konflik bisa 
                                        diatasi tanpa merusak hubungan, dan kalian bisa saling mendukung di setiap fase kehidupan. 
                                        Pondasi ini juga sangat krusial untuk menciptakan lingkungan yang stabil dan positif bagi 
                                        tumbuh kembang anak kelak, bahkan berperan dalam mencegah masalah.
                                    </p>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="text-3xl font-bold text-[#0798C5] mb-2">3</div>
                                    <div className="text-gray-600">Pondasi Utama</div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="text-3xl font-bold text-[#0798C5] mb-2">100%</div>
                                    <div className="text-gray-600">Kerja Tim</div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="text-3xl font-bold text-[#0798C5] mb-2">∞</div>
                                    <div className="text-gray-600">Manfaat Seumur Hidup</div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button 
                                    onClick={() => setActiveSection('komunikasi')}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0798C5] text-white font-semibold rounded-full hover:bg-[#0690B8] transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Mulai Belajar
                                    <ArrowRight className="text-lg" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Komunikasi Section */}
                    {activeSection === 'komunikasi' && (
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 rounded-2xl text-white">
                                        <MessageCircle className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Komunikasi Terbuka</h2>
                                    <span className="text-lg text-[#0798C5] font-semibold">Kunci Memahami Satu Sama Lain</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Target className="text-[#0798C5]" />
                                            Apa itu Komunikasi Terbuka?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Komunikasi terbuka berarti kalian berdua mau saling mendengar secara aktif dan memberi 
                                            umpan balik (feedback) tanpa menyalahkan. Ini bukan sekadar bicara, tapi benar-benar 
                                            memahami apa yang dirasakan dan dibutuhkan pasangan.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Lightbulb className="text-[#0798C5]" />
                                            Mengapa Penting?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Banyak masalah dalam hubungan berawal dari komunikasi yang buruk atau asumsi yang salah. 
                                            Dengan komunikasi terbuka, kalian bisa menghindari kesalahpahaman, mengurangi konflik, 
                                            dan membangun rasa saling percaya.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <CheckCircle className="text-[#0798C5]" />
                                            Tips Praktis
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0798C5] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Gunakan kalimat "Saya merasa..."</strong> daripada "Kamu selalu...".
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0798C5] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Luangkan waktu khusus</strong> untuk bicara berdua tanpa gangguan 
                                                    (misalnya, saat makan malam atau sebelum tidur).
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0798C5] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Latih diri untuk mendengarkan,</strong> bukan hanya menunggu giliran bicara.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Peran Section */}
                    {activeSection === 'peran' && (
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 rounded-2xl text-white">
                                        <Users className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Pembagian Peran dan Harapan</h2>
                                    <span className="text-lg text-[#0798C5] font-semibold">Menentukan Arah Bersama</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Target className="text-[#0798C5]" />
                                            Apa itu Pembagian Peran dan Harapan?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Sebelum atau saat memulai hidup bersama, penting untuk mendiskusikan secara jujur dan 
                                            jelas tentang peran serta harapan kalian masing-masing. Ini mencakup berbagai aspek 
                                            seperti pengelolaan keuangan, pembagian pekerjaan rumah tangga, tanggung jawab dalam 
                                            pekerjaan, hingga peran pengasuhan anak kelak.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Lightbulb className="text-[#0798C5]" />
                                            Mengapa Penting?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Harapan yang tidak dibicarakan bisa menjadi bom waktu. Setiap orang punya gambaran 
                                            idealnya sendiri. Dengan mendiskusikannya, kalian bisa menyamakan visi, menghindari 
                                            kekecewaan, dan menciptakan pembagian tugas yang adil serta disepakati bersama.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <MessageCircle className="text-[#0798C5]" />
                                            Contoh Diskusi Penting
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <p className="text-gray-700 font-medium">
                                                    "Apa harapanmu tentang keluarga kecil kita di masa depan?"
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <p className="text-gray-700 font-medium">
                                                    "Nilai apa yang ingin kita tanamkan dalam keluarga kita?"
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <p className="text-gray-700 font-medium">
                                                    "Bagaimana kita ingin membagi peran dalam pengasuhan nanti?"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Konflik Section */}
                    {activeSection === 'konflik' && (
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 rounded-2xl text-white">
                                        <Shield className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Resolusi Konflik Sehat</h2>
                                    <span className="text-lg text-[#0798C5] font-semibold">Berproses Menuju Solusi</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Target className="text-[#0798C5]" />
                                            Apa itu Resolusi Konflik Sehat?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Konflik itu wajar dalam setiap hubungan. Resolusi konflik sehat berarti kalian mampu 
                                            fokus pada pencarian solusi daripada mencari siapa yang menang atau kalah. Ini melibatkan 
                                            kemampuan untuk tidak menyerang pribadi pasangan, tetap tenang, dan mencari jalan tengah.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Lightbulb className="text-[#0798C5]" />
                                            Mengapa Penting?
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Cara kalian mengelola konflik sangat menentukan kualitas hubungan. Konflik yang tidak 
                                            diselesaikan dengan baik bisa menumpuk dan merusak keintiman. Keterampilan ini krusial 
                                            untuk mencegah masalah pernikahan.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <CheckCircle className="text-[#0798C5]" />
                                            Tips Resolusi Konflik
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0798C5] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Ambil jeda sejenak</strong> jika emosi memuncak.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0798C5] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Fokus pada masalah,</strong> bukan pada kekurangan pasangan.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0798C5] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Cari win-win solution</strong> yang menguntungkan kedua belah pihak.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#0798C5] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Sepakati bahwa setelah konflik selesai,</strong> kalian tidak akan mengungkitnya lagi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>

            {/* Footer/Closing */}
            <footer className="px-6 sm:px-8 lg:px-16 py-12 bg-gradient-to-r from-[#0798C5] to-[#7FD8E8] text-white relative z-10">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Halo Pasangan Hebat!</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Semoga materi tentang kesiapan relasional ini memberikan gambaran yang lebih jelas tentang 
                            pentingnya pondasi hubungan yang kuat. Ingat, cinta itu permulaan, tapi komunikasi, 
                            pembagian peran, dan cara kalian menyelesaikan masalah adalah bahan bakar untuk menjaga 
                            hubungan tetap menyala dan sehat.
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            Dengan membangun koneksi yang kuat dan harmonis, kalian tidak hanya menyiapkan diri 
                            untuk hidup berdua, tapi juga untuk jadi orang tua yang hebat. Ini adalah investasi terbaik 
                            untuk kesehatan, kebahagiaan, dan masa depan gemilang keluarga kalian. Mari kita terus 
                            belajar dan tumbuh bersama!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-3 bg-white text-[#0798C5] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                                Bagikan Materi
                            </button>
                            <button className="px-8 py-3 bg-[#0690B8] text-white font-semibold rounded-full hover:bg-[#0585A3] transition-colors duration-200 shadow-lg">
                                Konsultasi Lebih Lanjut
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default KesiapanRelasionalPage;