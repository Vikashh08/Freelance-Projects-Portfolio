import React from "react";
import { motion } from "framer-motion";
import { SiUdemy, SiInfosys } from "react-icons/si";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
    {
        id: 1,
        title: "Master Generative AI",
        issuer: "Udemy",
        year: "2025",
        icon: <SiUdemy className="text-white group-hover:text-[#A435F0] transition-colors" />,
        color: "bg-[#A435F0]",
        link: "#"
    },
    {
        id: 2,
        title: "No-Code AI Solutions",
        issuer: "Udemy",
        year: "2025",
        icon: <SiUdemy className="text-white group-hover:text-[#A435F0] transition-colors" />,
        color: "bg-[#A435F0]",
        link: "#"
    },
    {
        id: 3,
        title: "ChatGPT-4 Prompt Engineering",
        issuer: "Infosys",
        year: "2025",
        icon: <SiInfosys className="text-white group-hover:text-[#007CC3] transition-colors" />,
        color: "bg-[#007CC3]",
        link: "#"
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
        <section id="certifications" className="py-24 bg-black text-white relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-stone-900/20 opacity-40 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                        Certifications.
                    </h2>
                    <p className="text-gray-400 font-light text-lg">
                        Industry-recognized credentials.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden shadow-2xl"
                        >
                            {/* Colorful Glow Background */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${cert.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2`} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon Container (Floating) */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                    className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:shadow-lg transition-all duration-300"
                                >
                                    {cert.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors duration-300">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider">
                                    <FaCertificate className="text-gray-600" />
                                    {cert.issuer}
                                </div>

                                <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                                        {cert.year}
                                    </span>
                                    <motion.a
                                        href={cert.link}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-gray-400 hover:text-white transition-colors"
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
