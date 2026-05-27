import { GameCard } from "@/components/game-card";
import { supabase } from "@/lib/supabase";
import { getTeamInitials } from "@/lib/team-initials";
import { Game } from "@/lib/types";

function asGame(item: any): Game {
  const homeTeam = Array.isArray(item.home_team) ? item.home_team[0] : item.home_team;
  const awayTeam = Array.isArray(item.away_team) ? item.away_team[0] : item.away_team;
  const homeName = homeTeam?.name ?? "Home Team";
  const awayName = awayTeam?.name ?? "Away Team";

  return {
    id: item.id,
    league: item.league?.name ?? "League",
    date: item.game_date,
    homeTeam: {
      name: homeName,
      shortName: homeTeam?.short_name ?? getTeamInitials(homeName),
    },
    awayTeam: {
      name: awayName,
      shortName: awayTeam?.short_name ?? getTeamInitials(awayName),
    },
    venue: item.venue ?? "Venue TBA",
    status: item.status ?? "Scheduled",
    round: item.round ?? "Regular Season",
    score: {
      home: item.home_score,
      away: item.away_score,
    },
    reviewSummary: {
      averageRating: 0,
      totalReviews: 0,
    },
  };
}

export default async function GamesPage() {
  const { data, error } = supabase ? await supabase
    .from("games")
    .select(
      "id, venue, game_date, home_score, away_score, status, round, league:leagues(name), home_team:teams!games_home_team_id_fkey(name, short_name), away_team:teams!games_away_team_id_fkey(name, short_name)"
    )
    .order("game_date", { ascending: false }) : { data: null, error: new Error("Supabase is not configured.") };

  const games = (data ?? []).map(asGame);

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Games</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Browse featured European matchups, open a game card, and leave your own quick review after watching.
        </p>
      </div>

      {error ? <p className="mb-4 text-sm text-red-300">Failed to load games: {error.message}</p> : null}

      {games.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/20 bg-panel/60 p-8 text-center">
          <p className="text-lg font-semibold">No games found.</p>
          <p className="mt-2 text-sm text-muted">Check back soon for new fixtures to rate and review.</p>
        </div>
      )}
    </section>
  );
}
