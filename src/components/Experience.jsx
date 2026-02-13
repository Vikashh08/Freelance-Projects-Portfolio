import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
    {
        id: 1,
        role: "Volunteer",
        company: "EDUMUST",
        period: "Aug 2024 - Present",
        description: "Spearheading educational initiatives and community service projects. Orchestrated tech workshops and mentorship programs, dedicating 110+ hours to student development.",
        tech: ["Leadership", "Mentoring", "Community Outreach"]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">

            {/* Background Texture/Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white dark:from-gray-900 dark:via-black dark:to-black opacity-40 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
                        Experience<span className="text-fuchsia-600 dark:text-fuchsia-500">.</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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

                            <div className="relative bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/10 transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-zinc-900/80">
                                <div className="flex flex-col md:flex-row gap-8 items-start justify-between">

                                    {/* Left: Role & Company */}
                                    <div className="space-y-4 md:w-1/3">
                                        <div className="inline-block p-3 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 mb-2">
                                            <FaBriefcase size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium">{exp.company}</h4>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 font-mono border border-black/5 dark:border-white/10 rounded-full px-3 py-1 w-fit">
                                            <FaCalendarAlt size={12} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    {/* Right: Description & Tech */}
                                    <div className="md:w-2/3 space-y-6">
                                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
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
