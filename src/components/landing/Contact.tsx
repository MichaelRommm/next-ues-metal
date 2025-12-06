export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-[#212529] to-[#2c3034] text-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">צור קשר להצעת מחיר</h2>
                    <p className="text-white/60 text-lg">מוזמנים להשאיר פרטים ונחזור אליכם בהקדם</p>
                </div>

                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                    <form action="https://formsubmit.co/uesmetal@gmail.com" method="POST" className="space-y-6">
                        <input type="hidden" name="_subject" value="פנייה חדשה מאתר U.E.S Metal" />
                        <input type="hidden" name="_honey" style={{ display: 'none' }} />

                        <div>
                            <label className="block text-gray-800 font-bold mb-2">שם מלא</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-[#ff6b00] rounded-lg outline-none transition-all text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-800 font-bold mb-2">טלפון</label>
                            <input
                                type="tel"
                                name="phone"
                                className="w-full px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-[#ff6b00] rounded-lg outline-none transition-all text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-800 font-bold mb-2">הודעה / תיאור העבודה</label>
                            <textarea
                                name="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-[#ff6b00] rounded-lg outline-none transition-all text-gray-900 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-[#ff6b00] hover:bg-[#e65c00] text-white font-bold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            שליחה
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
