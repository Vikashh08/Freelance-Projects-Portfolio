import React from "react";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Languages",
        skills: ["Python", "C", "C++", "Java"]
    },
    {
        title: "Frameworks & Web",
        skills: ["HTML5", "CSS3", "TensorFlow", "Keras", "React", "Node.js"]
    },
    {
        title: "Tools & Platforms",
        skills: ["VS Code", "GitHub", "Google Colab", "Figma", "Firebase"]
    },
    {
        title: "Soft Skills",
        skills: ["Problem Solving", "Leadership", "Team Collaboration", "Agile"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-secondary text-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-black">Technical Proficiency.</h2>
                    <p className="text-xl text-gray-500 max-w-2xl">
                        A robust set of tools and languages engineered for performance and scalability.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-black border-b border-gray-300 pb-2">{cat.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill, si) => (
                                    <span
                                        key={si}
                                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-800 shadow-sm border border-gray-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
