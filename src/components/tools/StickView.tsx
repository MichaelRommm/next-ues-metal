export default function StickView() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-lg">
                <h2 className="text-[#ff6d00] border-r-4 border-[#ff6d00] pr-4 text-2xl font-bold mb-4">
                    אלקטרודה (SMAW)
                </h2>
                <p className="mb-4 text-gray-300">
                    השיטה הוורסטילית ביותר. חשוב להכיר את השפעת הקוטביות.
                </p>

                <div className="bg-[#2962ff]/10 border border-[#2962ff] p-4 rounded-lg mb-6">
                    <span className="text-[#2962ff] font-bold block mb-2">קוטביות (Polarity):</span>
                    <div className="text-gray-300 text-sm">
                        <strong className="text-white">DCEP (+):</strong> ידית בפלוס. 70% מהחום באלקטרודה. חדירה עמוקה. (ברירת המחדל לרוב האלקטרודות).
                    </div>
                </div>

                <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer mb-6">
                    <summary className="font-bold text-white flex justify-between list-none items-center">
                        מתי משתמשים ב-DCEN (-)?
                        <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                        <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                    </summary>
                    <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                        <strong>ידית במינוס (Straight Polarity).</strong><br />
                        במצב זה האלקטרודה קרה יותר והחומר מקבל פחות חום. משתמשים בזה ל:<br />
                        1. ריתוך פחים דקים (למנוע חורים).<br />
                        2. אלקטרודות מיוחדות לציפוי קשיח.<br />
                        3. לעיתים בשורש כדי למנוע קריסה (Burn through).
                    </div>
                </details>

                <h3 className="text-xl font-bold border-b border-[#333] pb-2 text-white mb-4">סוגי אלקטרודות נפוצים:</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300 border-collapse">
                        <thead>
                            <tr className="bg-white/5 text-[#ff6d00]">
                                <th className="p-2 border-b border-[#333]">סוג</th>
                                <th className="p-2 border-b border-[#333]">שימוש</th>
                                <th className="p-2 border-b border-[#333]">הערה</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2 border-b border-[#333] text-center">6013</td><td className="p-2 border-b border-[#333]">מסגרות קלה</td><td className="p-2 border-b border-[#333]">חדירה רדודה, סלאג יורד בקלות</td></tr>
                            <tr><td className="p-2 border-b border-[#333] text-center">7018</td><td className="p-2 border-b border-[#333]">קונסטרוקציה</td><td className="p-2 border-b border-[#333]">חזקה, Low Hydrogen (חייבת ייבוש)</td></tr>
                            <tr><td className="p-2 border-b border-[#333] text-center">6010</td><td className="p-2 border-b border-[#333]">שורש צנרת</td><td className="p-2 border-b border-[#333]">תאית, קשת חודרת ואגרסיבית</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 bg-[#ff6d00]/10 border-r-4 border-[#ff6d00] p-4 text-[#ffd180] text-sm italic">
                    <strong>טיפ מקצוען U.E.S:</strong> באלקטרודות בסיסיות (7018), הדלקה נעשית בשיטת "הקשה" (Tapping) ולא "גפרור" כדי למנוע הידבקות ולשמור על הציפוי בקצה.
                </div>

            </div>
        </div>
    );
}
