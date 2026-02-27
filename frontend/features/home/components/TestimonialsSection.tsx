"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { useFadeUp } from "@/shared/hooks/useFadeUp";

export function TestimonialsSection() {
    const fadeUp = useFadeUp();

    return (
        <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <motion.div {...fadeUp(0)} className="max-w-2xl">
                <p className="text-sm font-semibold opacity-80">Depoimentos</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Estudantes curtindo o fluxo</h2>
                <p className="mt-3 opacity-80">Exemplos fictícios (por enquanto 😄), só pra dar o tom.</p>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <TestimonialCard name="Ana • Eng. de Software" text="Finalmente parei de me perder. O passo a passo me deixa no ritmo." />
                <TestimonialCard name="Lucas • ADS" text="Curti demais os cards e as animações. Parece app premium." />
                <TestimonialCard name="Bruna • Ciência da Computação" text="Questões com explicação salvam quando eu erro e não entendo o porquê." />
            </div>
        </section>
    );
}
