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

        const serviceID = "service_rqfq7yk"; // e.g. "service_x8s9d7f"
        const templateID = "template_d6rykpa"; // e.g. "template_a7s6d5f"
        const publicKey = "5HGCRcG_9LnoFURPK";   // e.g. "user_123456789"

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
        <section id="contact" className="relative py-32 overflow-hidden text-gray-900 transition-colors duration-300 bg-white dark:bg-black dark:text-white">

            {/* Background Gradient - Extremely subtle white glow */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-200/40 dark:bg-white/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 max-w-6xl px-6 mx-auto">
                <div className="grid items-start gap-16 md:grid-cols-2">

                    {/* Left Column: Info & Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-8 font-sans text-4xl font-bold tracking-tight text-gray-900 md:text-7xl dark:text-white">
                            Let's Work Together<span className="text-gray-400 dark:text-gray-500">.</span>
                        </h2>
                        <p className="max-w-md mb-12 text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                            I'm currently available for freelance projects and open to new opportunities. Let's build something clean, minimal, and impactful.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:duttavibhor01@gmail.com" className="flex items-center gap-6 p-6 transition-all duration-300 bg-gray-100 border group rounded-3xl dark:bg-zinc-900/50 border-black/5 dark:border-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                                <FaEnvelope size={24} className="text-gray-500 transition-colors dark:text-gray-400 group-hover:text-white dark:group-hover:text-black" />
                                <div>
                                    <h4 className="mb-1 text-xs font-bold tracking-widest text-gray-500 uppercase group-hover:text-gray-400 dark:group-hover:text-gray-600">Email</h4>
                                    <span className="text-lg font-medium">duttavibhor01@gmail.com</span>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-6 transition-all duration-300 bg-gray-100 border rounded-3xl dark:bg-zinc-900/50 border-black/5 dark:border-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black group">
                                <FaGlobe size={24} className="text-gray-500 transition-colors dark:text-gray-400 group-hover:text-white dark:group-hover:text-black" />
                                <div>
                                    <h4 className="mb-1 text-xs font-bold tracking-widest text-gray-500 uppercase group-hover:text-gray-400 dark:group-hover:text-gray-600">Location</h4>
                                    <span className="text-lg font-medium">Jalandhar, Punjab, India</span>
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
                        <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-8">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="user_name" // Required by EmailJS
                                    required
                                    className="w-full px-0 py-4 text-xl font-light text-gray-900 placeholder-gray-500 transition-all bg-transparent border-b border-gray-300 dark:border-white/20 dark:text-white dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-white"
                                    placeholder="What's your name?"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="user_email" // Required by EmailJS
                                    required
                                    className="w-full px-0 py-4 text-xl font-light text-gray-900 placeholder-gray-500 transition-all bg-transparent border-b border-gray-300 dark:border-white/20 dark:text-white dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-white"
                                    placeholder="What's your email?"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    name="message" // Required by EmailJS
                                    required
                                    rows="4"
                                    className="w-full px-0 py-4 text-xl font-light text-gray-900 placeholder-gray-500 transition-all bg-transparent border-b border-gray-300 resize-none dark:border-white/20 dark:text-white dark:placeholder-gray-600 focus:outline-none focus:border-black dark:focus:border-white"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="flex items-center justify-center w-full gap-3 py-5 mt-8 text-lg font-bold text-white transition-all bg-black rounded-full shadow-lg dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-xl"
                            >
                                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
                                {status !== "sending" && status !== "success" && <FaPaperPlane size={16} />}
                            </button>

                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400"
                                >
                                    Thanks! I'll be in touch soon.
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 text-sm font-medium text-center text-red-500 dark:text-red-400"
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
