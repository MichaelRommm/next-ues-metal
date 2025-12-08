'use client';

import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<null | 'submitting' | 'success' | 'error'>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // WhatsApp Logic
        const text = `היי, אני רוצה הצעת מחיר.
שם: ${data.name}
טלפון: ${data.phone}
הודעה: ${data.message}`;

        const waLink = `https://wa.me/972535217010?text=${encodeURIComponent(text)}`;

        // Email Logic (AJAX)
        try {
            const res = await fetch("https://formsubmit.co/ajax/uesmetal@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    phone: data.phone,
                    message: data.message,
                    _subject: "פנייה חדשה מאתר U.E.S Metal"
                })
            });

            if (res.ok) {
                setStatus('success');
                // Open WhatsApp
                window.open(waLink, '_blank');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-[#212529] to-[#2c3034] text-white">
            <div className="container mx-auto px-4">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">צור קשר להצעת מחיר</h2>
                    <p className="text-white/60 text-lg">מוזמנים להשאיר פרטים ונחזור אליכם בהקדם</p>
                </div>

                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-800 font-bold mb-2">שם מלא</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-[#ff6b00] rounded-lg outline-none transition-all text-gray-900"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">טלפון</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                required
                                className="w-full px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-[#ff6b00] rounded-lg outline-none transition-all text-gray-900"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-800 font-bold mb-2">הודעה / תיאור העבודה</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full px-4 py-3 bg-gray-100 border border-transparent focus:bg-white focus:border-[#ff6b00] rounded-lg outline-none transition-all text-gray-900 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full py-4 font-bold rounded-lg text-lg shadow-lg transition-all transform 
                                ${status === 'submitting'
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#ff6b00] hover:bg-[#e65c00] hover:shadow-xl hover:-translate-y-1 text-white'
                                }`}
                        >
                            {status === 'submitting' ? 'שולח...' : 'שליחה'}
                        </button>

                        {status === 'success' && (
                            <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-bold animate-in fade-in">
                                הפנייה נשלחה בהצלחה! אנו מעבירים אותך ל-WhatsApp להשלמת השיחה...
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-bold animate-in fade-in">
                                אירעה שגיאה בשליחת הטופס. אנא נסה שנית או צור קשר טלפונית.
                            </div>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
}
