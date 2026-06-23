import { playwright } from '@vitest/browser-playwright';
import solid from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  resolve: {
    conditions: ['development', 'browser'],
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    passWithNoTests: true,

    coverage: {
      reportsDirectory: '.coverage',
      provider: 'istanbul',
      enabled: true,
    },

    projects: [
      {
        extends: true,
        test: {
          include: ['**/*.{spec,test}.ts'],
          environment: 'node',
          name: 'node-tests',
        },
      },
      {
        plugins: [solid() as any],
        extends: true,
        resolve: {
          conditions: ['development', 'browser'],
        },
        test: {
          name: 'integration',
          include: ['**/*.{spec,test}.tsx'],
          browser: {
            provider: playwright({}),
            enabled: true,
            headless: true,
            instances: [
              {
                browser: 'chromium',
                bail: 15,
              },
            ],
          },
        },
      },
      {
        plugins: [solid() as any],
        extends: true,
        test: {
          name: 'e2e',
          include: ['**/*.e2e.tsx'],
          browser: {
            provider: playwright(),
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }, { browser: 'webkit' }],
          },
        },
      },
    ],
  },
});
