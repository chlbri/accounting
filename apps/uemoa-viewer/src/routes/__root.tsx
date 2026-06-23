/// <reference types="vite/client" />

import seo from '~seo';
import {
  createRootRoute,
  Outlet,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/solid-router';
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools';
import appCss from '../../tailwind.css?url';
import { HydrationScript } from 'solid-js/web';
import { CLASS_META } from '#constants';
import { For } from 'solid-js';

const NavBar = () => (
  <nav class='flex-1 overflow-y-auto py-3 px-2 space-y-0.5'>
    <Link
      to='/'
      class='flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all ease-linear duration-300 no-underline'
      activeProps={{
        class:
          'bg-sidebar-accent text-sidebar-accent-foreground font-semibold transition-all ease-linear duration-300',
      }}
      activeOptions={{ exact: true }}
    >
      <span class='text-base'>🏠</span>
      Overview
    </Link>
    <For each={CLASS_META}>
      {meta => (
        <Link
          to='/class/$classId'
          params={{ classId: String(meta.id) }}
          class='flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors no-underline!'
          activeProps={{
            class:
              'bg-sidebar-accent text-sidebar-accent-foreground font-semibold',
          }}
        >
          <span class='font-mono text-xs font-bold bg-sidebar-primary/10 text-blue-400 rounded px-1.5 py-0.5 tabular-nums'>
            {meta.id}
          </span>
          <span class='truncate'>{meta.description}</span>
        </Link>
      )}
    </For>
  </nav>
);

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'SYSCOHADA/UEMOA — Chart of Accounts',
        description:
          'Browse all 9 classes of the SYSCOHADA/UEMOA official chart of accounts with search and filtering.',
      }),
    ],
  }),

  component: () => {
    return (
      <html class='dark'>
        <head>
          <HydrationScript />
        </head>
        <body class='font-sans antialiased'>
          <HeadContent />
          <div class='flex min-h-screen bg-background'>
            {/* Sidebar */}
            <aside class='w-64 shrink-0 border-r border-border bg-sidebar flex flex-col'>
              {/* Brand */}
              <div class='px-5 py-6 border-b border-border'>
                <Link to='/' class='no-underline! block group'>
                  <p class='text-xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors'>
                    SYSCOHADA
                  </p>
                  <h1 class='text-lg font-bold text-sidebar-foreground leading-tight mt-0.5'>
                    Plan Comptable
                    <br />
                    <span class='text-primary'>UEMOA</span>
                  </h1>
                </Link>
              </div>

              {/* Nav */}
              <NavBar />

              {/* Footer */}
              <div class='px-4 py-3 border-t border-border'>
                <p class='text-xs text-muted-foreground'>
                  OHADA — {new Date().getFullYear()}
                </p>
              </div>
            </aside>

            {/* Main content */}
            <main class='flex-1 overflow-y-auto'>
              <Outlet />
            </main>
          </div>

          <TanStackRouterDevtools />
          <Scripts />
        </body>
      </html>
    );
  },
});
