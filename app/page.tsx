import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="mb-4 rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted">BasketLog Europe MVP</p>
      <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
        Track, rate and review European basketball games.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
        Discover standout matchups, log your ratings, and write reviews for the games that define each European season.
      </p>
      <Link href="/games" className="mt-8 rounded-xl bg-accent px-6 py-3 font-medium text-slate-950 transition hover:opacity-90">
        Browse games
      </Link>
    </section>
  );
}
