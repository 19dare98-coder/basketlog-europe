import Link from "next/link";
import { Game } from "@/lib/types";

type Props = {
  game: Game;
};

export function GameCard({ game }: Props) {
  const gameDate = new Date(game.date);

  return (
    <Link
      href={`/games/${game.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-panel via-panel to-black/70 p-5 transition hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-xl hover:shadow-accent/10"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs uppercase tracking-wide text-muted">{game.league}</p>
        <p className="text-right text-xs text-muted">
          {gameDate.toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      <h3 className="mt-4 text-xl font-semibold leading-snug transition group-hover:text-accent">
        {game.homeTeam} <span className="text-muted">vs</span> {game.awayTeam}
      </h3>
      <p className="mt-2 text-sm text-muted">{game.venue}</p>

      <div className="mt-5 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-black/25 p-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">Final score</p>
          <p className="mt-1 text-lg font-bold text-text">{game.score.home}-{game.score.away}</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-muted">Fan rating</p>
          <p className="mt-1 text-lg font-semibold text-accent">★ {game.reviewSummary.averageRating.toFixed(1)}</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted">{game.reviewSummary.totalReviews} reviews logged • Tap to view details</p>
    </Link>
  );
}
