import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[0%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase font-fira">
                        Available for hire
                    </div>
                    <h1 className="text-6xl md:text-8xl font-extrabold font-outfit mb-6 text-white leading-none tracking-tight">
                        Vibhor <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-glow">
                            Sharma
                        </span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 h-[50px] font-dm">
                        I engineer{" "}
                        <TypeAnimation
                            sequence={[
                                "Neural Networks",
                                1500,
                                "Intelligent Agents",
                                1500,
                                "Scalable Backends",
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-secondary font-bold"
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-dm">
                        Building the intersection of human creativity and machine intelligence.
                        Full-stack developer with a focus on high-performance AI systems.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Start a Project
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <FaFileDownload /> CV / Resume
                        </motion.a>
                    </div>

                    <div className="flex gap-6 mt-12 text-gray-500">
                        <a href="#" className="text-2xl hover:text-white transition-colors hover:scale-110 transform duration-200"><FaGithub /></a>
                        <a href="#" className="text-2xl hover:text-white transition-colors hover:scale-110 transform duration-200"><FaLinkedin /></a>
                    </div>
                </motion.div>

                {/* Visual/Image Side - Holographic Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden md:flex justify-center perspective-1000"
                >
                    {/* Card Container */}
                    <div className="w-[400px] h-[500px] relative">
                        {/* Back Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />

                        {/* Main Card */}
                        <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden">

                            {/* Grid Pattern Overlay */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                            {/* Header */}
                            <div className="relative z-10 flex justify-between items-center">
                                <div className="text-xs font-fira text-gray-400">SYS.STATUS: <span className="text-green-400">ONLINE</span></div>
                                <div className="flex gap-1">
                                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-gray-600 rounded-full" />)}
                                </div>
                            </div>

                            {/* Central Graphic */}
                            <div className="relative z-10 flex-1 flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 border-2 border-secondary/30 rounded-full animate-spin-slow" />
                                    <div className="absolute inset-4 border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50 animate-pulse" />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold font-fira text-white mix-blend-overlay">
                                        AI
                                    </div>
                                </div>
                            </div>

                            {/* Code Snippet Footer */}
                            <div className="relative z-10 bg-white/5 rounded-xl p-4 border border-white/5 font-fira text-xs text-gray-400">
                                <div className="flex justify-between mb-2">
                                    <span>neural_net.v1</span>
                                    <span className="text-secondary">98% ACC</span>
                                </div>
                                <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-secondary w-[98%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
