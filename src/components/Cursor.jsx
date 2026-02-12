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
                className="fixed top-0 left-0 w-3 h-3 bg-secondary rounded-full pointer-events-none z-[9999] -ml-1.5 -mt-1.5 mix-blend-difference"
                style={{ willChange: "transform" }}
            />

            {/* Trailing Circle - Smooth Animation */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "#00FFFF" : "#FF0080",
                    backgroundColor: isHovering ? "rgba(0, 255, 255, 0.1)" : "transparent"
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 0.1
                }}
            />
        </>
    );
};
