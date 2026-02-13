import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden pt-20">

            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease
                    className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
                >
                    Pro. <span className="text-gray-500">Beyond.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-3xl font-medium text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Vibhor Dutta. AI Engineer. <br className="hidden md:block" />
                    <span className="text-white">Designing the intelligence of tomorrow.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all text-sm md:text-base">
                        View Work
                    </a>
                    <a href="#contact" className="text-blue-500 hover:text-blue-400 font-medium flex items-center gap-2 hover:underline underline-offset-4 text-sm md:text-base">
                        Contact Me &gt;
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
