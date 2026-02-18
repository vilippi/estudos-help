// src/features/landing/home/hooks/useNav.ts
"use client";

import { useMemo } from "react";
import { NavItem } from "../types";

export function useNav() {
    return useMemo<NavItem[]>(
        () => [
            { label: "Recursos", href: "#recursos" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "Depoimentos", href: "#depoimentos" },
            { label: "Começar", href: "#comecar" },
        ],
        []
    );
}
