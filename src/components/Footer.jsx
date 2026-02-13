import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                    {/* Brand / Copyright */}
                    <div>
                        <h3 className="text-2xl font-bold font-sans tracking-tighter mb-2">Vibhor Dutta<span className="text-gray-500">.</span></h3>
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    {/* Infinite Marquee Text / Quote (Optional, keeping simple for now) */}
                    <div className="hidden md:block">
                        <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
                            Designed & Built with <FaHeart className="inline mx-1 text-white" size={10} /> in India
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/duttavibhor"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vibhor-dutta-66779426a/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        >
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>

                {/* Bottom decorative line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />
            </div>
        </footer>
    );
};
