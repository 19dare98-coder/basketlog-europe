export type ReviewSummary = {
  averageRating: number;
  totalReviews: number;
};

export type Game = {
  id: string;
  league: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  venue: string;
  score: {
    home: number;
    away: number;
  };
  reviewSummary: ReviewSummary;
  notes: string;
};
