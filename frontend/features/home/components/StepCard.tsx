"use client";

import { motion } from "framer-motion";

export function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="rounded-3xl border border-neutral-200 bg-white/70 p-6 backdrop-blur"
        >
            <p className="text-xs font-semibold opacity-70">{n}</p>
            <p className="mt-2 text-lg font-bold">{title}</p>
            <p className="mt-2 text-sm opacity-80">{desc}</p>
        </motion.div>
    );
}
