import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
    // Resume data
    const experiences = [
        {
            role: "Volunteer",
            company: "EDUMUST",
            period: "Aug 2024",
            description: "Dedicated 110+ hours to community service and educational initiatives."
        }
    ];

    return (
        <section id="experience" className="py-32 bg-black text-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-2">Experience.</h2>
                    <p className="text-gray-500 text-lg">Professional journey and contributions.</p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 border-b border-white/10 pb-12 last:border-0"
                        >
                            <div className="md:w-1/4">
                                <span className="text-gray-500 font-medium text-lg">{exp.period}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-2xl font-semibold mb-1 text-white group-hover:text-blue-500 transition-colors">{exp.role}</h3>
                                <div className="text-gray-400 text-lg mb-4">{exp.company}</div>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
