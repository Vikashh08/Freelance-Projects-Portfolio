import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Certifications", href: "#certifications" },
    { title: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const isManualScroll = useRef(false); // Ref to track click-triggered scrolling

    // 1. Efficient Scroll Handler for Navbar Appearance
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolled]);

    // 2. IntersectionObserver for smooth Active Section tracking
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "-20% 0px -35% 0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            if (isManualScroll.current) return; // Skip updates if scrolling manually via click

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        navLinks.forEach(link => {
            const sectionId = link.href.substring(1);
            const element = document.getElementById(sectionId);
            if (element) observer.observe(element);
        });

        return () => {
            navLinks.forEach(link => {
                const sectionId = link.href.substring(1);
                const element = document.getElementById(sectionId);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const handleScrollTo = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            // Lock observer updates
            isManualScroll.current = true;
            setActiveSection(targetId); // Immediate UI update
            setMobileMenuOpen(false);

            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: "smooth"
            });

            // Re-enable observer after scroll animation (approx 800ms)
            setTimeout(() => {
                isManualScroll.current = false;
            }, 800);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
        >
            <div
                className={`
                    flex items-center justify-between px-6 py-3 rounded-full 
                    backdrop-blur-md border border-white/10 shadow-2xl
                    transition-all duration-500 ease-in-out
                    ${isScrolled ? "bg-black/90 w-[95%] md:w-[85%]" : "bg-black/60 w-[95%] md:w-[90%]"}
                `}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleScrollTo(e, "#hero")}
                    className="text-2xl font-bold font-sans tracking-tighter text-white"
                >
                    Vibhor<span className="text-cyan-400">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1 lg:gap-2">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${isActive ? "text-black" : "text-gray-400 hover:text-cyan-400"}`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white rounded-full z-[-1]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }}
                                    />
                                )}
                                {link.title}
                            </a>
                        );
                    })}
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
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={`text-lg font-medium text-center py-3 rounded-xl transition-colors ${activeSection === link.href.substring(1) ? "bg-white text-black" : "text-gray-400 hover:text-cyan-400"}`}
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
