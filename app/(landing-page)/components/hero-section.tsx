"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Link from "next/link";
import { ArrowDown, Github } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic-button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ scale }}
          className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-[oklch(0.3_0.08_200/30%)] blur-[120px]"
        />
        <motion.div
          style={{ scale }}
          className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-[oklch(0.25_0.06_240/20%)] blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-[oklch(0.5_0.1_200/10%)] blur-[80px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
      >
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <ScrollReveal delay={0} duration={0.8}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Available for work
              </span>
            </div>
          </ScrollReveal>

          {/* Main heading */}
          <div className="overflow-hidden mb-2">
            <TextReveal
              text="Creative"
              as="h1"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter font-[family-name:var(--font-mona-sans)]"
              delay={0.2}
            />
          </div>
          <div className="overflow-hidden mb-2">
            <TextReveal
              text="Front-End Developer"
              as="h1"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-gradient font-[family-name:var(--font-mona-sans)]"
              delay={0.4}
            />
          </div>

          {/* Subtitle */}
          <ScrollReveal delay={0.8} duration={0.8}>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed">
              I craft interactive web experiences with modern technologies,
              focusing on motion design and pixel-perfect interfaces.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={1} duration={0.8}>
            <div className="flex items-center gap-4 mt-10">
              <Magnetic strength={0.2}>
                <Link
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium overflow-hidden transition-transform duration-300"
                >
                  <span className="relative z-10">View Projects</span>
                  <ArrowDown className="size-4 relative z-10 group-hover:translate-y-0.5 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[oklch(0.7_0.12_200)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  href="https://github.com/NguyenVanGiang060202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/10 transition-colors duration-300"
                >
                  <Github className="size-4" />
                  <span>GitHub</span>
                </Link>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
}
