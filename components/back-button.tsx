"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  fallbackHref?: string;
  label?: string;
  className?: string;
};

export function BackButton({ fallbackHref = "/games", label = "Back", className = "" }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted transition hover:border-accent/50 hover:text-accent"
        aria-label={`${label} button`}
      >
        <span aria-hidden>←</span>
        <span>{label}</span>
      </button>
      <noscript>
        <Link href={fallbackHref} className="text-sm text-accent hover:underline">
          ← {label}
        </Link>
      </noscript>
    </div>
  );
}
