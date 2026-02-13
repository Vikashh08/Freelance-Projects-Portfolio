import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Crop Disease Portal",
        category: "Machine Learning",
        // Futuristic Agriculture Interface Image
        image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1000",
        description: "AI-driven diagnostics for sustainable farming. Utilizes CNN architectures to detect plant pathologies with 98% precision.",
        tech: ["TensorFlow", "React", "Python"],
        github: "https://github.com/duttavibhor"
    },
    {
        id: 2,
        title: "Fire Alarm System",
        category: "Embedded IoT",
        // Industrial IoT Sensor Image
        image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=1000",
        description: "Smart safety infrastructure. Real-time hazard detection with automated emergency protocols and cloud connectivity.",
        tech: ["Embedded C", "Arduino", "IoT"],
        github: "https://github.com/duttavibhor"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-black text-white relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Selected Work.</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Engineering intelligence into reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative h-[450px] rounded-[32px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            {/* Image Container with Reveal Effect */}
                            <div className="absolute inset-0 z-0">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="space-y-4 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors border border-white/10"
                                        >
                                            <FaGithub size={20} />
                                        </motion.a>
                                    </div>

                                    <p className="text-gray-400 text-base leading-relaxed line-clamp-2 bg-blend-soft-light group-hover:text-gray-200 transition-colors">
                                        {project.description}
                                    </p>

                                    <div className="pt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded border border-white/20 text-gray-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 md:opacity-0 md:group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
