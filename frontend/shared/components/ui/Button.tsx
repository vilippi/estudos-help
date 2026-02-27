// src/features/auth/cadastro/components/ui/Button.tsx
"use client";

import type React from "react";
import { cn } from "../../utils/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    full?: boolean;
};

export function Button({ className, full, disabled, ...props }: Props) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition",
                full && "w-full",
                disabled ? "cursor-not-allowed bg-neutral-300 text-neutral-600" : "bg-neutral-900 text-white hover:opacity-90",
                className
            )}
        />
    );
}
