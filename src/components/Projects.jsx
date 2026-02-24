import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Crop Disease Portal",
        category: "Machine Learning",
        // Futuristic Agriculture Interface Image
        image: "https://images.unsplash.com/photo-1591082250330-3575d4c253ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "AI-driven diagnostics for sustainable farming. Utilizes CNN architectures to detect plant pathologies with 98% precision.",
        tech: ["TensorFlow", "React", "Python"],
        github: "https://github.com/duttavibhor"
    },
    {
        id: 2,
        title: "Fire Alarm System",
        category: "Embedded IoT",
        // Industrial IoT Sensor Image
        image: "https://images.unsplash.com/photo-1575112096027-f601e335d37e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Smart safety infrastructure. Real-time hazard detection with automated emergency protocols and cloud connectivity.",
        tech: ["Embedded C", "Arduino", "IoT"],
        github: "https://github.com/duttavibhor"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="relative py-32 overflow-hidden text-gray-900 transition-colors duration-300 bg-white dark:bg-black dark:text-white">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-200/40 dark:bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">Selected Work.</h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Engineering intelligence into reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative h-[450px] rounded-[32px] overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg"
                        >
                            {/* Image Container with Reveal Effect */}
                            <div className="absolute inset-0 z-0">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-60 group-hover:opacity-80 dark:group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                                <div className="space-y-4 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <span className="block mb-2 text-xs font-bold tracking-widest text-indigo-300 uppercase dark:text-indigo-400">
                                                {project.category}
                                            </span>
                                            <h3 className="mb-1 text-3xl font-bold text-white transition-colors group-hover:text-indigo-200">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-3 text-white transition-colors border rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/10"
                                        >
                                            <FaGithub size={20} />
                                        </motion.a>
                                    </div>

                                    <p className="text-base leading-relaxed text-gray-200 transition-colors dark:text-gray-400 line-clamp-2 bg-blend-soft-light group-hover:text-white dark:group-hover:text-gray-200">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-3 pt-4 transition-opacity duration-500 delay-100 opacity-0 group-hover:opacity-100">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded border border-white/20 text-gray-100 dark:text-gray-300 bg-white/5"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute transition-opacity duration-700 pointer-events-none -inset-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 md:opacity-0 md:group-hover:opacity-100 blur-xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
