// src/features/auth/cadastro/components/ui/Field.tsx
"use client";

import type React from "react";

type Props = {
    label: string;
    icon: React.ReactNode;
    input: React.ReactNode;
};

export function Field({ label, icon, input }: Props) {
    return (
        <div>
            <label className="text-sm font-medium opacity-90">{label}</label>
            <div className="mt-2 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-3">
                <span className="opacity-70">{icon}</span>
                {input}
            </div>
        </div>
    );
}
