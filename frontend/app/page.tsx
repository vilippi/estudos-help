"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  LayoutGrid,
  Menu,
  Sparkles,
  X,
  Moon,
  Sun
} from "lucide-react";
type NavItem = { label: string; href: string };

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  const nav = useMemo<NavItem[]>(
    () => [
      { label: "Recursos", href: "#recursos" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Começar", href: "#comecar" },
    ],
    []
  );

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 18 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
  });

  function useThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

      const initial: "light" | "dark" = saved ?? (systemPrefersDark ? "dark" : "light");

      document.documentElement.classList.toggle("dark", initial === "dark");
      setTheme(initial);
      setMounted(true);
    }, []);

    function toggleTheme() {
      setTheme((prev) => {
        const next = prev === "dark" ? "light" : "dark";
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
        return next;
      });
    }

    return { theme, toggleTheme, mounted };
  }

  const { theme, toggleTheme, mounted } = useThemeToggle();

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300/80 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-violet-600/40 blur-3xl dark:bg-violet-500/20" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-800/30 blur-3xl dark:bg-emerald-500/15" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Estudos Help</p>
              <p className="text-xs opacity-70">Estude sem complicação</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm opacity-80 hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#comecar"
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
            >
              Começar <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-950 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
            ) : (
              <div className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-neutral-200/70 bg-white/90 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/80 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm opacity-80 hover:bg-neutral-100 hover:opacity-100 dark:hover:bg-neutral-900"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#comecar"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
              >
                Começar <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pb-14 pt-12 md:pb-20 md:pt-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.div
                {...(prefersReducedMotion
                  ? {}
                  : {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
                  })}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60"
              >
                <Sparkles className="h-4 w-4" />
                <span>Estudos Help • foco em faculdade</span>
              </motion.div>

              <motion.h1
                {...(prefersReducedMotion
                  ? {}
                  : {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 },
                  })}
                className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
              >
                Estude para provas{" "}
                <span className="bg-linear-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
                  sem complicação
                </span>
                .
              </motion.h1>

              <motion.p
                {...(prefersReducedMotion
                  ? {}
                  : {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 },
                  })}
                className="mt-4 max-w-xl text-base opacity-80 md:text-lg"
              >
                Organize matérias, revise com foco, responda questões e acompanhe seu progresso.
                Tudo em um fluxo simples e moderno.
              </motion.p>

              <motion.div
                {...(prefersReducedMotion
                  ? {}
                  : {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.18 },
                  })}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#comecar"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
                >
                  Começar agora <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#recursos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/60 dark:hover:bg-neutral-950"
                >
                  Ver recursos <LayoutGrid className="h-4 w-4" />
                </a>
              </motion.div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs opacity-75">
                <Pill>✅ Revisão guiada</Pill>
                <Pill>✅ Simulados</Pill>
                <Pill>✅ Progresso por tópico</Pill>
                <Pill>✅ Rápido no mobile</Pill>
              </div>
            </div>

            {/* Hero mock */}
            <motion.div
              {...(prefersReducedMotion
                ? {}
                : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 },
                })}
              className="relative pb-16"
            >
              <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Painel do estudante</p>
                  <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs opacity-70 dark:border-neutral-800">
                    Semana 3/4
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MockCard title="Matérias" value="6" hint="Ativas no semestre" />
                  <MockCard title="Questões" value="128" hint="Respondidas" />
                  <MockCard title="Aulas" value="21" hint="Concluídas" />
                  <MockCard title="Simulados" value="4" hint="Último: 78%" />
                </div>

                <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                  <p className="text-sm font-semibold">Plano de hoje</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <MockTask done>Revisar: Estruturas de Dados</MockTask>
                    <MockTask>Resolver 15 questões: Grafos</MockTask>
                    <MockTask>Simulado: Complexidade (20 min)</MockTask>
                  </ul>
                </div>
              </div>

              {/* Floating badge */}
              {!prefersReducedMotion && (
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: [0.16, 1, 0.3, 1] as const }}
                  className="absolute bottom-4 left-4 rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70"
                >
                  <p className="font-semibold">💡 Dica rápida</p>
                  <p className="text-xs opacity-75">
                    Revisão espaçada aumenta a retenção.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section id="recursos" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <motion.div {...fadeUp(0)} className="max-w-2xl">
            <p className="text-sm font-semibold opacity-80">Recursos</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Tudo que você precisa para mandar bem
            </h2>
            <p className="mt-3 opacity-80">
              Um fluxo simples: organizar → estudar → praticar → acompanhar.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <FeatureCard
              title="Conteúdo por tópicos"
              desc="Matérias → tópicos → aulas e questões, do jeito que o cérebro gosta."
              icon={<GraduationCap className="h-5 w-5" />}
            />
            <FeatureCard
              title="Questões com explicação"
              desc="4 alternativas, resposta certa e explicação opcional pra fixar."
              icon={<CheckCircle2 className="h-5 w-5" />}
            />
            <FeatureCard
              title="Progresso e foco"
              desc="Marque aulas concluídas, veja evolução e saiba o que revisar."
              icon={<Sparkles className="h-5 w-5" />}
            />
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <motion.div {...fadeUp(0)} className="max-w-2xl">
            <p className="text-sm font-semibold opacity-80">Como funciona</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              3 passos e pronto
            </h2>
            <p className="mt-3 opacity-80">
              Sem telas confusas. Só o essencial pra estudar rápido e bem.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StepCard n="01" title="Organize" desc="Crie matérias e tópicos do seu semestre." />
            <StepCard n="02" title="Estude" desc="Assista aulas e marque como concluído." />
            <StepCard n="03" title="Pratique" desc="Faça questões e simulados, veja o score." />
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <motion.div {...fadeUp(0)} className="max-w-2xl">
            <p className="text-sm font-semibold opacity-80">Depoimentos</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Estudantes curtindo o fluxo
            </h2>
            <p className="mt-3 opacity-80">
              Exemplos fictícios (por enquanto 😄), só pra dar o tom.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Testimonial
              name="Ana • Eng. de Software"
              text="Finalmente parei de me perder. O passo a passo me deixa no ritmo."
            />
            <Testimonial
              name="Lucas • ADS"
              text="Curti demais os cards e as animações. Parece app premium."
            />
            <Testimonial
              name="Bruna • Ciência da Computação"
              text="Questões com explicação salvam quando eu erro e não entendo o porquê."
            />
          </div>
        </section>

        {/* CTA */}
        <section id="comecar" className="mx-auto max-w-6xl px-4 pb-20">
          <motion.div
            {...fadeUp(0)}
            className="rounded-3xl border border-neutral-200 bg-white/70 p-8 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60 md:p-10"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold md:text-3xl">
                  Pronto pra estudar com mais clareza?
                </h3>
                <p className="mt-2 opacity-80">
                  Comece com um semestre, uma matéria e um tópico. Em 5 minutos você já
                  está estudando.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
                >
                  Criar conta <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#recursos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/60 dark:hover:bg-neutral-950"
                >
                  Ver recursos
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200/70 py-10 dark:border-neutral-800/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Estudos Help — sem complicação.
            </p>
            <div className="flex gap-4 text-sm opacity-70">
              <a className="hover:opacity-100" href="#recursos">
                Recursos
              </a>
              <a className="hover:opacity-100" href="#como-funciona">
                Como funciona
              </a>
              <a className="hover:opacity-100" href="#comecar">
                Começar
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white/60 px-3 py-1 dark:border-neutral-800 dark:bg-neutral-950/40">
      {children}
    </span>
  );
}

