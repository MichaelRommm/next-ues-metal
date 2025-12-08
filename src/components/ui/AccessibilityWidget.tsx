'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [fontSizeLevel, setFontSizeLevel] = useState(0); // 0 = normal, 1 = large, 2 = extra large
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const [isDragging, setIsDragging] = useState(false);

    // Refs for drag and click detection
    const dragRef = useRef<{ startX: number; startY: number; initialLeft: number; initialBottom: number } | null>(null);
    const isClickRef = useRef(true);

    // Using window events for smoother drag
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !dragRef.current) return;
            e.preventDefault();
            const dx = e.clientX - dragRef.current.startX;
            const dy = e.clientY - dragRef.current.startY;

            // If moved more than 5px, it's a drag, not a click
            if (isClickRef.current && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
                isClickRef.current = false;
            }

            setPosition({
                x: dragRef.current.initialLeft + dx,
                y: dragRef.current.initialBottom - dy // y is bottom based
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging || !dragRef.current) return;
            // prevent default to stop scrolling while dragging widget

            const touch = e.touches[0];
            const dx = touch.clientX - dragRef.current.startX;
            const dy = touch.clientY - dragRef.current.startY;

            if (isClickRef.current && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
                isClickRef.current = false;
            }

            setPosition({
                x: dragRef.current.initialLeft + dx,
                y: dragRef.current.initialBottom - dy
            });
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);


    const handleDragStart = (clientX: number, clientY: number) => {
        setIsDragging(true);
        isClickRef.current = true; // Reset - assume click start
        dragRef.current = {
            startX: clientX,
            startY: clientY,
            initialLeft: position.x,
            initialBottom: position.y
        };
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
        <div
            className="fixed z-[9999] font-sans"
            style={{ left: `${position.x}px`, bottom: `${position.y}px` }}
        >
            {/* Menu */}
            <div
                id="accessibility-menu"
                role="region"
                aria-label="תפריט אפשרויות נגישות"
                className={`
                    absolute bottom-16 left-0 bg-white shadow-2xl rounded-xl p-4 w-64 border border-gray-200 
                    transition-all duration-300 origin-bottom-left
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
            >
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="font-bold text-gray-800">תפריט נגישות</h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                        aria-label="סגור תפריט"
                    >
                        <i className="fas fa-times" aria-hidden="true"></i>
                    </button>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={increaseFontSize}
                        className="w-full flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span>הגדל טקסט</span>
                        <i className="fas fa-font" aria-hidden="true"></i>
                    </button>

                    <button
                        onClick={toggleHighContrast}
                        className={`w-full flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors text-right focus:outline-none focus:ring-2 focus:ring-blue-500 ${isHighContrast ? 'bg-yellow-100 text-black' : ''}`}
                    >
                        <span>ניגודיות גבוהה</span>
                        <i className="fas fa-adjust" aria-hidden="true"></i>
                    </button>

                    <Link
                        href="/accessibility"
                        className="flex items-center justify-between p-2 rounded hover:bg-gray-100 transition-colors text-right text-black no-underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span>הצהרת נגישות</span>
                        <i className="fas fa-file-alt" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                id="accessibility-toggle"
                aria-controls="accessibility-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "סגור תפריט נגישות" : "פתח תפריט נגישות"}
                onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
                onClick={(e) => {
                    if (isClickRef.current) toggleMenu();
                }}
                className="w-12 h-12 bg-[#0052cc] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#003d99] transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-move"
                style={{ touchAction: 'none' }} // Crucial for preventing scroll while dragging on mobile
            >
                <i className="fas fa-universal-access text-2xl" aria-hidden="true"></i>
            </button>
        </div>
    );
}
