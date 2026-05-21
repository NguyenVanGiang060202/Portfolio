"use client";

import { motion, useScroll, useSpring, useTransform, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { wrap } from "framer-motion";

interface ParallaxRowProps {
    children: string;
    baseVelocity: number;
    className?: string;
}

function ParallaxRow({ children, baseVelocity = 5, className = "" }: ParallaxRowProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
    const x = useTransform(baseX, (v) => `${wrap(-10, -60, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((_, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }
        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden">
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className={`px-8 ${className}`}>
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

interface MarqueeProps {
    text: string;
    className?: string;
    velocity?: number;
}

export function Marquee({ text, className = "", velocity = 5 }: MarqueeProps) {
    return (
        <div className="w-full overflow-hidden py-4">
            <ParallaxRow baseVelocity={velocity} className={className}>
                {text}
            </ParallaxRow>
        </div>
    );
}
