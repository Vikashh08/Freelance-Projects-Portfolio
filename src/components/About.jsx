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
        <section id="about" className="relative py-32 overflow-hidden leading-relaxed text-gray-900 transition-colors duration-300 bg-white dark:bg-black dark:text-white">

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-200/40 dark:from-indigo-900/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-200/40 dark:from-blue-900/10 to-transparent blur-[100px] pointer-events-none" />

            <div className="grid items-center gap-20 px-6 mx-auto max-w-7xl md:grid-cols-2">

                {/* Content */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                            Architecting Intelligence.
                        </h2>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-500 md:text-5xl dark:text-gray-500">
                            Engineering the Future.
                        </h2>
                    </motion.div>

                    <div className="space-y-8 text-xl font-medium leading-relaxed text-gray-700 md:text-2xl dark:text-gray-200">
                        <StaggeredParagraph
                            text="I am Vibhor Dutta, a Computer Science Undergrad specializing in Artificial Intelligence, Machine Learning, and Data Science."
                            className="text-gray-900 dark:text-white"
                        />
                        <StaggeredParagraph
                            text="My work involves designing algorithms that not only think but also perceive. From machine learning models for detecting crop diseases to smart embedded systems, I build technology that solves tangible problems."
                            className="text-gray-600 dark:text-gray-400"
                        />
                        <StaggeredParagraph
                            text="I don't just write code; I craft systems that learn, adapt, and evolve."
                            className="text-gray-600 dark:text-gray-400"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex gap-8 pt-6"
                    >
                        <div className="px-8 py-6 text-center transition-all duration-300 bg-gray-100 border dark:bg-white/5 rounded-3xl border-black/5 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-105">
                            <div className="mb-1 text-4xl font-bold text-gray-900 dark:text-white">2+</div>
                            <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-500">AI Models</div>
                        </div>
                        <div className="px-8 py-6 text-center transition-all duration-300 bg-gray-100 border dark:bg-white/5 rounded-3xl border-black/5 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:scale-105">
                            <div className="mb-1 text-4xl font-bold text-gray-900 dark:text-white">3+</div>
                            <div className="text-sm font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-500">Projects</div>
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
                    <div className="aspect-[3/4] rounded-[40px] overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-2xl relative z-10 group">
                        <img
                            src={vibhorImg}
                            alt="Vibhor Dutta"
                            className="object-cover w-full h-full transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
