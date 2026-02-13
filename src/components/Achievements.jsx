import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-secondary text-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="p-8"
                    >
                        <div className="text-6xl font-bold text-black mb-2">
                            <CountUp end={8} duration={3} />+
                        </div>
                        <div className="text-lg font-medium text-gray-500">Major Projects</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8"
                    >
                        {/* Using a static number for now or count up */}
                        <div className="text-6xl font-bold text-blue-600 mb-2">
                            Top 10
                        </div>
                        <div className="text-lg font-medium text-gray-500">HackWithVertos 1.0</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-8"
                    >
                        <div className="text-6xl font-bold text-black mb-2">
                            <CountUp end={200} duration={3} />+
                        </div>
                        <div className="text-lg font-medium text-gray-500">Git Commits</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
