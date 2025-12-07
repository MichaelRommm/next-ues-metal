import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

export default function AccessibilityStatement() {
    return (
        <div className="min-h-screen bg-white text-gray-900" dir="rtl">
            <Header />
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-black mb-8">הצהרת נגישות</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="mb-6">
                        אנו ב-U.E.S Metal רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות ובשיפור השירות הניתן ללקוחות עם מוגבלות.
                        לשם כך הושקעו משאבים רבים בהנגשת האתר, במטרה להקל על השימוש בו וכן להפוך את השירותים שלנו לזמינים יותר עבור אנשים עם מוגבלות.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">רמת הנגישות</h2>
                    <p className="mb-6">
                        אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג 2013.
                        האתר תואם את המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ואת המלצות מסמך WCAG2.0 מאת ארגון W3C.
                        כמו כן, האתר מותאם לתצוגה בדפדפנים הנפוצים ולשימוש בטלפון הסלולרי.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">תיקונים שבוצעו</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>האתר מותאם לניווט במקלדת.</li>
                        <li>נוספו תיאורים טקסטואליים (Alt Text) לתמונות עבור קוראי מסך.</li>
                        <li>הוגדרו כותרות בצורה היררכית ונכונה.</li>
                        <li>נשמר יחס קונטרסט (ניגודיות) תקין בין הטקסט לרקע.</li>
                        <li>טפסי יצירת הקשר הונגשו וכוללים תוויות ברורות.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-4">סייגים לנגישות</h2>
                    <p className="mb-6">
                        למרות מאמצנו להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים שטרם הונגשו.
                        אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">יצירת קשר בנושא נגישות</h2>
                    <p className="mb-6">
                        אם נתקלתם בבעיה או שיש לכם הערה בנושא נגישות, נשמח לשמוע מכם ולטפל בפנייה בהקדם.
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <p className="font-bold mb-2">פרטי רכז הנגישות:</p>
                        <ul className="space-y-1">
                            <li><strong>שם:</strong> צוות U.E.S Metal</li>
                            <li><strong>טלפון:</strong> 053-5217010</li>
                            <li><strong>אימייל:</strong> <a href="mailto:uesmetal@gmail.com" className="text-[#ff6b00] hover:underline">uesmetal@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
