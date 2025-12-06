export default function Footer() {
    return (
        <footer className="bg-[#111] py-12 border-t border-[#333] text-white">
            <div className="container mx-auto px-4 text-center">

                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-white/90">U.E.S Metal</h3>

                <div className="flex justify-center gap-6 mb-8 text-2xl">
                    <a href="https://www.facebook.com/UESMETAL" target="_blank" className="text-gray-400 hover:text-[#ff6b00] transition-colors hover:-translate-y-1 transform duration-300"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/u.e.s_metal" target="_blank" className="text-gray-400 hover:text-[#ff6b00] transition-colors hover:-translate-y-1 transform duration-300"><i className="fab fa-instagram"></i></a>
                    <a href="http://www.youtube.com/@U.E.SMetal" target="_blank" className="text-gray-400 hover:text-[#ff6b00] transition-colors hover:-translate-y-1 transform duration-300"><i className="fab fa-youtube"></i></a>
                </div>

                <div className="mb-8">
                    <a href="tel:0535217010" className="inline-block text-3xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:text-[#ff6b00] transition-all">
                        053-5217010
                    </a>
                </div>

                <div className="border-t border-[#222] pt-8 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} U.E.S Metal. כל הזכויות שמורות.</p>
                </div>
            </div>
        </footer>
    );
}
