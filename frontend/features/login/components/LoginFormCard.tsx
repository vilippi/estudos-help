// src/features/auth/login/components/LoginFormCard.tsx
"use client";

import { Button } from "@/shared/components/ui/Button";
import { Field } from "@/shared/components/ui/Field";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, Mail } from "lucide-react";
import { LoginFormState } from "../hook/useLoginForm";

type Props = {
    form: LoginFormState;
    patch: (p: Partial<LoginFormState>) => void;
    onSubmit: (e: React.FormEvent) => void;
};

export function LoginFormCard({ form, patch, onSubmit }: Props) {
    const prefersReducedMotion = useReducedMotion();

    return (
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
                        <Lock className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Login</p>
                        <p className="text-sm opacity-70">Entre com seu e-mail e senha</p>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <Field
                        label="E-mail"
                        icon={<Mail className="h-4 w-4" />}
                        input={
                            <input
                                value={form.email}
                                onChange={(e) => patch({ email: e.target.value })}
                                type="email"
                                autoComplete="email"
                                placeholder="voce@exemplo.com"
                                className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                required
                            />
                        }
                    />

                    <div>
                        <Field
                            label="Senha"
                            icon={<Lock className="h-4 w-4" />}
                            input={
                                <input
                                    value={form.password}
                                    onChange={(e) => patch({ password: e.target.value })}
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                    required
                                />
                            }
                        />

                        <div className="mt-2 flex items-center justify-between">
                            <label className="inline-flex items-center gap-2 text-xs opacity-80">
                                <input
                                    checked={form.remember}
                                    onChange={(e) => patch({ remember: e.target.checked })}
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

                    <Button type="submit" full>
                        Entrar <ArrowRight className="h-4 w-4" />
                    </Button>

                    <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur">
                        <div className="flex items-start gap-2">
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900">
                                <CheckCircle2 className="h-4 w-4" />
                            </span>
                            <div>
                                <p className="font-semibold">Novo por aqui?</p>
                                <p className="mt-1 text-sm opacity-80">Crie sua conta e comece seu semestre em poucos minutos.</p>
                                <a href="/novo-usuario" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-90 hover:opacity-100">
                                    Criar conta <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
