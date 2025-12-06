export default function MigView() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-lg">
                <h2 className="text-[#ff6d00] border-r-4 border-[#ff6d00] pr-4 text-2xl font-bold mb-4">
                    MIG/MAG Welding
                </h2>
                <p className="mb-4 text-gray-300">
                    תהליך חצי-אוטומטי מהיר ויעיל.
                </p>

                <div className="bg-[#2962ff]/10 border border-[#2962ff] p-4 rounded-lg mb-6">
                    <span className="text-[#2962ff] font-bold block mb-2">מה ההבדל בין MIG ל-MAG?</span>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                        <li><strong className="text-white">MIG (Metal Inert Gas):</strong> גז אדיש (ארגון, הליום). משמש לאלומיניום, נחושת ונירוסטה.</li>
                        <li><strong className="text-white">MAG (Metal Active Gas):</strong> גז פעיל (CO2 או תערובת Mix). משמש לפלדה שחורה (ברזל). הגז משפיע על החדירה והכימיה של הריתוך.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            Pulsed MIG (פולסים)
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                            טכנולוגיה מתקדמת בה המכונה מעבירה את הזרם בפעימות (Peak ו-Base).<br />
                            <strong>היתרונות:</strong> ריתוך ללא נתזים (Spatter free), פחות חום בחלק (מעולה לפחים דקים ונירוסטה), ושליטה מעולה בפוזיציות.
                        </div>
                    </details>

                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            ריתוך נירוסטה במיג
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                            דורש גז מיוחד (לרוב 98% ארגון + 2% CO2 או תערובות "Tri-Mix").<br />
                            אסור להשתמש ב-CO2 נקי (יגרום לחלודה). נדרש חוט נירוסטה תואם (308L/316L).
                        </div>
                    </details>

                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            אלומיניום - דגשים
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                            חובה: גז ארגון נקי, ליינר טפלון, גלגלי הנעה U-Groove.<br />
                            טכניקה: PUSH בלבד כדי לנקות את התחמוצת (Cleaning action).
                        </div>
                    </details>
                </div>

            </div>
        </div>
    );
}
