import config from '../../../config.json';
import { t } from './lang';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
<span class="text-light-green dark:text-dark-green">
    ╭──────────────────────╮
    │   ┌─┐  ┌─┐  ┌─┐    │        <span class="text-light-yellow dark:text-dark-yellow">dongzhe</span>@<span class="text-light-green dark:text-dark-green">builder</span>
    │   │▀│  │▀│  │▀│    │        ━━━━━━━━━━━━━━━━━━
    │   └─┘  └─┘  └─┘    │</span>        <span class="text-light-yellow dark:text-dark-yellow">OS</span>        ${t('AI Product Manager', 'AI 产品经理')}
<span class="text-light-green dark:text-dark-green">    │                      │</span>        <span class="text-light-yellow dark:text-dark-yellow">Host</span>      ${t('ByteDance · Jimeng AI', '字节跳动 · 即梦 AI')}
<span class="text-light-green dark:text-dark-green">    │    ▓▓▓▓▓▓▓▓▓▓▓▓      │</span>        <span class="text-light-yellow dark:text-dark-yellow">Kernel</span>    ${t('Creative AGENT Owner', '创作 AGENT 负责人')}
<span class="text-light-green dark:text-dark-green">    │    ▓▓▓▓▓▓▓▓▓▓▓▓      │</span>        <span class="text-light-yellow dark:text-dark-yellow">Uptime</span>    ${t('NTU (M.Sc.) + Tongji (B.Eng.)', '南洋理工（硕士）+ 同济（学士）')}
<span class="text-light-green dark:text-dark-green">    │    ▓▓▓▓▓▓▓▓▓▓▓▓      │</span>        <span class="text-light-yellow dark:text-dark-yellow">Shell</span>     Claude Code (20x)
<span class="text-light-green dark:text-dark-green">    │                      │</span>        <span class="text-light-yellow dark:text-dark-yellow">DE</span>        Vibe Coding
<span class="text-light-green dark:text-dark-green">    ╰──────────────────────╯</span>        <span class="text-light-yellow dark:text-dark-yellow">Theme</span>     ${t('Build fast, iterate faster', '快速构建，快速迭代')}
                                    ━━━━━━━━━━━━━━━━━━
                                    <span class="text-light-yellow dark:text-dark-yellow">${t('Contact', '联系方式')}</span>
                                     <a class="text-light-blue dark:text-dark-blue underline" href="mailto:${config.email}" target="_blank">${config.email}</a>
                                     <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a>
`;
};

export default sumfetch;
