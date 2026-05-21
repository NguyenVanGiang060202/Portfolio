"use client";

import { motion, useInView } from "framer-motion";
import { Github, Mail, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Magnetic } from "../motion/magnetic-button";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:Nguyenvangiang060202@gmail.com",
    icon: Mail,
    value: "Nguyenvangiang060202@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:0393508079",
    icon: Phone,
    value: "0393508079",
  },
  {
    label: "GitHub",
    href: "https://github.com/NguyenVanGiang060202",
    icon: Github,
    value: "NguyenVanGiang060202",
  },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <footer ref={ref} className="w-full border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm text-muted-foreground leading-relaxed max-w-md"
            >
              Built with Next.js, Tailwind CSS, Framer Motion, and Lenis.
              Crafted with attention to detail and a passion for interactive web
              experiences.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6">
            {socialLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Magnetic strength={0.1}>
                  <Link
                    href={link.href}
                    target={link.label === "GitHub" ? "_blank" : undefined}
                    rel={
                      link.label === "GitHub"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <link.icon className="size-4" />
                    <span>{link.value}</span>
                    <ArrowUpRight className="size-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
