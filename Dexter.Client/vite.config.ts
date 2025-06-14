import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { env } from 'process';

export default defineConfig({
    server: {
        port: parseInt(env.PORT || '3000'),
        proxy: {
            '/api': {
                target:
                    env.DEXTER_WEB_HTTPS ||
                    env.DEXTER_WEB_HTTP,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [
        tsConfigPaths({
            projects: ['./tsconfig.json'],
        }),
        tanstackStart(),
    ],
})