"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    once?: boolean;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
    text,
    className = "",
    delay = 0,
    once = true,
    as: Tag = "p",
}: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    const words = text.split(" ");

    return (
        <Tag ref={ref as React.RefObject<never>} className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%", opacity: 0 }}
                        animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: delay + i * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}

interface CharRevealProps {
    text: string;
    className?: string;
    delay?: number;
    once?: boolean;
}

export function CharReveal({
    text,
    className = "",
    delay = 0,
    once = true,
}: CharRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-5%" });

    return (
        <span ref={ref} className={className}>
            {text.split("").map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%", rotateX: 90 }}
                        animate={isInView ? { y: "0%", rotateX: 0 } : { y: "110%", rotateX: 90 }}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * 0.03,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
