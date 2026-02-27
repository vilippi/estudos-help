// src/features/landing/home/components/HeroMock.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MockCard } from "./MockCard";
import { MockTask } from "./MockTask";

export function HeroMock() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            {...(prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 },
                })}
            className="relative pb-16"
        >
            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Painel do estudante</p>
                    <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs opacity-70">Semana 3/4</span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <MockCard title="Matérias" value="6" hint="Ativas no semestre" />
                    <MockCard title="Questões" value="128" hint="Respondidas" />
                    <MockCard title="Aulas" value="21" hint="Concluídas" />
                    <MockCard title="Simulados" value="4" hint="Último: 78%" />
                </div>

                <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4">
                    <p className="text-sm font-semibold">Plano de hoje</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        <MockTask done>Revisar: Estruturas de Dados</MockTask>
                        <MockTask>Resolver 15 questões: Grafos</MockTask>
                        <MockTask>Simulado: Complexidade (20 min)</MockTask>
                    </ul>
                </div>
            </div>

            {!prefersReducedMotion && (
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] as const }}
                    className="absolute bottom-4 left-4 rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur"
                >
                    <p className="font-semibold">💡 Dica rápida</p>
                    <p className="text-xs opacity-75">Revisão espaçada aumenta a retenção.</p>
                </motion.div>
            )}
        </motion.div>
    );
}
