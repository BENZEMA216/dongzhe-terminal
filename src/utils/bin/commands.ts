import * as bin from './index';
import config from '../../../config.json';
import { getLang, setLang, t } from './lang';

// Language switch
export const lang = async (args: string[]): Promise<string> => {
  const target = args[0];
  if (target === 'zh' || target === 'cn') {
    setLang('zh');
    return `语言已切换为中文。输入 'lang en' 切换回英文。`;
  } else if (target === 'en') {
    setLang('en');
    return `Language switched to English. Type 'lang zh' to switch to Chinese.`;
  }
  return t(
    `Current language: English. Usage: lang [en|zh]`,
    `当前语言：中文。用法：lang [en|zh]`
  );
};

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  for (let i = 1; i <= commands.length; i++) {
    if (i % 7 === 0) {
      c += commands[i - 1] + '\n';
    } else {
      c += commands[i - 1] + ' ';
    }
  }
  return t(
    `Available commands:\n\n${c}\n\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\n\nType 'about' to learn about me.\nType 'sumfetch' for a quick summary.`,
    `可用命令：\n\n${c}\n\n[tab]：自动补全\n[ctrl+l]/clear：清屏\n\n输入 'about' 了解我\n输入 'sumfetch' 查看概览`
  );
};

// About
export const about = async (args: string[]): Promise<string> => {
  return t(
    `
<span class="text-light-green dark:text-dark-green">Dongzhe Zhu (朱东哲)</span> — AI Product Manager × Builder

Currently at <span class="text-light-blue dark:text-dark-blue">ByteDance</span>, building the Creative AGENT for Jimeng AI from 0→1.
Previously shipped LLM-powered data products at <span class="text-light-blue dark:text-dark-blue">Tencent</span>, winning the 2023 Business Breakthrough Award.

I build real products with AI — not demos, not prototypes, but shipped software.
Claude Max 20x power user. GitHub repos as PRDs. Vibe coding believer.

Type 'experience' for work history.
Type 'projects' for what I've built.
Type 'sumfetch' for a neofetch-style summary.
`,
    `
<span class="text-light-green dark:text-dark-green">朱东哲 (Dongzhe Zhu)</span> — AI 产品经理 × 创造者

现在在<span class="text-light-blue dark:text-dark-blue">字节跳动</span>，从 0→1 打造即梦 AI 创作 AGENT。
此前在<span class="text-light-blue dark:text-dark-blue">腾讯</span>做 LLM 驱动的数据产品，获 2023 年度业务突破奖。

我用 AI 做真正上线的产品 —— 不是 demo，不是原型，而是完整的、交付的产品。
Claude Max 20 倍用量消耗者。用 GitHub repo 写 PRD。Vibe coding 信徒。

输入 'experience' 查看工作经历
输入 'projects' 查看项目
输入 'sumfetch' 查看概览
`
  );
};

// Experience
export const experience = async (args: string[]): Promise<string> => {
  return t(
    `
<span class="text-light-yellow dark:text-dark-yellow">EXPERIENCE</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">ByteDance</span> — AI Product Manager · Jianying & Jimeng · 2024.07 - Present
  ├─ Owner of Jimeng Creative AGENT (0→1, now main entry of Jimeng Web)
  ├─ Led AGENT post-training: RL + automated SFT pipeline
  ├─ Defined VLM training for Jianying Smart Video
  └─ Building 即梦创作 Studio: full-pipeline AI video automation

<span class="text-light-green dark:text-dark-green">Tencent</span> — Product Specialist / Data PM · Overseas Publishing · 2022.03 - 2024.07
  ├─ Rebuilt game sentiment monitoring with LLM → <span class="text-light-yellow dark:text-dark-yellow">2023 Business Breakthrough Award</span>
  ├─ Built ChatBI: AI-native data product with LLM + RAG
  ├─ Owned DataBrain sentiment product: real-time alerts, periodic reports
  └─ Built DataLab from 0→1: visual analytics platform
`,
    `
<span class="text-light-yellow dark:text-dark-yellow">工作经历</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">字节跳动</span> — AI 产品经理 · 剪映 & 即梦 · 2024.07 - 至今
  ├─ 即梦创作 AGENT Owner（0→1，现为即梦 Web 主入口）
  ├─ 主导 AGENT 后训练：RL 强化学习 + 自动化 SFT 流水线
  ├─ 定义剪映智能视频 VLM 训练方案
  └─ 构建即梦创作 Studio：全链路 AI 视频自动化

<span class="text-light-green dark:text-dark-green">腾讯</span> — 产品策划 / 数据产品经理 · 海外发行 · 2022.03 - 2024.07
  ├─ 用 LLM 重构游戏舆情监控 → <span class="text-light-yellow dark:text-dark-yellow">2023 年度业务突破奖</span>
  ├─ 打造 ChatBI：LLM + RAG 驱动的 AI 原生数据产品
  ├─ 负责 DataBrain 舆情产品：实时预警、定期报告
  └─ 从 0→1 构建 DataLab：可视化分析平台
`
  );
};

