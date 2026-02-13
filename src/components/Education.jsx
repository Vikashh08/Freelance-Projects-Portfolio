import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const education = [
    {
        id: 1,
        school: "Lovely Professional University",
        degree: "B.Tech in Computer Science and Engineering",
        year: "2023 - 2027",
        grade: "CGPA: 6.3",
        icon: <FaUniversity />
    },
    {
        id: 2,
        school: "Govt. Sen. Sec. School",
        degree: "Intermediate (12th Grade)",
        year: "2023",
        grade: "89.2%",
        icon: <FaSchool />
    },
    {
        id: 3,
        school: "S.D. Public Sen. Sec. School",
        degree: "Matriculation (10th Grade)",
        year: "2021",
        grade: "99%",
        icon: <FaGraduationCap />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
};

export const Education = () => {
    return (
        <section id="education" className="py-32 bg-black text-white relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-zinc-900/20 opacity-50 pointer-events-none" />

            {/* Glowing Orb */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                        Education.
                    </h2>
                    <p className="text-xl text-gray-400">
                        Academic background and qualifications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors duration-300"
                        >
                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-amber-500/30 rounded-2xl transition-colors duration-300" />

                            <div className="flex items-start gap-6">
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className="hidden md:flex p-4 rounded-xl bg-white/5 text-gray-400 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-colors duration-300"
                                >
                                    <span className="text-2xl">{edu.icon}</span>
                                </motion.div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                                            {edu.school}
                                        </h3>
                                        <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                            {edu.year}
                                        </span>
                                    </div>
                                    <p className="text-lg text-gray-300 mb-2">{edu.degree}</p>
                                    <p className="text-amber-500 font-semibold">{edu.grade}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
