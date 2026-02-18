"use client";

import { GraduationCap, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { useFadeUp } from "@/shared/hooks/useFadeUp";

export function FeaturesSection() {
    const fadeUp = useFadeUp();

    return (
        <section id="recursos" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <motion.div {...fadeUp(0)} className="max-w-3xl">
                <p className="text-sm font-semibold opacity-80">Recursos</p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Tudo que você precisa para mandar bem</h2>
                <p className="mt-3 opacity-80">Um fluxo simples: organizar → estudar → praticar → acompanhar.</p>
            </motion.div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <FeatureCard
                    title="Conteúdo por tópicos"
                    desc="Matérias → tópicos → aulas e questões, do jeito que o cérebro gosta."
                    icon={<GraduationCap className="h-5 w-5" />}
                />
                <FeatureCard
                    title="Questões com explicação"
                    desc="4 alternativas, resposta certa e explicação opcional pra fixar."
                    icon={<CheckCircle2 className="h-5 w-5" />}
                />
                <FeatureCard
                    title="Progresso e foco"
                    desc="Marque aulas concluídas, veja evolução e saiba o que revisar."
                    icon={<Sparkles className="h-5 w-5" />}
                />
            </div>
        </section>
    );
}
