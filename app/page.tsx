import Link from "next/link";
import { getTeamInitials } from "@/lib/team-initials";

type FeaturedGame = {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  tipoffOrScore: string;
  status: "Scheduled" | "Live" | "Finished";
  averageRating?: number;
  reactions: number;
};

type Review = {
  id: string;
  username: string;
  gameName: string;
  rating: number;
  text: string;
  timestamp: string;
};

const featuredGames: FeaturedGame[] = [
  {
    id: "el-1",
    league: "EuroLeague",
    homeTeam: "Real Madrid",
    awayTeam: "Fenerbahçe",
    tipoffOrScore: "84 - 79",
    status: "Finished",
    averageRating: 4.6,
    reactions: 312
  },
  {
    id: "ec-1",
    league: "EuroCup",
    homeTeam: "Paris Basketball",
    awayTeam: "Joventut",
    tipoffOrScore: "21:00 CET",
    status: "Scheduled",
    reactions: 118
  },
  {
    id: "bcl-1",
    league: "Basketball Champions League",
    homeTeam: "Unicaja",
    awayTeam: "Galatasaray",
    tipoffOrScore: "Q3 06:41 · 58 - 55",
    status: "Live",
    reactions: 207
  },
  {
    id: "aba-1",
    league: "ABA League",
    homeTeam: "Partizan",
    awayTeam: "Crvena zvezda",
    tipoffOrScore: "90 - 88",
    status: "Finished",
    averageRating: 4.3,
    reactions: 264
  }
];

const latestReviews: Review[] = [
  {
    id: "r-1",
    username: "@hoopsmarta",
    gameName: "Real Madrid vs Fenerbahçe",
    rating: 4.8,
    text: "Last two minutes were chaos. Huge defensive stop to seal it.",
    timestamp: "8m ago"
  },
  {
    id: "r-2",
    username: "@courtvision_el",
    gameName: "Unicaja vs Galatasaray",
    rating: 4.2,
    text: "Crowd energy is unreal. This one still feels wide open.",
    timestamp: "14m ago"
  },
  {
    id: "r-3",
    username: "@ballnerd_21",
    gameName: "Partizan vs Crvena zvezda",
    rating: 4.5,
    text: "A proper rivalry game — physical, tactical, and clutch shots.",
    timestamp: "32m ago"
  }
];

const trendingGames = [
  { label: "Most reviewed", game: "Real Madrid vs Fenerbahçe", value: "312 reviews" },
  { label: "Highest rated", game: "Olympiacos vs Partizan", value: "4.9 average" },
  { label: "Most discussed", game: "Unicaja vs Galatasaray", value: "540 reactions" }
];

export default function HomePage() {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
        <p className="mb-3 inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">
          Live basketball hub
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Track every classic. Rate every rivalry. Build your European basketball diary.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
          From EuroLeague nights to domestic league battles — log the games you watch, share your take, and see what the basketball
          community thinks.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/games" className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90">
            Browse games
          </Link>
          <Link href="/games" className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent/60 hover:text-accent">
            Start your diary
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold sm:text-2xl">Tonight in European Basketball</h2>
          <span className="text-xs uppercase tracking-wider text-muted">Updated just now</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredGames.map((game) => (
            <article
              key={game.id}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.03] to-transparent p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{game.league}</p>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    game.status === "Live"
                      ? "border border-red-400/40 bg-red-500/25 text-red-200"
                      : game.status === "Finished"
                        ? "border border-emerald-400/40 bg-emerald-500/25 text-emerald-200"
                        : "border border-sky-400/30 bg-sky-500/20 text-sky-100"
                  }`}
                >
                  {game.status}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-muted">Matchup</p>
                <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-gradient-to-b from-accent/25 to-accent/10 text-xs font-extrabold tracking-wider text-accent">
                      {getTeamInitials(game.awayTeam)}
                    </div>
                    <p className="mt-2 text-xs text-muted">{game.awayTeam}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">at</p>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-gradient-to-b from-accent/25 to-accent/10 text-xs font-extrabold tracking-wider text-accent">
                      {getTeamInitials(game.homeTeam)}
                    </div>
                    <p className="mt-2 text-xs text-muted">{game.homeTeam}</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-2xl font-extrabold tracking-wide text-accent">{game.tipoffOrScore}</p>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-muted">
                <span>{game.status === "Finished" ? `Avg ${game.averageRating?.toFixed(1) ?? "-"}` : "Avg rating pending"}</span>
                <span>{game.reactions} reactions</span>
              </div>

              <div className="mt-3 flex justify-end">
                <Link href="/games" className="text-xs font-medium text-accent transition hover:text-accent/80">
                  Review game →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold sm:text-2xl">Latest fan reviews</h2>
          <div className="space-y-3">
            {latestReviews.map((review) => (
              <article key={review.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between text-sm">
                  <p className="font-medium">{review.username}</p>
                  <p className="text-xs text-muted">{review.timestamp}</p>
                </div>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">{review.gameName}</p>
                <p className="mt-3 text-sm">
                  <span className="mr-2 rounded-md bg-accent/20 px-2 py-1 text-xs font-semibold text-accent">{review.rating.toFixed(1)} / 5</span>
                  {review.text}
                </p>
                <div className="mt-4 flex gap-4 text-xs text-muted">
                  <button className="transition hover:text-accent">Like</button>
                  <button className="transition hover:text-accent">Comment</button>
                  <Link href="/games" className="transition hover:text-accent">View game</Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="text-lg font-semibold">Trending games</h3>
            <div className="mt-3 space-y-3">
              {trendingGames.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 p-3">
                  <p className="text-xs uppercase tracking-wide text-muted">{item.label}</p>
                  <p className="mt-1 text-sm font-medium">{item.game}</p>
                  <p className="mt-1 text-xs text-accent">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-accent/30 bg-accent/10 p-4">
            <h3 className="text-lg font-semibold">Your diary preview</h3>
            <div className="mt-3 space-y-2 text-sm">
              <p className="flex items-center justify-between"><span className="text-muted">Games watched</span><span className="font-semibold">28</span></p>
              <p className="flex items-center justify-between"><span className="text-muted">Average rating</span><span className="font-semibold">4.4 / 5</span></p>
              <p className="flex items-center justify-between"><span className="text-muted">Favorite league</span><span className="font-semibold">EuroLeague</span></p>
            </div>
            <Link href="/games" className="mt-4 inline-flex rounded-lg border border-accent/60 px-3 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-slate-950">
              View profile
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}
