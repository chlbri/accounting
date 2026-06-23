import { For, Show, type Component } from 'solid-js';
import { CLASS_META } from '../constants';
import type { AccountEntry } from '../types';
import { createSearch } from '../hooks';
import { cn } from '../../../globals/ui/cn/utils';

type Props = {
  accounts: AccountEntry[];
  showClass?: boolean;
};

function getClassLabel(classId: number) {
  return (
    CLASS_META.find(c => c.id === classId)?.label ?? `Class ${classId}`
  );
}

export const AccountsTable: Component<Props> = props => {
  const { filtered, toggleSort, sortDir, setSearch, search } =
    createSearch(...props.accounts);
  const showClass = props.showClass === true;
  const showTable = () => !showClass || search().trim().length > 0;

  return (
    <div class='flex flex-col gap-4'>
      {/* Search bar */}
      <div class='relative'>
        <svg
          class='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground'
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
          placeholder='Filter by code, name, or description…'
          value={search()}
          onInput={e => setSearch(e.currentTarget.value)}
          class='w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/60 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all'
        />
        {search() && (
          <button
            onClick={() => setSearch('')}
            class='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors'
          >
            ✕
          </button>
        )}
      </div>

      {/* Result count */}
      <p class='text-xs text-muted-foreground'>
        {filtered().length} account{filtered().length !== 1 ? 's' : ''}
      </p>

      {/* Table */}
      <Show when={showTable()}>
        <div class='overflow-x-auto rounded-xl border border-border'>
          <table class='w-full text-sm'>
            <thead class='bg-secondary/80 text-muted-foreground uppercase text-xs tracking-wider'>
              <tr>
                <th class='px-4 py-3 text-left w-24'>
                  <button
                    onClick={toggleSort}
                    class='flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer'
                  >
                    Code
                    <span class='text-xs'>{sortDir() ? '↑' : '↓'}</span>
                  </button>
                </th>
                <Show when={showClass}>
                  <th class='px-4 py-3 text-left'>Class</th>
                </Show>
                <th class='px-4 py-3 text-left min-w-48'>Name (EN)</th>
                <th class='px-4 py-3 text-left'>Description (EN)</th>
              </tr>
            </thead>
            <tbody>
              <For each={filtered()}>
                {(account, i) => (
                  <tr
                    class={cn(
                      'border-t border-border/50 transition-colors hover:bg-secondary/40',
                      i() % 2 === 0 ? 'bg-background' : 'bg-secondary/20',
                    )}
                  >
                    <td class='px-4 py-3 font-mono font-semibold text-primary tabular-nums'>
                      {account.code}
                    </td>

                    <Show when={showClass}>
                      <td class='px-4 py-3 font-medium text-foreground w-px whitespace-nowrap'>
                        {getClassLabel(account.classId)}
                      </td>
                    </Show>

                    <td class='px-4 py-3 font-medium text-foreground'>
                      {account.name}
                    </td>
                    <td class='px-4 py-3 text-muted-foreground leading-relaxed'>
                      {account.description}
                    </td>
                  </tr>
                )}
              </For>
              {filtered().length === 0 && (
                <tr>
                  <td
                    colspan='3'
                    class='px-4 py-12 text-center text-muted-foreground'
                  >
                    No accounts match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Show>
    </div>
  );
};

export default AccountsTable;
