import React from 'react';
import { FaHeart, FaBrain, FaUsers, FaVideo, FaCheckCircle } from 'react-icons/fa';
import { MdFamilyRestroom, MdPsychology, MdSelfImprovement, MdSupport } from 'react-icons/md';
import { RiMentalHealthFill } from 'react-icons/ri';

function StressManagementPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="px-16 py-20 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                    <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#7FD8E8]/10 to-[#0798C5]/10 rounded-full -top-1/4 -left-1/4"></div>
                </div>
                
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                        
                        {/* Left Side - Hero Content */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12">
                            <h2 className="text-[#0798C5] font-medium text-lg sm:text-xl mb-2">Materi Pembelajaran</h2>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-black leading-tight">
                                Mengelola Stres untuk<br/>
                                <span className="text-[#0798C5]">Harmoni Keluarga</span>
                            </h1>
                            
                            <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Halo Pasangan Hebat! Selamat datang di sesi yang sangat penting ini. Hidup berpasangan, apalagi yang baru 
                                menikah atau sedang merencanakan buah hati, pasti penuh warna.
                            </p>
                            
                            <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Ada momen indah, tapi tak jarang juga membawa tantangan baru yang memicu stres. Di sini kita akan belajar 
                                bagaimana mengelola stres itu bersama, supaya hubungan tetap harmonis dan keluarga selalu sehat.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#0798C5] mb-1 lg:mb-2">5</div>
                                    <div className="text-gray-600 text-xs sm:text-sm">Tips Praktis</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#0798C5] mb-1 lg:mb-2">100%</div>
                                    <div className="text-gray-600 text-xs sm:text-sm">Efektif</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#0798C5] mb-1 lg:mb-2">24/7</div>
                                    <div className="text-gray-600 text-xs sm:text-sm">Bisa Diterapkan</div>
                                </div>
                            </div>

                            {/* CTA Button Mobile */}
                            <div className="lg:hidden">
                                <button className="px-6 py-3 bg-[#0798C5] text-white font-semibold rounded-full hover:bg-[#0690B8] transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                                    Mulai Belajar
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Feature Cards */}
                        <div className="w-full lg:w-1/2 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto lg:max-w-none">
                                
                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-fit text-white">
                                        <FaHeart className="text-lg sm:text-xl" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Harmoni Keluarga</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Membangun keluarga yang harmonis dan bahagia dengan pengelolaan stres yang tepat.
                                    </p>
                                </div>

                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-fit text-white">
                                        <FaBrain className="text-lg sm:text-xl" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Kesehatan Mental</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Menjaga kesehatan mental dengan teknik mindfulness dan komunikasi yang efektif.
                                    </p>
                                </div>

                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-fit text-white">
                                        <FaUsers className="text-lg sm:text-xl" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Dukungan Pasangan</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Saling mendukung dan menguatkan dalam menghadapi tantangan hidup bersama.
                                    </p>
                                </div>

                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-fit text-white">
                                        <RiMentalHealthFill className="text-lg sm:text-xl" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Pencegahan Stunting</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Keluarga bebas stres sebagai pondasi pencegahan stunting dan tumbuh kembang optimal.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button Desktop */}
                            <div className="hidden lg:block mt-8">
                                <button className="px-8 py-3 bg-[#0798C5] text-white font-semibold rounded-full hover:bg-[#0690B8] transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                                    Mulai Belajar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Understanding Stress Section */}
            <section className="px-16 py-20 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[#0798C5] font-medium text-lg sm:text-xl mb-2">Pemahaman Dasar</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                            Mengenali Stres dalam Hubungan dan Transisi
                        </h3>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-[#7FD8E8]/10 to-[#0798C5]/10 rounded-3xl p-8 mb-8">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Stres adalah respons alami tubuh terhadap tuntutan. Dalam konteks hubungan dan persiapan 
                                keluarga, stres bisa muncul dari berbagai sumber, seperti:
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-md">
                                    <h4 className="font-bold text-gray-800 mb-3">Sumber Stres:</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Tuntutan persiapan pernikahan</li>
                                        <li>• Penyesuaian di awal pernikahan</li>
                                        <li>• Kekhawatiran terkait kehamilan</li>
                                        <li>• Tekanan eksternal seperti pekerjaan</li>
                                    </ul>
                                </div>
                                
                                <div className="bg-white p-6 rounded-2xl shadow-md">
                                    <h4 className="font-bold text-gray-800 mb-3">Gejala Stres:</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Mudah marah dan cemas</li>
                                        <li>• Sulit tidur</li>
                                        <li>• Konflik yang meningkat</li>
                                        <li>• Masalah kesehatan fisik</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-2xl">
                                <p className="text-red-800 font-medium">
                                    ⚠️ Perhatian untuk Ibu Hamil: Stres yang tinggi bisa mempengaruhi perkembangan janin 
                                    dan meningkatkan risiko komplikasi kehamilan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="px-16 py-20 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[#0798C5] font-medium text-lg sm:text-xl mb-2">Video Pembelajaran</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                            Praktik Mindful Breathing
                        </h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Teknik pernapasan sederhana yang membantu menenangkan sistem saraf, mengurangi kecemasan, 
                            dan meningkatkan fokus.
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                            <div className="aspect-video">
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src="https://www.youtube.com/embed/NJim3oaJXc4" 
                                    title="Mindful Breathing Exercise" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-[#0798C5] mb-2">
                                    <FaVideo className="mr-2" />
                                    <span className="font-medium">Video Tutorial</span>
                                </div>
                                <p className="text-gray-600">
                                    Ikuti panduan dalam video ini untuk mempraktikkan teknik pernapasan sadar. 
                                    Lakukan saat merasa tegang atau sebelum berdiskusi serius dengan pasangan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="px-16 py-20 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-[#0798C5] font-medium text-lg sm:text-xl mb-2">Panduan Praktis</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                            Tips Sederhana Mengelola Stres Bersama
                        </h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Meskipun stres tidak selalu bisa dihindari, stres bisa dikelola agar tidak merusak hubungan 
                            dan kesejahteraan keluarga.
                        </p>
                    </div>
                    
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {/* Tip 1 */}
                            <div className="bg-gradient-to-br from-[#7FD8E8]/10 to-[#0798C5]/10 p-6 rounded-3xl hover:scale-105 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                    <MdSelfImprovement className="text-2xl" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3">1. Praktikkan Mindful Breathing</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Teknik pernapasan sederhana yang membantu menenangkan sistem saraf, mengurangi kecemasan, 
                                    dan meningkatkan fokus. Lakukan saat merasa tegang atau sebelum berdiskusi serius.
                                </p>
                            </div>

                            {/* Tip 2 */}
                            <div className="bg-gradient-to-br from-[#7FD8E8]/10 to-[#0798C5]/10 p-6 rounded-3xl hover:scale-105 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                    <MdPsychology className="text-2xl" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3">2. Bicara Jujur Tanpa Menghakimi</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Ungkapkan perasaan dan pikiranmu secara terbuka kepada pasangan. Ini membangun rasa saling 
                                    percaya dan mencegah kesalahpahaman, aspek krusial dalam menjaga keharmonisan hubungan.
                                </p>
                            </div>

                            {/* Tip 3 */}
                            <div className="bg-gradient-to-br from-[#7FD8E8]/10 to-[#0798C5]/10 p-6 rounded-3xl hover:scale-105 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                    <MdFamilyRestroom className="text-2xl" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3">3. Buat Rutinitas Me-Time & Us-Time</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Luangkan waktu sendiri untuk hobi atau istirahat (me-time) dan waktu berkualitas berdua 
                                    sebagai pasangan (us-time) untuk memperkuat ikatan emosional dan mencegah burnout.
                                </p>
                            </div>

                            {/* Tip 4 */}
                            <div className="bg-gradient-to-br from-[#7FD8E8]/10 to-[#0798C5]/10 p-6 rounded-3xl hover:scale-105 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                    <FaCheckCircle className="text-2xl" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3">4. Tetapkan Batasan yang Jelas</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Diskusikan dan sepakati batasan dengan keluarga besar, pekerjaan, atau penggunaan hp 
                                    untuk mengurangi tekanan eksternal yang tidak perlu.
                                </p>
                            </div>

                            {/* Tip 5 */}
                            <div className="bg-gradient-to-br from-[#7FD8E8]/10 to-[#0798C5]/10 p-6 rounded-3xl hover:scale-105 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                    <MdSupport className="text-2xl" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3">5. Cari Dukungan Profesional</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Jangan ragu mencari bantuan dari psikolog atau konselor pasangan jika merasa kesulitan 
                                    mengelola stres atau konflik yang berulang.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="px-16 py-20 bg-gradient-to-r from-[#7FD8E8] to-[#0798C5] text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Pesan Penutup untuk Pasangan Hebat!
                    </h2>
                    
                    <div className="max-w-4xl mx-auto mb-8">
                        <p className="text-xl leading-relaxed mb-6">
                            Itulah berbagai tips dan pemahaman tentang pengelolaan stres yang bisa kalian terapkan. 
                            Ingat, stres itu bagian dari hidup, tapi cara kita mengelolanya yang menentukan keharmonisan 
                            hubungan dan kesehatan keluarga.
                        </p>
                        
                        <p className="text-xl leading-relaxed mb-6">
                            Dengan komunikasi yang baik, dukungan satu sama lain, dan teknik yang tepat, kalian bisa 
                            menghadapi setiap tantangan.
                        </p>
                        
                        <p className="text-xl leading-relaxed font-semibold">
                            Keluarga yang bahagia dan bebas stres adalah pondasi terbaik untuk mencegah stunting dan 
                            memastikan tumbuh kembang buah hati yang optimal. Mari terus belajar dan tumbuh bersama!
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-[#0798C5] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                            Praktikkan Tips Ini
                        </button>
                        <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0798C5] transition-colors duration-200 cursor-pointer">
                            Bagikan ke Pasangan
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StressManagementPage;