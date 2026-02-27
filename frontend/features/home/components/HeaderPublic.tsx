"use client";

import { ArrowRight, GraduationCap, Menu, Moon, Sun, X } from "lucide-react";
import { NavItem } from "../types";

type Props = {
    nav: NavItem[];
    open: boolean;
    onToggleOpen: () => void;
};

export function HeaderPublic({ nav, open, onToggleOpen }: Props) {
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <a href="#" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_30%_20%,#60a5fa_0%,transparent_55%),radial-gradient(circle_at_70%_80%,#a78bfa_0%,transparent_60%),linear-gradient(135deg,#2563eb_0%,#7c3aed_55%,#0b1220_100%)] text-white shadow-[0_10px_30px_-12px_rgba(96,165,250,0.65)] ring-1 ring-white/10">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-semibold">Estudos Help</p>
                        <p className="text-xs opacity-70">Estude sem complicação</p>
                    </div>
                </a>

                <nav className="hidden items-center gap-6 md:flex">
                    {nav.map((item) => (
                        <a key={item.href} href={item.href} className="text-sm opacity-80 hover:opacity-100">
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#comecar"
                        className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                    >
                        Começar <ArrowRight className="h-4 w-4" />
                    </a>
                </nav>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 md:hidden"
                    onClick={onToggleOpen}
                    aria-label="Abrir menu"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>
        </header>
    );
}
