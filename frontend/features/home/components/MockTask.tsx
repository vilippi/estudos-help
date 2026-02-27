"use client";

import type React from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/shared/utils/cn";

export function MockTask({ children, done }: { children: React.ReactNode; done?: boolean }) {
    return (
        <li className="flex items-center gap-2">
            <span
                className={cn(
                    "inline-flex h-5 w-5 items-center justify-center rounded-full border",
                    done ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-neutral-200 bg-neutral-50 text-neutral-700"
                )}
            >
                <CheckCircle2 className="h-4 w-4" />
            </span>
            <span className={cn("text-sm", done && "opacity-70 line-through")}>{children}</span>
        </li>
    );
}
