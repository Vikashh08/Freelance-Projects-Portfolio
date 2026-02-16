import React from "react";
import { motion } from "framer-motion";
import { SiUdemy, SiInfosys } from "react-icons/si";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
    {
        id: 1,
        title: "Master Generative AI",
        issuer: "Infosys",
        year: "2025",
        icon: <SiInfosys className="text-gray-900 dark:text-white group-hover:text-[#A435F0] transition-colors" />,
        color: "bg-[#A435F0]",
        link: "https://drive.google.com/file/d/1mCYpSpnUs139mUcufhWF9-QpCvBgqtmP/view?usp=sharing"
    },
    {
        id: 2,
        title: "No-Code AI Solutions",
        issuer: "Infosys",
        year: "2025",
        icon: <SiInfosys className="text-gray-900 dark:text-white group-hover:text-[#A435F0] transition-colors" />,
        color: "bg-[#A435F0]",
        link: "https://drive.google.com/file/d/16qBmNy5iQ90QkmPBfHcmbIN9B61_q4Je/view?usp=sharing"
    },
    {
        id: 3,
        title: "ChatGPT-4 Prompt Engineering",
        issuer: "Infosys",
        year: "2025",
        icon: <SiInfosys className="text-gray-900 dark:text-white group-hover:text-[#007CC3] transition-colors" />,
        color: "bg-[#007CC3]",
        link: "https://drive.google.com/file/d/18mTz8XOvQKmt4-vBQgrJ_YL-yk_X-vd6/view?usp=sharing"
    },
    {
        id: 3,
        title: "Computational Theory: Language Principle & Finite Automata Theory",
        issuer: "Infosys",
        year: "2025",
        icon: <SiInfosys className="text-gray-900 dark:text-white group-hover:text-[#007CC3] transition-colors" />,
        color: "bg-[#007CC3]",
        link: "https://drive.google.com/file/d/1jC-piFBTQVEjwobsrWN98ZXbTBZ0k3fC/view"
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
};

export const Certifications = () => {
    return (
        <section id="certifications" className="relative py-24 overflow-hidden text-gray-900 transition-colors duration-300 bg-white dark:bg-black dark:text-white">

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none bg-stone-100/50 dark:bg-stone-900/20 opacity-40" />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
                        Certifications.
                    </h2>
                    <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                        Industry-recognized credentials.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-3"
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="relative p-8 overflow-hidden transition-all duration-500 bg-gray-100 border shadow-lg group rounded-3xl dark:bg-zinc-900 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 dark:shadow-2xl"
                        >
                            {/* Colorful Glow Background */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${cert.color} blur-[80px] opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2`} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon Container (Floating) */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="flex items-center justify-center w-20 h-20 mb-6 text-4xl transition-all duration-300 bg-white border shadow-md rounded-2xl dark:bg-white/5 border-black/5 dark:border-white/10 dark:shadow-inner group-hover:shadow-lg"
                                >
                                    {cert.icon}
                                </motion.div>

                                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-6 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                    <FaCertificate className="text-gray-400 dark:text-gray-600" />
                                    {cert.issuer}
                                </div>

                                <div className="flex items-center justify-between w-full pt-6 mt-auto border-t border-black/5 dark:border-white/5">
                                    <span className="px-3 py-1 font-mono text-xs text-gray-500 bg-white rounded-full dark:bg-white/5">
                                        {cert.year}
                                    </span>
                                    <motion.a
                                        href={cert.link}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-gray-400 transition-colors hover:text-black dark:hover:text-white"
                                    >
                                        <FaExternalLinkAlt />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
