// src/features/auth/cadastro/components/CadastroFormCard.tsx
"use client";

import { Button } from "@/shared/components/ui/Button";
import { Field } from "@/shared/components/ui/Field";
import { PasswordRule } from "@/shared/components/ui/PasswordRule";
import { cn } from "@/shared/utils/cn";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, Mail, User } from "lucide-react";
import { CadastroFormState } from "../hook/useCadastroForm";

type Props = {
    form: CadastroFormState;
    patch: (p: Partial<CadastroFormState>) => void;
    onSubmit: (e: React.FormEvent) => void;
    senhaOk: boolean;
    confirmaOk: boolean;
    podeEnviar: boolean;
};

export function CadastroFormCard({ form, patch, onSubmit, senhaOk, confirmaOk, podeEnviar }: Props) {
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
                        <User className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Cadastro</p>
                        <p className="text-sm opacity-70">Leva menos de 1 minuto</p>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    <Field
                        label="Nome"
                        icon={<User className="h-4 w-4" />}
                        input={
                            <input
                                value={form.nome}
                                onChange={(e) => patch({ nome: e.target.value })}
                                type="text"
                                autoComplete="name"
                                placeholder="Seu nome"
                                className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                required
                            />
                        }
                    />

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

                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <Field
                                label="Senha"
                                icon={<Lock className="h-4 w-4" />}
                                input={
                                    <input
                                        value={form.senha}
                                        onChange={(e) => patch({ senha: e.target.value })}
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="Mín. 8 caracteres"
                                        className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                        required
                                    />
                                }
                            />
                            <PasswordRule ok={senhaOk} text="8+ caracteres" />
                        </div>

                        <div>
                            <Field
                                label="Confirmar senha"
                                icon={<Lock className="h-4 w-4" />}
                                input={
                                    <input
                                        value={form.confirmarSenha}
                                        onChange={(e) => patch({ confirmarSenha: e.target.value })}
                                        type="password"
                                        autoComplete="new-password"
                                        placeholder="Repita a senha"
                                        className="w-full bg-transparent text-sm outline-none placeholder:opacity-60"
                                        required
                                    />
                                }
                            />

                            {!!form.confirmarSenha && (
                                <div className="mt-2 flex items-center gap-2 text-xs opacity-80">
                                    <span
                                        className={cn(
                                            "inline-flex h-5 w-5 items-center justify-center rounded-full border",
                                            confirmaOk ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"
                                        )}
                                    >
                                        <CheckCircle2 className="h-4 w-4" />
                                    </span>
                                    <span className={cn(!confirmaOk && "opacity-80")}>{confirmaOk ? "Senhas conferem" : "As senhas não conferem"}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur">
                        <input
                            checked={form.aceitoTermos}
                            onChange={(e) => patch({ aceitoTermos: e.target.checked })}
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

                    <Button type="submit" full disabled={!podeEnviar}>
                        Criar conta <ArrowRight className="h-4 w-4" />
                    </Button>

                    <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 text-sm backdrop-blur">
                        <div className="flex items-start gap-2">
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900">
                                <CheckCircle2 className="h-4 w-4" />
                            </span>
                            <div>
                                <p className="font-semibold">Já tem conta?</p>
                                <p className="mt-1 text-sm opacity-80">Entre e continue seus estudos.</p>
                                <a href="/login" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold opacity-90 hover:opacity-100">
                                    Ir para login <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
