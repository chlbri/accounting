import { ALL_ACCOUNTS } from '#constants';
import { createFileRoute } from '@tanstack/solid-router';
import { AccountsTable } from '~/features/search/AccountsTable';

export const Route = createFileRoute('/')({
  component: () => {
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
          <AccountsTable accounts={ALL_ACCOUNTS} showClass />
        </div>
      </div>
    );
  },
});
