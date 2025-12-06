export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Why Choose Us */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4 relative inline-block">
                        למה לבחור ב-U.E.S Metal?
                        <span className="block h-1 w-1/2 bg-[#ff6b00] mx-auto mt-4 rounded-full"></span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: "fa-medal", title: "סטנדרט בינלאומי", text: "כל עבודה מבוצעת בסטנדרטים הגבוהים ביותר, תוך שימוש בידע הנדסי מתקדם והקפדה על תקני איכות מחמירים." },
                        { icon: "fa-tools", title: "ציוד קצה מתקדם", text: "שימוש בציוד באיכות הגבוה ביותר ובטכניקות מתקדמות המבטיחות חוזק מבני וגימור אסתטי ונקי." },
                        { icon: "fa-pencil-ruler", title: "תכנון וביצוע", text: "יכולת לקחת רעיון או שרטוט אדריכלי ולהפוך אותו למוצר מוגמר, תוך מתן פתרונות יצירתיים בשטח." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-transparent hover:border-[#ff6b00] hover:-translate-y-2">
                            <div className="text-5xl text-[#ff6b00] mb-6">
                                {/* Placeholder for FontAwesome icon */}
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Instructor Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 lg:p-12 rounded-3xl shadow-xl">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            {/* Offset square decoration */}
                            <div className="absolute top-4 left-4 w-full h-full border-4 border-[#ff6b00] rounded-2xl z-0 hidden md:block"></div>
                            <img
                                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="המומחה"
                                className="relative z-10 w-full rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 text-right">
                        <h5 className="text-[#ff6b00] font-bold tracking-wider uppercase mb-2">המומחה מאחורי העבודה</h5>
                        <h2 className="text-4xl font-black mb-6 leading-tight">ידע של מדריך - ביצוע של אומן</h2>
                        <p className="text-xl text-gray-500 mb-6 font-light">
                            נעים להכיר, אני המנהל והמבצע הראשי ב-U.E.S Metal.
                            בנוסף לביצוע עבודות מסגרות מורכבות, אני משמש כמרצה ומדריך ריתוך במכללה מובילה.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            כשאתם מזמינים עבודה מ-U.E.S Metal, אתם מקבלים את השקט הנפשי בידיעה שהפרויקט מבוצע על ידי אדם שמכשיר את דור העתיד של הרתכים. הקפדה על תקנים, דיוק הנדסי וגימור מושלם הם לא רק סיסמה - הם חומר הלימוד שלי.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["הנדסאי בניין מוסמך", "הסמכת ריתוך בינ\"ל 6G", "15 שנות ניסיון שטח", "מדריך ריתוך מוסמך"].map((cred, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00]">
                                        ✓
                                    </div>
                                    <span className="font-medium">{cred}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
