"use client";

import { ArrowRight } from "lucide-react";
import { NavItem } from "../types";

type Props = {
    nav: NavItem[];
    open: boolean;
    onClose: () => void;
};

export function MobileMenu({ nav, open, onClose }: Props) {
    if (!open) return null;

    return (
        <div className="border-t border-neutral-200/70 bg-white/90 backdrop-blur md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
                {nav.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="rounded-xl px-3 py-2 text-sm opacity-80 hover:bg-neutral-100 hover:opacity-100"
                    >
                        {item.label}
                    </a>
                ))}

                <a
                    href="#comecar"
                    onClick={onClose}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                    Começar <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </div>
    );
}
