# DvoDesign — B2B SaaS studio site

Next.js 16 + Tailwind v4, animated with `@react-spring/web` and
`spring-text-engine`, smooth-scrolled with Lenis. Originally based on the
`next16-claude-starter` template (see `obsidian/` for the full convention
vault) — content has been replaced with DvoDesign's own copy.

## Running locally

```
yarn install
yarn dev      # http://localhost:3000
```

## What's still a placeholder

- `src/data/mocks/home.ts` — `STATS` (all zeros) and `PORTFOLIO_ITEMS`
  ("Coming soon" case studies) are honest placeholders, not real numbers or
  client names. Replace before publishing.
- `PARTNERS` in the same file lists target verticals (SaaS, Fintech, …),
  not real client logos — swap in real trusted-by logos once you have them.
- `src/lib/site.ts` — `twitterHandle` is a placeholder handle.

## Documentation

Conventions, architecture notes, and the animation system are documented in
the `obsidian/` vault — open it in [Obsidian](https://obsidian.md) or start
at `obsidian/README.md`. `AGENTS.md` / `CLAUDE.md` / `.cursorrules` point AI
coding agents at the same vault before they edit anything.

## Deploy

Connected to Vercel — pushes to `main` deploy automatically. No `vercel.json`
required; the Next.js preset handles build/output.
