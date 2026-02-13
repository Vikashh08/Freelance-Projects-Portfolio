import React from "react";
import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiC, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTensorflow, SiKeras, SiPytorch, SiMysql, SiMongodb, SiGit, SiGithub, SiDocker, SiFigma, SiJira, SiPostman, SiFirebase, SiGooglecolab, SiOpencv, SiScikitlearn, SiPandas, SiNumpy } from "react-icons/si";
import { FaJava, FaBrain, FaUsers, FaProjectDiagram, FaLightbulb, FaRobot, FaDatabase } from "react-icons/fa";
import { TbBrandVscode, TbMathFunction } from "react-icons/tb";

const skills = [
    {
        category: "Artificial Intelligence & ML",
        icon: FaRobot,
        items: [
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
            { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
            { name: "Keras", icon: SiKeras, color: "#D00000" },
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "NumPy", icon: SiNumpy, color: "#013243" },
        ],
    },
    {
        category: "Programming Languages",
        icon: TbMathFunction,
        items: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "SQL", icon: SiMysql, color: "#4479A1" },
        ],
    },
    {
        category: "Full Stack Development",
        icon: FaDatabase,
        items: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        ],
    },
    {
        category: "Tools & Platforms",
        icon: SiGit,
        items: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
            { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Faster stagger
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, // Enter from below with scale
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        },
    },
};

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white flex justify-center items-center gap-4">
                        Technical Proficiency<span className="text-cyan-400">.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A comprehensive suite of technologies powering intelligent solutions.
                    </p>
                </motion.div>

                <div className="space-y-20"> {/* Vertical spacing between categories */}
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative" // Removed card styling
                        >
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4"
                            >
                                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <category.icon size={28} />
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-wide">
                                    {category.category}
                                </h3>
                            </motion.div>

                            <div className="flex flex-wrap gap-4">
                                {category.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -5,
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                            borderColor: "rgba(255, 255, 255, 0.4)"
                                        }}
                                        className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 cursor-pointer transition-colors group"
                                    >
                                        <item.icon
                                            className="text-xl transition-transform group-hover:rotate-12 duration-300"
                                            style={{ color: item.color }}
                                        />
                                        <span className="text-base font-medium text-gray-300 group-hover:text-white">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
