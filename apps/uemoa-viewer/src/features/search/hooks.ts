import type { AccountEntry } from '#constants';
import { createMemo, createSignal } from 'solid-js';

export const createSearch = (...accounts: AccountEntry[]) => {
  const [search, setSearch] = createSignal('');
  const [sortDir, setSortDir] = createSignal(false);

  const filtered = createMemo(() => {
    const q = search().toLowerCase();

    const base = accounts.filter(
      a =>
        !q ||
        String(a.code).includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q),
    );

    return base.sort((x, y) =>
      sortDir() ? x.code - y.code : y.code - x.code,
    );
  });

  const toggleSort = () => setSortDir(d => !d);
  return { filtered, toggleSort, sortDir, setSearch, search };
};
