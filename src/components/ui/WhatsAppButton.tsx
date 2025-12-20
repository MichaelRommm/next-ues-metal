import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/972535217010"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-[#20bd5a] group"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={32} />
            <span className="absolute right-full mr-3 bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                דבר איתנו בוואטסאפ
            </span>
        </a>
    );
}
