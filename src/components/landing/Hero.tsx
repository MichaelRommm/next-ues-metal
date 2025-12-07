import Link from 'next/link';

export default function Hero() {
    return (
        <header className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Overlay & Image */}
            <div className="absolute inset-0 bg-black/70 z-10"></div>
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
                }}
            ></div>

            <div className="container relative z-20 px-4">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-2">
                    U.E.S Metal
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
                    עבודות מתכת ומסגרות ברמה הנדסית
                </h2>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                    פרויקטים מיוחדים בביצוע מומחה. אומנות בברזל, נירוסטה ואלומיניום.<br />
                    דיוק, אסתטיקה ועמידה בתקנים המחמירים ביותר.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-[#ff6b00] hover:bg-[#e65c00] text-white font-bold rounded-full text-lg transition-all shadow-[0_5px_15px_rgba(255,107,0,0.4)] hover:shadow-[0_8px_20px_rgba(255,107,0,0.6)] hover:-translate-y-1"
                    >
                        ליצירת קשר
                    </Link>
                    <Link
                        href="/tools"
                        className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black text-white font-bold rounded-full text-lg transition-all"
                    >
                        כניסה למחשבוני ריתוך
                    </Link>
                </div>
            </div>
        </header>
    );
}
