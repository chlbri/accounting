import contentCollections from '@content-collections/vite';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/solid-start/plugin/vite';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import viteSolid from 'vite-plugin-solid';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [
    tailwindcss(),
    contentCollections({}),
    tanstackStart({}),
    viteSolid({ ssr: true }),
    nitro(),
  ],
});
