import { createFileRoute } from '@tanstack/solid-router';
import { AccountsTable, ALL_ACCOUNTS } from '@bemedev/tansolid';
import { accounts } from '../features/search/i18n';
import { useService } from '@bemedev/app-solidjs';
import service from '../features/search/service';
import { createEffect, createMemo } from 'solid-js';

export const Route = createFileRoute('/')({
  component: () => {
    const lang = useService(service, c => c.context);
    createEffect(() => console.log(lang()));

    const accountsWithDescriptions = createMemo(() =>
      ALL_ACCOUNTS.map(acc => {
        const key = String(acc.code);
        const description =
          key in accounts.config
            ? accounts.translate(key as any).to(lang())
            : undefined;
        return {
          ...acc,
          description,
        };
      }),
    );

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
        </div>

        {/* Search bar */}
        <div class='relative mb-4'>
          <AccountsTable accounts={accountsWithDescriptions} showClass />
        </div>
      </div>
    );
  },
});
