import React from 'react';
import { History } from './interface';

export const useHistory = (defaultValue: Array<History>) => {
  const [history, setHistory] = React.useState<Array<History>>(defaultValue);
  const [command, setCommand] = React.useState<string>('');
  const [lastCommandIndex, setLastCommandIndex] = React.useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    updateLastHistory: (value: string) =>
      setHistory((prev) => {
        const updated = [...prev];
        if (updated.length > 0) {
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            output: value,
          };
        }
        return updated;
      }),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
