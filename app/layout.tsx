import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { BackToTopButton } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "BasketLog Europe",
  description: "Track, rate and review European basketball games."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="sticky top-0 z-30 mb-8 rounded-2xl border border-white/10 bg-background/85 px-4 py-3 backdrop-blur">
            <nav className="flex items-center justify-between gap-4">
              <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-wide text-text hover:text-accent">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm text-accent">🏀</span>
                <span>BasketLog Europe</span>
              </Link>
              <div className="flex items-center gap-2">
              <Link href="/games" className="rounded-lg border border-white/15 px-3 py-2 text-sm text-muted transition hover:border-accent/70 hover:text-accent">
                Games
              </Link>
              <Link href="#" className="rounded-lg border border-white/15 px-3 py-2 text-sm text-muted transition hover:border-accent/70 hover:text-accent">
                Sign in
              </Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}
