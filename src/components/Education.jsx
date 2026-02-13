import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
    {
        id: 1,
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        year: "Since August 2023",
        stats: "CGPA: 6.91",
        location: "Punjab, India"
    },
    {
        id: 2,
        institution: "Govt. Sen. Sec. School",
        degree: "Intermediate",
        year: "April 2022 - March 2023",
        stats: "Percentage: 89.2%",
        location: "Jalandhar, Punjab"
    },
    {
        id: 3,
        institution: "S.D. Public Sen. Sec. School",
        degree: "Matriculation",
        year: "April 2020 - March 2021",
        stats: "Percentage: 99%",
        location: "Jalandhar, Punjab"
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-20 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-secondary font-fira text-lg mb-2">08. Education</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space">
                        Academic <span className="text-gradient">Background</span>
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-bg border-2 border-primary shadow-[0_0_10px_#00ff9d]"></div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-2xl font-bold text-white font-space flex items-center gap-2">
                                        <FaGraduationCap className="text-primary" /> {edu.institution}
                                    </h3>
                                    <span className="text-gray-400 font-mono text-sm bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        {edu.year}
                                    </span>
                                </div>
                                <h4 className="text-lg text-secondary font-semibold font-dm mb-1">{edu.degree}</h4>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-white font-bold bg-primary/20 text-primary px-3 py-1 rounded text-sm">
                                        {edu.stats}
                                    </span>
                                    <span className="text-gray-500 text-sm flex items-center gap-1">
                                        {edu.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
