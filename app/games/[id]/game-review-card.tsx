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
    <div className="mt-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white/5 to-white/5 p-5 shadow-lg shadow-accent/10 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-semibold uppercase tracking-wide text-accent">Add your review</h2>
        <p className="text-xs text-muted">Your review is saved locally in this MVP</p>
      </div>

      <p className="mt-2 text-sm text-muted">Rate the atmosphere, intensity, and quality of this game.</p>

      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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
          {rating === 0 ? <p className="mt-2 text-xs text-muted">Pick a star rating to continue.</p> : null}
        </div>

        <div>
          <label htmlFor="review-text" className="text-sm text-muted">
            Review
          </label>
          <textarea
            id="review-text"
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
            placeholder="What stood out? Big run, clutch moment, crowd energy..."
            rows={4}
            className="mt-2 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-text placeholder:text-muted/80 outline-none transition focus:border-accent"
          />
          <p className="mt-2 text-xs text-muted">Tip: Keep it short and specific so your future self can remember the game quickly.</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          Save my review
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
      ) : (
        <div className="mt-5 rounded-lg border border-dashed border-white/15 bg-black/10 p-4 text-sm text-muted">
          No review yet. Add your rating and notes to start your watch history.
        </div>
      )}
    </div>
  );
}