function MockCard({ title, value, hint }: { title: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="text-xs opacity-70">{title}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
      <p className="mt-2 text-xs opacity-70">{hint}</p>
    </div>
  );
}

function MockTask({ children, done }: { children: React.ReactNode; done?: boolean }) {
  return (
    <li className="flex items-center gap-2">
      <span
        className={cn(
          "inline-flex h-5 w-5 items-center justify-center rounded-full border",
          done
            ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-900/20 dark:text-emerald-200"
            : "border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
        )}
      >
        <CheckCircle2 className="h-4 w-4" />
      </span>
      <span className={cn("text-sm", done && "opacity-70 line-through")}>{children}</span>
    </li>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      className="group rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
          {icon}
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <p className="mt-3 text-sm opacity-80">{desc}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100">
        Saiba mais <ArrowRight className="h-4 w-4" />
      </div>
    </motion.div>
  );
}

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="rounded-3xl border border-neutral-200 bg-white/70 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60"
    >
      <p className="text-xs font-semibold opacity-70">{n}</p>
      <p className="mt-2 text-lg font-bold">{title}</p>
      <p className="mt-2 text-sm opacity-80">{desc}</p>
    </motion.div>
  );
}

function Testimonial({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="rounded-3xl border border-neutral-200 bg-white/70 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60"
    >
      <p className="text-sm opacity-80">“{text}”</p>
      <p className="mt-4 text-sm font-semibold opacity-80">{name}</p>
    </motion.div>
  );
}
