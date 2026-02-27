"use client";

export function Footer() {
    return (
        <footer className="border-t border-neutral-200/70 py-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm opacity-70">© {new Date().getFullYear()} Estudos Help — sem complicação.</p>
                <div className="flex gap-4 text-sm opacity-70">
                    <a className="hover:opacity-100" href="#recursos">Recursos</a>
                    <a className="hover:opacity-100" href="#como-funciona">Como funciona</a>
                    <a className="hover:opacity-100" href="#comecar">Começar</a>
                </div>
            </div>
        </footer>
    );
}
