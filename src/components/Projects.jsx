import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "Crop Disease Portal",
        category: "Machine Learning",
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop",
        description: "CNN-based disease detection with 98% accuracy.",
        tech: ["TensorFlow", "OpenCV"],
        github: "https://github.com/duttavibhor",
        colSpan: "md:col-span-2"
    },
    {
        id: 2,
        title: "Fire Alarm System",
        category: "Embedded IoT",
        image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1000&auto=format&fit=crop",
        description: "Arduino-based safety system with real-time alerts.",
        tech: ["Embedded C", "Arduino"],
        colSpan: "md:col-span-1"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">Selected Work.</h2>
                    <p className="text-xl text-gray-500 max-w-2xl">
                        A collection of projects exploring the boundaries of AI and Hardware.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`${project.colSpan} group relative h-[500px] rounded-3xl overflow-hidden bg-surface cursor-pointer`}
                        >
                            {/* Image Background */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="text-blue-400 font-semibold text-sm mb-2 block">{project.category}</span>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 line-clamp-2">{project.description}</p>
                                    </div>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                        <a href={project.github} className="text-white hover:text-blue-400 transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md">
                                            <FaGithub size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
