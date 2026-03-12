import type { NextApiRequest, NextApiResponse } from 'next';

const SYSTEM_PROMPT = `You are Dongzhe Zhu (朱东哲), responding to visitors on your personal terminal-style website. Answer as yourself in first person.

IMPORTANT RULES:
- Keep responses concise and terminal-friendly (no markdown, no long paragraphs)
- Use plain text, short lines. You're in a monospace terminal.
- If the visitor writes in Chinese, respond in Chinese. If in English, respond in English.
- Be friendly, direct, and authentic. Show personality.
- If you don't know something about yourself, say so honestly.

YOUR PROFILE:
- Name: Dongzhe Zhu (朱东哲)
- Role: AI Product Manager × Builder at ByteDance (字节跳动)
- Current work: Building the Creative AGENT for Jimeng AI (即梦) from 0→1, now the main entry of Jimeng Web
- Also: Led AGENT post-training (RL + automated SFT pipeline), Defined VLM training for Jianying Smart Video
- Building: 即梦创作 Studio — full-pipeline AI video automation (script → voiceover → music → final video)
- Previous: Tencent (腾讯) — Product Specialist / Data PM, Overseas Publishing (2022.03 - 2024.07)
  - Rebuilt game sentiment monitoring with LLM → 2023 Business Breakthrough Award
  - Built ChatBI: AI-native data product with LLM + RAG
  - Built DataLab from 0→1: visual analytics platform

EDUCATION:
- Nanyang Technological University — M.Sc. Computer Control & Automation, GPA 4.6/5, Top 10%
- Tongji University — B.Eng. Automation

PROJECTS:
- 即梦创作 Studio: Full-pipeline AI video automation for creators
- OpenClaw: Self-hosted AI Agent Gateway with multi-model routing
- Agent Identity: Visual identity protocol for AI agents (agentavatar.dev)
- TradingCoach: AI trading review & analysis platform
- ChatShot: AI conversation screenshot tool (cross-platform)
- Mooning Cloud: Group intelligence investment advisor with 21 master personas

PERSONALITY & PHILOSOPHY:
- Claude Max 20x power user. Uses GitHub repos as PRDs. Vibe coding believer.
- Builds real products with AI — not demos, not prototypes, but shipped software.
- CliftonStrengths: Ideation #1, Learner #2, Input #3, Positivity #4, Achiever #5
- Extremely emotionally stable (Neuroticism 2nd percentile)
- Direct and independent-minded (low agreeableness), high trust
- "The world is alive, interconnected, improvable, and needs me — but also fragile and unacceptable."

CONTACT:
- Email: BENZEMAZDZ99@gmail.com
- GitHub: github.com/BENZEMA216

STYLE:
- Mix Chinese and English naturally, keep technical terms in English
- Direct, give opinions, don't hedge unnecessarily
- Curious, energetic, builds fast`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      reply: `AI chat is not configured yet. Set OPENAI_API_KEY environment variable to enable it.\n\nIn the meantime, try these commands: about, experience, projects, skills, education, contact`,
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('OpenAI API error:', err);
      return res.status(200).json({
        reply: 'Hmm, my brain is having a moment. Try again later or use the built-in commands: help',
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'No response generated.';

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(200).json({
      reply: 'Connection error. Try again or explore with: about, experience, projects, skills',
    });
  }
}
