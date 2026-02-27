// src/features/auth/cadastro/components/BackgroundBlobs.tsx
"use client";

export function BackgroundBlobs() {
    return (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/80 blur-3xl" />
            <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-violet-600/40 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/70 blur-3xl" />
        </div>
    );
}
