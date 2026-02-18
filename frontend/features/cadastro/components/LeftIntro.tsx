// src/features/auth/cadastro/components/LeftIntro.tsx
"use client";

import { Pill } from "@/shared/components/ui/Pill";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

type Props = {
    fadeUp: (delay?: number) => any;
};

export function LeftIntro({ fadeUp }: Props) {
    return (
        <div>
            <motion.div
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur"
            >
                <Sparkles className="h-4 w-4" />
                <span>Novo por aqui? Bora criar sua conta</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Comece seu semestre com{" "}
                <span className="bg-linear-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">clareza e ritmo</span>.
            </motion.h1>

            <motion.p {...fadeUp(0.14)} className="mt-4 max-w-xl text-base opacity-80 md:text-lg">
                Crie sua conta e organize matérias, tópicos, aulas e questões em um fluxo simples.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs opacity-75">
                <Pill>✅ Organização por tópicos</Pill>
                <Pill>✅ Revisão guiada</Pill>
                <Pill>✅ Evolução visível</Pill>
            </div>

            <motion.div {...fadeUp(0.2)} className="mt-8 rounded-3xl border border-neutral-200 bg-white/70 p-5 backdrop-blur">
                <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-white">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Conta segura</p>
                        <p className="mt-1 text-sm opacity-80">
                            Use uma senha forte (mínimo 8 caracteres). Depois você adiciona 2FA se quiser.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
