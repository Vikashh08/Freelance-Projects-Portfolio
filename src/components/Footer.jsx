import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10 text-xs text-gray-500">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>Copyright © {new Date().getFullYear()} Vibhor Dutta. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                    <a href="#" className="hover:text-white transition-colors">Sales and Refunds</a>
                    <a href="#" className="hover:text-white transition-colors">Legal</a>
                    <a href="#" className="hover:text-white transition-colors">Site Map</a>
                </div>
            </div>
        </footer>
    );
};
