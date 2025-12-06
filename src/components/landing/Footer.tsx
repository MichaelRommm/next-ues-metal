export default function Footer() {
    return (
        <footer className="bg-[#111] py-8 border-t border-[#333] text-center text-white">
            <div className="container mx-auto px-4">
                <a href="tel:0535217010" className="inline-block text-2xl font-bold hover:text-[#ff6b00] transition-colors mb-4">
                    053-5217010
                </a>
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} U.E.S Metal.
                </p>
            </div>
        </footer>
    );
}
