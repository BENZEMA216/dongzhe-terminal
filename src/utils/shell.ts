import React from 'react';
import * as bin from './bin';
import axios from 'axios';

const askLLM = async (message: string): Promise<string> => {
  try {
    const { data } = await axios.post('/api/chat', { message });
    return data.reply;
  } catch (error) {
    return 'Failed to reach AI. Try built-in commands: help';
  }
};

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
  updateLastHistory?: (value: string) => void,
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args[0]) !== -1) {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
  } else {
    // Show loading, then replace with AI reply
    setHistory('<span class="text-light-gray dark:text-dark-gray">[AI] Thinking...</span>');
    const reply = await askLLM(command);
    if (updateLastHistory) {
      updateLastHistory(`<span class="text-light-gray dark:text-dark-gray">[AI]</span> ${reply}`);
    }
  }

  setCommand('');
};
