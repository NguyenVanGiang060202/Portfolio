"use client";

import { Marquee } from "@/components/motion/parallax-text";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/motion/scroll-reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const skills = [
    {
        category: "Front-End",
        items: [
            { name: "React / Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 80 },
        ],
    },
    {
        category: "Tools & Workflow",
        items: [
            { name: "Git / GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Figma", level: 75 },
            { name: "Vercel", level: 85 },
        ],
    },
    {
        category: "Additional",
        items: [
            { name: "REST APIs", level: 85 },
            { name: "Responsive Design", level: 95 },
            { name: "Performance Optimization", level: 80 },
            { name: "Accessibility", level: 75 },
        ],
    },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-5%" });

    return (
        <div ref={ref} className="group">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-300">
                    {name}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: delay + 0.5, duration: 0.3 }}
                    className="text-xs text-muted-foreground font-mono"
                >
                    {level}%
                </motion.span>
            </div>
            <div className="h-[2px] bg-border rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: `${level}%` } : { width: "0%" }}
                    transition={{
                        duration: 1,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full bg-gradient-to-r from-[oklch(0.6_0.12_200)] to-[oklch(0.7_0.12_200)] rounded-full"
                />
            </div>
        </div>
    );
}

export default function SkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="skills" ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
            {/* Background accent */}
            <motion.div
                style={{ y }}
                className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full bg-[oklch(0.3_0.08_200/15%)] blur-[120px] -translate-y-1/2"
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <ScrollReveal>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
                        02 / Skills
                    </span>
                </ScrollReveal>

                <div className="mt-8 mb-16">
                    <TextReveal
                        text="Technologies I work with"
                        as="h2"
                        className="text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-mona-sans)]"
                        delay={0.1}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                    {skills.map((group, groupIndex) => (
                        <StaggerReveal key={group.category} staggerDelay={0.1} className="flex flex-col gap-6">
                            <StaggerItem>
                                <h3 className="text-lg font-semibold font-[family-name:var(--font-mona-sans)] mb-6">
                                    {group.category}
                                </h3>
                            </StaggerItem>
                            {group.items.map((skill, skillIndex) => (
                                <StaggerItem key={skill.name}>
                                    <SkillBar
                                        name={skill.name}
                                        level={skill.level}
                                        delay={groupIndex * 0.15 + skillIndex * 0.1}
                                    />
                                </StaggerItem>
                            ))}
                        </StaggerReveal>
                    ))}
                </div>
            </div>

            {/* Marquee divider */}
            <div className="mt-32">
                <Marquee
                    text="Skills & Expertise"
                    className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-mona-sans)] text-foreground/5"
                    velocity={-4}
                />
            </div>
        </section>
    );
}
