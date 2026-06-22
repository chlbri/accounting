import { defineConfig, type UserWorkspaceConfig } from 'vitest/config';

export const shared = (conf: UserWorkspaceConfig) =>
  defineConfig({
    resolve: {
      tsconfigPaths: true,
    },

    ...conf,

    test: {
      globals: true,
      logHeapUsage: false,
      passWithNoTests: true,
      environment: 'node',

      env: {
        NODE_ENV: 'test',
        ...(conf.test?.env ?? {}),
      },

      ...conf.test,
    },
  });
