import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";

export const Hero = () => {
    const firstName = "Vibhor";
    const lastName = "Dutta";

    return (
        <section id="hero" className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden transition-colors duration-300 bg-white dark:bg-black">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05),transparent_50%)]" />

            {/* Content Container */}
            <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">

                {/* Intro Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-4 text-xl font-light tracking-widest uppercase md:text-2xl text-cyan-600 dark:text-cyan-400">
                        Hello, I'm
                    </h2>

                    {/* Staggered Name Animation */}
                    <h1 className="flex flex-wrap justify-center gap-2 mb-6 overflow-hidden text-5xl font-bold tracking-tighter text-gray-900 md:text-8xl dark:text-white md:gap-4">
                        {/* First Name Group */}
                        <div className="flex gap-2 whitespace-nowrap">
                            {firstName.split("").map((char, index) => (
                                <motion.span
                                    key={`first-${index}`}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.05,
                                        ease: [0.2, 0.65, 0.3, 0.9],
                                    }}
                                    className="inline-block transition-colors duration-300 cursor-default hover:text-cyan-600 dark:hover:text-cyan-400"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>

                        {/* Last Name Group + Dot */}
                        <div className="flex gap-2 whitespace-nowrap">
                            {lastName.split("").map((char, index) => (
                                <motion.span
                                    key={`last-${index}`}
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: (firstName.length + 1 + index) * 0.05, // +1 accounts for the space
                                        ease: [0.2, 0.65, 0.3, 0.9],
                                    }}
                                    className="inline-block transition-colors duration-300 cursor-default hover:text-cyan-600 dark:hover:text-cyan-400"
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <motion.span
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                                className="text-cyan-600 dark:text-cyan-400"
                            >
                                .
                            </motion.span>
                        </div>
                    </h1>

                    <p className="max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed text-gray-600 md:text-2xl dark:text-gray-400">
                        A passionate <span className="font-medium text-gray-900 dark:text-white">AI/ML Student</span> exploring the frontiers of <span className="font-medium text-gray-900 dark:text-white">Machine Learning</span>, <span className="font-medium text-gray-900 dark:text-white">GenAI</span>, and <span className="font-medium text-gray-900 dark:text-white">Computer Vision</span>.
                    </p>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <a
                        href="#projects"
                        className="px-8 py-3 text-lg font-bold text-white transition-all bg-black rounded-full shadow-lg dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-xl"
                    >
                        View Work
                    </a>

                    {/* Resume Download Button */}
                    <a
                        href="/Vibhor Resume.pdf"
                        download="Vibhor_Dutta_Resume.pdf"
                        className="flex items-center gap-3 px-8 py-3 text-lg font-medium text-gray-900 transition-all border rounded-full group border-black/10 dark:border-white/20 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 hover:border-cyan-600/50 dark:hover:border-cyan-400/50"
                    >
                        <FaFileDownload className="text-gray-500 transition-colors dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                        Download CV
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-8 mt-16">
                    {[
                        { icon: FaGithub, href: "https://github.com/duttavibhor" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/vibhor-dutta-55797629a/" },
                        { icon: FaTwitter, href: "#" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-600 transition-colors duration-300 transform dark:text-gray-500 hover:text-black dark:hover:text-white hover:scale-110"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute -translate-x-1/2 bottom-10 left-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex justify-center w-6 h-10 pt-2 border-2 rounded-full border-black/20 dark:border-white/20">
                    <div className="w-1 h-2 rounded-full bg-black/50 dark:bg-white/50" />
                </div>
            </motion.div>
        </section>
    );
};
