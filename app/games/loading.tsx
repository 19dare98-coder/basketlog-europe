export default function GamesLoading() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Games</h1>
        <p className="mt-2 max-w-2xl text-muted">Loading games...</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="h-56 animate-pulse rounded-2xl border border-white/10 bg-white/5" />
        ))}
      </div>
    </section>
  );
}
