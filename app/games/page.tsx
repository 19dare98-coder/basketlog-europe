import { GameCard } from "@/components/game-card";
import { sampleGames } from "@/data/games";

export default function GamesPage() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Games</h1>
        <p className="mt-2 text-muted">Sample MVP game log focused on core listing and review flow.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
