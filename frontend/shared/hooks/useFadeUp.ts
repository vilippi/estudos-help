// src/features/auth/cadastro/hooks/useFadeUp.ts
"use client";

import { useCallback } from "react";
import { useReducedMotion } from "framer-motion";

export function useFadeUp() {
    const prefersReducedMotion = useReducedMotion();

    return useCallback(
        (delay = 0) => ({
            initial: prefersReducedMotion ? {} : { opacity: 0, y: 18 },
            animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
        }),
        [prefersReducedMotion]
    );
}
