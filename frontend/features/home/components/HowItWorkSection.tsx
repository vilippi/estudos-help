"use client";

import { motion } from "framer-motion";
import { StepCard } from "./StepCard";
import { useFadeUp } from "@/shared/hooks/useFadeUp";

export function HowItWorksSection() {
    const fadeUp = useFadeUp();

    return (
        <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <motion.div {...fadeUp(0)} className="max-w-2xl">
                <p className="text-sm font-semibold opacity-80">Como funciona</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">3 passos e pronto</h2>
                <p className="mt-3 opacity-80">Sem telas confusas. Só o essencial pra estudar rápido e bem.</p>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <StepCard n="01" title="Organize" desc="Crie matérias e tópicos do seu semestre." />
                <StepCard n="02" title="Estude" desc="Assista aulas e marque como concluído." />
                <StepCard n="03" title="Pratique" desc="Faça questões e simulados, veja o score." />
            </div>
        </section>
    );
}
