"use client";

import { FormEvent, useMemo, useState } from "react";

type GameReviewCardProps = {
  gameLabel: string;
};

type UserReview = {
  rating: number;
  text: string;
};

export function GameReviewCard({ gameLabel }: GameReviewCardProps) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [submittedReview, setSubmittedReview] = useState<UserReview | null>(null);

  const isSubmitDisabled = useMemo(() => rating === 0 || reviewText.trim().length === 0, [rating, reviewText]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedReview = reviewText.trim();
    if (!rating || !trimmedReview) {
      return;
    }

    setSubmittedReview({
      rating,
      text: trimmedReview,
    });
  };

  return (
    <div className="mt-6 rounded-xl bg-white/5 p-4 sm:p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">Add your review</h2>

      <form className="mt-3 space-y-4" onSubmit={handleSubmit}>
        <div>
          <p className="text-sm text-muted">Rating</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((value) => {
              const isActive = value <= rating;

              return (
                <button
                  key={value}
                  type="button"
                  aria-label={`Set rating to ${value} star${value > 1 ? "s" : ""}`}
                  onClick={() => setRating(value)}
                  className={`rounded-lg border px-3 py-2 text-lg transition ${
                    isActive
                      ? "border-accent bg-accent/20 text-accent"
                      : "border-white/10 bg-black/20 text-muted hover:border-white/30 hover:text-text"
                  }`}
                >
                  ★
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="review-text" className="text-sm text-muted">
            Review
          </label>
          <textarea
            id="review-text"
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
            placeholder="Write your thoughts about this game…"
            rows={4}
            className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-text placeholder:text-muted/80 outline-none transition focus:border-accent"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          Mark as watched
        </button>
      </form>

      {submittedReview ? (
        <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
          <h3 className="text-sm font-semibold text-text">Your review</h3>
          <p className="mt-2 text-sm text-accent">
            {"★".repeat(submittedReview.rating)}
            <span className="ml-2 text-muted">({submittedReview.rating}/5)</span>
          </p>
          <p className="mt-2 text-sm text-text/90">{submittedReview.text}</p>
          <p className="mt-3 text-xs text-muted">Saved locally for {gameLabel}.</p>
        </div>
      ) : null}
    </div>
  );
}
