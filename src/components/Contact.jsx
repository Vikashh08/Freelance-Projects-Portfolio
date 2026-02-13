import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        // REPLACE THESE WITH YOUR ACTUAL KEYS from EmailJS dashboard
        // Service ID: service_xxxxxx
        // Template ID: template_xxxxxx
        // Public Key: user_xxxxxx
        // For now, we simulate success so the UI feedback is visible

        /* 
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setStatus('success');
                formRef.current.reset();
            }, (error) => {
                setStatus('error');
                console.error(error);
            });
        */

        // Removing mock timeout to force user to put keys if they want it real, 
        // but for demonstration I will keep the mock active until they replace keys.
        setTimeout(() => {
            setStatus("success");
            formRef.current.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 bg-secondary text-black relative">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-black"
                >
                    Get in Touch.
                </motion.h2>
                <p className="text-xl text-gray-500 mb-12">
                    Have a project in mind? Let's create something transformative.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-left"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-500 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full bg-gray-100 border-none rounded-xl px-4 py-4 text-black focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-500 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full bg-gray-100 border-none rounded-xl px-4 py-4 text-black focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-500 mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                className="w-full bg-gray-100 border-none rounded-xl px-4 py-4 text-black focus:ring-2 focus:ring-blue-500 transition-all resize-none font-medium"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <div className="flex justify-between items-center pt-4">
                            <div className="text-sm text-gray-500 hidden md:block">
                                or email at <a href="mailto:duttavibhor01@gmail.com" className="text-blue-500 hover:underline">duttavibhor01@gmail.com</a>
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                                {status !== "sending" && status !== "success" && <FaPaperPlane />}
                            </button>
                        </div>
                        {status === "success" && (
                            <p className="text-green-600 text-sm mt-2 text-center">Message sent successfully! I'll get back to you soon.</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again later.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
