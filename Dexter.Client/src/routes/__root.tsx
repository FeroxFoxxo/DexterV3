/// <reference types="vite/client" />
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    HeadContent,
    Outlet,
    Scripts,
    createRootRoute,
} from '@tanstack/react-router'
import { CacheProvider } from '@emotion/react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import createCache from '@emotion/cache'
import fontsourceVariableRobotoCss from '@fontsource-variable/roboto?url'
import React from 'react'
import { theme } from '~/setup/theme'
import { Header } from '~/components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Route = createRootRoute({
    head: () => ({
        links: [{ rel: 'stylesheet', href: fontsourceVariableRobotoCss }],
    }),
    component: RootComponent,
})

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    )
}

function Providers({ children }: { children: React.ReactNode }) {
    const emotionCache = createCache({ key: 'css' })
    const queryClient = new QueryClient();

    return (
        <CacheProvider value={emotionCache}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </QueryClientProvider>
        </CacheProvider>
    )
}

function DevTools({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TanStackRouterDevtools position="bottom-left" />
            <ReactQueryDevtools position="bottom" />
        </>
    )
}

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <HeadContent />
            </head>
            <body>
                <Providers>
                    <Header />

                    <Container component="main" sx={{ paddingBlock: 4 }}>
                        {children}
                    </Container>

                    <DevTools />
                </Providers>

                <Scripts />
            </body>
        </html>
    )
}
