"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className="group rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur"
        >
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white">{icon}</div>
                <p className="text-lg font-semibold">{title}</p>
            </div>

            <p className="mt-3 text-sm opacity-80">{desc}</p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100">
                Saiba mais <ArrowRight className="h-4 w-4" />
            </div>
        </motion.div>
    );
}
