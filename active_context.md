# dongzhe-terminal - Active Context

## Current State (2026-03-12)
- Site deployed and live at https://dongzhe-terminal.vercel.app
- AI chat fully operational: OpenAI API (gpt-4o-mini), key in Vercel env vars
- System prompt synced with GitHub profile README (commit b39b296)
- Security: rate limit 20req/min/IP, 500 char limit, prompt injection defense

## Recent Decisions
- OpenAI API over OpenClaw gateway (Vercel serverless can't reach private servers)
- API key server-side only via Vercel env vars, never exposed to frontend
- System prompt sourced from GitHub README for accuracy — static embed, not dynamic fetch

## Tech Stack
- Next.js 14 + TypeScript, terminal-style UI
- Vercel hosting + Vercel CLI for deployment

## What's Working
- All terminal commands (about, experience, projects, skills, education, contact, etc.)
- Bilingual support (zh/en)
- Unknown commands auto-route to AI chat
- `ask` command for explicit AI queries
- AI responds with full personality and profile context

## Next Steps (potential)
- Custom domain binding
- Dynamic prompt fetch from GitHub README (trade-off: latency vs always-fresh)
- Conversation history (multi-turn chat)
