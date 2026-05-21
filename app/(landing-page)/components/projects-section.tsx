"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TextReveal } from "@/components/motion/text-reveal";

const projects = [
  {
    id: 0,
    name: "Shopify Mini App - Collage Daily",
    description:
      "A social collage platform for sharing user-generated content featuring Shopify products.",
    longDescription:
      "Collage Daily is a Shopify embedded mini-app that lets customers build and share visual collages using product images from the store. Users can mix and match items, save their collections, and publish them to a community feed — blending social discovery with native e-commerce.",
    image: "/Collage_Daily_3.jpg",
    extraImages: ["/Collage_Daily_1.jpg", "/Collage_Daily_2.jpg"],
    link: null,
    tags: ["React", "Shopify"],
    isPortrait: true,
  },
  {
    id: 1,
    name: "LMS Platform",
    description:
      "A comprehensive learning management system with course management, student tracking, and interactive content delivery.",
    longDescription: "",
    image: "/Project_1.webp",
    extraImages: [],
    link: "https://github.com/NguyenVanGiang060202/TLCN-client",
    tags: ["Next.js"],
  },
  {
    id: 2,
    name: "Booking Service",
    description:
      "Full-stack booking platform with real-time availability, payment integration, and reservation management.",
    longDescription: "",
    image: "/Project_2.webp",
    extraImages: [],
    link: "https://github.com/NguyenVanGiang060202/booking-service-front-end",
    tags: ["Next.js"],
  },
  {
    id: 3,
    name: "CMS Restaurant",
    description:
      "Restaurant content management system with menu management, table reservations, and order tracking dashboard.",
    longDescription: "",
    image: "/Project_3.webp",
    extraImages: [],
    link: "https://github.com/NguyenVanGiang060202/manager_dashboard_food_reservation",
    tags: ["Next.js"],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {/* Main image */}
        <div className="grid grid-cols-3 gap-3 rounded-t-2xl overflow-hidden p-6 md:p-8">
          {/* Ảnh chính */}
          <div className="relative aspect-[9/16] bg-card">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* 2 ảnh phụ */}
          {project.extraImages?.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[9/16] bg-card"
            >
              <Image
                src={src}
                alt={`${project.name} screenshot ${i + 2}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground glass px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-mona-sans)]">
              {project.name}
            </h2>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-2">
            {project.description}
          </p>
          {project.longDescription && (
            <p className="text-muted-foreground/80 leading-relaxed text-sm mt-2">
              {project.longDescription}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const cardContent = (
    <>
      {/* Image container */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-card">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center"
        >
          {
            project.link ? (
              <ArrowUpRight className="size-4" />
            ) : (
              <ArrowUpRight className="size-4 rotate-90" />
            ) // or a different icon like Expand
          }
        </motion.div>
      </div>

      {/* Project info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-mona-sans)] group-hover:text-[oklch(0.7_0.12_200)] transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground glass px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
      >
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {cardContent}
          </Link>
        ) : (
          <button
            className="block w-full text-left cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            {cardContent}
          </button>
        )}
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
            03 / Projects
          </span>
        </ScrollReveal>

        <div className="mt-8 mb-20">
          <TextReveal
            text="Selected work"
            as="h2"
            className="text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-mona-sans)]"
            delay={0.1}
          />
        </div>

        <div className="mb-12 md:mb-16">
          <ProjectCard project={projects[0]} index={0} />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {projects.slice(1, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
