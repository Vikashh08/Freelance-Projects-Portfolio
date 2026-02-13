import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursor = (e) => {
            // Direct DOM manipulation for the main dot to ensure zero lag
            const dot = document.getElementById("cursor-dot");
            if (dot) {
                dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }

            // Update state for the trailing circle
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            setIsHovering(
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.closest('.cursor-pointer') ||
                target.closest('.hover-effect')
            );
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    // Hide on mobile/touch devices
    if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            {/* Main Dot - High Contrast */}
            <div
                id="cursor-dot"
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -ml-1 -mt-1 mix-blend-difference"
                style={{ willChange: "transform" }}
            />

            {/* Trailing Circle - Soft Glow Orb */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
                style={{
                    background: "radial-gradient(circle, rgba(0, 255, 157, 0.4) 0%, rgba(255, 0, 255, 0) 70%)",
                    filter: "blur(5px)",
                }}
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 1 : 0.6,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
        </>
    );
};
