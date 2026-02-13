import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";

export const Hero = () => {
    const name = "Vibhor Dutta";

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]" />

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                {/* Intro Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-light text-cyan-400 mb-4 tracking-widest uppercase">
                        Hello, I'm
                    </h2>

                    {/* Staggered Name Animation */}
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter flex justify-center flex-wrap gap-2 md:gap-4 overflow-hidden">
                        {name.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.05, // Stagger effect
                                    ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for "pop" feel
                                }}
                                className="inline-block hover:text-cyan-400 transition-colors duration-300 cursor-default"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                            className="text-cyan-400"
                        >
                            .
                        </motion.span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        A passionate <span className="text-white font-medium">AI/ML Student & Researcher</span> exploring the frontiers of <span className="text-white font-medium">Deep Learning</span>, <span className="text-white font-medium">GenAI</span>, and <span className="text-white font-medium">Computer Vision</span>.
                    </p>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        View Work
                    </a>

                    {/* Resume Download Button */}
                    <a
                        href="/Vibhor Resume.pdf"
                        download="Vibhor_Dutta_Resume.pdf"
                        className="group flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/10 transition-all hover:border-cyan-400/50"
                    >
                        <FaFileDownload className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        Download CV
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-16 flex gap-8 justify-center">
                    {[
                        { icon: FaGithub, href: "https://github.com/duttavibhor" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/vibhor-dutta-66779426a/" },
                        { icon: FaTwitter, href: "#" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-300"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
