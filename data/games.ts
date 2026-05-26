import { Game } from "@/lib/types";

export const sampleGames: Game[] = [
  {
    id: "elc-f4-001",
    league: "EuroLeague",
    date: "2026-05-24",
    homeTeam: "Panathinaikos",
    awayTeam: "Fenerbahçe",
    venue: "Uber Arena, Berlin",
    score: { home: 82, away: 88 },
    reviewSummary: { averageRating: 4.4, totalReviews: 128 },
    notes: "High-pressure semifinal with a huge 4th-quarter swing."
  },
  {
    id: "acb-rs-104",
    league: "Liga ACB",
    date: "2026-04-18",
    homeTeam: "Real Madrid",
    awayTeam: "Valencia Basket",
    venue: "WiZink Center, Madrid",
    score: { home: 91, away: 85 },
    reviewSummary: { averageRating: 4.1, totalReviews: 73 },
    notes: "Physical half-court game with excellent late-game defense."
  },
  {
    id: "bsl-rs-056",
    league: "BSL",
    date: "2026-03-07",
    homeTeam: "Anadolu Efes",
    awayTeam: "Beşiktaş",
    venue: "Sinan Erdem Dome, Istanbul",
    score: { home: 79, away: 81 },
    reviewSummary: { averageRating: 4.6, totalReviews: 211 },
    notes: "Rivalry atmosphere and a game-winning shot in transition."
  }
];
