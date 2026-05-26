import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center text-center">
      <p className="mb-4 rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted">For European hoops fans</p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
        Relive every big night across Europe&apos;s basketball scene.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
        BasketLog Europe helps you keep track of standout matchups, rate what you watched, and add quick notes after each game — from regular season battles to playoff classics.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
        <span className="rounded-full border border-white/10 px-4 py-1">Smart game log</span>
        <span className="rounded-full border border-white/10 px-4 py-1">Fast fan ratings</span>
        <span className="rounded-full border border-white/10 px-4 py-1">Personal watch history</span>
      </div>
      <Link href="/games" className="mt-8 rounded-xl bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
        Explore games
      </Link>
      <p className="mt-3 text-xs text-muted">No account required in this MVP — just browse and review.</p>
    </section>
  );
}
