"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

// Komponen fallback sementara navbar loading
function NavbarFallback() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center py-3 px-4 md:px-8 lg:px-16">
        <div className="flex items-center">
          <Image
            src="/assets/mainLogo.png"
            alt="Main Logo"
            width={120}
            height={40}
            className="md:w-[150px] md:h-[50px]"
          />
        </div>
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="animate-pulse bg-gray-200 h-8 w-96 rounded"></div>
        </div>
      </div>
    </nav>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [dropdownOpen, setDropdownOpen] = useState({
    rumahTangga: false,
    keluargaParenting: false,
  });
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    rumahTangga: false,
    keluargaParenting: false,
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRoot = pathname === "/";
  const showScrolledStyle = isRoot ? isScrolled : true; // jika bukan root, selalu pakai gaya scrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (pathname === "/" || pathname === "") {
        const sections = ["beranda", "about", "rumahTangga", "parenting", "artikel", "contact"];
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      setActiveSection("beranda");
    } else if (pathname.includes("/artikel-tips")) {
      setActiveSection("artikel");
    } else if (pathname.includes("/faq")) {
      setActiveSection("faq");
    } else {
      setActiveSection("");
    }
  }, [pathname]);

  // Scroll ke section jika query param section tersedia
  useEffect(() => {
    if (pathname === "/") {
      const section = searchParams.get("section");
      if (section) {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [pathname, searchParams]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen({ rumahTangga: false, keluargaParenting: false });
  };

  const handleDropdownEnter = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: true }));
  };

  const handleDropdownLeave = (dropdown) => {
    setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
  };

  const handleMobileDropdownToggle = (dropdown) => {
    setMobileDropdownOpen((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  };

  const isActiveLink = (section) => {
    if (section === "/artikel-tips") {
      return pathname.includes("/artikel-tips") || activeSection === "artikel";
    }
    if (section === "/faq") {
      return pathname.includes("/faq");
    }
    if (pathname === "/" || pathname === "") {
      return activeSection === section;
    }
    return pathname === section || activeSection === section.replace("/", "").replace("#", "");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

const handleSectionNavigation = (sectionId) => {
  if (pathname === '/') {
    scrollToSection(sectionId);
  } else {
    router.push(`/?section=${sectionId}`);
  }
};



  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        showScrolledStyle ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-3 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/mainLogo.png"
              alt="Main Logo"
              width={120}
              height={40}
              className="md:w-[150px] md:h-[50px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex gap-8">
            {/* Beranda */}
            <button
              onClick={() => handleSectionNavigation('beranda')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink('beranda') 
                  ? 'text-white bg-[#008C99] shadow-lg' 
                  : 'text-gray-600 hover:text-white hover:bg-[#008C99] hover:shadow-lg'
              }`}
            >
              Beranda
            </button>

            {/* Tentang Kami */}
            <button
              onClick={() => handleSectionNavigation('about')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink('about') 
                  ? 'text-white bg-[#008C99] shadow-lg' 
                  : 'text-gray-600 hover:text-white hover:bg-[#008C99] hover:shadow-lg'
              }`}
            >
              Tentang Kami
            </button>

            {/* Rumah Tangga - Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('rumahTangga')}
              onMouseLeave={() => handleDropdownLeave('rumahTangga')}
            >
              <button
                onClick={() => handleSectionNavigation('rumahTangga')}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink('rumahTangga') || isActiveLink('/prakonsepsi') || isActiveLink('/kesiapan-relasional')
                    ? 'text-white bg-[#008C99] shadow-lg' 
                    : 'text-gray-600 hover:text-white hover:bg-[#008C99] hover:shadow-lg'
                }`}
              >
                Rumah Tangga
                <svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen.rumahTangga ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen.rumahTangga && (
                <div className="absolute top-full w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fade-in">
                  <Link href="/prakonsepsi" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#008C99] transition-colors">
                    Prakonsepsi
                  </Link>
                  <Link href="/kesiapan-relasional" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#008C99] transition-colors">
                    Kesiapan Relasional
                  </Link>
                </div>
              )}
            </div>

            {/* Keluarga & Parenting - Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('keluargaParenting')}
              onMouseLeave={() => handleDropdownLeave('keluargaParenting')}
            >
              <button
                onClick={() => handleSectionNavigation('parenting')}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink('parenting') || isActiveLink('/manajemen-stres') || isActiveLink('/stunting')
                    ? 'text-white bg-[#008C99] shadow-lg' 
                    : 'text-gray-600 hover:text-white hover:bg-[#008C99] hover:shadow-lg'
                }`}
              >
                Keluarga & Parenting
                <svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen.keluargaParenting ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen.keluargaParenting && (
                <div className="absolute top-full w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fade-in">
                  <Link href="/manajemen-stres" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#008C99] transition-colors">
                    Manajemen Stres
                  </Link>
                  <Link href="/stunting" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#008C99] transition-colors">
                    Stunting & Kesejahteraan Keluarga
                  </Link>
                </div>
              )}
            </div>

            {/* Artikel & Tips */}
            <Link
              href="/artikel-tips"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink('/artikel-tips') 
                  ? 'text-white bg-[#008C99] shadow-lg' 
                  : 'text-gray-600 hover:text-white hover:bg-[#008C99] hover:shadow-lg'
              }`}
            >
              Artikel & Tips
            </Link>

            {/* FAQ */}
            <Link
              href="/faq"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink('/faq') 
                  ? 'text-white bg-[#008C99] shadow-lg' 
                  : 'text-gray-600 hover:text-white hover:bg-[#008C99] hover:shadow-lg'
              }`}
            >
              FAQ
            </Link>

            {/* Kontak */}
            <button
              onClick={() => handleSectionNavigation('contact')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink('contact') 
                  ? 'text-white bg-[#008C99] shadow-lg' 
                  : 'text-gray-600 hover:text-white hover:bg-[#008C99] hover:shadow-lg'
              }`}
            >
              Kontak
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden z-50 relative p-2 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-0.5"
                  : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-0.5"
                  : "translate-y-1"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="/assets/mainLogo.png"
              alt="Main Logo"
              width={120}
              height={40}
            />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col flex-1 py-4 overflow-y-auto">
            {/* Beranda */}
            <button
              onClick={() => {
                handleSectionNavigation('beranda');
                closeMobileMenu();
              }}
              className={`text-left px-6 py-4 transition-colors border-b border-gray-50 ${
                isActiveLink('beranda') 
                  ? 'text-[#008C99] bg-blue-50 font-medium' 
                  : 'text-gray-700 hover:text-[#008C99] hover:bg-gray-50'
              }`}
            >
              Beranda
            </button>

            {/* Tentang Kami */}
            <button
              onClick={() => {
                handleSectionNavigation('about');
                closeMobileMenu();
              }}
              className={`text-left px-6 py-4 transition-colors border-b border-gray-50 ${
                isActiveLink('about') 
                  ? 'text-[#008C99] bg-blue-50 font-medium' 
                  : 'text-gray-700 hover:text-[#008C99] hover:bg-gray-50'
              }`}
            >
              Tentang Kami
            </button>

            {/* Rumah Tangga - Mobile Dropdown */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => handleMobileDropdownToggle('rumahTangga')}
                className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${
                  isActiveLink('rumahTangga') || isActiveLink('/prakonsepsi') || isActiveLink('/kesiapan-relasional')
                    ? 'text-[#008C99] bg-blue-50 font-medium' 
                    : 'text-gray-700 hover:text-[#008C99] hover:bg-gray-50'
                }`}
              >
                Rumah Tangga
                <svg className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen.rumahTangga ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileDropdownOpen.rumahTangga && (
                <div className="bg-gray-50">
                  <Link href="/prakonsepsi" onClick={closeMobileMenu} className="block px-10 py-3 text-gray-600 hover:text-[#008C99] transition-colors">
                    Prakonsepsi
                  </Link>
                  <Link href="/kesiapan-relasional" onClick={closeMobileMenu} className="block px-10 py-3 text-gray-600 hover:text-[#008C99] transition-colors">
                    Kesiapan Relasional
                  </Link>
                </div>
              )}
            </div>

            {/* Keluarga & Parenting - Mobile Dropdown */}
            <div className="border-b border-gray-50">
              <button
                onClick={() => handleMobileDropdownToggle('keluargaParenting')}
                className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${
                  isActiveLink('parenting') || isActiveLink('/manajemen-stres') || isActiveLink('/stunting')
                    ? 'text-[#008C99] bg-blue-50 font-medium' 
                    : 'text-gray-700 hover:text-[#008C99] hover:bg-gray-50'
                }`}
              >
                Keluarga & Parenting
                <svg className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen.keluargaParenting ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileDropdownOpen.keluargaParenting && (
                <div className="bg-gray-50">
                  <Link href="/manajemen-stres" onClick={closeMobileMenu} className="block px-10 py-3 text-gray-600 hover:text-[#008C99] transition-colors">
                    Manajemen Stres
                  </Link>
                  <Link href="/stunting" onClick={closeMobileMenu} className="block px-10 py-3 text-gray-600 hover:text-[#008C99] transition-colors">
                    Stunting & Kesejahteraan Keluarga
                  </Link>
                </div>
              )}
            </div>

            {/* Artikel & Tips */}
            <Link
              href="/artikel-tips"
              onClick={closeMobileMenu}
              className={`block px-6 py-4 transition-colors border-b border-gray-50 ${
                isActiveLink('/artikel-tips') 
                  ? 'text-[#008C99] bg-blue-50 font-medium' 
                  : 'text-gray-700 hover:text-[#008C99] hover:bg-gray-50'
              }`}
            >
              Artikel & Tips
            </Link>

            {/* FAQ */}
            <Link
              href="/faq"
              onClick={closeMobileMenu}
              className={`block px-6 py-4 transition-colors border-b border-gray-50 ${
                isActiveLink('/faq') 
                  ? 'text-[#008C99] bg-blue-50 font-medium' 
                  : 'text-gray-700 hover:text-[#008C99] hover:bg-gray-50'
              }`}
            >
              FAQ
            </Link>

            {/* Kontak */}
            <button
              onClick={() => {
                handleSectionNavigation('contact');
                closeMobileMenu();
              }}
              className={`text-left px-6 py-4 transition-colors border-b border-gray-50 ${
                isActiveLink('contact') 
                  ? 'text-[#008C99] bg-blue-50 font-medium' 
                  : 'text-gray-700 hover:text-[#008C99] hover:bg-gray-50'
              }`}
            >
              Kontak
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS untuk animasi dropdown */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}

// Komponen wrapper untuk bagian yang menggunakan useSearchParams
function NavbarWithSearchParams() {
  return (
    <Suspense fallback={<NavbarFallback />}>
      <Navbar />
    </Suspense>
  );
}

export default NavbarWithSearchParams;