import React from "react";
import { motion } from "framer-motion";

const certifications = [
    {
        title: "Master Generative AI",
        issuer: "Udemy",
        year: "2025",
    },
    {
        title: "No-Code AI Solutions",
        issuer: "Udemy",
        year: "2025",
    },
    {
        title: "ChatGPT-4 Prompt Engineering",
        issuer: "Infosys",
        year: "2025",
    }
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-secondary text-black">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Certifications</h2>
                </div>

                <div className="grid gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">{cert.title}</h3>
                                <p className="text-gray-500">{cert.issuer}</p>
                            </div>
                            <span className="text-sm font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{cert.year}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
