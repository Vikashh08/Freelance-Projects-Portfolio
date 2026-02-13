import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaEnvelope, FaGlobe } from "react-icons/fa";

export const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        // REPLACE THESE VALUES WITH YOUR EMAILJS KEYS
        // 1. Go to emailjs.com and create an account
        // 2. Create a specific 'Service' (e.g. Gmail) -> get Service ID
        // 3. Create an 'Email Template' -> get Template ID
        // 4. Go to 'Account' > 'Public Key' -> get Public Key

        const serviceID = "YOUR_SERVICE_ID"; // e.g. "service_x8s9d7f"
        const templateID = "YOUR_TEMPLATE_ID"; // e.g. "template_a7s6d5f"
        const publicKey = "YOUR_PUBLIC_KEY";   // e.g. "user_123456789"

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                setStatus("success");
                formRef.current.reset();
            }, (error) => {
                setStatus("error");
                console.error(error);
            });
    };

    return (
        <section id="contact" className="py-32 bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">

            {/* Background Gradient - Extremely subtle white glow */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-200/40 dark:bg-white/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info & Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-sans font-bold tracking-tight mb-8 text-gray-900 dark:text-white">
                            Let's Work Together<span className="text-gray-400 dark:text-gray-500">.</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light leading-relaxed max-w-md">
                            I'm currently available for freelance projects and open to new opportunities. Let's build something clean, minimal, and impactful.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:duttavibhor01@gmail.com" className="group flex items-center gap-6 p-6 rounded-3xl bg-gray-100 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                                <FaEnvelope size={24} className="text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-gray-400 dark:group-hover:text-gray-600">Email</h4>
                                    <span className="text-lg font-medium">duttavibhor01@gmail.com</span>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-6 rounded-3xl bg-gray-100 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group">
                                <FaGlobe size={24} className="text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 group-hover:text-gray-400 dark:group-hover:text-gray-600">Location</h4>
                                    <span className="text-lg font-medium">Remote / Worldwide</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gray-100 dark:bg-zinc-900 rounded-[2rem] p-8 md:p-12 border border-black/5 dark:border-white/5 shadow-2xl relative"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="user_name" // Required by EmailJS
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 px-0 py-4 text-gray-900 dark:text-white text-xl placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-white transition-all font-light"
                                    placeholder="What's your name?"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="user_email" // Required by EmailJS
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 px-0 py-4 text-gray-900 dark:text-white text-xl placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-white transition-all font-light"
                                    placeholder="What's your email?"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    name="message" // Required by EmailJS
                                    required
                                    rows="4"
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-white/20 px-0 py-4 text-gray-900 dark:text-white text-xl placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-white transition-all resize-none font-light"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full py-5 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8 shadow-lg hover:shadow-xl"
                            >
                                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
                                {status !== "sending" && status !== "success" && <FaPaperPlane size={16} />}
                            </button>

                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-gray-500 dark:text-gray-400 text-sm text-center font-medium mt-4"
                                >
                                    Thanks! I'll be in touch soon.
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 dark:text-red-400 text-sm text-center font-medium mt-4"
                                >
                                    Something went wrong. Please try again.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