// Education
export const education = async (args: string[]): Promise<string> => {
  return t(
    `
<span class="text-light-yellow dark:text-dark-yellow">EDUCATION</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">Nanyang Technological University</span>
  M.Sc. Computer Control & Automation · GPA 4.6/5, Top 10%

<span class="text-light-green dark:text-dark-green">Tongji University</span>
  B.Eng. Automation
`,
    `
<span class="text-light-yellow dark:text-dark-yellow">教育背景</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">南洋理工大学</span>
  计算机控制与自动化硕士 · GPA 4.6/5，Top 10%

<span class="text-light-green dark:text-dark-green">同济大学</span>
  自动化工程学士
`
  );
};

// Projects
export const projects = async (args: string[]): Promise<string> => {
  return t(
    `
<span class="text-light-yellow dark:text-dark-yellow">PROJECTS</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">即梦创作 Studio</span> — Full-pipeline AI video automation for creators
  Script → Voiceover → Music → Final Video
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/dreamina-claude-skills" target="_blank">dreamina-claude-skills</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/music-analyzer" target="_blank">music-analyzer</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/creative-think" target="_blank">creative-think</a>

<span class="text-light-green dark:text-dark-green">OpenClaw</span> — AI Agent Gateway (self-hosted)
  Multi-model routing, Telegram bot, dual-instance deployment
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/openclaw-pitfalls" target="_blank">openclaw-pitfalls</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/Creative-Cowork" target="_blank">Creative-Cowork</a>

<span class="text-light-green dark:text-dark-green">Agent Identity</span> — Visual identity protocol for AI agents
  agentavatar.dev + AVI protocol
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/agent-form" target="_blank">agent-form</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/agent-identity-docs" target="_blank">agent-identity-docs</a>

<span class="text-light-green dark:text-dark-green">TradingCoach</span> — AI trading review & analysis platform
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/tradingcoach" target="_blank">tradingcoach</a>

<span class="text-light-green dark:text-dark-green">ChatShot</span> — AI conversation screenshot tool (cross-platform)
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/chatshot" target="_blank">chatshot</a>

Type 'github' to see all repositories.
`,
    `
<span class="text-light-yellow dark:text-dark-yellow">项目</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">即梦创作 Studio</span> — 面向创作者的全链路 AI 视频自动化
  脚本 → 配音 → 配乐 → 成片
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/dreamina-claude-skills" target="_blank">dreamina-claude-skills</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/music-analyzer" target="_blank">music-analyzer</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/creative-think" target="_blank">creative-think</a>

<span class="text-light-green dark:text-dark-green">OpenClaw</span> — AI Agent 网关（自建部署）
  多模型路由、Telegram 机器人、双实例部署
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/openclaw-pitfalls" target="_blank">openclaw-pitfalls</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/Creative-Cowork" target="_blank">Creative-Cowork</a>

<span class="text-light-green dark:text-dark-green">Agent Identity</span> — AI Agent 视觉身份协议
  agentavatar.dev + AVI 协议
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/agent-form" target="_blank">agent-form</a> · <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/agent-identity-docs" target="_blank">agent-identity-docs</a>

<span class="text-light-green dark:text-dark-green">TradingCoach</span> — AI 交易复盘分析平台
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/tradingcoach" target="_blank">tradingcoach</a>

<span class="text-light-green dark:text-dark-green">ChatShot</span> — AI 对话截图工具（跨平台）
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216/chatshot" target="_blank">chatshot</a>

输入 'github' 查看所有仓库。
`
  );
};

// Skills
export const skills = async (args: string[]): Promise<string> => {
  return t(
    `
<span class="text-light-yellow dark:text-dark-yellow">SKILLS & TOOLS</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">Product</span>     AI Agent Product Design · 0→1 Product Build · Post-training (RL/SFT)
              VLM Training Spec · Data Product · Growth Analytics

<span class="text-light-green dark:text-dark-green">Technical</span>   Claude Code (20x user) · Python · TypeScript · React
              LLM/RAG Pipeline · MCP Servers · Prompt Engineering

<span class="text-light-green dark:text-dark-green">Domain</span>      AI Video Generation · Agent Infrastructure · Brand Aesthetics
              Game Analytics · Sentiment Analysis · Cross-platform Publishing

<span class="text-light-green dark:text-dark-green">Philosophy</span>  GitHub repos as PRDs · Vibe coding → shipped products
              AI-augmented everything · Build fast, iterate faster
`,
    `
<span class="text-light-yellow dark:text-dark-yellow">技能 & 工具</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

<span class="text-light-green dark:text-dark-green">产品</span>       AI Agent 产品设计 · 0→1 产品构建 · 后训练（RL/SFT）
              VLM 训练方案 · 数据产品 · 增长分析

<span class="text-light-green dark:text-dark-green">技术</span>       Claude Code（20倍用量）· Python · TypeScript · React
              LLM/RAG 流水线 · MCP 服务器 · Prompt 工程

<span class="text-light-green dark:text-dark-green">领域</span>       AI 视频生成 · Agent 基础设施 · 品牌美学
              游戏数据分析 · 舆情分析 · 跨平台发行

<span class="text-light-green dark:text-dark-green">理念</span>       GitHub repo 当 PRD · Vibe coding → 上线产品
              AI 武装一切 · 快速构建，快速迭代
`
  );
};

