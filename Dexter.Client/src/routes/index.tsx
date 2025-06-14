import { createFileRoute } from '@tanstack/react-router'
import { Stack, Typography } from '@mui/material'
import z from 'zod'
import { Counter } from '~/components/Counter'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
    validateSearch: z.object({
        count: z.number().optional(),
    }),
    component: RouteComponent,
})

function RouteComponent() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('/api/WeatherForecast').then((res) =>
                res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <Stack alignItems="center">
            <Typography variant="h1" marginBlockEnd={4}>
                Hello world!
            </Typography>
            <Counter />
        </Stack>
    )
}
