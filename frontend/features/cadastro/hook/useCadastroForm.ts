// src/features/auth/cadastro/hooks/useCadastroForm.ts
"use client";

import { useMemo, useState } from "react";

export type CadastroFormState = {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    aceitoTermos: boolean;
};

export function useCadastroForm() {
    const [form, setForm] = useState<CadastroFormState>({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        aceitoTermos: false,
    });

    const senhaOk = form.senha.length >= 8;
    const confirmaOk = form.confirmarSenha.length > 0 && form.confirmarSenha === form.senha;

    const podeEnviar = Boolean(
        form.nome.trim() &&
        form.email.trim() &&
        senhaOk &&
        confirmaOk &&
        form.aceitoTermos
    );

    function patch(p: Partial<CadastroFormState>) {
        setForm((s) => ({ ...s, ...p }));
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!podeEnviar) return;

        // ligar API depois
        // nunca logue senha em produção — aqui é só placeholder
        console.log({ nome: form.nome, email: form.email });
    }

    return useMemo(
        () => ({
            form,
            patch,
            onSubmit,
            senhaOk,
            confirmaOk,
            podeEnviar,
        }),
        [form, podeEnviar, senhaOk, confirmaOk]
    );
}
