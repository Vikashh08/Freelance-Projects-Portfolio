import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Crop Disease Detection Portal",
        category: "AI/ML",
        image: "https://images.unsplash.com/photo-1595856552763-88229b4c09d0?q=80&w=1000&auto=format&fit=crop", // Crop/Sardine related placeholder
        description: "Built a Crop Disease Detection Portal using ML (CNN-based image classification) that identifies plant diseases from real-time uploaded crop images with high accuracy. Integrated OpenCV for image preprocessing, TensorFlow/Keras for model training, and Gradio for seamless prediction on the web portal. Designed an interactive dashboard with disease insights, remedy suggestions, confidence scores, and image history tracking.",
        tech: ["Gradio", "Google Colab", "Python", "TensorFlow", "OpenCV"],
        github: "https://github.com/duttavibhor",
        live: "#"
    },
    {
        id: 2,
        title: "Arduino UNO Fire Alarm Sensor",
        category: "Embedded Systems",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1000&auto=format&fit=crop", // Electronics related placeholder
        description: "Developed a fire-alarm detection system using Arduino Uno that triggers a loud buzzer when exposed to abnormal heat levels. Integrated DHT11/LM35 temperature sensor with real-time threshold monitoring and programmed safe-limit alerts using embedded C. Built a compact hardware prototype with LED indicators, buzzer output, and serial monitoring.",
        tech: ["Arduino UNO", "BreadBoard", "Temperature Sensor", "Proteus", "Embedded C"],
        github: "#",
        live: "#"
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-secondary font-fira text-lg mb-2">03. Portfolio</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-white/5"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg border border-neon-blue px-6 py-2 rounded-full backdrop-blur-md">View Details</span>
                                </div>
                            </div>
                            <div className="p-6 bg-dark-bg/90 backdrop-blur-sm absolute bottom-0 left-0 right-0 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs text-neon-blue border border-neon-blue/30 px-2 py-1 rounded">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            layoutId={`project-${selectedProject.id}`}
                            className="bg-dark-bg border border-white/20 rounded-2xl w-full max-w-3xl overflow-hidden relative shadow-2xl shadow-neon-blue/20 flex flex-col max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-white hover:text-red-500 z-10 bg-black/50 p-2 rounded-full"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="relative h-64 md:h-80 flex-shrink-0">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <motion.h3 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</motion.h3>
                                    <span className="text-neon-purple font-mono">{selectedProject.category}</span>
                                </div>
                            </div>

                            <div className="p-8 overflow-y-auto">
                                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neon-blue text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={selectedProject.github} className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-semibold transition-colors">
                                        <FaGithub /> Source Code
                                    </a>
                                    <a href={selectedProject.live} className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white py-3 rounded-xl font-semibold shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/40 transition-all">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
