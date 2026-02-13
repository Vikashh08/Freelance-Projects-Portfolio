import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-32 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                        Driven by Intelligence. <br />
                        <span className="text-gray-500">Defined by Code.</span>
                    </h2>

                    <div className="space-y-6 text-xl text-gray-400 leading-relaxed font-medium">
                        <p>
                            I am a Computer Science Engineer with a deep focus on <strong className="text-white">Artificial Intelligence</strong> and <strong className="text-white">Machine Learning</strong>.
                        </p>
                        <p>
                            From developing crop disease detection algorithms to architecting smart hardware solutions, I bridge the gap between theoretical models and real-world application.
                        </p>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-surface">
                        <img
                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
                            alt="Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
