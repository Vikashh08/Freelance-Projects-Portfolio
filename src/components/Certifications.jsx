import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
    {
        title: "TensorFlow Developer Certificate",
        issuer: "Google",
        date: "Aug 2023",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", // Placeholder logo
        link: "#"
    },
    {
        title: "AWS Certified Machine Learning - Specialty",
        issuer: "Amazon Web Services",
        date: "Dec 2023",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        link: "#"
    },
    {
        title: "Deep Learning Specialization",
        issuer: "Coursera (DeepLearning.AI)",
        date: "June 2023",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", // Generic placeholder
        link: "#"
    }
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-20 bg-dark-bg relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-secondary font-fira text-lg mb-2">06. Credentials</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                        Certifications & <span className="text-gradient">Awards</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-secondary/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FaAward size={100} className="text-secondary" />
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center">
                                    <img src={cert.image} alt={cert.issuer} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg leading-tight font-outfit">{cert.title}</h4>
                                    <p className="text-gray-400 text-sm font-dm">{cert.issuer}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <span className="text-gray-500 text-sm font-mono border border-white/10 px-2 py-1 rounded">{cert.date}</span>
                                <a href={cert.link} className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-sm font-semibold">
                                    Verify <FaExternalLinkAlt size={12} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
