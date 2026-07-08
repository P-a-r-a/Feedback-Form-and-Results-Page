# Matcha Tasting Feedback

A one-question-at-a-time feedback form (React + TypeScript + Tailwind), with:

- A language picker (English / Sinhala / Tamil) that branches the whole quiz
- The anchor question routing people into Path A (liked it), B (disliked it), or C (neutral) — matching your spec exactly
- Animated transitions between questions (Framer Motion) and a matcha-bowl progress indicator that "fills up" as you go
- A `/company-dashboard` page with bar charts, a pie chart, and a raw-response table (Recharts), plus a "Download PDF" button — kept separate from the public form link

## 1. Install prerequisites

You need [Node.js](https://nodejs.org) 18+ installed. Check with:

```bash
node -v
```

## 2. Run it locally

```bash
cd matcha-feedback
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Fill out the form at `/`, then visit `http://localhost:5173/company-dashboard` to see the results.

## 3. How data flows (two separate links)

There are two pages, and they're meant to be shared differently:

- **`/` — the public form.** Give this link to visitors. It can only *send* responses, never read them back.
- **`/company-dashboard` — the results page.** Don't link to this from the form or share it publicly. Bookmark it internally. It reads whatever's been submitted and shows the charts, table, and PDF export.

By default (no setup), both pages fall back to the browser's `localStorage`, which only works if it's the same device doing the form-filling and the viewing - fine for a single kiosk you control, but visitors on their own phones won't show up on your dashboard.

To actually funnel every visitor's submission into one place your dashboard can read, connect a free [Supabase](https://supabase.com) project (Postgres, generous free tier):

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run:
   ```sql
   create table submissions (
     id text primary key,
     language text not null,
     path text not null,
     answers jsonb not null,
     submitted_at timestamptz not null
   );

   alter table submissions enable row level security;

   -- Anyone (the public form) can add a response...
   create policy "Anyone can submit" on submissions
     for insert to anon
     with check (true);

   -- ...and anyone can also read them back, since there's no login wall.
   -- The privacy here comes from not sharing the /company-dashboard link,
   -- not from a technical restriction - see the note below.
   create policy "Anyone can read" on submissions
     for select to anon
     using (true);
   ```
3. In **Project Settings -> API**, copy the **Project URL** and **anon public key**.
4. Copy `.env.example` to `.env.local` in this project and paste them in:
   ```
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJ...
   ```
5. Restart `npm run dev`. Submissions now go to Supabase, and `/company-dashboard` reads from the same table.

**A note on what "no login" actually means:** since there's no authentication, the same public key is used by both pages, so the *technical* ability to read the data isn't locked to the dashboard page - it's the same as anyone with a house key knowing not to let themselves into a room marked "staff only." That's fine for keeping casual visitors from stumbling onto results, but if you ever want a real guarantee that only your team can read submissions (e.g. the data is sensitive, or the link might leak), the fix is adding a login to `/company-dashboard` and restricting the `select` policy to `authenticated` instead of `anon`. Happy to add that back in if you change your mind - it's a small change on top of this setup.

## 4. Editing the questions or translations

Everything content-related lives in `src/data/questions.ts` — one object per language (`en`, `si`, `ta`), each with the anchor question, the three branches, and the final rating question. Add a question by adding an entry to the relevant array in **all three languages**, using the same `id` across languages so results aggregate correctly.

> The Sinhala and Tamil text was translated as a starting point — have a native speaker review it before using this with real customers.

## 5. Deploying for free (Vercel)

[Vercel](https://vercel.com) has a generous free tier, gives you HTTPS automatically, and deploys straight from GitHub.

1. Push this folder to a new GitHub repository:
   ```bash
   cd matcha-feedback
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/matcha-feedback.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, and select the repo.
3. Vercel auto-detects Vite. Leave the defaults (build command `npm run build`, output directory `dist`) and click **Deploy**.
4. You'll get a free `https://your-project.vercel.app` URL with HTTPS already on.

**Alternative (also free): Netlify** — same flow (connect GitHub repo, build command `npm run build`, publish directory `dist`).

### Keeping it secure

- Vercel/Netlify serve everything over HTTPS by default — don't disable that.
- If you connect Supabase, put `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` in Vercel's **Environment Variables** rather than committing them — they're not secret in the sense of an admin password, but there's no reason to check them into git either.
- Don't put a link to `/company-dashboard` anywhere on the public form, in emails to customers, on receipts, etc. Treat it the way you'd treat a spreadsheet link you only send to teammates.
- Since there's no login and no rate limiting, anyone who does get the dashboard URL could read the data, and anyone can submit unlimited form responses. For a casual in-person tasting counter that's a reasonable tradeoff; if this ever handles sensitive data or is exposed to a wider audience, revisit adding authentication (Supabase Auth is a natural fit) and basic submit rate-limiting.

## 6. Project structure

```
src/
  types.ts                 Shared TypeScript types
  data/questions.ts         All question text + translations
  lib/storage.ts             Read/write submissions (Supabase, or localStorage fallback)
  lib/supabaseClient.ts       Supabase client (inactive until .env.local is set)
  lib/aggregate.ts           Turns raw submissions into chart data
  components/
    LanguageSelect.tsx      Step 0 screen
    QuestionCard.tsx        Renders one question (choice/yes-no/text/stars)
    StarRating.tsx           5-star input for the final question
    MatchaBowlProgress.tsx  The filling-bowl progress indicator
    FeedbackForm.tsx        Orchestrates the whole branching flow (public link: /)
    ui/                      Small button/card primitives
  pages/ResultsPage.tsx      Charts, table, and PDF export (private link: /company-dashboard)
```
