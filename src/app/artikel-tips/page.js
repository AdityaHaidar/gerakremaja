"use client";

import { useState, useEffect } from "react";

function ComingSoon() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date (30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Hearts */}
        <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}>💖</div>
        <div className="absolute top-1/3 right-1/3 text-3xl animate-pulse opacity-25" style={{ animationDelay: '1.5s' }}>🌟</div>
        <div className="absolute bottom-1/4 right-1/4 text-3xl animate-bounce opacity-30" style={{ animationDelay: '2.5s' }}>🏡</div>
        <div className="absolute bottom-1/3 left-1/3 text-2xl animate-pulse opacity-25" style={{ animationDelay: '3s' }}>✨</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Illustration */}
          <div className="mb-8 sm:mb-12">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 bg-gradient-to-br from-[#0798C5] to-[#7FD8E8] rounded-full flex items-center justify-center animate-pulse">
                <div className="text-4xl sm:text-5xl lg:text-6xl">🚀</div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 animate-fadeIn">
              Segera
              <span className="block text-[#0798C5] animate-pulse">Hadir!</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              Kami sedang menyiapkan sesuatu yang luar biasa untuk membantu perjalanan 
              <span className="font-semibold text-[#0798C5]"> harmoni keluarga</span> Anda.
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
              Platform lengkap untuk konseling, edukasi, dan dukungan keluarga yang akan segera menghadirkan 
              fitur-fitur revolusioner untuk kesejahteraan keluarga Indonesia.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">Peluncuran dalam:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-md sm:max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0798C5] animate-pulse">
                  {String(countdown.days).padStart(2, '0')}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Hari</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0798C5] animate-pulse">
                  {String(countdown.hours).padStart(2, '0')}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Jam</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0798C5] animate-pulse">
                  {String(countdown.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Menit</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0798C5] animate-pulse">
                  {String(countdown.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Detik</div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">Yang Akan Hadir:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3 animate-bounce">🧠</div>
                <h4 className="font-semibold text-gray-800 mb-2">Tips</h4>
                <p className="text-sm text-gray-600">Tips parenting dan berkeluarga!</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-3 animate-bounce" style={{ animationDelay: '0.5s' }}>📚</div>
                <h4 className="font-semibold text-gray-800 mb-2">Artikel</h4>
                <p className="text-sm text-gray-600">Bahan bacaan untuk menambah wawasan!</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="text-3xl mb-3 animate-bounce" style={{ animationDelay: '1s' }}>👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-gray-800 mb-2">FAQ</h4>
                <p className="text-sm text-gray-600">Diskusi bersama dengan pertanyaan!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ComingSoon;