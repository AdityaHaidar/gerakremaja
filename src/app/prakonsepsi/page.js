"use client";

import { Heart, Users, Brain, DollarSign, Shield, Baby, Calculator } from "lucide-react";
import { useState } from "react";

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);
    const [category, setCategory] = useState('');

    const getBMICategory = (bmi) => {
        if (bmi < 17) return { category: 'Kurus', detail: 'Kekurangan berat badan tingkat berat', color: 'text-red-600' };
        if (bmi >= 17 && bmi < 18.5) return { category: 'Kurus', detail: 'Kekurangan berat badan tingkat rendah', color: 'text-orange-600' };
        if (bmi >= 18.5 && bmi <= 25) return { category: 'Normal', detail: 'Normal', color: 'text-green-600' };
        if (bmi > 25 && bmi <= 27) return { category: 'Gemuk', detail: 'Kelebihan berat badan tingkat ringan', color: 'text-yellow-600' };
        if (bmi > 27) return { category: 'Gemuk', detail: 'Kelebihan berat badan tingkat berat', color: 'text-red-600' };
    };

    const calculateBMI = () => {
        if (weight && height) {
            const weightNum = parseFloat(weight);
            const heightNum = parseFloat(height) / 100; // convert cm to m
            const bmi = weightNum / (heightNum * heightNum);
            const bmiCategory = getBMICategory(bmi);
            
            setResult(bmi.toFixed(1));
            setCategory(bmiCategory);
        }
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setResult(null);
        setCategory('');
    };

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-3 rounded-lg mr-3">
                    <Calculator className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Kalkulator BMI</h3>
            </div>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Berat Badan (kg)
                    </label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Masukkan berat badan"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0798C5] focus:border-transparent outline-none text-black"
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tinggi Badan (cm)
                    </label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Masukkan tinggi badan"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0798C5] focus:border-transparent outline-none text-black"
                    />
                </div>
                
                <div className="flex space-x-3">
                    <button
                        onClick={calculateBMI}
                        className="flex-1 bg-gradient-to-r from-[#0798C5] to-[#7FD8E8] text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                        Hitung BMI
                    </button>
                    <button
                        onClick={resetCalculator}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                        Reset
                    </button>
                </div>
                
                {result && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-[#0798C5] mb-2">
                                BMI: {result}
                            </div>
                            <div className={`text-lg font-semibold ${category.color} mb-1`}>
                                {category.category}
                            </div>
                            <div className="text-sm text-gray-600">
                                {category.detail}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function PrakonsepsiInfo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header Section */}
            <section className="px-6 sm:px-16 py-12 sm:py-20 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                    <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#7FD8E8]/10 to-[#0798C5]/10 rounded-full -top-1/4 -left-1/4"></div>
                </div>
                
                <div className="container mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-[#0798C5] font-medium text-lg sm:text-xl mb-4">Persiapan Kehamilan</h2>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
                            Materi <span className="text-[#0798C5]">Prakonsepsi</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                            Masa prakonsepsi adalah waktu sekitar 3 bulan-1 tahun sebelum pembuahan atau kehamilan dimulai. 
                            Di masa ini, baik calon ayah maupun calon ibu bersiap menjadi "rumah" terbaik untuk calon buah hati.
                        </p>
                    </div>
                </div>
            </section>

            {/* What is Prakonsepsi Section */}
            <section className="px-6 sm:px-16 py-12 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-[#0798C5]/5 to-[#7FD8E8]/5 rounded-3xl p-6 sm:p-8 border border-[#0798C5]/10">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mr-4">
                                    <Baby className="text-white text-2xl" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Apa Itu Masa Prakonsepsi?</h2>
                            </div>
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                                Mungkin istilah "masa prakonsepsi" terdengar asing, tapi sebenarnya ini adalah masa yang sangat penting sebelum kehamilan itu terjadi. 
                                Ini adalah kesempatan emas untuk memastikan kondisi fisik dan gizi kalian berdua optimal.
                            </p>
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                Sehingga, risiko masalah kesehatan pada ibu hamil dan bayi bisa diminimalisir. Mempersiapkan diri di masa prakonsepsi 
                                itu sama pentingnya dengan menjaga kehamilan itu sendiri.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preparation Steps Section */}
            <section className="px-6 sm:px-16 py-12 sm:py-20">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Persiapan <span className="text-[#0798C5]">Prakehamilan</span>
                        </h2>
                        <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
                            Lima aspek penting yang perlu dipersiapkan untuk kehamilan yang sehat dan optimal
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Physical Preparation */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Heart className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">1. Persiapan Fisik</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Pondasi kesehatan dini yang mencakup pemeriksaan kesehatan rutin, menjaga berat badan ideal, dan menerapkan pola hidup sehat.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Pemeriksaan kesehatan lengkap
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    BMI ideal (18.5 - 24)
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Pola hidup sehat
                                </div>
                            </div>
                        </div>

                        {/* Nutritional Preparation */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Heart className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">2. Persiapan Gizi</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Asupan gizi seimbang adalah kunci utama untuk kesehatan reproduksi yang optimal, terutama 3-6 bulan sebelum konsepsi.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Makanan gizi seimbang
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Asam folat 400 mcg/hari
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Hindari zat aditif
                                </div>
                            </div>
                        </div>

                        {/* Psychological Preparation */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Brain className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">3. Persiapan Psikologis</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Kesiapan mental adalah pondasi penting dalam membangun keluarga yang harmonis dan sehat.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Perencanaan masa depan
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Perkaya pengetahuan
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Kelola stres
                                </div>
                            </div>
                        </div>

                        {/* Financial Preparation */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <DollarSign className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">4. Persiapan Keuangan</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Dukungan materi untuk kesiapan menghadapi kehamilan, persalinan, dan kebutuhan bayi.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Dana pemeliharaan kesehatan
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Biaya kehamilan & persalinan
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Kebutuhan bayi
                                </div>
                            </div>
                        </div>

                        {/* Pre-marital Screening */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1">
                            <div className="bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Shield className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">5. Skrining Pra-Nikah</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Deteksi dini untuk masa depan sehat melalui pemeriksaan kesehatan pranikah yang komprehensif.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Cegah penyakit pada bayi
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Kenali riwayat kesehatan
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#0798C5] rounded-full mr-2"></div>
                                    Tingkatkan keyakinan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BMI Calculator Section */}
            <section className="px-6 sm:px-16 py-12 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                            Perhitungan <span className="text-[#0798C5]">BMI</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* BMI Formula and Calculator */}
                            <div className="bg-gradient-to-r from-[#0798C5]/5 to-[#7FD8E8]/5 rounded-3xl p-6 sm:p-8 border border-[#0798C5]/10">
                                <div className="text-center mb-6">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#0798C5] mb-4">
                                        BMI = Berat Badan (kg) / Tinggi Badan² (m²)
                                    </div>
                                    <p className="text-gray-600 text-base">
                                        Pastikan BMI-mu ada di rentang ideal <strong className="text-[#0798C5]">18.5 – 24</strong>
                                    </p>
                                </div>
                                
                                <BMICalculator />
                            </div>
                            
                            {/* BMI Categories Table */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                                    Batas Ambang BMI di Indonesia
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-[#0798C5] to-[#7FD8E8] text-white">
                                                <th className="px-4 py-3 text-left rounded-tl-lg">IMT</th>
                                                <th className="px-4 py-3 text-left">Kelompok</th>
                                                <th className="px-4 py-3 text-left rounded-tr-lg">Kategori</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700">
                                            <tr className="border-b border-gray-100">
                                                <td className="px-4 py-3 font-medium">&lt; 17</td>
                                                <td className="px-4 py-3">Kurus</td>
                                                <td className="px-4 py-3">Kekurangan berat badan tingkat berat</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 bg-gray-50">
                                                <td className="px-4 py-3 font-medium">17 - 18.5</td>
                                                <td className="px-4 py-3">Kurus</td>
                                                <td className="px-4 py-3">Kekurangan berat badan tingkat rendah</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 bg-green-50">
                                                <td className="px-4 py-3 font-medium text-green-700">18.5 - 25</td>
                                                <td className="px-4 py-3 text-green-700 font-semibold">Normal</td>
                                                <td className="px-4 py-3 text-green-700">Normal</td>
                                            </tr>
                                            <tr className="border-b border-gray-100 bg-yellow-50">
                                                <td className="px-4 py-3 font-medium text-yellow-700">25 - 27</td>
                                                <td className="px-4 py-3 text-yellow-700">Gemuk</td>
                                                <td className="px-4 py-3 text-yellow-700">Kelebihan berat badan tingkat ringan</td>
                                            </tr>
                                            <tr className="bg-red-50">
                                                <td className="px-4 py-3 font-medium text-red-700">&gt;27</td>
                                                <td className="px-4 py-3 text-red-700">Gemuk</td>
                                                <td className="px-4 py-3 text-red-700">Kelebihan berat badan tingkat berat</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="px-6 sm:px-16 py-12 sm:py-20 bg-gradient-to-br from-[#0798C5] to-[#7FD8E8]">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Pasangan Hebat!
                        </h2>
                        <p className="text-lg sm:text-xl leading-relaxed mb-8 opacity-90">
                            Berbagai aspek penting dalam persiapan prakonsepsi yang perlu kalian perhatikan. 
                            Ingat! Ini bukan hanya tentang calon Ibu, tapi kerjasama kalian berdua sebagai pasangan.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
                            <p className="text-base sm:text-lg leading-relaxed">
                                Menyiapkan diri secara fisik, mental, gizi, hingga keuangan di masa prakonsepsi adalah 
                                <strong> investasi terbaik untuk masa depan keluarga</strong>. Dengan persiapan yang matang, 
                                kalian telah meletakkan pondasi kuat untuk kehamilan yang sehat, kelahiran yang lancar, 
                                dan pertumbuhan anak yang optimal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrakonsepsiInfo;