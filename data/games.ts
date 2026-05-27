import { getTeamInitials } from "@/lib/team-initials";
import { Game } from "@/lib/types";

function team(name: string) {
  return { name, shortName: getTeamInitials(name) };
}

export const sampleGames: Game[] = [
  {
    id: "elc-f4-001",
    league: "EuroLeague",
    date: "2026-05-24",
    homeTeam: team("Panathinaikos"),
    awayTeam: team("Fenerbahçe"),
    venue: "Uber Arena, Berlin",
    status: "Final",
    round: "Final Four",
    score: { home: 82, away: 88 },
    reviewSummary: { averageRating: 4.4, totalReviews: 128 },
    notes: "High-pressure semifinal with a huge 4th-quarter swing."
  }
];
