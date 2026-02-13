import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import vibhorImg from "../assets/vibhor.png";
const Word = ({ children, index }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            className="mr-[0.2em] inline-block"
        >
            {children}
        </motion.span>
    );
};

const StaggeredParagraph = ({ text, className }) => {
    const words = text.split(" ");
    return (
        <p className={`flex flex-wrap leading-relaxed ${className}`}>
            {words.map((word, i) => (
                <Word key={i} index={i}>
                    {word}
                </Word>
            ))}
        </p>
    );
};

export const About = () => {
    return (
        <section id="about" className="py-32 bg-black text-white relative leading-relaxed overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-900/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-900/10 to-transparent blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* Content */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
                            Architecting Intelligence.
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-500">
                            Engineering the Future.
                        </h2>
                    </motion.div>

                    <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed text-gray-200">
                        <StaggeredParagraph
                            text="I am Vibhor Dutta, a Computer Science Undergrad specializing in Artificial Intelligence, Machine Learning, and Data Science."
                            className="text-white"
                        />
                        <StaggeredParagraph
                            text="My work involves designing algorithms that not only think but also perceive. From deep learning models for detecting crop diseases to smart embedded systems, I build technology that solves tangible problems."
                            className="text-gray-400"
                        />
                        <StaggeredParagraph
                            text="I don't just write code; I craft systems that learn, adapt, and evolve."
                            className="text-gray-400"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex gap-8 pt-6"
                    >
                        <div className="px-8 py-6 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all hover:scale-105 duration-300">
                            <div className="text-4xl font-bold text-white mb-1">5+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">AI Models</div>
                        </div>
                        <div className="px-8 py-6 bg-white/5 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all hover:scale-105 duration-300">
                            <div className="text-4xl font-bold text-white mb-1">10+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Projects</div>
                        </div>
                    </motion.div>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="aspect-[3/4] rounded-[40px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative z-10 group">
                        <img
                            src={vibhorImg}
                            alt="Vibhor Dutta"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
