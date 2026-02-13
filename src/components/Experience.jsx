import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
    {
        id: 1,
        role: "Volunteer",
        company: "EDUMUST",
        duration: "Aug '24",
        description: "Completed 75 hours assisting in computer literacy classes, technical support, educational resource development, community engagement and administrative tasks.",
        skills: ["Teaching", "Technical Support", "Communication"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-secondary font-fira text-lg mb-2">04. Experience</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                        My Professional <span className="text-gradient">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-bg border-2 border-secondary shadow-[0_0_10px_#00FFFF]"></div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-outfit">
                                            <FaBriefcase className="text-secondary text-lg" /> {exp.role}
                                        </h3>
                                        <h4 className="text-lg text-gray-400 font-medium font-dm">{exp.company}</h4>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-3 py-1 rounded-full w-fit">
                                        <FaCalendarAlt /> {exp.duration}
                                    </div>
                                </div>

                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="text-xs font-semibold text-gray-400 bg-black/30 px-2 py-1 rounded border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
