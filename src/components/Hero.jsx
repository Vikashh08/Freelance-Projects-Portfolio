import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaDownload } from "react-icons/fa";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden pt-20">

            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6"
                >
                    Vibhor Dutta.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10 max-w-2xl mx-auto"
                >
                    <p className="text-xl md:text-3xl font-medium text-gray-400 leading-relaxed">
                        AI Engineer specializing in <span className="text-white">Deep Learning</span>, <span className="text-white">Computer Vision</span>, and <span className="text-white">Embedded Systems</span>.
                    </p>
                    <p className="text-lg md:text-xl text-gray-500 mt-4">
                        Transforming complex data into actionable intelligence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all text-sm md:text-base">
                        View Work
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Vibhor_Dutta_Resume.pdf"
                        className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:bg-white/10 transition-all text-sm md:text-base flex items-center gap-2"
                    >
                        Download Resume <FaDownload size={14} />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
            >
                <FaChevronDown size={20} />
            </motion.div>
        </section>
    );
};
