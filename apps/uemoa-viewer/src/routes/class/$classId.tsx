import { AccountsTable, CLASS_META } from '@bemedev/tansolid';
import { createFileRoute, notFound } from '@tanstack/solid-router';
import { createMemo, Show } from 'solid-js';
import { accounts } from '#i18n';
import { useService } from '@bemedev/app-solidjs';
import service from '../../features/search/service';

const CLASS_ICONS = ['🏛️', '🏗️', '📦', '📋', '💰', '📉', '📈', '🔖', '🧮'];

export const Route = createFileRoute('/class/$classId')({
  loader: ({ params }) => {
    const id = Number(params.classId);
    const meta = CLASS_META.find(c => c.id === id);
    if (!meta) throw notFound();
    return meta;
  },

  component: () => {
    const data = Route.useLoaderData();
    const icon = CLASS_ICONS[data().id - 1] ?? '📒';
    const lang = useService(service, c => c.context);

    return (
      <Show when={data()}>
        {d => {
          const accountsWithDescriptions = createMemo(() =>
            d().accounts.map(acc => {
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
            <div class='p-6 md:p-8 max-w-6xl mx-auto'>
              {/* Header */}
              <div class='mb-7'>
                <div class='flex items-center gap-3 mb-1'>
                  <span class='text-4xl select-none'>{icon}</span>
                  <div>
                    <h3
                      class='text-xs font-semibold uppercase tracking-widest text-muted-foreground border-b-2 pb-1'
                      style={{ 'border-bottom-color': d().color }}
                    >
                      {d().label}
                    </h3>
                    <h2 class='text-2xl font-extrabold text-foreground tracking-tight'>
                      {d().description}
                    </h2>
                  </div>
                </div>
                <p class='mt-2 text-muted-foreground'>
                  <span class='font-semibold text-primary tabular-nums'>
                    {d().accounts.length}
                  </span>{' '}
                  accounts in this class
                </p>
              </div>

              {/* Accounts table with search */}
              <AccountsTable accounts={accountsWithDescriptions} />
            </div>
          );
        }}
      </Show>
    );
  },

  notFoundComponent: () => (
    <div class='flex items-center justify-center h-64 text-muted-foreground'>
      <div class='text-center'>
        <p class='text-4xl mb-3'>🔍</p>
        <p class='text-lg font-semibold'>Class not found</p>
        <p class='text-sm mt-1'>Valid classes are 1 through 9.</p>
      </div>
    </div>
  ),
});
