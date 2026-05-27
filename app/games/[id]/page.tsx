import { notFound } from "next/navigation";
import { GameReviewCard } from "./game-review-card";
import { BackButton } from "@/components/back-button";
import { supabase } from "@/lib/supabase";
import { getTeamInitials } from "@/lib/team-initials";

type Props = {
  params: {
    id: string;
  };
};

export default async function GameDetailPage({ params }: Props) {
  const { data: game, error } = supabase ? await supabase
    .from("games")
    .select(
      "id, venue, game_date, home_score, away_score, status, round, league:leagues(name), home_team:teams!games_home_team_id_fkey(name, short_name), away_team:teams!games_away_team_id_fkey(name, short_name)"
    )
    .eq("id", params.id)
    .maybeSingle() : { data: null, error: new Error("Supabase is not configured.") };

  if (error || !game) {
    notFound();
  }

  const { data: reviews } = supabase ? await supabase
    .from("reviews")
    .select("id, rating, review_text, watched_on, created_at")
    .eq("game_id", params.id)
    .order("created_at", { ascending: false }) : { data: [] };

  const reviewCount = reviews?.length ?? 0;
  const avgRating = reviewCount
    ? (reviews ?? []).reduce((sum, review) => sum + review.rating, 0) / reviewCount
    : 0;

  const league = Array.isArray(game.league) ? game.league[0] : game.league;
  const homeTeam = Array.isArray(game.home_team) ? game.home_team[0] : game.home_team;
  const awayTeam = Array.isArray(game.away_team) ? game.away_team[0] : game.away_team;

  const homeName = homeTeam?.name ?? "Home Team";
  const awayName = awayTeam?.name ?? "Away Team";
  const homeShort = homeTeam?.short_name ?? getTeamInitials(homeName);
  const awayShort = awayTeam?.short_name ?? getTeamInitials(awayName);

  return (
    <section>
      <BackButton fallbackHref="/games" label="Back to games" />

      <div className="mt-6 rounded-2xl border border-white/10 bg-panel p-5 sm:p-6">
        <p className="text-sm text-muted">{league?.name ?? "League"}</p>
        <h1 className="mt-2 text-3xl font-bold">
          <span className="rounded-md bg-white/10 px-2 py-1 text-base">{homeShort}</span> {homeName} vs{" "}
          <span className="rounded-md bg-white/10 px-2 py-1 text-base">{awayShort}</span> {awayName}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {new Date(game.game_date).toLocaleDateString()} · {game.venue ?? "Venue TBA"} · {game.status ?? "Scheduled"} · {game.round ?? "Regular Season"}
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Final score</h2>
            <p className="mt-2 text-2xl font-bold">{game.home_score ?? "-"} - {game.away_score ?? "-"}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Community rating</h2>
            <p className="mt-2 text-2xl font-bold">★ {avgRating.toFixed(1)}</p>
            <p className="text-sm text-muted">{reviewCount} reviews logged</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-white/5 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Recent reviews</h2>
          {reviewCount > 0 ? (
            <ul className="mt-3 space-y-3">
              {reviews?.map((review) => (
                <li key={review.id} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="text-sm text-accent">{"★".repeat(review.rating)} <span className="text-muted">({review.rating}/5)</span></p>
                  <p className="mt-1 text-sm text-text/90">{review.review_text?.trim() || "No text review added."}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-muted">No reviews yet for this game.</p>
          )}
        </div>

        <GameReviewCard gameLabel={`${homeName} vs ${awayName}`} />
      </div>
    </section>
  );
}
