"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "@/components/motion/text-reveal";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Marquee } from "@/components/motion/parallax-text";


export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

    return (
        <section id="about" ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
            {/* Divider line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full">
                <div className="w-full h-full bg-border" />
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute top-0 left-0 w-full bg-[oklch(0.7_0.12_200)] origin-top"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                    <div>
                        <ScrollReveal delay={0}>
                            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
                                01 / About
                            </span>
                        </ScrollReveal>

                        <div className="mt-8">
                            <TextReveal
                                text="I build things for the web that feel alive."
                                as="h2"
                                className="text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-mona-sans)]"
                                delay={0.1}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:pt-12">
                        <ScrollReveal delay={0.2}>
                            <p className="text-muted-foreground leading-relaxed">
                                I&apos;m Giang Nguyen, a front-end developer based in Vietnam with a passion for
                                creating immersive digital experiences. I specialize in building modern web
                                applications with React, Next.js, and TypeScript.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <p className="text-muted-foreground leading-relaxed">
                                My approach combines clean code with thoughtful motion design, ensuring every
                                interaction feels intentional and every pixel serves a purpose. I believe the
                                best interfaces are the ones that feel invisible.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="glass px-4 py-2 rounded-full text-xs font-medium text-muted-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Marquee divider */}
            <div className="mt-32">
                <Marquee
                    text="Front-End Developer"
                    className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-mona-sans)] text-foreground/5"
                    velocity={3}
                />
            </div>
        </section>
    );
}
