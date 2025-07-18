import React from 'react';
import { FaHeart, FaUserCheck, FaRegHandshake, FaEye, FaComments } from "react-icons/fa";
import { MdSelfImprovement, MdPsychology, MdGroups } from "react-icons/md";
import { TiLightbulb } from "react-icons/ti";
import { RiEmotionHappyLine, RiMentalHealthLine } from "react-icons/ri";

function EmotionalIntelligencePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#00B8C4]/10 to-[#008C99]/10 rounded-full -top-1/4 -left-1/4"></div>
            </div>
            
            <div className="absolute top-1/2 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-l from-[#00B8C4]/8 to-[#008C99]/8 rounded-full -top-1/4 -right-1/4"></div>
            </div>

            <section className="px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-20 relative z-10">
                <div className="container mx-auto">
                    
                    {/* Header Section */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-[#008C99] font-medium text-lg sm:text-xl mb-3">Kecerdasan Emosi</h2>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-black leading-tight">
                            Membangun Hubungan dengan<br/>
                            <span className="text-[#008C99]">Kecerdasan Emosi</span>
                        </h1>
                        
                        <div className="max-w-4xl mx-auto">
                            <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed">
                                Kecerdasan emosi adalah kemampuan untuk mengenali, memahami, mengelola, dan mengarahkan emosi diri sendiri dan orang lain secara positif, terutama dalam konteks hubungan sosial seperti pernikahan dan keluarga.
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-full mb-4 w-fit mx-auto text-white">
                                <FaHeart className="text-xl sm:text-2xl" />
                            </div>
                            <div className="text-2xl sm:text-3xl font-bold text-[#008C99] mb-2">85%</div>
                            <div className="text-gray-600 text-sm sm:text-base">Hubungan Lebih Harmonis</div>
                        </div>
                        
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-full mb-4 w-fit mx-auto text-white">
                                <RiMentalHealthLine className="text-xl sm:text-2xl" />
                            </div>
                            <div className="text-2xl sm:text-3xl font-bold text-[#008C99] mb-2">70%</div>
                            <div className="text-gray-600 text-sm sm:text-base">Konflik Berkurang</div>
                        </div>
                        
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-full mb-4 w-fit mx-auto text-white">
                                <MdGroups className="text-xl sm:text-2xl" />
                            </div>
                            <div className="text-2xl sm:text-3xl font-bold text-[#008C99] mb-2">92%</div>
                            <div className="text-gray-600 text-sm sm:text-base">Kepuasan Hubungan</div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
                        
                        {/* Left Column - Components */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#008C99] mb-6">Komponen Utama Kecerdasan Emosi</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-xl text-white flex-shrink-0">
                                            <FaEye className="text-lg" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">Kesadaran Diri (Self-Awareness)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Mengenal dan memahami perasaan sendiri agar tidak terbawa emosi saat menghadapi konflik (Antonopoulou, 2024).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-xl text-white flex-shrink-0">
                                            <MdSelfImprovement className="text-lg" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">Pengelolaan Emosi (Self-Regulation)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Mengontrol emosi seperti marah atau kecewa agar tidak melukai pasangan (Goleman, 1995).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-xl text-white flex-shrink-0">
                                            <TiLightbulb className="text-lg" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">Motivasi Diri (Self-Motivation)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Tetap berkomitmen dan semangat membangun hubungan meski dalam masa sulit (Bar-On, 1997).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-xl text-white flex-shrink-0">
                                            <FaHeart className="text-lg" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">Empati (Empathy)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Memahami dan merespon perasaan pasangan dengan peka dan penuh pengertian (Antonopoulou, 2024).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-xl text-white flex-shrink-0">
                                            <FaComments className="text-lg" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">Keterampilan Sosial (Social Skills)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Komunikasi yang sehat, kemampuan mendengarkan, dan menyelesaikan konflik dengan damai (Salovey & Mayer, 1997).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Importance & Benefits */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-xl text-white">
                                        <MdPsychology className="text-xl" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#008C99]">Kenapa Penting untuk Hubungan?</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-[#008C99]/5 to-[#00B8C4]/5 p-4 rounded-2xl">
                                        <h4 className="font-bold text-gray-800 mb-3">Pasangan dengan kecerdasan emosi tinggi cenderung:</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm">Memiliki hubungan yang lebih dalam dan suportif</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm">Lebih sedikit konflik</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-[#008C99] rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm">Mampu mengelola perbedaan dengan sehat (Brackett, Warner, & Bosco, 2005)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#00B8C4]/5 to-[#008C99]/5 p-4 rounded-2xl">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            <strong>Emotional maturity</strong> membantu pasangan membuat keputusan dengan bijak saat menghadapi konflik, meningkatkan penyesuaian diri dalam pernikahan (Tarigan & Afdal, 2024).
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Remaja menikah yang memiliki kecerdasan emosi yang baik cenderung lebih siap menghadapi peran rumah tangga dan tantangan pernikahan (Jannah, Julistia, & Zahara, 2024).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tips Section */}
                            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-xl text-white">
                                        <RiEmotionHappyLine className="text-xl" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#008C99]">Tips Melatih Kecerdasan Emosi</h3>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#008C99]/5 to-[#00B8C4]/5 rounded-xl">
                                        <div className="w-3 h-3 bg-[#008C99] rounded-full mt-1 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Luangkan waktu untuk refleksi diri setiap hari</span>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#00B8C4]/5 to-[#008C99]/5 rounded-xl">
                                        <div className="w-3 h-3 bg-[#00B8C4] rounded-full mt-1 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Dengarkan pasangan tanpa menyela</span>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#008C99]/5 to-[#00B8C4]/5 rounded-xl">
                                        <div className="w-3 h-3 bg-[#008C99] rounded-full mt-1 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Tarik napas dalam sebelum bereaksi saat emosi muncul</span>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#00B8C4]/5 to-[#008C99]/5 rounded-xl">
                                        <div className="w-3 h-3 bg-[#00B8C4] rounded-full mt-1 flex-shrink-0"></div>
                                        <span className="text-gray-700 text-sm">Ucapkan perasaan dengan kata-kata, bukan kemarahan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold rounded-full hover:from-[#00B8C4] hover:to-[#008C99] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                            Mulai Mengembangkan Kecerdasan Emosi
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white py-8 px-6 sm:px-8 lg:px-16">
                <div className="container mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="bg-white/20 p-3 rounded-full">
                            <FaHeart className="text-xl" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold">Kesimpulan</h3>
                    </div>
                    <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                        Kecerdasan emosi bukan hanya tentang memahami perasaan, tapi juga tentang membangun hubungan yang sehat, kuat, dan saling menghargai.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default EmotionalIntelligencePage;