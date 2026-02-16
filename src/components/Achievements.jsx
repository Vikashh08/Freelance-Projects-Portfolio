import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCode, FaTrophy, FaLayerGroup } from "react-icons/fa";

export const Achievements = () => {
    return (
        <section id="achievements" className="relative py-24 overflow-hidden text-gray-900 transition-colors duration-300 bg-white dark:bg-black dark:text-white">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-50 pointer-events-none bg-stone-100/50 dark:bg-zinc-900/20" />

            {/* Pulsing Amber Glow */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-200/40 dark:bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
            />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <div className="grid gap-8 md:grid-cols-3">

                    {/* Stat Card 1: Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.1)" }}
                        className="relative p-8 overflow-hidden text-center transition-all duration-300 bg-gray-100 border shadow-lg group rounded-3xl dark:bg-zinc-900 border-black/5 dark:border-white/5 hover:border-amber-500/50 hover:bg-gray-200 dark:hover:bg-zinc-800"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 p-4 transition-opacity opacity-10 group-hover:opacity-30 text-amber-500"
                        >
                            <FaLayerGroup size={80} />
                        </motion.div>

                        <div className="mb-2 text-6xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                            <CountUp end={3} duration={2.5} />+
                        </div>
                        <p className="mt-4 text-lg font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-500">
                            Major Projects
                        </p>
                    </motion.div>

                    {/* Stat Card 2: Top 10 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.1)" }}
                        className="relative p-8 overflow-hidden text-center transition-all duration-300 bg-gray-100 border shadow-lg group rounded-3xl dark:bg-zinc-900 border-black/5 dark:border-white/5 hover:border-amber-500/50 hover:bg-gray-200 dark:hover:bg-zinc-800"
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 p-4 transition-opacity opacity-10 group-hover:opacity-30 text-amber-500"
                        >
                            <FaTrophy size={80} />
                        </motion.div>

                        <div className="flex items-center justify-center mb-2 text-5xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                            <span>Top 10</span>
                        </div>
                        <p className="mt-4 text-lg font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-500">
                            HackWithVertos 1.0
                        </p>
                    </motion.div>

                    {/* Stat Card 3: Commits */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.1)" }}
                        className="relative p-8 overflow-hidden text-center transition-all duration-300 bg-gray-100 border shadow-lg group rounded-3xl dark:bg-zinc-900 border-black/5 dark:border-white/5 hover:border-amber-500/50 hover:bg-gray-200 dark:hover:bg-zinc-800"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 p-4 transition-opacity opacity-10 group-hover:opacity-30 text-amber-500"
                        >
                            <FaCode size={80} />
                        </motion.div>

                        <div className="mb-2 text-6xl font-bold text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                            <CountUp end={200} duration={3} />+
                        </div>
                        <p className="mt-4 text-lg font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-500">
                            Git Commits
                        </p>
                    </motion.div> */}

                </div>
            </div>
        </section>
    );
};
