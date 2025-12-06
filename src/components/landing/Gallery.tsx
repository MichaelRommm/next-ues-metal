export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4 relative inline-block">
                        גלריית עבודות
                        <span className="block h-1 w-1/2 bg-[#ff6b00] mx-auto mt-4 rounded-full"></span>
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg">קצת מהעשייה היום-יומית שלנו</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {[
                        "https://images.unsplash.com/photo-1535970793482-07de93762dc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1622329712028-142c14041e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        "https://images.unsplash.com/photo-1599388145465-b1f47137f94d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    ].map((src, i) => (
                        <div key={i} className={`relative overflow-hidden group rounded-xl shadow-lg ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                            {/* Aspect Ratio Hack using padding-bottom if needed, but 'h-64' works for now */}
                            <div className="h-64 md:h-80 w-full relative">
                                <img
                                    src={src}
                                    alt={`Work ${i + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
