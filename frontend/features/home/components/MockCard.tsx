"use client";

export function MockCard({ title, value, hint }: { title: string; value: string; hint: string }) {
    return (
        <div className="rounded-2xl border border-neutral-200 bg-white p-4">
            <p className="text-xs opacity-70">{title}</p>
            <p className="mt-1 text-2xl font-bold">{value}</p>
            <p className="mt-2 text-xs opacity-70">{hint}</p>
        </div>
    );
}
