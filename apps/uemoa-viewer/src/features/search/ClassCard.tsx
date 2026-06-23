import { Link } from '@tanstack/solid-router';
import type { Component } from 'solid-js';
import type { ClassMeta } from './types';

const CLASS_ICONS = [
  '🏛️', // 1 – Equity & LT resources
  '🏗️', // 2 – Fixed assets
  '📦', // 3 – Current assets
  '📋', // 4 – Short-term liabilities
  '💰', // 5 – Cash & treasury
  '📉', // 6 – Expenses
  '📈', // 7 – Revenue
  '🔖', // 8 – Special accounts
  '🧮', // 9 – Analytical accounting
];

type Props = {
  meta: ClassMeta;
};

export const ClassCard: Component<Props> = props => {
  const icon = CLASS_ICONS[props.meta.id - 1] ?? '📒';
  const count = props.meta.accounts.length;

  return (
    <Link
      to={`/class/$classId`}
      params={{ classId: String(props.meta.id) }}
      class='group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer no-underline!'
    >
      {/* Gradient glow */}
      <div class='absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

      <div class='relative flex items-start justify-between'>
        <div class='flex items-center gap-3'>
          <span class='text-3xl select-none'>{icon}</span>
          <div>
            <p class='text-xs font-semibold uppercase tracking-widest text-muted-foreground'>
              {props.meta.label}
            </p>
            <p class='font-bold text-foreground leading-tight mt-0.5'>
              {props.meta.description}
            </p>
          </div>
        </div>
        <span class='shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary tabular-nums'>
          {count}
        </span>
      </div>

      <div class='relative flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200 mt-1'>
        <span>View accounts</span>
        <span class='translate-x-0 group-hover:translate-x-1 transition-transform duration-200'>
          →
        </span>
      </div>
    </Link>
  );
};
