import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-white/10 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold font-outfit text-white mb-2">Vibhor.AI</h3>
                    <p className="text-gray-400">Transforming ideas into intelligent solutions.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-secondary/20 text-gray-400 hover:text-secondary transition-all duration-300 hover:-translate-y-1">
                        <FaGithub size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-secondary/20 text-gray-400 hover:text-secondary transition-all duration-300 hover:-translate-y-1">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-secondary/20 text-gray-400 hover:text-secondary transition-all duration-300 hover:-translate-y-1">
                        <FaTwitter size={20} />
                    </a>
                    <a href="mailto:vibhor@example.com" className="p-3 rounded-full bg-white/5 hover:bg-secondary/20 text-gray-400 hover:text-secondary transition-all duration-300 hover:-translate-y-1">
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>

            <div className="text-center mt-8 text-gray-600 text-sm">
                <p>© {new Date().getFullYear()} Vibhor Sharma. All rights reserved.</p>
            </div>
        </footer>
    );
};
