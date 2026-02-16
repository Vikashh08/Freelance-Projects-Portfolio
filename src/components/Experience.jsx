import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo1 from "../assets/logo1.jpg";

const experiences = [
    {
        id: 1,
        role: "Volunteer",
        company: "EDUMUST",
        period: "June 2024 - Aug 2024",
        description: "Volunteered with Edumust for 75 hours (June–August 2024), contributing to digital literacy initiatives by assisting in computer literacy classes, providing technical support, and developing educational resources. This experience strengthened my technical, teamwork, and organizational skills while allowing me to support digital education and community development.",
        tech: ["Leadership", "Mentoring", "Community Outreach"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="relative py-32 overflow-hidden text-gray-900 transition-colors duration-300 bg-white dark:bg-black dark:text-white">

            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white dark:from-gray-900 dark:via-black dark:to-black opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-5xl px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-white">
                        Experience<span className="text-fuchsia-600 dark:text-fuchsia-500">.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
                        Professional milestones and impactful contributions.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative p-[1px] rounded-3xl overflow-hidden"
                        >
                            {/* Animated Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                            <div className="absolute inset-0 bg-gray-100 dark:bg-white/5 rounded-3xl" />

                            <div className="relative p-8 transition-all duration-300 border bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl md:p-10 border-black/5 dark:border-white/10 group-hover:bg-white/90 dark:group-hover:bg-zinc-900/80">
                                <div className="flex flex-col items-start justify-between gap-8 md:flex-row">

                                    {/* Left: Role & Company */}
                                    <div className="space-y-4 md:w-1/3">
                                        <div className="inline-block p-3 mb-2 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400">
                                           <img src={logo1} alt="EDUMUST Logo" className="h-8 w-15" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 text-2xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-lg font-medium text-gray-600 dark:text-gray-400">{exp.company}</h4>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1 font-mono text-sm text-gray-500 border rounded-full border-black/5 dark:border-white/10 w-fit">
                                            <FaCalendarAlt size={12} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    {/* Right: Description & Tech */}
                                    <div className="space-y-6 md:w-2/3">
                                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {exp.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 rounded-lg bg-fuchsia-50 dark:bg-white/5 text-sm font-medium text-fuchsia-700 dark:text-fuchsia-200 border border-fuchsia-200 dark:border-fuchsia-500/20 group-hover:border-fuchsia-300 dark:group-hover:border-fuchsia-500/40 transition-colors"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
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
