import React from "react";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills }) => (
    <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-secondary pl-4 font-outfit">
            {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,243,255,0.1)]"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                            {skill.name}
                        </span>
                        {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-right">{skill.level}%</div>
                </motion.div>
            ))}
        </div>
    </div>
);

export const Skills = () => {
    const categories = [
        {
            title: "Languages",
            skills: [
                { name: "Python", level: 90 },
                { name: "C", level: 85 },
                { name: "C++", level: 85 },
            ],
        },
        {
            title: "Frameworks & Web",
            skills: [
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
                { name: "TensorFlow", level: 80 },
                { name: "Keras", level: 75 },
            ],
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "VS Code", level: 95 },
                { name: "GitHub", level: 90 },
                { name: "Google Colab", level: 85 },
            ],
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Problem Solving", level: 90 },
                { name: "Team Player", level: 95 },
                { name: "Leadership", level: 85 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-dark-bg relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-purple/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-neon-purple font-mono text-lg mb-2">02. My Tech Stack</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Technologies I <span className="text-gradient">Master</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        My expertise spans across advanced AI algorithms, robust backend systems, and modern frontend frameworks.
                    </p>
                </motion.div>

                {categories.map((category, index) => (
                    <SkillCategory key={index} title={category.title} skills={category.skills} />
                ))}
            </div>
        </section>
    );
};
