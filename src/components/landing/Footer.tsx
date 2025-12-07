export default function Footer() {
    return (
        <footer className="bg-[#111] py-12 border-t border-[#333] text-white">
            <div className="container mx-auto px-4 text-center">

                <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-white/90">U.E.S Metal</h3>

                <div className="flex justify-center gap-6 mb-8 text-2xl">
                    <a href="https://www.facebook.com/UESMETAL" target="_blank" aria-label="Facebook" className="text-gray-400 hover:text-[#ff6b00] transition-colors hover:-translate-y-1 transform duration-300"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/u.e.s_metal" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-[#ff6b00] transition-colors hover:-translate-y-1 transform duration-300"><i className="fab fa-instagram"></i></a>
                    <a href="http://www.youtube.com/@U.E.SMetal" target="_blank" aria-label="YouTube" className="text-gray-400 hover:text-[#ff6b00] transition-colors hover:-translate-y-1 transform duration-300"><i className="fab fa-youtube"></i></a>
                </div>

                <div className="mb-8">
                    <a href="tel:0535217010" className="inline-block text-3xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:text-[#ff6b00] transition-all">
                        053-5217010
                    </a>
                </div>

                <div className="border-t border-[#222] pt-8 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} U.E.S Metal. כל הזכויות שמורות. | <a href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</a></p>
                </div>

                <div className="mt-4 text-[10px] text-[#222] hover:text-gray-600 transition-colors duration-300">
                    <div itemScope itemType="https://schema.org/LocalBusiness">
                        <meta itemProp="name" content="Whale Group – פתרונות AI לעסקים" />
                        <meta itemProp="url" content="https://whale.co.il/" />
                        <meta itemProp="image" content="https://whale.co.il/WhaleGroup_horizont_logo.png" />
                        <meta itemProp="telephone" content="+97233034757" />
                        <meta itemProp="openingHours" content="Su-Th 09:00-18:00" />
                        <meta itemProp="email" content="info@whale.co.il" />

                        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                            <meta itemProp="streetAddress" content="החשמונאים 3" />
                            <meta itemProp="addressLocality" content="בני ברק" />
                            <meta itemProp="addressCountry" content="IL" />
                        </span>

                        <p>
                            פותח ומתוחזק בעזרת:{" "}
                            <a
                                href="https://whale.co.il/"
                                target="_blank"
                                rel="noopener"
                                itemProp="url"
                                title="Whale Group – פיתוח פלטפורמות תומכות AI, אינטגרציות ובוטים חכמים"
                                className="hover:text-gray-500 transition-colors"
                            >
                                Whale Group
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
