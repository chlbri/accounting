import { createFileRoute } from '@tanstack/solid-router';
import { createSignal, For, Show } from 'solid-js';
import { ALL_ACCOUNTS, CLASS_META } from '#constants';
import type { AccountEntry } from '#constants';
import { cn } from '~cn/utils';

function getClassLabel(classId: number) {
  return (
    CLASS_META.find(c => c.id === classId)?.label ?? `Class ${classId}`
  );
}

export const Route = createFileRoute('/')({
  component: () => {
    const [search, setSearch] = createSignal('');
    const [sortDir, setSortDir] = createSignal<'asc' | 'desc'>('asc');

    const filtered = () => {
      const q = search().toLowerCase().trim();
      if (!q) return [];
      return ALL_ACCOUNTS.filter(
        a =>
          String(a.code).includes(q) ||
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q),
      ).sort((x, y) =>
        sortDir() === 'asc' ? x.code - y.code : y.code - x.code,
      );
    };

    const toggleSort = () =>
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));

    const hasQuery = () => search().trim().length > 0;

    return (
      <div class='p-6 md:p-8 max-w-5xl mx-auto'>
        {/* Header */}
        <div class='mb-8'>
          <p class='text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1'>
            SYSCOHADA / UEMOA
          </p>
          <h2 class='text-3xl font-extrabold text-foreground tracking-tight'>
            Search all accounts
          </h2>
          <p class='mt-2 text-muted-foreground max-w-xl'>
            Search across all{' '}
            <span class='font-semibold text-primary tabular-nums'>
              {ALL_ACCOUNTS.length}
            </span>{' '}
            accounts by code, French name, or English description.
          </p>
        </div>

        {/* Search bar */}
        <div class='relative mb-4'>
          <svg
            class='absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground pointer-events-none'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
          <input
            type='text'
            id='global-search'
            autofocus
            placeholder='e.g. "capital", "101", "treasury", "emprunt"…'
            value={search()}
            onInput={e => setSearch(e.currentTarget.value)}
            class='w-full pl-12 pr-12 py-3.5 rounded-2xl bg-secondary/60 border border-border text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all shadow-sm'
          />
          <Show when={hasQuery()}>
            <button
              onClick={() => setSearch('')}
              class='absolute right-4 top-1/2 -translate-y-1/2 size-6 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors text-sm'
              aria-label='Clear search'
            >
              ✕
            </button>
          </Show>
        </div>

        {/* Results */}
        <Show
          when={hasQuery()}
          fallback={
            <div class='flex flex-col items-center justify-center py-24 text-muted-foreground gap-3'>
              <span class='text-5xl select-none'>🔍</span>
              <p class='text-base font-medium'>
                Start typing to search the plan comptable
              </p>
              <p class='text-sm'>
                Use the sidebar to browse accounts by class
              </p>
            </div>
          }
        >
          <div class='mb-3 flex items-center justify-between'>
            <p class='text-sm text-muted-foreground'>
              <Show
                when={filtered().length > 0}
                fallback={<span>No accounts match "{search()}"</span>}
              >
                <span class='font-semibold text-foreground tabular-nums'>
                  {filtered().length}
                </span>{' '}
                account{filtered().length !== 1 ? 's' : ''} found
              </Show>
            </p>
          </div>

          <Show
            when={filtered().length > 0}
            fallback={
              <div class='flex flex-col items-center justify-center py-16 text-muted-foreground gap-2 rounded-xl border border-border'>
                <span class='text-4xl select-none'>🫙</span>
                <p class='text-sm'>No results for "{search()}"</p>
              </div>
            }
          >
            <div class='overflow-x-auto rounded-xl border border-border'>
              <table class='w-full text-sm'>
                <thead class='bg-secondary/80 text-muted-foreground uppercase text-xs tracking-wider'>
                  <tr>
                    <th class='px-4 py-3 text-left w-20'>
                      <button
                        onClick={toggleSort}
                        class='flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer'
                      >
                        Code
                        <span class='text-xs'>
                          {sortDir() === 'asc' ? '↑' : '↓'}
                        </span>
                      </button>
                    </th>
                    <th class='px-4 py-3 text-left'>Class</th>
                    <th class='px-4 py-3 text-left min-w-48'>Name (FR)</th>
                    <th class='px-4 py-3 text-left'>Description (EN)</th>
                  </tr>
                </thead>
                <tbody>
                  <For each={filtered()}>
                    {(account: AccountEntry, i) => (
                      <tr
                        class={cn(
                          'border-t border-border/50 transition-colors hover:bg-secondary/40',
                          i() % 2 === 0
                            ? 'bg-background'
                            : 'bg-secondary/20',
                        )}
                      >
                        <td class='px-4 py-3 font-mono font-semibold text-primary tabular-nums'>
                          {account.code}
                        </td>
                        <td class='px-4 py-3 w-max'>
                          <span class='rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-semibold text-primary tabular-nums'>
                            {getClassLabel(account.classId)}
                          </span>
                        </td>
                        <td class='px-4 py-3 font-medium text-foreground'>
                          {account.name}
                        </td>
                        <td class='px-4 py-3 text-muted-foreground leading-relaxed'>
                          {account.description}
                        </td>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
            </div>
          </Show>
        </Show>
      </div>
    );
  },
});
