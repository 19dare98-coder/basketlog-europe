import Link from "next/link";

export default function GameNotFound() {
  return (
    <section className="rounded-2xl border border-dashed border-white/20 bg-panel/60 p-8 text-center">
      <p className="text-lg font-semibold">Game not found.</p>
      <p className="mt-2 text-sm text-muted">The game may not exist or may have been removed.</p>
      <Link href="/games" className="mt-4 inline-block rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black">
        Back to games
      </Link>
    </section>
  );
}
