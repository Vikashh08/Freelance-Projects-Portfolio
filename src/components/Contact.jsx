import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        // Mock email sending for now as User needs to provide ServiceID/TemplateID
        setTimeout(() => {
            setStatus("success");
            formRef.current.reset();
        }, 1500);

        /* 
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setStatus('success');
                formRef.current.reset();
            }, (error) => {
                setStatus('error');
            });
        */
    };

    return (
        <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-secondary font-fira text-lg mb-2">05. Get in Touch</h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-outfit">
                        Let's Work <span className="text-gradient">Together</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md font-dm">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Email</h4>
                                <p className="text-gray-400">duttavibhor01@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                <FaPhoneAlt size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold font-outfit">Phone</h4>
                                <p className="text-gray-400 font-dm">+91 1234567890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-pink-500">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Location</h4>
                                <p className="text-gray-400">New Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2 text-sm font-medium">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2 text-sm font-medium">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all resize-none"
                                placeholder="Hi, I'd like to discuss a project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
                        >
                            {status === "sending" ? (
                                <span className="animate-pulse">Sending...</span>
                            ) : status === "success" ? (
                                <span>Message Sent!</span>
                            ) : (
                                <>
                                    Send Message <FaPaperPlane />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
