"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    GraduationCap,
    Mail,
    Menu,
    Moon,
    ShieldCheck,
    Sparkles,
    Sun,
    User,
    X,
    Lock,
} from "lucide-react";

type NavItem = { label: string; href: string };

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

export default function CadastroPage() {
    const prefersReducedMotion = useReducedMotion();

    const fadeUp = (delay = 0) => ({
        initial: prefersReducedMotion ? {} : { opacity: 0, y: 18 },
        animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
    });

    // Form (UI only)
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [aceitoTermos, setAceitoTermos] = useState(false);

    const senhaOk = senha.length >= 8;
    const confirmaOk = confirmarSenha.length > 0 && confirmarSenha === senha;
    const podeEnviar = nome.trim() && email.trim() && senhaOk && confirmaOk && aceitoTermos;

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!podeEnviar) return;

        // aqui você liga com sua API depois
        console.log({ nome, email, senha });
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
                    {/* Left */}
                    <div>
                        <motion.div
                            {...fadeUp(0)}
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur"
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Novo por aqui? Bora criar sua conta</span>
                        </motion.div>

                        <motion.h1
                            {...fadeUp(0.08)}
                            className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
                        >
                            Comece seu semestre com{" "}
                            <span className="bg-linear-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
                                clareza e ritmo
                            </span>
                            .
                        </motion.h1>

                        <motion.p {...fadeUp(0.14)} className="mt-4 max-w-xl text-base opacity-80 md:text-lg">
                            Crie sua conta e organize matérias, tópicos, aulas e questões em um fluxo simples.
                        </motion.p>

                        <div className="mt-6 flex flex-wrap gap-3 text-xs opacity-75">
                            <Pill>✅ Organização por tópicos</Pill>
                            <Pill>✅ Revisão guiada</Pill>
                            <Pill>✅ Evolução visível</Pill>
                        </div>

                        <motion.div
                            {...fadeUp(0.2)}
                            className="mt-8 rounded-3xl border border-neutral-200 bg-white/70 p-5 backdrop-blur"
                        >
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

                    {/* Right: form */}
                    <motion.div
                        {...(prefersReducedMotion
                            ? {}
                            : {
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 },
                            })}
                        className="relative"
                    >
                        <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white">
                                    <User className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Cadastro</p>
                                    <p className="text-sm opacity-70">Leva menos de 1 minuto</p>
                                </div>
                            </div>

                            <form onSubmit={onSubmit} className="mt-6 space-y-4">
                                <div>
                                    <label className="text-sm font-medium opacity-90">Nome</label>
                                    <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-3">
                                        <User className="h-4 w-4 opacity-70" />
                                        <input
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Seu nome"
                                            className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                            required
                                        />
                                    </div>
                                </div>

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

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="text-sm font-medium opacity-90">Senha</label>
                                        <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-3">
                                            <Lock className="h-4 w-4 opacity-70" />
                                            <input
                                                value={senha}
                                                onChange={(e) => setSenha(e.target.value)}
                                                type="password"
                                                autoComplete="new-password"
                                                placeholder="Mín. 8 caracteres"
                                                className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                                required
                                            />
                                        </div>

                                        <div className="mt-2 flex items-center gap-2 text-xs opacity-80">
                                            <span
                                                className={cn(
                                                    "inline-flex h-5 w-5 items-center justify-center rounded-full border",
                                                    senhaOk
                                                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                                        : "border-neutral-200 bg-neutral-50 text-neutral-700"
                                                )}
                                            >
                                                <CheckCircle2 className="h-4 w-4" />
                                            </span>
                                            <span className={cn(!senhaOk && "opacity-70")}>8+ caracteres</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium opacity-90">Confirmar senha</label>
                                        <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-3">
                                            <Lock className="h-4 w-4 opacity-70" />
                                            <input
                                                value={confirmarSenha}
                                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                                type="password"
                                                autoComplete="new-password"
                                                placeholder="Repita a senha"
                                                className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                                required
                                            />
                                        </div>

                                        {!!confirmarSenha && (
                                            <div className="mt-2 flex items-center gap-2 text-xs opacity-80">
                                                <span
                                                    className={cn(
                                                        "inline-flex h-5 w-5 items-center justify-center rounded-full border",
                                                        confirmaOk
                                                            ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                                                            : "border-rose-200 bg-rose-50 text-rose-700"
                                                    )}
                                                >
                                                    <CheckCircle2 className="h-4 w-4" />
                                                </span>
                                                <span className={cn(!confirmaOk && "opacity-80")}>
                                                    {confirmaOk ? "Senhas conferem" : "As senhas não conferem"}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur">
                                    <input
                                        checked={aceitoTermos}
                                        onChange={(e) => setAceitoTermos(e.target.checked)}
                                        type="checkbox"
                                        className="mt-0.5 h-4 w-4 rounded border-neutral-300 accent-neutral-900"
                                    />
                                    <span className="opacity-85">
                                        Eu concordo com os{" "}
                                        <a className="font-semibold underline underline-offset-2 hover:opacity-100" href="/termos">
                                            Termos
                                        </a>{" "}
                                        e{" "}
                                        <a className="font-semibold underline underline-offset-2 hover:opacity-100" href="/privacidade">
                                            Política de Privacidade
                                        </a>
                                        .
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={!podeEnviar}
                                    className={cn(
                                        "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition",
                                        podeEnviar
                                            ? "bg-neutral-900 text-white hover:opacity-90"
                                            : "cursor-not-allowed bg-neutral-300 text-neutral-600"
                                    )}
                                >
                                    Criar conta <ArrowRight className="h-4 w-4" />
                                </button>

                                <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur">
                                    <div className="flex items-start gap-2">
                                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </span>
                                        <div>
                                            <p className="font-semibold">Já tem conta?</p>
                                            <p className="mt-1 text-sm opacity-80">Entre e continue seus estudos.</p>
                                            <a
                                                href="/login"
                                                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-90 hover:opacity-100"
                                            >
                                                Ir para login <ArrowRight className="h-4 w-4" />
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
