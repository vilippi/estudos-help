// src/features/landing/home/hooks/useDarkMode.ts
"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "darkMode";

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        const initial =
            saved !== null ? saved === "true" : window.matchMedia("(prefers-color-scheme: dark)").matches;

        setIsDarkMode(initial);
        setReady(true);
    }, []);

    useEffect(() => {
        if (!ready) return;

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem(STORAGE_KEY, "true");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem(STORAGE_KEY, "false");
        }
    }, [isDarkMode, ready]);

    return { isDarkMode, setIsDarkMode, ready };
}
