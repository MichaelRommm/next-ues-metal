'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-2">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 no-underline">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.jpg"
                                alt="U.E.S Metal Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="text-2xl font-black text-[#ff6b00] tracking-wider uppercase">
                            U.E.S Metal
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/#about" className="font-bold text-lg text-gray-800 hover:text-[#ff6b00] transition-colors relative group">
                            אודות
                            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#ff6b00] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/#gallery" className="font-bold text-lg text-gray-800 hover:text-[#ff6b00] transition-colors relative group">
                            גלריה
                            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#ff6b00] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/articles" className="font-bold text-lg text-gray-800 hover:text-[#ff6b00] transition-colors relative group">
                            מאמרים
                            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#ff6b00] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden text-gray-800 hover:text-[#ff6b00] focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="תפריט"
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>

                    {/* Socials & CTA (Hidden on small mobile, visible on larger screens) */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Icons */}
                        <a href="https://www.facebook.com/UESMETAL" target="_blank" aria-label="Facebook" className="hover:text-[#ff6b00] transition-colors"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/u.e.s_metal" target="_blank" aria-label="Instagram" className="hover:text-[#ff6b00] transition-colors"><i className="fab fa-instagram"></i></a>
                        <a href="http://www.youtube.com/@U.E.SMetal" target="_blank" aria-label="YouTube" className="hover:text-[#ff6b00] transition-colors"><i className="fab fa-youtube"></i></a>
                        <a href="tel:0535217010" className="btn btn-custom btn-sm ms-3 d-none d-lg-block text-base font-bold text-[#ff6b00] border-2 border-[#ff6b00] rounded-full px-4 py-1 hover:bg-[#ff6b00] hover:text-white transition-all">053-5217010</a>

                        <Link
                            href="/tools"
                            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#ff6b00] text-[#ff6b00] font-bold hover:bg-[#ff6b00] hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            <span>מרכז ידע וכלים</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13z" />
                                <path d="M4.854 5.646a.5.5 0 0 1 0 .708L1.707 9.5l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 9.5l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                            </svg>
                        </Link>
                    </div>

                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-4 space-y-4 animate-in slide-in-from-top-2">
                        <Link
                            href="/#about"
                            className="font-bold text-lg text-gray-800 hover:text-[#ff6b00]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            אודות
                        </Link>
                        <Link
                            href="/#gallery"
                            className="font-bold text-lg text-gray-800 hover:text-[#ff6b00]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            גלריה
                        </Link>
                        <Link
                            href="/articles"
                            className="font-bold text-lg text-gray-800 hover:text-[#ff6b00]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            מאמרים
                        </Link>
                        <div className="w-full h-px bg-gray-100 my-2"></div>
                        <Link
                            href="/tools"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#ff6b00] text-[#ff6b00] font-bold hover:bg-[#ff6b00] hover:text-white transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span>מרכז ידע וכלים</span>
                        </Link>
                        <div className="flex gap-6 mt-2">
                            <a href="https://www.facebook.com/UESMETAL" target="_blank" aria-label="Facebook" className="text-2xl text-gray-600 hover:text-[#ff6b00]"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/u.e.s_metal" target="_blank" aria-label="Instagram" className="text-2xl text-gray-600 hover:text-[#ff6b00]"><i className="fab fa-instagram"></i></a>
                            <a href="tel:0535217010" className="text-2xl text-gray-600 hover:text-[#ff6b00]"><i className="fas fa-phone"></i></a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
