import { FaHeart, FaBrain, FaShieldAlt, FaHome } from "react-icons/fa";
import { MdFamilyRestroom, MdHealthAndSafety, MdPsychology } from "react-icons/md";
import { BiHappy } from "react-icons/bi";

function StressManagementPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="px-16 py-20 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                    <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#7FD8E8]/10 to-[#0798C5]/10 rounded-full -top-1/4 -left-1/4"></div>
                </div>
                
                <div className="absolute top-1/4 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px]">
                    <div className="absolute w-[100%] h-[100%] bg-gradient-to-l from-[#7FD8E8]/5 to-[#0798C5]/5 rounded-full"></div>
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <h2 className="text-[#0798C5] font-medium text-lg sm:text-xl mb-2">Kesehatan Mental Keluarga</h2>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-black leading-tight">
                        Pengelolaan Stres untuk<br/>
                        <span className="text-[#0798C5]">Pencegahan Stunting</span>
                    </h1>
                    
                    <p className="text-gray-600 mb-8 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
                        Stres yang terkelola dengan baik adalah kunci utama dalam menciptakan lingkungan keluarga yang sehat 
                        dan mendukung tumbuh kembang optimal anak, sekaligus mencegah stunting.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-12 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#0798C5] mb-2">80%</div>
                            <div className="text-gray-600 text-xs sm:text-sm">Risiko Stunting Berkurang</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#0798C5] mb-2">65%</div>
                            <div className="text-gray-600 text-xs sm:text-sm">Kesehatan Ibu Meningkat</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#0798C5] mb-2">90%</div>
                            <div className="text-gray-600 text-xs sm:text-sm">Pola Asuh Lebih Baik</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="px-16 py-16 bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                            Mengapa Pengelolaan Stres <span className="text-[#0798C5]">Penting?</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Pengelolaan stres yang baik pada pasangan, terutama calon ibu, memiliki dampak langsung 
                            pada kesehatan kehamilan dan tumbuh kembang anak.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {/* Kesehatan Ibu */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <MdHealthAndSafety className="text-2xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Kesehatan Ibu</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Stres kronis dapat mempengaruhi sistem kekebalan tubuh ibu dan meningkatkan risiko komplikasi kehamilan.
                            </p>
                        </div>

                        {/* Kualitas Gizi */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <FaShieldAlt className="text-2xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Kualitas Gizi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Stres bisa mempengaruhi nafsu makan atau pilihan makanan, yang menyebabkan asupan gizi ibu menjadi tidak optimal.
                            </p>
                        </div>

                        {/* Pola Asuh */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <MdFamilyRestroom className="text-2xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Pola Asuh</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Orang tua yang stres cenderung kurang responsif terhadap kebutuhan anak atau kesulitan menerapkan pola asuh yang konsisten.
                            </p>
                        </div>

                        {/* Kesejahteraan Keluarga */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <FaHome className="text-2xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Kesejahteraan Keluarga</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Hubungan yang harmonis karena stres yang terkelola dengan baik dapat menciptakan lingkungan yang positif dan suportif.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section className="px-16 py-16 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                            Tips <span className="text-[#0798C5]">Mengelola Stres</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Strategi praktis untuk pasangan dalam mengelola stres demi kesehatan keluarga yang optimal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Komunikasi */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <FaHeart className="text-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Komunikasi Terbuka</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Bicarakan perasaan dan kekhawatiran dengan pasangan. Saling mendengarkan dan memberikan dukungan emosional.
                            </p>
                        </div>

                        {/* Relaksasi */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <MdPsychology className="text-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Teknik Relaksasi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Praktikkan meditasi, yoga, atau teknik pernapasan untuk meredakan ketegangan dan meningkatkan ketenangan.
                            </p>
                        </div>

                        {/* Aktivitas Menyenangkan */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <BiHappy className="text-xl" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Aktivitas Bersama</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Luangkan waktu untuk aktivitas yang menyenangkan bersama pasangan dan keluarga untuk memperkuat ikatan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="px-16 py-20 bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="container mx-auto relative z-10 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Halo Pasangan Hebat! 🌟
                    </h2>
                    
                    <div className="max-w-4xl mx-auto">
                        <p className="text-white/90 text-lg mb-6 leading-relaxed">
                            Itulah berbagai tips dan pemahaman tentang pengelolaan stres yang bisa kalian terapkan. 
                            Ingat, stres itu bagian dari hidup, tapi cara kita mengelolanya yang menentukan keharmonisan 
                            hubungan dan kesehatan keluarga.
                        </p>
                        
                        <p className="text-white/90 text-lg mb-6 leading-relaxed">
                            Dengan komunikasi yang baik, dukungan satu sama lain, dan teknik yang tepat, kalian bisa 
                            menghadapi setiap tantangan. Keluarga yang bahagia dan bebas stres adalah pondasi terbaik 
                            untuk mencegah stunting dan memastikan tumbuh kembang buah hati yang optimal.
                        </p>
                        
                        <p className="text-white font-semibold text-xl mb-8">
                            Mari terus belajar dan tumbuh bersama! 💪
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-white text-[#0798C5] font-semibold rounded-full hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Mulai Perjalanan Sehat
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0798C5] transition-colors duration-200">
                                Konsultasi Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StressManagementPage;