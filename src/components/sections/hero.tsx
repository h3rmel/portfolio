"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Terminal } from "lucide-react";
import Link from "next/link";
import { Section } from "../shared/section";

const STAGGER_DELAY = 0.09;

const mechanical = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  return (
    <Section index="01" title="Hero">
      <div className="relative z-10 max-w-3xl">
        {/* System status line */}
        <motion.div
          custom={0}
          variants={mechanical}
          initial="hidden"
          animate="visible"
          className="mb-8 flex items-center gap-3"
        >
          <Terminal className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            sys.status — online
          </span>
          <span className="inline-block h-2 w-2 bg-primary shadow-[0_0_6px_oklch(0.55_0.25_29)]" />
        </motion.div>
      </div>
      <div className="relative z-10 max-w-3xl">
        {/* Name */}
        <motion.div
          custom={1}
          variants={mechanical}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          <h1 className="font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
        </motion.div>
      </div>
      <div className="relative z-10 max-w-3xl">
        {/* Core value proposition */}
        <motion.p
          custom={2}
          variants={mechanical}
          initial="hidden"
          animate="visible"
          className="mb-4 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Software Engineer with{" "}
          <span className="font-medium text-foreground">
            4 years of experience
          </span>{" "}
          in full-stack development, specializing in{" "}
          <span className="font-medium text-foreground">
            scalable architectures
          </span>{" "}
          and{" "}
          <span className="font-medium text-foreground">
            performance optimization
          </span>{" "}
          within the JavaScript/TypeScript ecosystem.
        </motion.p>
      </div>
      <div className="relative z-10 max-w-3xl">
        {/* CTA switches */}
        <motion.div
          custom={3}
          variants={mechanical}
          initial="hidden"
          animate="visible"
          className="mt-4 flex flex-wrap gap-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.34,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="default">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.46,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.58,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
