# dongzhe-terminal

Terminal-style personal website with built-in AI chat. Fork it, edit `config.json`, deploy to Vercel in 5 minutes.

**Live demo:** [dongzhe-terminal.vercel.app](https://dongzhe-terminal.vercel.app)

```
visitor@dongzhe.dev:$ ~ hello
[AI] Thinking▌
[AI] Hey! I'm 东哲, AI PM at ByteDance. What can I help you with?

visitor@dongzhe.dev:$ ~ benzema
🐴 BENZEMA — The Horse That Never Stops Running
```

## Features

- **AI Chat** — Unknown commands auto-route to GPT. Visitors can chat with your AI persona
- **Bilingual** — `lang zh` / `lang en` to switch Chinese/English
- **Terminal UX** — Tab completion, command history (arrow keys), Ctrl+L clear
- **Customizable** — Edit `config.json` for identity, `commands.ts` for content, `chat.ts` for AI persona
- **Security** — Rate limiting (20 req/min/IP), input length cap, prompt injection defense
- **Easter eggs** — Hidden commands for fun (try `benzema`, `sudo`, `vim`)

## Quick Start

```bash
# 1. Fork & clone
git clone https://github.com/YOUR_USERNAME/dongzhe-terminal.git
cd dongzhe-terminal

# 2. Install
npm install

# 3. Configure
cp .env.example .env.local
# Edit .env.local → add your OpenAI API key

# 4. Run
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Make It Yours

### 1. Basic info → `config.json`

```json
{
  "title": "Your Name — Terminal",
  "name": "Your Name",
  "social": { "github": "your-handle" },
  "email": "you@email.com",
  "ps1_hostname": "your.dev",
  "ps1_username": "visitor"
}
```

### 2. Content → `src/utils/bin/commands.ts`

Edit the `about`, `experience`, `projects`, `skills`, `education`, `contact` functions. Each returns an HTML string displayed in the terminal.

### 3. AI persona → `src/pages/api/chat.ts`

Replace the `SYSTEM_PROMPT` with your own profile. The AI will answer as you.

### 4. Banner → `src/utils/bin/commands.ts`

Replace the ASCII art in the `banner` function. Generate yours at [manytools.org/hacker-tools/ascii-banner](https://manytools.org/hacker-tools/ascii-banner/).

### 5. Theme → `config.json` colors

```json
"colors": {
  "dark": {
    "background": "#1a1a2e",
    "foreground": "#e0e0e0",
    "green": "#50fa7b",
    "yellow": "#ffb86c",
    "blue": "#8be9fd",
    "gray": "#bd93f9",
    "red": "#ff5555"
  }
}
```

More themes in `themes.json`.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variable
vercel env add OPENAI_API_KEY production
# Paste your key, then redeploy
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for auto-deploy on push. Add `OPENAI_API_KEY` in Settings → Environment Variables.

## Architecture

```
src/
├── pages/
│   ├── api/chat.ts        # AI chat endpoint (OpenAI API)
│   └── index.tsx           # Main page
├── components/
│   ├── input.tsx           # Terminal input with loading state
│   └── history/            # Command history display
├── utils/
│   ├── bin/commands.ts     # All terminal commands
│   └── shell.ts            # Command router (built-in → direct, unknown → AI)
└── styles/global.css       # Terminal styling + loading animation
```

## Tech Stack

- **Next.js 14** + TypeScript
- **Tailwind CSS** — Terminal styling
- **OpenAI API** — gpt-4o-mini for chat
- **Vercel** — Serverless deployment

## Credit

Built on top of [LiveTerm](https://github.com/Cveinnt/LiveTerm) by Cveinnt, which is based on [Terminal](https://github.com/m4tt72/terminal) by M4TT72. AI chat and bilingual features added by [BENZEMA216](https://github.com/BENZEMA216).
