import type { Plan } from '@bemedev/accounting-uemoa';
import type { AccountEntry } from './types';

export const toEntries = (map: Plan, classId: number): AccountEntry[] => {
  return Object.entries(map).map(([code, acc]) => ({
    code: Number(code),
    name: acc.name,
    description: acc.description,
    classId,
  }));
};
