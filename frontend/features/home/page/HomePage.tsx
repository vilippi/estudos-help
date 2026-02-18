// src/features/landing/home/pages/HomePage.tsx
"use client";

import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";
import { Hero } from "../components/Hero";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../../../shared/components/ui/Footer";
import { useNav } from "../hooks/useNav";
import { HeaderPublic } from "../components/HeaderPublic";
import { FeaturesSection } from "../components/FeatureSection";
import { HowItWorksSection } from "../components/HowItWorkSection";
import { BackgroundBlobs } from "@/shared/components/ui/BackgroundBlobs";

export function HomePage() {
    const [open, setOpen] = useState(false);
    const nav = useNav();

    return (
        <div className="min-h-screen bg-white text-neutral-900">
            <BackgroundBlobs />

            <HeaderPublic
                nav={nav}
                open={open}
                onToggleOpen={() => setOpen((v) => !v)}
            />

            <MobileMenu nav={nav} open={open} onClose={() => setOpen(false)} />

            <main className="relative">
                <Hero />
                <FeaturesSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <CtaSection />

            </main>

            <Footer />
        </div>
    );
}
