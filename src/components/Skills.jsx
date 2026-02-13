import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiC, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTensorflow, SiKeras, SiPytorch, SiMysql, SiMongodb, SiGit, SiGithub, SiDocker, SiFigma, SiJira, SiPostman, SiFirebase, SiGooglecolab, SiOpencv } from "react-icons/si";
import { FaJava, FaBrain, FaUsers, FaProjectDiagram, FaLightbulb } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "C", icon: SiC, color: "#A8B9CC" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "SQL", icon: SiMysql, color: "#4479A1" },
        ],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Keras", icon: SiKeras, color: "#D00000" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
        ],
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Colab", icon: SiGooglecolab, color: "#F9AB00" },
        ],
    },
    {
        category: "Soft Skills",
        items: [
            { name: "Problem Solving", icon: FaLightbulb, color: "#FFD700" },
            { name: "Leadership", icon: FaUsers, color: "#4CAF50" },
            { name: "Collaboration", icon: FaProjectDiagram, color: "#2196F3" },
            { name: "Agile", icon: SiJira, color: "#0052CC" },
        ],
    },
];

const SkillCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all cursor-pointer group"
        >
            <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                <item.icon className="text-2xl md:text-3xl" style={{ color: item.color }} />
            </div>
            <span className="text-gray-200 font-medium text-lg group-hover:text-white transition-colors">
                {item.name}
            </span>
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        Technical Arsenal.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
                        A curated stack of technologies I use to build scalable, intelligent, and human-centric solutions.
                    </p>
                </motion.div>

                <div className="grid gap-16">
                    {skills.map((category, idx) => (
                        <div key={idx}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="text-2xl font-semibold text-white mb-8 border-l-4 border-indigo-500 pl-4"
                            >
                                {category.category}
                            </motion.h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.items.map((item, index) => (
                                    <SkillCard key={index} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
