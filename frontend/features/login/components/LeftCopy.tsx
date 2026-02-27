// src/features/auth/login/components/LeftCopy.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type Props = {
    fadeUp: (delay?: number) => any;
};

export function LeftCopy({ fadeUp }: Props) {
    return (
        <div>
            <motion.div
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur"
            >
                <Sparkles className="h-4 w-4" />
                <span>Entrar no Estudos Help</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Bem-vindo de volta.
                <span className="block bg-linear-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">Bora estudar?</span>
            </motion.h1>

            <motion.p {...fadeUp(0.14)} className="mt-4 max-w-xl text-base opacity-80 md:text-lg">
                Acesse sua conta para continuar seu semestre, revisar tópicos e acompanhar seu progresso.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="mt-8 rounded-3xl border border-neutral-200 bg-white/70 p-5 backdrop-blur">
                <p className="text-sm font-semibold">Dica rápida</p>
                <p className="mt-1 text-sm opacity-80">Se estiver sem tempo, estude por blocos de 25 min e faça 5 min de pausa.</p>
            </motion.div>
        </div>
    );
}
