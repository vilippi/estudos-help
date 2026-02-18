// src/features/auth/login/hooks/useLoginForm.ts
"use client";

import { useMemo, useState } from "react";

export type LoginFormState = {
    email: string;
    password: string;
    remember: boolean;
};

export function useLoginForm() {
    const [form, setForm] = useState<LoginFormState>({
        email: "",
        password: "",
        remember: false,
    });

    function patch(p: Partial<LoginFormState>) {
        setForm((s) => ({ ...s, ...p }));
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        // ligar API depois
        // nunca logue senha em produção — aqui é só placeholder
        console.log({ email: form.email, remember: form.remember });
    }

    return useMemo(() => ({ form, patch, onSubmit }), [form]);
}
