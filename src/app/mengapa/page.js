"use client";

import { useState } from "react";
import { Heart, MessageCircle, Users, Target, CheckCircle, ArrowRight, BookOpen, Shield, Lightbulb } from "lucide-react";

function KesiapanRelasionalPage() {
    const [activeSection, setActiveSection] = useState('intro');

    const sections = [
        { id: 'intro', title: 'Pengenalan', icon: Heart },
        { id: 'komunikasi', title: 'Dampak Positif', icon: MessageCircle },
        { id: 'peran', title: 'Risiko Ketidaksiapan', icon: Users },
        { id: 'konflik', title: 'Refleksi Diri', icon: Shield }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#00B8C4]/10 to-[#008C99]/10 rounded-full -top-1/4 -left-1/4"></div>
            </div>

            <div className="absolute top-1/2 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-l from-[#00B8C4]/10 to-[#008C99]/10 rounded-full -top-1/4 -right-1/4"></div>
            </div>

            {/* Header Section */}
            <header className="px-6 sm:px-8 lg:px-16 py-8 lg:py-12 relative z-10">
                <div className="container mx-auto text-center">
                    <div className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] p-4 rounded-2xl w-fit mx-auto mb-6 text-white">
                        <Heart className="text-2xl sm:text-3xl" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
                        Kesiapan Komitmen
                    </h1>
                    <p className="text-lg sm:text-xl text-[#008C99] font-semibold mb-6">
                        Membangun Hubungan yang Sehat dan Bertanggung Jawab
                    </p>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                            Halo Pasangan Hebat! Pernahkah kalian bertanya-tanya mengapa ada hubungan yang terasa ringan 
                            dan menyenangkan, sementara ada yang terasa berat dan melelahkan? Jawabannya terletak pada 
                            satu hal penting: kesiapan komitmen. Ketika kita benar-benar siap untuk berkomitmen, 
                            hubungan menjadi lebih bermakna, tumbuh dengan sehat, dan saling mendukung. Mari kita 
                            jelajahi bersama bagaimana kesiapan komitmen dapat mengubah kualitas hubungan kalian!
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
                                            ? 'bg-[#008C99] text-white shadow-lg'
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
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-2xl text-white">
                                        <BookOpen className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Apa itu Kesiapan Komitmen?</h2>
                                </div>
                                
                                <div className="space-y-6 text-gray-600 leading-relaxed">
                                    <p className="text-base lg:text-lg">
                                        Kesiapan komitmen adalah kondisi mental dan emosional di mana seseorang benar-benar 
                                        siap untuk menjalin hubungan yang serius, bertanggung jawab, dan berkelanjutan. 
                                        Ini bukan hanya tentang perasaan suka atau cinta, tetapi juga tentang kematangan 
                                        untuk membangun sesuatu yang bermakna bersama pasangan.
                                    </p>
                                    
                                    <p className="text-base lg:text-lg">
                                        Ketika kita sudah memiliki kesiapan komitmen, hubungan menjadi lebih dari sekadar 
                                        kesenangan sesaat. Kita mulai melihat pasangan sebagai partner hidup yang akan 
                                        tumbuh bersama, menghadapi tantangan bersama, dan membangun masa depan yang 
                                        lebih baik. Inilah yang membedakan hubungan yang sehat dari hubungan yang hanya 
                                        bertahan sementara.
                                    </p>
                                </div>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-8">
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="text-3xl font-bold text-[#008C99] mb-2">3</div>
                                    <div className="text-gray-600">Aspek Penting</div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="text-3xl font-bold text-[#008C99] mb-2">100%</div>
                                    <div className="text-gray-600">Kesiapan Mental</div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300">
                                    <div className="text-3xl font-bold text-[#008C99] mb-2">∞</div>
                                    <div className="text-gray-600">Komitmen Seumur Hidup</div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button 
                                    onClick={() => setActiveSection('komunikasi')}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#008C99] text-white font-semibold rounded-full hover:bg-[#00B8C4] transition-colors duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Mulai Belajar
                                    <ArrowRight className="text-lg" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Komunikasi Section - Dampak Positif */}
                    {activeSection === 'komunikasi' && (
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-2xl text-white">
                                        <MessageCircle className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Dampak Positif Kesiapan Komitmen</h2>
                                    <span className="text-lg text-[#008C99] font-semibold">Ketika Kamu Sudah Siap</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Target className="text-[#008C99]" />
                                            Lebih Aktif dan Terbuka
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Orang yang merasa lebih siap untuk menjalin hubungan biasanya akan lebih aktif dan 
                                            terbuka dalam membangun kedekatan. Mereka cenderung lebih memperhatikan penampilan, 
                                            lebih berani menunjukkan ketertarikan, dan memiliki niat yang jelas untuk menjalankan 
                                            hubungan dengan serius.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Lightbulb className="text-[#008C99]" />
                                            Menikmati Hubungan dengan Penuh
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Jika kamu sudah siap, kamu akan lebih bisa menikmati hubungan kamu sendiri! 
                                            Kamu akan merasakan banyak hal positif yang bisa didapat dari hubungan tersebut. 
                                            Setiap momen bersama terasa bermakna, dan kamu akan melihat hubungan sebagai 
                                            investasi yang berharga untuk masa depan.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <CheckCircle className="text-[#008C99]" />
                                            Tanda-tanda Kesiapan Komitmen
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Merasa antusias</strong> untuk berbagi kehidupan dengan pasangan
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Memiliki visi yang jelas</strong> tentang masa depan bersama
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Siap menghadapi tantangan</strong> dan tumbuh bersama
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Peran Section - Risiko Ketidaksiapan */}
                    {activeSection === 'peran' && (
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-2xl text-white">
                                        <Users className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Risiko Ketidaksiapan Komitmen</h2>
                                    <span className="text-lg text-[#008C99] font-semibold">Ketika Belum Siap</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Target className="text-[#008C99]" />
                                            Hubungan Terasa Berat dan Melelahkan
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Berbeda cerita kalau kamu belum siap. Kemungkinan besar kamu akan merasa hubungan 
                                            itu berat, bikin capek, dan malah menjadi suatu beban. Setiap aktivitas bersama 
                                            terasa seperti kewajiban, bukan kesenangan yang tulus.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Lightbulb className="text-[#008C99]" />
                                            Mulai Membandingkan dengan Hal Lain
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Bahkan kadang, ketidaksiapan itu bisa membuat kamu mulai membandingkan hubungan 
                                            saat ini dengan hal-hal lain di luar sana. Misalnya, mulai membandingkan pasangan 
                                            sendiri dengan orang lain, merasa hidup sendiri lebih enak, atau muncul pemikiran 
                                            seperti "Aku benar-benar ingin hubungan ini gak sih?".
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <MessageCircle className="text-[#008C99]" />
                                            Tanda-tanda Belum Siap
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <p className="text-gray-700 font-medium">
                                                    💭 Sering merasa ragu tentang hubungan yang dijalani
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <p className="text-gray-700 font-medium">
                                                    🔄 Cenderung membandingkan pasangan dengan orang lain
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                                <p className="text-gray-700 font-medium">
                                                    😔 Merasa hubungan lebih banyak memberikan beban daripada kebahagiaan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Konflik Section - Refleksi Diri */}
                    {activeSection === 'konflik' && (
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-2xl text-white">
                                        <Shield className="text-xl" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Refleksi Diri</h2>
                                    <span className="text-lg text-[#008C99] font-semibold">Evaluasi Kesiapan Komitmen</span>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Target className="text-[#008C99]" />
                                            Pertanyaan Penting untuk Diri Sendiri
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Maka dari itu, penting banget untuk benar-benar bertanya ke diri sendiri, 
                                            "Aku benar-benar udah siap belum ya buat bangun komitmen?". Pertanyaan ini 
                                            bukanlah sesuatu yang bisa dijawab dengan mudah, tetapi memerlukan introspeksi 
                                            yang mendalam dan jujur.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                            <Lightbulb className="text-[#008C99]" />
                                            Manfaat Refleksi Diri
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Dengan melakukan refleksi ini, keraguan-keraguan yang ada dapat terminimalisir 
                                            dan digantikan dengan semangat untuk tumbuh bersama pasangan. Kamu akan memiliki 
                                            fondasi yang kuat untuk membangun hubungan yang sehat dan berkelanjutan.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <CheckCircle className="text-[#008C99]" />
                                            Langkah-langkah Refleksi
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Evaluasi motivasi</strong> kamu dalam menjalin hubungan
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Identifikasi area</strong> yang perlu diperbaiki dalam diri
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Diskusikan dengan pasangan</strong> tentang visi masa depan bersama
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-600">
                                                    <strong>Komitmen untuk terus belajar</strong> dan berkembang bersama
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
            <footer className="px-6 sm:px-8 lg:px-16 py-12 bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white relative z-10">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Mulai Perjalanan Komitmen Kalian!</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Ingatlah bahwa kesiapan komitmen bukanlah sesuatu yang tiba-tiba ada, tetapi merupakan 
                            proses yang perlu dibangun secara bertahap. Setiap langkah kecil yang kalian ambil untuk 
                            memahami diri sendiri dan pasangan akan membawa kalian lebih dekat pada hubungan yang 
                            sehat dan bermakna.
                        </p>
                        <p className="text-lg leading-relaxed mb-8">
                            Jangan takut untuk mengambil waktu yang diperlukan untuk benar-benar siap. Karena ketika 
                            kalian sudah siap, hubungan akan menjadi sumber kekuatan, kebahagiaan, dan pertumbuhan 
                            yang luar biasa. Mari bersama-sama membangun generasi yang mampu menjalin hubungan dengan 
                            komitmen yang kuat dan bertanggung jawab!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-3 bg-white text-[#008C99] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                                Bagikan Materi
                            </button>
                            <button className="px-8 py-3 bg-[#007A85] text-white font-semibold rounded-full hover:bg-[#006B75] transition-colors duration-200 shadow-lg">
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