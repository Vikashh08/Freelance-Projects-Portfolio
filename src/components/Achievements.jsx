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
                    <Counter value="500" label="LeetCode Problems" />
                    <Counter value="10" label="Projects Built" />
                    <Counter value="50" label="GitHub Stars" />
                    <Counter value="1000" label="Commits this Year" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.a
                        href="#"
                        whileHover={{ y: -5 }}
                        className="flex items-center justify-between p-6 bg-[#161b22] rounded-xl hover:bg-[#1f242d] border border-white/5 hover:border-white/20 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <SiLeetcode className="text-yellow-500 text-3xl" />
                            <div>
                                <h4 className="text-white font-bold font-space text-lg">LeetCode</h4>
                                <p className="text-gray-400 text-sm group-hover:text-yellow-500 transition-colors font-fira">Top 5% in Screen Test</p>
                            </div>
                        </div>
                        <FaExternalLinkAlt className="text-gray-600 group-hover:text-white" />
                    </motion.a>

                    <motion.a
                        href="#"
                        whileHover={{ y: -5 }}
                        className="flex items-center justify-between p-6 bg-[#161b22] rounded-xl hover:bg-[#1f242d] border border-white/5 hover:border-white/20 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <SiGeeksforgeeks className="text-green-500 text-3xl" />
                            <div>
                                <h4 className="text-white font-bold font-space text-lg">GeeksForGeeks</h4>
                                <p className="text-gray-400 text-sm group-hover:text-green-500 transition-colors font-fira">Institute Rank 1</p>
                            </div>
                        </div>
                        <FaExternalLinkAlt className="text-gray-600 group-hover:text-white" />
                    </motion.a>

                    <motion.a
                        href="#"
                        whileHover={{ y: -5 }}
                        className="flex items-center justify-between p-6 bg-[#161b22] rounded-xl hover:bg-[#1f242d] border border-white/5 hover:border-white/20 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <SiCodechef className="text-brown-500 text-3xl" />
                            <div>
                                <h4 className="text-white font-bold font-space text-lg">CodeChef</h4>
                                <p className="text-gray-400 text-sm group-hover:text-white transition-colors font-fira">3 Star Coder</p>
                            </div>
                        </div>
                        <FaExternalLinkAlt className="text-gray-600 group-hover:text-white" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};
