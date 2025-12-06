export default function PhysicsView() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-lg">
                <h2 className="text-[#ff6d00] border-r-4 border-[#ff6d00] pr-4 text-2xl font-bold mb-4">
                    הפיזיקה של הריתוך
                </h2>
                <p className="mb-4 text-gray-300">
                    הבסיס המדעי הוא המפתח לתוצאות עקביות ומקצועיות.
                </p>

                <div className="bg-[#2962ff]/10 border border-[#2962ff] p-4 rounded-lg mb-6">
                    <span className="text-[#2962ff] font-bold block mb-2">משולש החשמל:</span>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                        <li><strong className="text-white">וולט (V):</strong> לחץ/מתח. קובע את אורך הקשת ורוחב התפר.</li>
                        <li><strong className="text-white">אמפר (A):</strong> זרם. קובע את כמות החום והחדירה (Penetration).</li>
                        <li><strong className="text-white">התנגדות (R):</strong> כל מה שמפריע לזרם (חלודה, כבל ארוך, מרחק מהמתכת).</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold border-b border-[#333] pb-2 text-white">מונחים קריטיים נוספים</h3>

                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            Duty Cycle (נצילות המכונה)
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                            כמה זמן המכונה יכולה לעבוד רצוף ב-10 דקות.<br />
                            למשל: 60% ב-200A אומר: 6 דקות ריתוך, 4 דקות מנוחה לקירור. חריגה תגרום למכונה להיכנס להגנה תרמית.
                        </div>
                    </details>

                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            HAZ (אזור מושפע חום)
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                            האזור ליד הריתוך שלא נמס, אבל המבנה המטלורגי שלו השתנה בגלל החום. זהו האזור החלש ביותר שבו לרוב נוצרים סדקים.
                        </div>
                    </details>

                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            OCV (מתח ריקם)
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                            המתח שהמכונה מוציאה כשהיא דלוקה אבל לא מרתכים. מתח גבוה יותר = הצתה קלה יותר (חשוב באלקטרודות כמו 6010).
                        </div>
                    </details>
                </div>

            </div>
        </div>
    );
}
