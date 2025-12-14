'use client';

import { useState } from 'react';

export default function ShareButton({ title }: { title: string }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleShare = async () => {
        const url = window.location.href;

        // Try Native Share API first (common on mobile)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: `Check out this article: ${title}`,
                    url: url,
                });
                return;
            } catch (error) {
                console.log('Error sharing:', error);
                // Fallback to copy if share fails or is cancelled
            }
        }

        // Fallback: Copy to clipboard
        try {
            await navigator.clipboard.writeText(url);
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000); // Hide after 2s
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 md:relative md:bottom-auto md:left-auto md:z-auto">
            <button
                onClick={handleShare}
                className="bg-[#25D366] md:bg-gray-100 hover:bg-[#128C7E] md:hover:bg-gray-200 text-white md:text-gray-800 font-bold p-4 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:scale-105"
                aria-label="Share article"
            >
                {/* Share Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.366 2.684 3 3 0 00-5.366-2.684z" />
                </svg>
                <span className="hidden md:inline">שתף מאמר</span>
            </button>

            {/* Toast / Tooltip */}
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap">
                    הקישור הועתק!
                </div>
            )}
        </div>
    );
}
