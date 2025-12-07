'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ToolsLayoutProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    children: ReactNode;
}

export default function ToolsLayout({ activeTab, setActiveTab, children }: ToolsLayoutProps) {
    return (
        <div className="min-h-screen bg-[#121212] text-[#e0e0e0] flex flex-col">
            {/* Header */}
            <header className="bg-gradient-to-r from-black to-[#2c2c2c] p-4 border-b-4 border-[#ff6d00] flex justify-between items-center shadow-lg sticky top-0 z-50">
                <Link
                    href="/"
                    className="bg-white/10 hover:bg-[#ff6d00] hover:text-black hover:font-bold border border-gray-600 text-white px-4 py-2 rounded-full text-sm transition-all flex items-center gap-2"
                >
                    <i className="fas fa-arrow-right"></i> חזרה לאתר
                </Link>
                <div className="text-left">
                    <h1 className="text-xl font-bold text-white tracking-wider">UES TOOLS</h1>
                    <div className="text-[10px] text-[#ff6d00] tracking-widest uppercase">Advanced Welding Solutions</div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow p-4 max-w-3xl mx-auto w-full pb-24">
                {children}
            </main>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-[#0b0b0b] border-t border-[#333] flex overflow-x-auto no-scrollbar py-2 pb-4 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] z-50 md:justify-around">
                {[
                    { id: 'physics', label: 'פיזיקה', icon: 'M7 2v11h3v9l7-12h-4l4-8z' },
                    { id: 'stick', label: 'Stick', icon: 'M16.9,12.9L13.8,16l-3.2-3.2l3.2-3.2L16.9,12.9z' }, // Simplified icon paths
                    { id: 'mig', label: 'MIG', icon: 'M19,16h-2v-4c0-0.55-0.45-1-1-1h-1V9.5C15,8.12,13.88,7,12.5,7S10,8.12,10,9.5V11H5v5h5v2H2v2h8' },
                    { id: 'tig', label: 'TIG', icon: 'M7 6h10l-1 9h-8z M12 16l-1 5h2l-1-5z' },
                    { id: 'tools', label: 'מחשבונים', icon: 'M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => { setActiveTab(tab.id); window.scrollTo(0, 0); }}
                        className={`flex flex-col items-center justify-center min-w-[75px] flex-shrink-0 transition-colors duration-300 ${activeTab === tab.id ? 'text-[#ff6d00]' : 'text-gray-500'}`}
                    >
                        <svg className="w-6 h-6 mb-1 fill-current" viewBox="0 0 24 24">
                            <path d={tab.icon} />
                        </svg>
                        <span className="text-xs font-medium">{tab.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
