import { MdFamilyRestroom } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { TiLightbulb } from "react-icons/ti";
import { RiUserCommunityFill } from "react-icons/ri";

function About() {
    return (
        <section id="about" className="px-16 py-20">
            {/* Background Decorative Elements - Responsive */}
            <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] ">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#00B8C4]/10 to-[#008C99]/10 rounded-full -top-1/4 -left-1/4"></div>
            </div>
            
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                    
                    {/* Left Side - About Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-12">
                        <h2 className="text-[#008C99] font-medium text-lg sm:text-xl mb-2">Tentang Kami</h2>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-black leading-tight">
                            Membangun Hubungan<br/>
                            <span className="text-[#008C99]">Yang Bertanggung Jawab</span>
                        </h1>
                        
                        <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Pernah nonton film "Dua Garis Biru"? Atau mungkin, kamu pernah membaca kisah nyata tentang orang-orang yang menjalin hubungan, tapi ternyata belum benar-benar siap? Atau jangan-jangan, kamu pernah menyaksikan orang di sekitar kita yang memiliki hubungan, tapi malah saling nyakitin?
                        </p>
                        
                        <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Tenang, kita di sini tidak untuk nge-judge hubungan orang lain. Malah justru sebaliknya, kita akan ngulik bareng-bareng terkait pentingnya kesiapan berkomitmen sebelum menjalin suatu hubungan. Karena tentunya, kita semua pasti menginginkan hubungan yang lama, sehat, saling mendukung, dan bertanggung jawab.
                        </p>

                        <p className="text-gray-600 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-semibold">
                            Jatuh cinta itu mudah! Akan tetapi, untuk bisa bertumbuh bersama dengan pasangan, memerlukan komitmen yang lebih. Dan komitmen itu, dimulai dari diri sendiri.
                        </p>

                        {/* Stats - Responsive Grid */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#008C99] mb-1 lg:mb-2">2000+</div>
                                <div className="text-gray-600 text-xs sm:text-sm">Pasangan Terdampingi</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#008C99] mb-1 lg:mb-2">95%</div>
                                <div className="text-gray-600 text-xs sm:text-sm">Tingkat Kepuasan</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#008C99] mb-1 lg:mb-2">24/7</div>
                                <div className="text-gray-600 text-xs sm:text-sm">Konsultasi</div>
                            </div>
                        </div>

                        {/* Call to Action Button - Mobile Only */}
                        <div className="lg:hidden">
                            <button className="px-6 py-3 bg-[#008C99] text-white font-semibold rounded-full hover:bg-[#00B8C4] transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                                Mulai Persiapan Hubungan
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image and Cards */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <div className="max-w-2xl mx-auto lg:max-w-none">
                            
                            {/* Top Row - Image and Pendekatan */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                                
                                {/* Image */}
                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <img 
                                        src="/assets/about.png" 
                                        alt="About us illustration" 
                                        className="w-full h-40 sm:h-48 object-cover rounded-2xl"
                                    />
                                </div>

                                {/* Pendekatan Card */}
                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-fit text-white">
                                        <TiLightbulb className="text-lg sm:text-xl" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Pendekatan</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Menggunakan pendekatan holistik yang dimulai dari persiapan diri sendiri untuk dapat bertumbuh bersama pasangan dengan komitmen yang matang.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Row - Visi and Misi */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                
                                {/* Vision Card */}
                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-fit text-white">
                                        <FaHeart className="text-lg sm:text-xl" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Visi Kami</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Menjadi platform terdepan dalam menciptakan generasi yang mampu menjalin hubungan dengan komitmen yang kuat dan bertanggung jawab.
                                    </p>
                                </div>

                                {/* Mission Card */}
                                <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                                    <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-fit text-white">
                                        <MdFamilyRestroom className="text-lg sm:text-xl" />
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Misi Kami</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Membantu pasangan mempersiapkan kesiapan berkomitmen untuk menciptakan hubungan yang sehat, saling mendukung, dan bertanggung jawab.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Button - Desktop Only */}
                        <div className="hidden lg:block mt-8">
                            <button className="px-8 py-3 bg-[#008C99] text-white font-semibold rounded-full hover:bg-[#00B8C4] transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                                Mulai Persiapan Hubungan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;