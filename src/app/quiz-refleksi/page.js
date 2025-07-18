"use client";

import { Heart, Users, Brain, CheckCircle, ArrowRight, RotateCcw, Star, Target, MessageCircle, Shield, Lightbulb, Timer } from "lucide-react";
import { useState, useEffect } from "react";
import { FaHeart, FaUsers, FaLightbulb, FaCompass, FaRocket, FaStar } from "react-icons/fa";
import { MdFamilyRestroom, MdPsychology, MdSelfImprovement } from "react-icons/md";
import { TiLightbulb } from "react-icons/ti";
import { RiUserCommunityFill } from "react-icons/ri";

// Komponen Quiz Refleksi
function ReflectionQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [reflection, setReflection] = useState('');

    const questions = [
        {
            id: 1,
            question: "Apa alasanku ingin memiliki pasangan?",
            type: "multiple",
            options: [
                { value: "lonely", text: "Karena merasa kesepian", score: 2 },
                { value: "pressure", text: "Karena tekanan sosial atau teman-teman", score: 1 },
                { value: "ready", text: "Karena merasa siap berbagi hidup dengan seseorang", score: 4 },
                { value: "trend", text: "Karena melihat orang lain bahagia berpasangan", score: 2 }
            ]
        },
        {
            id: 2,
            question: "Apakah aku bisa merasa cukup dan utuh walau belum memiliki pasangan?",
            type: "scale",
            minLabel: "Tidak bisa sama sekali",
            maxLabel: "Sangat bisa dan nyaman"
        },
        {
            id: 3,
            question: "Bagaimana caraku menanggapi situasi yang sedih atau emosional lainnya?",
            type: "multiple",
            options: [
                { value: "avoid", text: "Menghindar atau melarikan diri", score: 1 },
                { value: "explode", text: "Meledak-ledak dan sulit dikontrol", score: 2 },
                { value: "process", text: "Butuh waktu untuk memproses, lalu bicara", score: 4 },
                { value: "share", text: "Langsung mencari teman untuk curhat", score: 3 }
            ]
        },
        {
            id: 4,
            question: "Sudahkah aku belajar mengelola emosi dengan sehat?",
            type: "scale",
            minLabel: "Belum sama sekali",
            maxLabel: "Sudah sangat baik"
        },
        {
            id: 5,
            question: "Jika ada konflik, mampukah aku menyelesaikannya tanpa menyakiti atau melarikan diri?",
            type: "multiple",
            options: [
                { value: "run", text: "Biasanya aku lari dari konflik", score: 1 },
                { value: "fight", text: "Aku cenderung bertengkar dan menyakiti", score: 2 },
                { value: "calm", text: "Aku bisa tetap tenang dan mencari solusi", score: 4 },
                { value: "help", text: "Aku butuh bantuan orang lain untuk menyelesaikan", score: 3 }
            ]
        },
        {
            id: 6,
            question: "Apakah aku siap menghargai perbedaan dan berkompromi dalam hubungan?",
            type: "scale",
            minLabel: "Sulit sekali bagiku",
            maxLabel: "Sangat siap dan terbuka"
        },
        {
            id: 7,
            question: "Siapkah aku menjaga perasaan orang lain?",
            type: "multiple",
            options: [
                { value: "self", text: "Aku lebih fokus pada perasaanku sendiri", score: 2 },
                { value: "sometimes", text: "Kadang-kadang, tergantung mood", score: 3 },
                { value: "balance", text: "Aku bisa menyeimbangkan keduanya", score: 4 },
                { value: "others", text: "Aku lebih mementingkan perasaan orang lain", score: 2 }
            ]
        },
        {
            id: 8,
            question: "Apakah aku siap membangun kepercayaan secara perlahan dan konsisten?",
            type: "scale",
            minLabel: "Aku ingin kepercayaan instan",
            maxLabel: "Aku siap membangun secara bertahap"
        },
        {
            id: 9,
            question: "Apa arti 'hubungan sehat' dalam versiku?",
            type: "text",
            placeholder: "Tuliskan refleksimu tentang hubungan sehat..."
        },
        {
            id: 10,
            question: "Apakah aku sudah siap untuk bertumbuh bersama dengan pasanganku?",
            type: "scale",
            minLabel: "Belum siap berubah",
            maxLabel: "Siap tumbuh bersama"
        }
    ];

    const handleAnswer = (value) => {
        const newAnswers = { ...answers, [currentQuestion]: value };
        setAnswers(newAnswers);
        
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateReflection(newAnswers);
        }
    };

    const calculateReflection = (allAnswers) => {
        let totalScore = 0;
        let maxScore = 0;
        
        questions.forEach((q, index) => {
            if (q.type === "multiple") {
                const answer = allAnswers[index];
                const option = q.options.find(opt => opt.value === answer);
                if (option) {
                    totalScore += option.score;
                    maxScore += 4;
                }
            } else if (q.type === "scale") {
                const answer = allAnswers[index] || 3;
                totalScore += answer;
                maxScore += 5;
            }
        });
        
        const percentage = (totalScore / maxScore) * 100;
        let category, message, tips;
        
        if (percentage >= 75) {
            category = "Sangat Siap! 🌟";
            message = "Wow! Kamu sudah memiliki fondasi yang kuat untuk hubungan yang sehat. Kamu memahami dirimu dengan baik dan siap untuk berbagi hidup dengan seseorang.";
            tips = ["Tetap jaga keseimbangan antara diri sendiri dan pasangan", "Terus kembangkan komunikasi yang terbuka", "Jadilah teladan dalam hubungan sehat"];
        } else if (percentage >= 50) {
            category = "Cukup Siap! 💪";
            message = "Kamu di jalur yang tepat! Ada beberapa area yang masih bisa dikembangkan, tapi kamu sudah memiliki dasar yang baik untuk hubungan yang sehat.";
            tips = ["Terus berlatih mengelola emosi dengan sehat", "Pelajari lebih banyak tentang komunikasi efektif", "Jangan takut untuk terus belajar tentang diri sendiri"];
        } else {
            category = "Masih Perlu Belajar 🌱";
            message = "Tidak apa-apa! Setiap orang punya timing yang berbeda. Ini adalah waktu yang tepat untuk fokus pada pengembangan diri dan belajar lebih banyak tentang hubungan sehat.";
            tips = ["Mulai dengan mengenal diri sendiri lebih dalam", "Cari tahu cara mengelola emosi yang sehat", "Jangan terburu-buru, nikmati proses belajar ini"];
        }
        
        setReflection({ category, message, tips, score: Math.round(percentage) });
        setShowResult(true);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
        setReflection('');
    };

    if (showResult) {
        return (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#008C99] mb-2">
                        {reflection.category}
                    </div>
                    <div className="text-6xl font-bold text-gray-300 mb-2">
                        {reflection.score}%
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        {reflection.message}
                    </p>
                </div>
                
                <div className="bg-gradient-to-r from-[#008C99]/10 to-[#00B8C4]/10 rounded-2xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2 text-[#008C99]" />
                        Tips untuk Kamu:
                    </h4>
                    <ul className="space-y-2">
                        {reflection.tips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-[#008C99] mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="text-center">
                    <button
                        onClick={resetQuiz}
                        className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center mx-auto"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Ulangi Refleksi
                    </button>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentQuestion];

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">
                        Pertanyaan {currentQuestion + 1} dari {questions.length}
                    </span>
                    <span className="text-sm text-[#008C99] font-medium">
                        {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                    {currentQ.question}
                </h3>

                {currentQ.type === "multiple" && (
                    <div className="space-y-3">
                        {currentQ.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option.value)}
                                className="w-full p-4 text-left border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-[#008C99] transition-all duration-200 text-gray-700"
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                )}

                {currentQ.type === "scale" && (
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>{currentQ.minLabel}</span>
                            <span>{currentQ.maxLabel}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => handleAnswer(num)}
                                    className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-[#008C99] hover:bg-[#008C99] hover:text-white transition-all duration-200 font-semibold text-black"
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentQ.type === "text" && (
                    <div className="space-y-4">
                        <textarea
                            placeholder={currentQ.placeholder}
                            className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#008C99] focus:outline-none resize-none h-32 text-black"
                            onChange={(e) => setAnswers({...answers, [currentQuestion]: e.target.value})}
                        />
                        <button
                            onClick={() => handleAnswer(answers[currentQuestion] || "")}
                            className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold py-2 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center "
                        >
                            Lanjut
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                )}
            </div>

            {currentQuestion > 0 && currentQ.type !== "text" && (
                <button
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                    Kembali
                </button>
            )}
        </div>
    );
}

// Komponen Mini Game: Emosi Matcher
function EmotionMatcher() {
    const [gameState, setGameState] = useState('start'); // start, playing, finished
    const [currentScenario, setCurrentScenario] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedEmotion, setSelectedEmotion] = useState('');
    const [feedback, setFeedback] = useState('');

    const scenarios = [
        {
            situation: "Pasanganmu lupa janji penting yang sudah kalian rencanakan bersama",
            correctEmotion: "kecewa",
            emotions: ["marah", "kecewa", "biasa aja", "sedih"],
            explanation: "Merasa kecewa adalah reaksi yang wajar. Yang penting adalah bagaimana kamu mengkomunikasikan perasaan ini dengan baik."
        },
        {
            situation: "Kamu melihat pasanganmu berbicara akrab dengan teman lawan jenis",
            correctEmotion: "perlu bicara",
            emotions: ["cemburu berat", "curiga", "perlu bicara", "tidak peduli"],
            explanation: "Komunikasi terbuka adalah kunci. Daripada berasumsi, lebih baik bicarakan perasaanmu dengan tenang."
        },
        {
            situation: "Pasanganmu memberikan surprise di hari ulang tahunmu",
            correctEmotion: "bahagia",
            emotions: ["biasa aja", "bahagia", "terharu", "bingung"],
            explanation: "Mengapresiasi usaha pasangan dengan kebahagiaan akan memperkuat hubungan kalian."
        },
        {
            situation: "Kalian berbeda pendapat tentang rencana masa depan",
            correctEmotion: "perlu diskusi",
            emotions: ["frustrasi", "menyerah", "perlu diskusi", "marah"],
            explanation: "Perbedaan pendapat adalah hal normal. Yang penting adalah mendiskusikannya dengan kepala dingin."
        }
    ];

    const handleEmotionSelect = (emotion) => {
        setSelectedEmotion(emotion);
        const isCorrect = emotion === scenarios[currentScenario].correctEmotion;
        
        if (isCorrect) {
            setScore(score + 1);
            setFeedback('Tepat! ' + scenarios[currentScenario].explanation);
        } else {
            setFeedback('Hmm, coba pikirkan lagi. ' + scenarios[currentScenario].explanation);
        }
        
        setTimeout(() => {
            if (currentScenario < scenarios.length - 1) {
                setCurrentScenario(currentScenario + 1);
                setSelectedEmotion('');
                setFeedback('');
            } else {
                setGameState('finished');
            }
        }, 3000);
    };

    const resetGame = () => {
        setGameState('start');
        setCurrentScenario(0);
        setScore(0);
        setSelectedEmotion('');
        setFeedback('');
    };

    if (gameState === 'start') {
        return (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-6 w-fit mx-auto">
                    <Brain className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Emosi Matcher</h3>
                <p className="text-gray-600 mb-6">
                    Pilih respons emosional yang paling sehat untuk berbagai situasi dalam hubungan!
                </p>
                <button
                    onClick={() => setGameState('playing')}
                    className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                    Mulai Game
                </button>
            </div>
        );
    }

    if (gameState === 'finished') {
        return (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#008C99] mb-4">
                    Game Selesai! 🎉
                </div>
                <div className="text-5xl font-bold text-gray-300 mb-4">
                    {score}/{scenarios.length}
                </div>
                <p className="text-gray-600 mb-6">
                    {score === scenarios.length ? 
                        "Sempurna! Kamu sudah paham cara mengelola emosi dengan sehat dalam hubungan." :
                        score >= scenarios.length / 2 ?
                        "Bagus! Kamu sudah memiliki pemahaman yang baik tentang emosi sehat." :
                        "Tidak apa-apa! Ini adalah proses belajar yang terus berlanjut."
                    }
                </p>
                <button
                    onClick={resetGame}
                    className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center mx-auto"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Main Lagi
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">
                        Skenario {currentScenario + 1} dari {scenarios.length}
                    </span>
                    <span className="text-sm text-[#008C99] font-medium">
                        Skor: {score}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Situasi:</h4>
                    <p className="text-gray-700">{scenarios[currentScenario].situation}</p>
                </div>

                {!feedback && (
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 mb-4">Bagaimana perasaanmu?</h4>
                        {scenarios[currentScenario].emotions.map((emotion, index) => (
                            <button
                                key={index}
                                onClick={() => handleEmotionSelect(emotion)}
                                className="w-full p-4 text-left border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-[#008C99] transition-all duration-200 text-gray-700"
                            >
                                {emotion}
                            </button>
                        ))}
                    </div>
                )}

                {feedback && (
                    <div className="bg-gradient-to-r from-[#008C99]/10 to-[#00B8C4]/10 p-6 rounded-2xl">
                        <p className="text-gray-700">{feedback}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Komponen Mini Game: Commitment Timeline
function CommitmentTimeline() {
    const [gameState, setGameState] = useState('start');
    const [currentStage, setCurrentStage] = useState(0);
    const [userChoices, setUserChoices] = useState([]);
    const [score, setScore] = useState(0);

    const stages = [
        {
            stage: "Pertemuan Pertama",
            situation: "Kamu baru bertemu seseorang yang menarik. Apa yang kamu lakukan?",
            choices: [
                { text: "Langsung menyatakan perasaan", score: 1, feedback: "Terlalu cepat! Kenali dulu orangnya." },
                { text: "Berteman dan mengenal lebih dalam", score: 3, feedback: "Bagus! Mengenal adalah langkah pertama yang penting." },
                { text: "Tidak melakukan apa-apa", score: 2, feedback: "Tidak apa-apa, tapi jangan sampai melewatkan kesempatan ya!" }
            ]
        },
        {
            stage: "Tahap Mengenal",
            situation: "Setelah beberapa bulan berteman, kamu mulai tertarik. Langkah selanjutnya?",
            choices: [
                { text: "Mencoba pendekatan yang lebih serius", score: 3, feedback: "Tepat! Ini timing yang baik untuk menunjukkan ketertarikan." },
                { text: "Menunggu dia yang duluan", score: 2, feedback: "Kadang kita perlu berani mengambil langkah pertama." },
                { text: "Tetap berteman saja", score: 1, feedback: "Jangan takut untuk mencoba, selama dilakukan dengan hormat." }
            ]
        },
        {
            stage: "Mulai Berpacaran",
            situation: "Kalian mulai berpacaran. Bagaimana kamu menetapkan boundaries?",
            choices: [
                { text: "Bicarakan ekspektasi dan batasan bersama", score: 3, feedback: "Excellent! Komunikasi terbuka adalah kunci." },
                { text: "Biarkan mengalir saja", score: 2, feedback: "Terkadang perlu ada pembicaraan yang lebih serius." },
                { text: "Ikuti maunya dia saja", score: 1, feedback: "Penting untuk juga menyuarakan kebutuhanmu." }
            ]
        },
        {
            stage: "Hubungan Serius",
            situation: "Hubungan kalian semakin serius. Bagaimana kamu membicarakan masa depan?",
            choices: [
                { text: "Diskusikan visi dan tujuan bersama", score: 3, feedback: "Perfect! Keselarasan visi sangat penting." },
                { text: "Fokus pada kebahagiaan hari ini saja", score: 2, feedback: "Bahagia itu penting, tapi perencanaan juga perlu." },
                { text: "Berharap dia yang mengambil keputusan", score: 1, feedback: "Keputusan besar harus diambil bersama-sama." }
            ]
        }
    ];

    const handleChoice = (choice) => {
        const newChoices = [...userChoices, choice];
        setUserChoices(newChoices);
        setScore(score + choice.score);
        
        if (currentStage < stages.length - 1) {
            setTimeout(() => {
                setCurrentStage(currentStage + 1);
            }, 2000);
        } else {
            setTimeout(() => {
                setGameState('finished');
            }, 2000);
        }
    };

    const resetGame = () => {
        setGameState('start');
        setCurrentStage(0);
        setUserChoices([]);
        setScore(0);
    };

    if (gameState === 'start') {
        return (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-6 w-fit mx-auto">
                    <Target className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Timeline Komitmen</h3>
                <p className="text-gray-600 mb-6">
                    Jelajahi perjalanan hubungan yang sehat dari awal hingga komitmen serius!
                </p>
                <button
                    onClick={() => setGameState('playing')}
                    className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                    Mulai Perjalanan
                </button>
            </div>
        );
    }

    if (gameState === 'finished') {
        const finalScore = score;
        const maxScore = stages.length * 3;
        const percentage = (finalScore / maxScore) * 100;
        
        return (
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#008C99] mb-4">
                    Perjalanan Selesai! 🎯
                </div>
                <div className="text-5xl font-bold text-gray-300 mb-4">
                    {Math.round(percentage)}%
                </div>
                <p className="text-gray-600 mb-6">
                    {percentage >= 80 ? 
                        "Amazing! Kamu memiliki pemahaman yang sangat baik tentang tahapan hubungan yang sehat." :
                        percentage >= 60 ?
                        "Good job! Kamu sudah paham sebagian besar tentang progression hubungan yang sehat." :
                        "Keep learning! Setiap orang punya pace yang berbeda dalam belajar tentang hubungan."
                    }
                </p>
                <button
                    onClick={resetGame}
                    className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center mx-auto"
                >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Ulangi Perjalanan
                </button>
            </div>
        );
    }

    const currentStageData = stages[currentStage];
    const lastChoice = userChoices[userChoices.length - 1];

    return (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">
                        Tahap {currentStage + 1} dari {stages.length}
                    </span>
                    <span className="text-sm text-[#008C99] font-medium">
                        Skor: {score}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                        className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentStage + 1) / stages.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tahap: {currentStageData.stage}</h4>
                    <p className="text-gray-700">{currentStageData.situation}</p>
                </div>

                {lastChoice ? (
                    <div className="bg-gradient-to-r from-[#008C99]/10 to-[#00B8C4]/10 p-6 rounded-2xl">
                        <p className="text-gray-700">{lastChoice.feedback}</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 mb-4">Apa yang akan kamu lakukan?</h4>
                        {currentStageData.choices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleChoice(choice)}
                                className="w-full p-4 text-left border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-[#008C99] transition-all duration-200 text-gray-700"
                            >
                                {choice.text}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// Main Page Component
function RelationshipReadinessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-r from-[#00B8C4]/10 to-[#008C99]/10 rounded-full -top-1/4 -left-1/4"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute w-[120%] h-[120%] bg-gradient-to-l from-[#008C99]/10 to-[#00B8C4]/10 rounded-full -bottom-1/4 -right-1/4"></div>
            </div>

            <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#008C99] to-[#00B8C4] rounded-full mb-6">
                            <FaHeart className="text-white text-2xl" />
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Kesiapan Hubungan<br/>
                            <span className="text-[#008C99]">Yang Sehat</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Eksplorasi kesiapanmu untuk membangun hubungan yang sehat melalui refleksi dan mini games interaktif. 
                            Karena hubungan yang kuat dimulai dari pemahaman diri yang mendalam.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                                <FaUsers className="text-[#008C99]" />
                                <span className="text-sm text-gray-700">Interaktif</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                                <FaLightbulb className="text-[#008C99]" />
                                <span className="text-sm text-gray-700">Refleksi Diri</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                                <FaCompass className="text-[#008C99]" />
                                <span className="text-sm text-gray-700">Panduan</span>
                            </div>
                        </div>
                    </div>

                    {/* Introduction Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <MdPsychology className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Kenali Diri</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Memahami nilai-nilai, keinginan, dan kesiapan emosional untuk berkomitmen dalam hubungan.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <MdSelfImprovement className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Refleksi Mendalam</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Pertanyaan-pertanyaan yang membantu kamu memahami ekspektasi dan kesiapan berkomitmen.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                            <div className="bg-gradient-to-br from-[#008C99] to-[#00B8C4] p-4 rounded-2xl mb-4 w-fit text-white">
                                <FaRocket className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Aksi Nyata</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Panduan praktis untuk mempersiapkan diri menuju hubungan yang sehat dan bertanggung jawab.
                            </p>
                        </div>
                    </div>

                    {/* Motivational Quote Section */}
                    <div className="bg-gradient-to-r from-[#008C99] to-[#00B8C4] rounded-3xl p-8 sm:p-12 mb-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white rounded-full"></div>
                        </div>
                        
                        <div className="relative z-10">
                            <FaStar className="text-4xl mx-auto mb-4 opacity-80" />
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                "Jatuh cinta itu mudah! Akan tetapi, untuk bisa bertumbuh bersama dengan pasangan, memerlukan komitmen yang lebih."
                            </h2>
                            <p className="text-lg opacity-90 mb-6">
                                Dan komitmen itu, dimulai dari diri sendiri.
                            </p>
                            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                                <span className="text-sm">Siap untuk memulai perjalanan ini?</span>
                            </div>
                        </div>
                    </div>

                    {/* Why This Matters Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Mengapa Kesiapan Hubungan Penting?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Seperti yang kita lihat dalam film "Dua Garis Biru", hubungan tanpa persiapan yang matang 
                                bisa membawa dampak yang tidak diinginkan. Mari kita pastikan kita siap!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#008C99] to-[#00B8C4] rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Menghindari Luka Emosional</h3>
                                        <p className="text-gray-600">Persiapan yang baik membantu kita menghindari hubungan yang saling menyakiti.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#008C99] to-[#00B8C4] rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Membangun Fondasi Kuat</h3>
                                        <p className="text-gray-600">Hubungan yang dibangun atas dasar kesiapan akan lebih tahan lama dan berkualitas.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#008C99] to-[#00B8C4] rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Pertumbuhan Bersama</h3>
                                        <p className="text-gray-600">Kesiapan memungkinkan kita untuk saling mendukung dan bertumbuh bersama pasangan.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#008C99] to-[#00B8C4] rounded-full mb-4">
                                        <MdFamilyRestroom className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Statistik Kami</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Pasangan Terdampingi</span>
                                        <span className="text-2xl font-bold text-[#008C99]">2000+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Tingkat Kepuasan</span>
                                        <span className="text-2xl font-bold text-[#008C99]">95%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Konsultasi Tersedia</span>
                                        <span className="text-2xl font-bold text-[#008C99]">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Before Activities */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Yuk, Mulai Eksplorasi Kesiapanmu!
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                            Melalui aktivitas interaktif di bawah ini, kamu bisa lebih memahami diri sendiri dan kesiapanmu 
                            untuk membangun hubungan yang sehat dan bertanggung jawab.
                        </p>
                        
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#008C99] to-[#00B8C4] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <FaRocket className="text-sm" />
                            <span className="font-semibold">Mulai Sekarang</span>
                        </div>
                    </div>

                    {/* Activities Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="md:col-span-2">
                            <ReflectionQuiz />
                        </div>
                        <div>
                            <EmotionMatcher />
                        </div>
                        <div>
                            <CommitmentTimeline />
                        </div>
                    </div>

                    {/* Footer Message */}
                    <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Ingat, Ini Bukan Tentang Sempurna
                        </h3>
                        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Kesiapan hubungan bukan berarti kita harus sempurna. Ini tentang kesadaran, kemauan untuk belajar, 
                            dan komitmen untuk bertumbuh bersama. Setiap langkah kecil yang kamu ambil hari ini adalah investasi 
                            untuk masa depan hubunganmu yang lebih baik.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelationshipReadinessPage;