// src/features/auth/cadastro/components/ui/PasswordRule.tsx
"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "../../utils/cn";

export function PasswordRule({ ok, text }: { ok: boolean; text: string }) {
    return (
        <div className="mt-2 flex items-center gap-2 text-xs opacity-80">
            <span
                className={cn(
                    "inline-flex h-5 w-5 items-center justify-center rounded-full border",
                    ok ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-neutral-200 bg-neutral-50 text-neutral-700"
                )}
            >
                <CheckCircle2 className="h-4 w-4" />
            </span>
            <span className={cn(!ok && "opacity-70")}>{text}</span>
        </div>
    );
}
