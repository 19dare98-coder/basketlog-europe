import { GameCard } from "@/components/game-card";
import { sampleGames } from "@/data/games";

export default function GamesPage() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Games</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Browse featured European matchups, open a game card, and leave your own quick review after watching.
        </p>
      </div>

      {sampleGames.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sampleGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/20 bg-panel/60 p-8 text-center">
          <p className="text-lg font-semibold">No games posted yet.</p>
          <p className="mt-2 text-sm text-muted">Check back soon for new fixtures to rate and review.</p>
        </div>
      )}
    </section>
  );
}
