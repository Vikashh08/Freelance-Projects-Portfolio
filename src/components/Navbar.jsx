import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
                }`}
        >
            <div
                className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          backdrop-blur-xl border border-white/10 shadow-2xl
          transition-all duration-300
          ${isScrolled ? "bg-dark-bg/80 w-[90%] md:w-[70%]" : "bg-white/5 w-[95%] md:w-[80%]"}
        `}
            >
                {/* Logo */}
                <a href="#" className="text-2xl font-bold font-outfit tracking-tighter text-white">
                    Vibhor<span className="text-primary">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors font-outfit tracking-wide uppercase"
                        >
                            {link.title}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold hover:bg-accent transition-colors shadow-lg shadow-primary/20"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute top-20 left-4 right-4 bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-lg font-medium text-gray-300 hover:text-primary transition-colors text-center py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
