import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaCode, FaTrophy, FaLayerGroup } from "react-icons/fa";

export const Achievements = () => {
    return (
        <section id="achievements" className="py-24 bg-black text-white relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-zinc-900/20 opacity-50 pointer-events-none" />

            {/* Pulsing Amber Glow */}
            <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Stat Card 1: Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.1)" }}
                        className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-amber-500/50 hover:bg-zinc-800 transition-all duration-300 text-center relative overflow-hidden shadow-lg"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity text-amber-500"
                        >
                            <FaLayerGroup size={80} />
                        </motion.div>

                        <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-2">
                            <CountUp end={8} duration={2.5} />+
                        </div>
                        <p className="text-lg text-amber-500 font-semibold uppercase tracking-widest mt-4">
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
                        className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-amber-500/50 hover:bg-zinc-800 transition-all duration-300 text-center relative overflow-hidden shadow-lg"
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity text-amber-500"
                        >
                            <FaTrophy size={80} />
                        </motion.div>

                        <div className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-2 flex items-center justify-center">
                            <span>Top 10</span>
                        </div>
                        <p className="text-lg text-amber-500 font-semibold uppercase tracking-widest mt-4">
                            HackWithVertos 1.0
                        </p>
                    </motion.div>

                    {/* Stat Card 3: Commits */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(245, 158, 11, 0.1)" }}
                        className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-amber-500/50 hover:bg-zinc-800 transition-all duration-300 text-center relative overflow-hidden shadow-lg"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity text-amber-500"
                        >
                            <FaCode size={80} />
                        </motion.div>

                        <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-2">
                            <CountUp end={200} duration={3} />+
                        </div>
                        <p className="text-lg text-amber-500 font-semibold uppercase tracking-widest mt-4">
                            Git Commits
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
