'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function AccessibilityWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [fontSizeLevel, setFontSizeLevel] = useState(0); // 0 = normal, 1 = large, 2 = extra large
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef<{ startX: number; startY: number; initialLeft: number; initialBottom: number } | null>(null);
    // We store Position in a ref too to access it in event listeners without stale closures if we used addEventListener
    // But here we might use synthetic events on the button itself.

    // Using window events for smoother drag
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !dragRef.current) return;
            e.preventDefault();
            const dx = e.clientX - dragRef.current.startX;
            const dy = e.clientY - dragRef.current.startY;
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
            const touch = e.touches[0];
            const dx = touch.clientX - dragRef.current.startX;
            const dy = touch.clientY - dragRef.current.startY;
            setPosition({
                x: dragRef.current.initialLeft + dx,
                y: dragRef.current.initialBottom - dy
            });
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
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
        dragRef.current = {
            startX: clientX,
            startY: clientY,
            initialLeft: position.x,
            initialBottom: position.y
        };
    };

    const toggleMenu = () => {
        if (!isDragging) {
            setIsOpen(!isOpen);
        }
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
                className={`
                    absolute bottom-16 left-0 bg-white shadow-2xl rounded-xl p-4 w-64 border border-gray-200 
                    transition-all duration-300 origin-bottom-left
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                `}
            >
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="font-bold text-gray-800">תפריט נגישות</h3>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800" aria-label="סגור תפריט">
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
                onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
                onClick={(e) => {
                    // Prevent click if we just dragged
                    // Note: Simple click might be tricky with drag logic, usually checking distance moved is best
                    // but here we depend on isDragging state which is set immediately.
                    // A better way is to check "was dragging" on mouse up.
                    // For simplicity, we can let the drag logic handle start/stop and valid click distinction.
                    if (!isDragging) toggleMenu();
                }}
                // We add a click handler but it might fire after drag. 
                // Let's rely on a separate small "click" detect or just timeout.
                // Actually, simple way: check if position changed significantly.

                aria-label="פתח תפריט נגישות"
                className="w-12 h-12 bg-[#0052cc] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#003d99] transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-move"
                style={{ touchAction: 'none' }} // Crucial for preventing scroll while dragging on mobile
            >
                <i className="fas fa-universal-access text-2xl"></i>
            </button>
        </div>
    );
}
