'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [fontSizeLevel, setFontSizeLevel] = useState(0); // 0 = normal, 1 = large, 2 = extra large

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleHighContrast = () => {
        setIsHighContrast(!isHighContrast);
        document.documentElement.classList.toggle('high-contrast');
    };

    const increaseFontSize = () => {
        const newLevel = (fontSizeLevel + 1) % 3;
        setFontSizeLevel(newLevel);

        // Remove existing font classes
        document.documentElement.classList.remove('font-size-large', 'font-size-xlarge');

        // Add new class based on level
        if (newLevel === 1) document.documentElement.classList.add('font-size-large');
        if (newLevel === 2) document.documentElement.classList.add('font-size-xlarge');
    };

    return (
        <div className="fixed left-5 bottom-5 z-[9999] font-sans">
            {/* Menu */}
            <div
                className={`
                    absolute bottom-16 left-0 bg-white shadow-2xl rounded-xl p-4 w-64 border border-gray-200 
                    transition-all duration-300 origin-bottom-left
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
            >
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="font-bold text-gray-800">תפריט נגישות</h3>
                    <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-800" aria-label="סגור תפריט">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={increaseFontSize}
                        className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors text-right"
                    >
                        <span>הגדל טקסט</span>
                        <i className="fas fa-font"></i>
                    </button>

                    <button
                        onClick={toggleHighContrast}
                        className={`w-full flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors text-right ${isHighContrast ? 'bg-yellow-100 text-black' : ''}`}
                    >
                        <span>ניגודיות גבוהה</span>
                        <i className="fas fa-adjust"></i>
                    </button>

                    <Link
                        href="/accessibility"
                        className="flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors text-right text-black no-underline"
                    >
                        <span>הצהרת נגישות</span>
                        <i className="fas fa-file-alt"></i>
                    </Link>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleMenu}
                aria-label="פתח תפריט נגישות"
                className="w-12 h-12 bg-[#0052cc] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#003d99] transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <i className="fas fa-universal-access text-2xl"></i>
            </button>
        </div>
    );
}
