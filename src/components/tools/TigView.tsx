export default function TigView() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-lg">
                <h2 className="text-[#ff6d00] border-r-4 border-[#ff6d00] pr-4 text-2xl font-bold mb-4">
                    TIG (GTAW)
                </h2>
                <p className="mb-4 text-gray-300">
                    האומנות של הריתוך. שליטה מלאה בכל משתנה.
                </p>

                <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer mb-6" open>
                    <summary className="font-bold text-white flex justify-between list-none items-center">
                        ⚡ שיטות הצתה (Arc Starting)
                        <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                        <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                    </summary>
                    <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                        <p className="mb-2">הדרך בה הקשת נוצרת משפיעה על איכות ההתחלה ועל המכשור סביבנו:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>HF (High Frequency):</strong> הצתה בתדר גבוה. ללא מגע. לוחצים והניצוץ "קופץ" לאוויר. חובה לאלומיניום והשיטה הכי נקייה.</li>
                            <li><strong>Lift Arc:</strong> הצתת מגע. נוגעים עם הטונגסטן, לוחצים, ומרימים. אין הפרעות רדיו - מעולה לעבודה על רכבים עם מחשבים (ECU) רגישים.</li>
                            <li><strong>Scratch Start:</strong> כמו באלקטרודה. שריטה על החומר. שיטה ישנה, גורמת לזיהום הטונגסטן במידי.</li>
                        </ul>
                    </div>
                </details>

                <h3 className="text-xl font-bold border-b border-[#333] pb-2 text-white mb-4">כיווני מכונה בסיסיים</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-6">
                    <li><strong>Pre-Flow:</strong> הזרמת גז לפני הקשת (0.5 שניות). מגן על הטונגסטן בהצתה.</li>
                    <li><strong>Post-Flow:</strong> הזרמת גז אחרי סיום הריתוך. קריטי! לשמור על הטונגסטן וסוף התפר מכוויות (כ-1 שניה לכל 10 אמפר).</li>
                    <li><strong>Gas Lens:</strong> מומלץ מאוד להרכיב עדשת גז לזרימה למינרית וכיסוי גז טוב יותר.</li>
                </ul>

                <h3 className="text-xl font-bold border-b border-[#333] pb-2 text-white mb-4">התאמת חומרים</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300 border-collapse">
                        <thead>
                            <tr className="bg-white/5 text-[#ff6d00]">
                                <th className="p-2 border-b border-[#333]">חומר</th>
                                <th className="p-2 border-b border-[#333]">זרם</th>
                                <th className="p-2 border-b border-[#333]">סוג טונגסטן</th>
                                <th className="p-2 border-b border-[#333]">הערה</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="p-2 border-b border-[#333] text-center">פלדה/נירוסטה</td><td className="p-2 border-b border-[#333]">DC</td><td className="p-2 border-b border-[#333]">אדום/כחול/זהב</td><td className="p-2 border-b border-[#333]">חוד מחודד כמו עיפרון</td></tr>
                            <tr><td className="p-2 border-b border-[#333] text-center">אלומיניום</td><td className="p-2 border-b border-[#333]">AC</td><td className="p-2 border-b border-[#333]">כחול/ירוק/סגול</td><td className="p-2 border-b border-[#333]">חוד מעוגל (Ball)</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 bg-[#ff6d00]/10 border-r-4 border-[#ff6d00] p-4 text-[#ffd180] text-sm italic">
                    <strong>AC Balance:</strong> כיוון קריטי באלומיניום. יותר % Cleaning מנקה את השחור אך שוחק את הטונגסטן. הסטנדרט הוא 30-35% ניקוי.
                </div>

            </div>
        </div>
    );
}