// Contact
export const contact = async (args: string[]): Promise<string> => {
  return t(
    `
<span class="text-light-yellow dark:text-dark-yellow">CONTACT</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a>
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a>
`,
    `
<span class="text-light-yellow dark:text-dark-yellow">联系方式</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a>
  <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a>
`
  );
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return t('Opening Github profile...', '正在打开 Github 主页...');
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return t('Opening resume...', '正在打开简历...');
};

export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return t(`Opening mailto:${config.email}...`, `正在打开邮件：${config.email}...`);
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return t('Opening github...', '正在打开 GitHub...');
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return t(
    `Searching google for ${args.join(' ')}...`,
    `正在 Google 搜索 ${args.join(' ')}...`
  );
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `about.md    experience.md    projects/    skills.txt
education.md    contact.md    resume.pdf    .secrets/`;
};

export const cd = async (args: string[]): Promise<string> => {
  if (args[0] === '.secrets') {
    return t('Permission denied: nice try though ;)', '权限不足：想得挺美 ;)');
  }
  return t(
    `unfortunately, this is a single-page terminal.\nbut you can explore with commands: about, experience, projects, skills`,
    `抱歉，这是一个单页终端。\n你可以用这些命令探索：about, experience, projects, skills`
  );
};

export const cat = async (args: string[]): Promise<string> => {
  const fileMap: Record<string, string> = {
    'about.md': t('Try the command: about', '试试命令：about'),
    'experience.md': t('Try the command: experience', '试试命令：experience'),
    'education.md': t('Try the command: education', '试试命令：education'),
    'contact.md': t('Try the command: contact', '试试命令：contact'),
    'skills.txt': t('Try the command: skills', '试试命令：skills'),
  };
  if (args[0] && fileMap[args[0]]) {
    return fileMap[args[0]];
  }
  return `cat: ${args[0] || ''}: No such file or directory`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return t(
    `<span class="text-light-red dark:text-dark-red">Permission denied</span>: I appreciate the ambition, but root access requires buying me coffee first.`,
    `<span class="text-light-red dark:text-dark-red">权限不足</span>：欣赏你的野心，但 root 权限需要先请我喝杯咖啡。`
  );
};

export const vi = async (args: string[]): Promise<string> => {
  return `I use Claude Code, btw.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `I use Claude Code, btw.`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `I use Claude Code, btw.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `I use Claude Code, btw.`;
};

// Ask AI
export const ask = async (args: string[]): Promise<string> => {
  if (!args.length) {
    return t(
      `Usage: ask [question]\nOr just type anything — unrecognized commands go to AI automatically.`,
      `用法：ask [问题]\n或者直接输入任何内容——未识别的命令会自动交给 AI 回答。`
    );
  }
  const axios = (await import('axios')).default;
  try {
    const { data } = await axios.post('/api/chat', { message: args.join(' ') });
    return `<span class="text-light-gray dark:text-dark-gray">[AI]</span> ${data.reply}`;
  } catch {
    return t('Failed to reach AI. Try again later.', 'AI 连接失败，请稍后再试。');
  }
};

// Banner
export const banner = (args?: string[]): string => {
  return `
<span class="text-light-green dark:text-dark-green">
 ██████╗   ██████╗  ███╗   ██╗  ██████╗  ███████╗ ██╗  ██╗ ███████╗
 ██╔══██╗ ██╔═══██╗ ████╗  ██║ ██╔════╝  ╚══███╔╝ ██║  ██║ ██╔════╝
 ██║  ██║ ██║   ██║ ██╔██╗ ██║ ██║  ███╗   ███╔╝  ███████║ █████╗
 ██║  ██║ ██║   ██║ ██║╚██╗██║ ██║   ██║  ███╔╝   ██╔══██║ ██╔══╝
 ██████╔╝ ╚██████╔╝ ██║ ╚████║ ╚██████╔╝ ███████╗ ██║  ██║ ███████╗
 ╚═════╝   ╚═════╝  ╚═╝  ╚═══╝  ╚═════╝  ╚══════╝ ╚═╝  ╚═╝ ╚══════╝
</span>
<span class="text-light-gray dark:text-dark-gray">AI Product Manager × Builder @ ByteDance</span>

Building the Creative AGENT for Jimeng AI. Previously at Tencent.
GitHub repos as PRDs. Claude Max 20x user. Vibe coding believer.

Type '<span class="text-light-yellow dark:text-dark-yellow">help</span>' to see all commands.
Type '<span class="text-light-yellow dark:text-dark-yellow">about</span>' to learn about me.
Type '<span class="text-light-yellow dark:text-dark-yellow">lang zh</span>' to switch to Chinese / 切换中文.
Or just <span class="text-light-green dark:text-dark-green">type anything</span> to chat with my AI. Try: <span class="text-light-yellow dark:text-dark-yellow">what do you do?</span>

Visit <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/BENZEMA216" target="_blank">github.com/BENZEMA216</a> for all my work.
`;
};
