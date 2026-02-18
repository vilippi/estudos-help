"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    GraduationCap,
    Lock,
    Mail,
    Menu,
    Moon,
    Sparkles,
    Sun,
    X,
} from "lucide-react";

type NavItem = { label: string; href: string };

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export default function LoginPage() {
    const prefersReducedMotion = useReducedMotion();

    const fadeUp = (delay = 0) => ({
        initial: prefersReducedMotion ? {} : { opacity: 0, y: 18 },
        animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
    });

    // Form (UI only)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        // aqui você liga com sua API depois
        console.log({ email, password });
    }

    return (
        <div className="min-h-screen bg-white text-neutral-900">
            {/* Background blobs */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/80 blur-3xl" />
                <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-violet-600/40 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/70 blur-3xl" />
            </div>

            {/* Main */}
            <main className="relative">
                <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
                    {/* Left: copy */}
                    <div>
                        <motion.div
                            {...fadeUp(0)}
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur"
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Entrar no Estudos Help</span>
                        </motion.div>

                        <motion.h1
                            {...fadeUp(0.08)}
                            className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
                        >
                            Bem-vindo de volta.
                            <span className="block bg-linear-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
                                Bora estudar?
                            </span>
                        </motion.h1>

                        <motion.p {...fadeUp(0.14)} className="mt-4 max-w-xl text-base opacity-80 md:text-lg">
                            Acesse sua conta para continuar seu semestre, revisar tópicos e acompanhar seu progresso.
                        </motion.p>

                        <motion.div
                            {...fadeUp(0.2)}
                            className="mt-8 rounded-3xl border border-neutral-200 bg-white/70 p-5 backdrop-blur"
                        >
                            <p className="text-sm font-semibold">Dica rápida</p>
                            <p className="mt-1 text-sm opacity-80">
                                Se estiver sem tempo, estude por blocos de 25 min e faça 5 min de pausa.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: form */}
                    <motion.div className="relative">
                        <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white">
                                    <Lock className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Login</p>
                                    <p className="text-sm opacity-70">Entre com seu e-mail e senha</p>
                                </div>
                            </div>

                            <form onSubmit={onSubmit} className="mt-6 space-y-4">
                                <div>
                                    <label className="text-sm font-medium opacity-90">E-mail</label>
                                    <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-3">
                                        <Mail className="h-4 w-4 opacity-70" />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            autoComplete="email"
                                            placeholder="voce@exemplo.com"
                                            className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium opacity-90">Senha</label>
                                    <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-3">
                                        <Lock className="h-4 w-4 opacity-70" />
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="••••••••"
                                            className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                            required
                                        />
                                    </div>

                                    <div className="mt-2 flex items-center justify-between">
                                        <label className="inline-flex items-center gap-2 text-xs opacity-80">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-neutral-300 accent-neutral-900"
                                            />
                                            Lembrar de mim
                                        </label>
                                        <a href="/recuperar-senha" className="text-xs font-semibold opacity-80 hover:opacity-100">
                                            Esqueci minha senha
                                        </a>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                                >
                                    Entrar <ArrowRight className="h-4 w-4" />
                                </button>

                                <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur">
                                    <div className="flex items-start gap-2">
                                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </span>
                                        <div>
                                            <p className="font-semibold">Novo por aqui?</p>
                                            <p className="mt-1 text-sm opacity-80">
                                                Crie sua conta e comece seu semestre em poucos minutos.
                                            </p>
                                            <a
                                                href="/novo-usuario"
                                                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-90 hover:opacity-100"
                                            >
                                                Criar conta <ArrowRight className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="border-t border-neutral-200/70 py-10">
                    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm opacity-70">© {new Date().getFullYear()} Estudos Help — sem complicação.</p>
                        <div className="flex gap-4 text-sm opacity-70">
                            <a className="hover:opacity-100" href="/#recursos">
                                Recursos
                            </a>
                            <a className="hover:opacity-100" href="/#como-funciona">
                                Como funciona
                            </a>
                            <a className="hover:opacity-100" href="/#comecar">
                                Começar
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-neutral-200 bg-white/60 px-3 py-1">
            {children}
        </span>
    );
}
