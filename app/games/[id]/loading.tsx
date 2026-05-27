export default function GameDetailLoading() {
  return (
    <section>
      <div className="mt-6 rounded-2xl border border-white/10 bg-panel p-5 sm:p-6">
        <p className="text-sm text-muted">Loading game...</p>
        <div className="mt-4 h-8 w-3/4 animate-pulse rounded bg-white/10" />
        <div className="mt-2 h-5 w-1/2 animate-pulse rounded bg-white/10" />
      </div>
    </section>
  );
}
