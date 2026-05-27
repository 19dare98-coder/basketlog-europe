export type ReviewSummary = {
  averageRating: number;
  totalReviews: number;
};

export type TeamLite = {
  name: string;
  shortName: string;
};

export type Game = {
  id: string;
  league: string;
  date: string;
  homeTeam: TeamLite;
  awayTeam: TeamLite;
  venue: string;
  status: string;
  round: string;
  score: {
    home: number | null;
    away: number | null;
  };
  reviewSummary: ReviewSummary;
  notes?: string;
};

export type GameReview = {
  id: string;
  rating: number;
  reviewText: string;
  watchedOn: string | null;
  createdAt: string;
};
