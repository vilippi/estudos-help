"use client";

import { useFadeUp } from "@/shared/hooks/useFadeUp";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
    const fadeUp = useFadeUp();

    return (
        <section id="comecar" className="mx-auto max-w-6xl px-4 pb-20">
            <motion.div {...fadeUp(0)} className="rounded-3xl border border-neutral-200 bg-white/70 p-8 backdrop-blur">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <h3 className="text-2xl font-bold md:text-3xl">Pronto pra estudar com mais clareza?</h3>
                        <p className="mt-2 opacity-80">
                            Comece com um semestre, uma matéria e um tópico. Em 5 minutos você já está estudando.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <a
                            href="/novo-usuario"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Criar conta <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#recursos"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white"
                        >
                            Ver recursos
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
