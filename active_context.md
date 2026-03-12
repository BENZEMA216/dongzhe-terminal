# dongzhe-terminal - Active Context

## Current State (2026-03-12)
- Site deployed and live at https://dongzhe-terminal.vercel.app
- AI chat feature fully operational with OpenAI API (gpt-4o-mini)
- Backend: OpenAI API via Vercel serverless function `/api/chat`
- Security: rate limit 20req/min/IP, 500 char limit, prompt injection defense

## Recent Decisions
- Chose OpenAI API over OpenClaw gateway because Vercel can't reach local/private servers
- API key stored in Vercel env vars (server-side only, never exposed to frontend)

## Tech Stack
- Next.js 14 + TypeScript, terminal-style UI
- Vercel hosting, Vercel CLI for deployment

## What's Working
- All terminal commands (about, experience, projects, skills, education, contact, etc.)
- Bilingual support (zh/en)
- Unknown commands auto-route to AI chat
- `ask` command for explicit AI queries
