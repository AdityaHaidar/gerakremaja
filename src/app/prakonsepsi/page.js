"use client";

import { Heart, Users, Brain, DollarSign, Shield, Baby, Calculator } from "lucide-react";
import { useState } from "react";

function RelationshipReadinessAssessment() {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        {
            question: "Apakah Anda merasa nyaman dengan diri sendiri saat ini?",
            options: [
                { value: 4, text: "Sangat nyaman dan bahagia dengan diri sendiri" },
                { value: 3, text: "Cukup nyaman meskipun ada yang ingin diperbaiki" },
                { value: 2, text: "Kadang merasa tidak nyaman dengan diri sendiri" },
                { value: 1, text: "Sering merasa tidak puas dengan diri sendiri" }
            ]
        },
        {
            question: "Bagaimana perasaan Anda tentang waktu yang tepat untuk menjalin hubungan?",
            options: [
                { value: 4, text: "Saya tahu kapan waktu yang tepat untuk saya" },
                { value: 3, text: "Saya cukup yakin dengan timing saya" },
                { value: 2, text: "Saya masih ragu-ragu tentang timing" },
                { value: 1, text: "Saya merasa tertekan untuk segera berhubungan" }
            ]
        },
        {
            question: "Apakah Anda merasa terburu-buru untuk memiliki pasangan?",
            options: [
                { value: 4, text: "Tidak sama sekali, saya santai menunggu yang tepat" },
                { value: 3, text: "Kadang ingin cepat, tapi masih bisa sabar" },
                { value: 2, text: "Cukup sering merasa terburu-buru" },
                { value: 1, text: "Sangat terburu-buru dan cemas jika masih sendiri" }
            ]
        },
        {
            question: "Bagaimana Anda menghadapi tekanan sosial tentang hubungan?",
            options: [
                { value: 4, text: "Tidak terpengaruh sama sekali" },
                { value: 3, text: "Sedikit terpengaruh tapi masih bisa mengabaikan" },
                { value: 2, text: "Cukup terpengaruh dan kadang stres" },
                { value: 1, text: "Sangat terpengaruh dan sering membuat keputusan impulsif" }
            ]
        },
        {
            question: "Seberapa baik Anda mengenal diri sendiri?",
            options: [
                { value: 4, text: "Sangat baik, saya tahu kelebihan dan kekurangan saya" },
                { value: 3, text: "Cukup baik, meskipun masih ada yang perlu dipelajari" },
                { value: 2, text: "Biasa saja, kadang masih bingung dengan diri sendiri" },
                { value: 1, text: "Kurang baik, sering tidak mengerti diri sendiri" }
            ]
        }
    ];

    const handleAnswer = (value) => {
        const newAnswers = { ...answers, [currentQuestion]: value };
        setAnswers(newAnswers);
        
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateResult(newAnswers);
        }
    };

    const calculateResult = (allAnswers) => {
        const totalScore = Object.values(allAnswers).reduce((sum, score) => sum + score, 0);
        const maxScore = questions.length * 4;
        const percentage = (totalScore / maxScore) * 100;
        
        let category, detail, color;
        
        if (percentage >= 80) {
            category = "Sangat Siap";
            detail = "Anda memiliki kesiapan yang sangat baik untuk menjalin hubungan yang sehat";
            color = "text-green-600";
        } else if (percentage >= 60) {
            category = "Siap";
            detail = "Anda cukup siap untuk menjalin hubungan dengan beberapa area yang perlu diperbaiki";
            color = "text-blue-600";
        } else if (percentage >= 40) {
            category = "Perlu Persiapan";
            detail = "Anda perlu mempersiapkan diri lebih baik sebelum menjalin hubungan serius";
            color = "text-yellow-600";
        } else {
            category = "Belum Siap";
            detail = "Sebaiknya fokus pada pengembangan diri terlebih dahulu";
            color = "text-red-600";
        }
        
        setResult({ score: totalScore, percentage: percentage.toFixed(1), category, detail, color });
    };

    const resetAssessment = () => {
        setAnswers({});
        setResult(null);
        setCurrentQuestion(0);
    };

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-3 rounded-lg mr-3">
                    <Heart className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Tes Kesiapan Hubungan</h3>
            </div>
            
            {!result ? (
                <div className="space-y-4">
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
                            <span className="text-sm text-[#008C99] font-medium">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                                className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-md font-semibold text-gray-800 mb-4">
                            {questions[currentQuestion].question}
                        </h4>
                        <div className="space-y-2">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option.value)}
                                    className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-[#008C99] transition-colors duration-200 text-sm text-black"
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    </div>

                    {currentQuestion > 0 && (
                        <button
                            onClick={() => setCurrentQuestion(currentQuestion - 1)}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            Kembali
                        </button>
                    )}
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-[#008C99] mb-2">
                                Skor: {result.score}/20 ({result.percentage}%)
                            </div>
                            <div className={`text-lg font-semibold ${result.color} mb-1`}>
                                {result.category}
                            </div>
                            <div className="text-sm text-gray-600">
                                {result.detail}
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={resetAssessment}
                        className="w-full bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                        Ulangi Tes
                    </button>
                </div>
            )}
        </div>
    );
}

