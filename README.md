# BasketLog Europe

Letterboxd-style app for European basketball games, built as an MVP with Next.js App Router, TypeScript, Tailwind CSS, and Supabase-ready configuration.

## Features in this MVP

- Landing page headline: **“Track, rate and review European basketball games.”**
- Games listing page at `/games` with sample entries.
- Game detail page at `/games/[id]`.
- Dark, modern, responsive card-based UI.
- Initial Supabase SQL schema for:
  - `profiles`
  - `leagues`
  - `teams`
  - `games`
  - `reviews`

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase JS client

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create your env file:

```bash
cp .env.example .env.local
```

3. Add your Supabase values to `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Run the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database schema

The initial migration is at:

- `supabase/migrations/0001_initial_schema.sql`
