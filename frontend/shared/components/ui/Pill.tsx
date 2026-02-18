// src/features/auth/cadastro/components/ui/Pill.tsx
"use client";

import type React from "react";

export function Pill({ children }: { children: React.ReactNode }) {
    return <span className="rounded-full border border-neutral-200 bg-white/60 px-3 py-1">{children}</span>;
}
