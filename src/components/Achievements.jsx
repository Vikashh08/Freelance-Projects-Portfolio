import React from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

const Counter = ({ value, label }) => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all backdrop-blur-sm group hover:-translate-y-2 duration-300">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-2 font-space"
            >
                {value}+
            </motion.div>
            <p className="text-gray-400 font-medium font-jakarta group-hover:text-white transition-colors">{label}</p>
        </div>
    );
};

export const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-secondary font-fira text-lg mb-2">07. Achievements</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
                        Coding <span className="text-gradient">Stats</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    <Counter value="10" label="Projects Built" />
                    <Counter value="500" label="LeetCode Problems" />
                    <Counter value="3" label="Hackathons" />
                    <Counter value="100" label="Git Commits" />
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all text-center"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4 font-space">HackWithVertos 1.0</h3>
                        <p className="text-gray-300 text-xl font-dm mb-4">
                            Reached the top 10 in HackWithVertos 1.0 organised by LPU.
                        </p>
                        <div className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full font-bold">
                            Top 10 Finalist
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
