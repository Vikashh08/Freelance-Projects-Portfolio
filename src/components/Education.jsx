import React from "react";
import { motion } from "framer-motion";

export const Education = () => {
    const education = [
        {
            school: "Lovely Professional University",
            degree: "B.Tech in Computer Science and Engineering",
            year: "2023 - 2027",
            grade: "CGPA: 7.74 (Current)"
        },
        {
            school: "Govt. Sen. Sec. School",
            degree: "Intermediate (12th Grade)",
            year: "2023",
            grade: "96%"
        },
        {
            school: "S.D. Public Sen. Sec. School",
            degree: "Matriculation (10th Grade)",
            year: "2021",
            grade: "95%"
        }
    ];

    return (
        <section className="py-20 bg-black text-white border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-2">Education.</h2>
                    <p className="text-gray-500 text-lg">Academic background and qualifications.</p>
                </div>

                <div className="grid gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-surface rounded-2xl p-8 hover:bg-white/5 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row justify-between md:items-start mb-2">
                                <h3 className="text-2xl font-bold text-white mb-1 md:mb-0">{edu.school}</h3>
                                <span className="text-gray-500 font-medium">{edu.year}</span>
                            </div>
                            <div className="text-lg text-blue-400 font-medium mb-1">{edu.degree}</div>
                            <div className="text-gray-400">{edu.grade}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
