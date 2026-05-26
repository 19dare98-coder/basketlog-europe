import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BasketLog Europe",
  description: "Track, rate and review European basketball games."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
