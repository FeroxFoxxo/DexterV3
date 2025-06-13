import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { env } from 'process';

export default defineConfig({
    server: {
        port: parseInt(env.PORT || '3000'),
    },
    plugins: [
        tsConfigPaths({
            projects: ['./tsconfig.json'],
        }),
        tanstackStart(),
    ],
})