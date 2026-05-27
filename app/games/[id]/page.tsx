import { notFound } from "next/navigation";
import { sampleGames } from "@/data/games";
import { GameReviewCard } from "./game-review-card";
import { BackButton } from "@/components/back-button";

type Props = {
  params: {
    id: string;
  };
};

export default function GameDetailPage({ params }: Props) {
  const game = sampleGames.find((item) => item.id === params.id);

  if (!game) {
    notFound();
  }

  return (
    <section>
      <BackButton fallbackHref="/games" label="Back to games" />

      <div className="mt-6 rounded-2xl border border-white/10 bg-panel p-5 sm:p-6">
        <p className="text-sm text-muted">{game.league}</p>
        <h1 className="mt-2 text-3xl font-bold">{game.homeTeam} vs {game.awayTeam}</h1>
        <p className="mt-2 text-sm text-muted">
          {new Date(game.date).toLocaleDateString()} · {game.venue}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Final score</h2>
            <p className="mt-2 text-2xl font-bold">{game.score.home} - {game.score.away}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Community rating</h2>
            <p className="mt-2 text-2xl font-bold">★ {game.reviewSummary.averageRating.toFixed(1)}</p>
            <p className="text-sm text-muted">{game.reviewSummary.totalReviews} reviews logged</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-white/5 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Review notes</h2>
          <p className="mt-2 text-sm text-text/90">{game.notes}</p>
        </div>

        <GameReviewCard gameLabel={`${game.homeTeam} vs ${game.awayTeam}`} />
      </div>
    </section>
  );
}
