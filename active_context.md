# dongzhe-terminal - Active Context

## Current State (2026-03-12)
- Site live at https://dongzhe-terminal.vercel.app
- AI chat operational: OpenAI API (gpt-4o-mini), key in Vercel env vars
- Repo open-sourced with fork-friendly README and .env.example
- Loading state: blinking cursor with duplicate submission prevention

## Key Decisions
- Privacy: no full name exposed, AI forbidden from revealing surname
- OpenAI API (not OpenClaw) - Vercel serverless cant reach private servers
- API key server-side only via Vercel env vars
- System prompt synced from GitHub profile README

## Features Shipped
- Terminal commands: about, experience, projects, skills, education, contact, ask, benzema (easter egg)
- Bilingual (zh/en), unknown commands route to AI chat
- AI references GitHub repos naturally in responses
- Open-source README with 5-min fork-and-deploy guide
