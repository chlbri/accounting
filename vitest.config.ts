import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },

  test: {
    slowTestThreshold: 3000,
    passWithNoTests: true,

    coverage: {
      enabled: true,
      reportsDirectory: '.coverage',
      provider: 'v8',
      exclude: [],
    },

    projects: [
      'packages/uemoa/vitest.config.ts',
      'packages/__tests__/project1/vitest.config.ts',
      'packages/tansolid/vitest.config.ts',
    ],
  },
});
