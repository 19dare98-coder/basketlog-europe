import Link from "next/link";
import { Game } from "@/lib/types";

type Props = {
  game: Game;
};

export function GameCard({ game }: Props) {
  return (
    <Link
      href={`/games/${game.id}`}
      className="block rounded-2xl border border-white/10 bg-panel p-5 transition hover:border-accent/80 hover:shadow-lg hover:shadow-accent/10"
    >
      <p className="text-sm text-muted">{game.league}</p>
      <h3 className="mt-2 text-lg font-semibold">
        {game.homeTeam} vs {game.awayTeam}
      </h3>
      <p className="mt-1 text-sm text-muted">{new Date(game.date).toLocaleDateString()} · {game.venue}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted">
          Score: <span className="text-text">{game.score.home}-{game.score.away}</span>
        </p>
        <p className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
          ★ {game.reviewSummary.averageRating.toFixed(1)} ({game.reviewSummary.totalReviews})
        </p>
      </div>
    </Link>
  );
}
