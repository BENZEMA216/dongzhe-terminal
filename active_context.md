# dongzhe-terminal - Active Context

## Current State (2026-03-12)
- Site live at https://dongzhe-terminal.vercel.app
- AI chat operational: OpenAI API (gpt-4o-mini), key in Vercel env vars
- System prompt synced from GitHub README, privacy-hardened (no full name)
- Security: rate limit 20req/min/IP, 500 char limit, prompt injection defense

## Recent Changes
- Full name replaced with 东哲/小马 everywhere (config, commands, system prompt)
- System prompt explicitly forbids AI from revealing surname
- Added `benzema` easter egg command (horse ASCII art)
- System prompt updated from GitHub profile README for accuracy

## Architecture
- Next.js 14 + TypeScript, terminal-style UI
- Vercel hosting, Vercel CLI for deployment
- `/api/chat` serverless function → OpenAI API (server-side key only)

## Privacy Decision
- No full legal name exposed anywhere on site
- AI instructed to only use 东哲 or 小马
- Reason: public-facing site, minimize personal info exposure
