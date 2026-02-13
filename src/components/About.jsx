import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-32 bg-black text-white relative leading-relaxed">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { staggerChildren: 0.1, duration: 0.8 }
                        }
                    }}
                >
                    <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                        Architecting Intelligence. <br />
                        <span className="text-gray-500">Engineering the Future.</span>
                    </motion.h2>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-6 text-xl text-gray-400 font-medium">
                        <p>
                            I am <strong className="text-white">Vibhor Dutta</strong>, a Computer Science Engineer obsessed with the intersection of <strong className="text-white">AI</strong>, <strong className="text-white">Hardware</strong>, and <strong className="text-white">Human Interaction</strong>.
                        </p>
                        <p>
                            My work involves designing algorithms that not only think but also perceive. From deep learning models for detecting crop diseases to smart embedded systems, I build technology that solves tangible problems.
                        </p>
                        <p>
                            I don't just write code; I craft systems that learn, adapt, and evolve.
                        </p>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-10 flex gap-4">
                        <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <div className="text-3xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-gray-500">AI Models</div>
                        </div>
                        <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <div className="text-3xl font-bold text-white mb-1">10+</div>
                            <div className="text-sm text-gray-500">Projects</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="aspect-[3/4] rounded-[30px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000"
                            alt="Vibhor Dutta"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative element (Glass card behind or floating) */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute -bottom-10 -left-10 w-2/3 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl z-20 shadow-xl hidden md:block"
                    >
                        <p className="text-white font-medium text-lg">"Innovation distinguishes between a leader and a follower."</p>
                        <p className="text-gray-400 text-sm mt-2">— Steve Jobs</p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};