export default function PrakonsepsiInfo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header Section */}
            <section className="px-6 sm:px-16 py-12 sm:py-20 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
                    <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#00B8C4]/10 to-[#008C99]/10 rounded-full -top-1/4 -left-1/4"></div>
                </div>
                
                <div className="container mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-[#008C99] font-medium text-lg sm:text-xl mb-4">Kesiapan Berkomitmen</h2>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
                            Teori <span className="text-[#008C99]">Kesiapan Hubungan</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                            Kesiapan berkomitmen berfokus pada pandangan setiap orang tentang kapan waktu yang tepat untuk memulai atau mempertahankan sebuah hubungan. 
                            Seseorang dapat merasa bahwa sekarang adalah waktu yang tepat untuk menjalin hubungan, tanpa harus merasa cemas kalau masih sendiri.
                        </p>
                    </div>
                </div>
            </section>

            {/* What is Relationship Readiness Section */}
            <section className="px-6 sm:px-16 py-12 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-[#008C99]/5 to-[#00B8C4]/5 rounded-3xl p-6 sm:p-8 border border-[#008C99]/10">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mr-4">
                                    <Heart className="text-white text-2xl" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Apa Itu Kesiapan Hubungan?</h2>
                            </div>
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                                Kesiapan hubungan adalah kondisi dimana seseorang merasa tenang dan damai meskipun memilih untuk sendiri dulu, 
                                sampai nanti akhirnya menemukan pasangan yang benar-benar tepat. Ini bukan tentang terburu-buru, melainkan tentang kesiapan mental dan emosional.
                            </p>
                            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                                Simpelnya: "Kalau sekarang masih sendiri dulu, gapapa deh. Aku gak maksa untuk harus punya pasangan sekarang!". 
                                Karena yang penting bukan buru-buru jadian, tapi siap untuk menjalaninya dengan sehat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relationship Readiness Aspects Section */}
            <section className="px-6 sm:px-16 py-12 sm:py-20">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                            Aspek <span className="text-[#008C99]">Kesiapan Hubungan</span>
                        </h2>
                        <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
                            Lima aspek penting yang menunjukkan kesiapan seseorang untuk menjalin hubungan yang sehat dan berkomitmen
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Self-Awareness */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Brain className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">1. Kesadaran Diri</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Memahami diri sendiri dengan baik, termasuk kelebihan, kekurangan, nilai-nilai, dan tujuan hidup yang ingin dicapai.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Mengenal karakter diri
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Memahami nilai-nilai hidup
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Menentukan tujuan masa depan
                                </div>
                            </div>
                        </div>

                        {/* Emotional Maturity */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Heart className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">2. Kematangan Emosional</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Kemampuan mengelola emosi dengan baik, tidak mudah terbawa perasaan, dan mampu berkomunikasi secara efektif.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Kontrol emosi yang baik
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Komunikasi yang efektif
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Empati terhadap orang lain
                                </div>
                            </div>
                        </div>

                        {/* Independence */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Users className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">3. Kemandirian</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Mampu berdiri sendiri secara fisik, emosional, dan finansial tanpa bergantung sepenuhnya pada orang lain.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Kemandirian finansial
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Kemandirian emosional
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Kemampuan problem solving
                                </div>
                            </div>
                        </div>

                        {/* Commitment Understanding */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Shield className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">4. Pemahaman Komitmen</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Memahami makna dan konsekuensi dari komitmen dalam hubungan, serta siap untuk bertanggung jawab.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Pemahaman tentang komitmen
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Siap bertanggung jawab
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Loyalitas dalam hubungan
                                </div>
                            </div>
                        </div>

                        {/* Healthy Boundaries */}
                        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <Baby className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">5. Batasan Sehat</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Kemampuan menetapkan batasan yang sehat dalam hubungan dan menghormati batasan orang lain.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Menetapkan batasan personal
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Menghormati batasan pasangan
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <div className="w-2 h-2 bg-[#008C99] rounded-full mr-2"></div>
                                    Keseimbangan me-time dan we-time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Relationship Readiness Assessment Section */}
            <section className="px-6 sm:px-16 py-12 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                            Tes <span className="text-[#008C99]">Kesiapan Hubungan</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Assessment Tool */}
                            <div className="bg-gradient-to-r from-[#008C99]/5 to-[#00B8C4]/5 rounded-3xl p-6 sm:p-8 border border-[#008C99]/10">
                                <div className="text-center mb-6">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#008C99] mb-4">
                                        Evaluasi Kesiapan Diri
                                    </div>
                                    <p className="text-gray-600 text-base">
                                        Jawab pertanyaan berikut untuk mengetahui seberapa siap Anda dalam menjalin hubungan yang sehat
                                    </p>
                                </div>
                                
                                <RelationshipReadinessAssessment />
                            </div>
                            
                            {/* Signs of Readiness */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                                    Tanda-tanda Kesiapan Hubungan
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Nyaman dengan Diri Sendiri</h4>
                                            <p className="text-sm text-gray-600">Merasa bahagia dan tenang meskipun sedang sendiri</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Tidak Terburu-buru</h4>
                                            <p className="text-sm text-gray-600">Tidak merasa tertekan untuk segera memiliki pasangan</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Visi yang Jelas</h4>
                                            <p className="text-sm text-gray-600">Memiliki gambaran yang jelas tentang hubungan yang diinginkan</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Komunikasi yang Baik</h4>
                                            <p className="text-sm text-gray-600">Mampu mengekspresikan perasaan dan mendengarkan dengan baik</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                                            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Siap Berkompromi</h4>
                                            <p className="text-sm text-gray-600">Bersedia untuk saling memberikan dan menerima</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                                            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Mengelola Konflik</h4>
                                            <p className="text-sm text-gray-600">Mampu menyelesaikan masalah dengan cara yang sehat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Section */}
            <section className="px-6 sm:px-16 py-12 sm:py-20 bg-gradient-to-br from-[#008C99] to-[#00B8C4]">
                <div className="container mx-auto text-center">
                    <div className="max-w-4xl mx-auto text-white">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Ingat, Tidak Ada yang Salah dengan Sendiri!
                        </h2>
                        <p className="text-lg sm:text-xl leading-relaxed mb-8 opacity-90">
                            Teori Kesiapan Hubungan mengajarkan kita bahwa waktu yang tepat untuk menjalin hubungan berbeda untuk setiap orang. Yang terpenting adalah memastikan kita sudah siap secara mental, emosional, dan spiritual untuk memberikan yang terbaik dalam sebuah hubungan.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
                                <h4 className="text-lg font-semibold mb-2">Kenali Diri Lebih Dalam</h4>
                                <p className="text-sm opacity-80">Mulailah dengan memahami nilai-nilai, tujuan, dan batasanmu sebelum menjalin hubungan.</p>
                            </div>
                            <div className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
                                <h4 className="text-lg font-semibold mb-2">Tumbuhkan Kemandirian</h4>
                                <p className="text-sm opacity-80">Hubungan sehat dimulai dari individu yang kuat secara emosional dan finansial.</p>
                            </div>
                            <div className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
                                <h4 className="text-lg font-semibold mb-2">Siap Berkomitmen Sehat</h4>
                                <p className="text-sm opacity-80">Komitmen bukan beban, tapi keputusan bersama untuk tumbuh dan berkembang.</p>
                            </div>
                        </div>
                        <p className="text-sm mt-10 opacity-80">
                            Jangan terburu-buru—kenali dirimu, dan ketika waktunya tiba, kamu akan siap mencintai dan dicintai dengan sehat.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
