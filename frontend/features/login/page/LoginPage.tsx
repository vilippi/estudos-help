// src/features/auth/login/pages/LoginPage.tsx
"use client";

import { useFadeUp } from "@/shared/hooks/useFadeUp";
import { LeftCopy } from "../components/LeftCopy";
import { LoginFormCard } from "../components/LoginFormCard";
import { useLoginForm } from "../hook/useLoginForm";
import { BackgroundBlobs } from "@/shared/components/ui/BackgroundBlobs";
import { Footer } from "@/shared/components/ui/Footer";

export function LoginPage() {
    const fadeUp = useFadeUp();
    const { form, patch, onSubmit } = useLoginForm();

    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <BackgroundBlobs />

            <main className="relative">
                <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
                    <LeftCopy fadeUp={fadeUp} />
                    <LoginFormCard form={form} patch={patch} onSubmit={onSubmit} />
                </section>

                <Footer />
            </main>
        </div>
    );
}
