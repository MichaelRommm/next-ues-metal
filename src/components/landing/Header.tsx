import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-2">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 no-underline">
                        {/* Using a text fallback since we might not have the logo file yet */}
                        <div className="text-2xl font-black text-[#ff6b00] tracking-wider uppercase">
                            U.E.S Metal
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#about" className="font-medium text-gray-700 hover:text-[#ff6b00] transition-colors">
                            אודות
                        </Link>
                        <Link href="#gallery" className="font-medium text-gray-700 hover:text-[#ff6b00] transition-colors">
                            גלריה
                        </Link>
                    </div>

                    {/* Socials & CTA */}
                    <div className="flex items-center gap-4">
                        {/* Icons */}
                        <a href="https://www.facebook.com/UESMETAL" target="_blank" className="hover:text-[#ff6b00] transition-colors"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/u.e.s_metal" target="_blank" className="hover:text-[#ff6b00] transition-colors"><i className="fab fa-instagram"></i></a>
                        <a href="http://www.youtube.com/@U.E.SMetal" target="_blank" className="hover:text-[#ff6b00] transition-colors"><i className="fab fa-youtube"></i></a>
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
            </div>
        </nav>
    );
}
