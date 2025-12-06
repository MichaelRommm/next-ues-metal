export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Using simple HTML/Markdown-like string for now
    date: string;
    author: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'welding-safety-essentials',
        title: 'בטיחות בריתוך: המדריך המלא למתחילים',
        excerpt: 'לפני שמדליקים את המכונה - כל מה שצריך לדעת על ציוד מגן, אוורור ושמירה על העיניים.',
        date: '2025-12-06',
        author: 'אלכס שולמן',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
        content: `
            <p class="mb-4">ריתוך הוא מקצוע מתגמל, אך הוא טומן בחובו סכנות. הגנה נכונה היא לא המלצה - היא חובה.</p>
            
            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">1. מסיכת ריתוך (קסדה)</h3>
            <p class="mb-4">לעולם אל תסתכלו על הקשת ללא הגנה. קרינת UV יכולה לגרום לכוויות בעיניים ("Arc Eye") תוך שניות. וודאו שהמסיכה שלכם תקינה והזכוכית נקייה.</p>

            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">2. ביגוד מגן</h3>
            <p class="mb-4">השתמשו בבגדים מכותנה מלאה או עור. בדים סינתטיים נמסים ונדבקים לעור. הקפידו על שרוולים ארוכים וכפפות ריתוך ייעודיות.</p>
            
            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">3. אוורור</h3>
            <p class="mb-4">עשן הריתוך מכיל מתכות וגזים רעילים (במיוחד בגלוון). רתכו תמיד במקום מאוורר או השתמשו במנדף.</p>
        `
    },
    {
        id: '2',
        slug: 'mig-vs-tig-vs-stick',
        title: 'מה ההבדל? MIG vs TIG vs Stick',
        excerpt: 'סקרנו את ההבדלים העיקריים בין שיטות הריתוך הנפוצות כדי לעזור לך לבחור את השיטה הנכונה לפרויקט הבא.',
        date: '2025-12-05',
        author: 'אלכס שולמן',
        image: 'https://images.unsplash.com/photo-1542826799-8dcb9b36209c?auto=format&fit=crop&w=800&q=80',
        content: `
            <p class="mb-4">לכל שיטת ריתוך יש את היתרונות והחסרונות שלה. הבחירה תלויה בחומר, במיקום העבודה ובמיומנות הרתך.</p>
            
            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">Stick (אלקטרודה)</h3>
            <p class="mb-4">השיטה הוותיקה והאמינה. מעולה לעבודות חוץ, רוח ולכלוך. הציוד זול ונייד. חסרון: דורש ניקוי של ה"שלקה" (Slag) ופחות מתאים לפחים דקים.</p>

            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">MIG (סליל)</h3>
            <p class="mb-4">השיטה המהירה ביותר. לוחצים על ההדק ומרתכים. מעולה לייצור המוני. חסרון: דורש בלון גז (פחות נייד) ורגיש לרוח.</p>

            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">TIG (ארגון)</h3>
            <p class="mb-4">השיטה המדויקת והנקייה ביותר. שליטה מלאה בחום. מתאים לנירוסטה ואלומיניום ברמה אסתטית גבוהה. חסרון: איטי ודורש מיומנות גבוהה מאוד ("יד של מנתח").</p>
        `
    },
    {
        id: '3',
        slug: 'how-to-choose-electrode',
        title: 'איך לבחור אלקטרודה? 6013 או 7018?',
        excerpt: 'המספרים על האלקטרודה הם לא מקריים. בואו נבין מה הם אומרים ומתי להשתמש בכל סוג.',
        date: '2025-12-01',
        author: 'אלכס שולמן',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
        content: `
            <p class="mb-4">ההבדל בין אלקטרודה 6013 ל-7018 הוא שמיים וארץ בחוזק ובצורת העבודה.</p>
            
            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">6013 - "הידידותית"</h3>
            <p class="mb-4">זוהי אלקטרודה לשימוש כללי (מסגרות קלה, שערים, סורגים). קלה להצתה, קשת רכה, שלאקה יורדת בקלות. חדירה בינונית/רדודה.</p>

            <h3 class="text-xl font-bold text-[#ff6b00] mb-2">7018 - "החזקה"</h3>
            <p class="mb-4">נקראת גם "בסיסית" או Low Hydrogen. משמשת לקונסטרוקציות כבדות, צנרת לחץ ועגורנים. נותנת ריתוך חזק וגמיש מאוד. דורשת ייבוש בתנור ואחסון זהיר למניעת לחות.</p>

            <div class="bg-gray-800 p-4 border-r-4 border-[#ff6b00] mt-4">
                <strong>טיפ:</strong> אם אתם בונים מדף למחסן - 6013 תספיק. אם אתם בונים נגרר לרכב או גגון כבד - לכו על 7018.
            </div>
        `
    }
];
