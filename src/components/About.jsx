import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    const features = [
        { title: "AI Enthusiast", desc: "Passionate about building intelligent agents and generative models." },
        { title: "Problem Solver", desc: "Optimizing algorithms for scalability and efficiency." },
        { title: "Visual Creator", desc: "Designing immersive web experiences that engage users." },
        { title: "Lifelong Learner", desc: "Constantly exploring new tech stacks and research papers." },
    ];

    return (
        <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side - Image/Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 mix-blend-overlay z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
                            alt="About Me"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                        />

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-neon-blue rounded-full blur-[50px] opacity-60"></div>
                        <div className="absolute -top-5 -left-5 w-24 h-24 bg-neon-purple rounded-full blur-[50px] opacity-60"></div>
                    </div>
                </motion.div>

                {/* Right Side - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-secondary font-fira text-lg mb-2">01. About Me</h3>
                    <h2 className="text-4xl font-bold font-outfit text-white mb-6">
                        Bridging the Gap Between <span className="text-gradient">Data & Design</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        I am a B.Tech CSE student specializing in Artificial Intelligence and Machine Learning.
                        My journey started with a curiosity about how machines learn, which led me to build complex
                        predictive models and distributed systems.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Beyond algorithms, I am deeply passionate about creating interfaces that make AI accessible.
                        I believe the best technology is invisible – it just works, beautifully and efficiently.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-blue/30 hover:bg-white/10 transition-all cursor-default"
                            >
                                <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                                <p className="text-gray-500 text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
