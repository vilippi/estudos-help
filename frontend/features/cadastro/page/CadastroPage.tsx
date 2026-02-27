// src/features/auth/cadastro/pages/CadastroPage.tsx
"use client";

import { useFadeUp } from "@/shared/hooks/useFadeUp";
import { CadastroFormCard } from "../components/CadastroFormCard";
import { LeftIntro } from "../components/LeftIntro";
import { BackgroundBlobs } from "@/shared/components/ui/BackgroundBlobs";
import { Footer } from "@/shared/components/ui/Footer";
import { useCadastroForm } from "../hook/useCadastroForm";

export function CadastroPage() {
    const fadeUp = useFadeUp();
    const { form, patch, onSubmit, senhaOk, confirmaOk, podeEnviar } = useCadastroForm();

    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <BackgroundBlobs />

            <main className="relative">
                <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
                    <LeftIntro fadeUp={fadeUp} />
                    <CadastroFormCard
                        form={form}
                        patch={patch}
                        onSubmit={onSubmit}
                        senhaOk={senhaOk}
                        confirmaOk={confirmaOk}
                        podeEnviar={podeEnviar}
                    />
                </section>

                <Footer />
            </main>
        </div>
    );
}
