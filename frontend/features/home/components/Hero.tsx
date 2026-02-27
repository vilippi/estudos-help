// src/features/landing/home/components/Hero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, LayoutGrid, Sparkles } from "lucide-react";
import { HeroMock } from "./HeroMock";
import { Pill } from "@/shared/components/ui/Pill";

export function Hero() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="mx-auto max-w-6xl px-4 pb-14 pt-12 md:pb-20 md:pt-16">
            <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                    <motion.div
                        {...(prefersReducedMotion
                            ? {}
                            : {
                                initial: { opacity: 0, y: 12 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
                            })}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span>Estudos Help • foco em faculdade</span>
                    </motion.div>

                    <motion.h1
                        {...(prefersReducedMotion
                            ? {}
                            : {
                                initial: { opacity: 0, y: 18 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 },
                            })}
                        className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
                    >
                        Estude para provas{" "}
                        <span className="bg-linear-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
                            sem complicação
                        </span>
                        .
                    </motion.h1>

                    <motion.p
                        {...(prefersReducedMotion
                            ? {}
                            : {
                                initial: { opacity: 0, y: 18 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 },
                            })}
                        className="mt-4 max-w-xl text-base opacity-80 md:text-lg"
                    >
                        Organize matérias, revise com foco, responda questões e acompanhe seu progresso. Tudo em um fluxo simples e moderno.
                    </motion.p>

                    <motion.div
                        {...(prefersReducedMotion
                            ? {}
                            : {
                                initial: { opacity: 0, y: 18 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.18 },
                            })}
                        className="mt-6 flex flex-col gap-3 sm:flex-row"
                    >
                        <a
                            href="#comecar"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Começar agora <ArrowRight className="h-4 w-4" />
                        </a>

                        <a
                            href="#recursos"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white"
                        >
                            Ver recursos <LayoutGrid className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <div className="mt-6 flex flex-wrap gap-3 text-xs opacity-75">
                        <Pill>✅ Revisão guiada</Pill>
                        <Pill>✅ Simulados</Pill>
                        <Pill>✅ Progresso por tópico</Pill>
                        <Pill>✅ Rápido no mobile</Pill>
                    </div>
                </div>

                <HeroMock />
            </div>
        </section>
    );
}
