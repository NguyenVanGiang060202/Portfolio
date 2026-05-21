"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Mail, Phone, Github, ArrowUpRight, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Magnetic } from "@/components/motion/magnectic-button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TextReveal } from "@/components/motion/text-reveal";

const contactMethods = [
  {
    label: "Email",
    value: "Nguyenvangiang060202@gmail.com",
    href: "mailto:Nguyenvangiang060202@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "0393508079",
    href: "tel:0393508079",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "NguyenVanGiang060202",
    href: "https://github.com/NguyenVanGiang060202",
    icon: Github,
  },
];

function ContactCard({
  method,
  index,
}: {
  method: (typeof contactMethods)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(method.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="glass h-full rounded-2xl p-6 md:p-8 hover:bg-foreground/5 transition-colors duration-500">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center">
              <method.icon className="size-4 text-muted-foreground" />
            </div>
            <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground">
              {method.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-foreground/5 transition-colors duration-300"
              aria-label="Copy"
            >
              <Copy className="size-3 text-muted-foreground" />
            </button>
            <Magnetic strength={0.15}>
              <Link
                href={method.href}
                target={method.label === "GitHub" ? "_blank" : undefined}
                rel={
                  method.label === "GitHub" ? "noopener noreferrer" : undefined
                }
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-foreground/5 transition-colors duration-300"
              >
                <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </Link>
            </Magnetic>
          </div>
        </div>
        <p className="text-sm break-words md:text-base font-medium group-hover:text-[oklch(0.7_0.12_200)] transition-colors duration-300">
          {method.value}
        </p>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-emerald-500 mt-2"
          >
            Copied to clipboard
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-[oklch(0.3_0.08_200/10%)] blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">
            04 / Contact
          </span>
        </ScrollReveal>

        <div className="mt-8 mb-16">
          <TextReveal
            text="Let's work together"
            as="h2"
            className="text-3xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-mona-sans)]"
            delay={0.1}
          />
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground max-w-lg leading-relaxed mb-12">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Reach out through any of the channels below.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl ">
          {contactMethods.map((method, index) => (
            <ContactCard key={method.label} method={method} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
