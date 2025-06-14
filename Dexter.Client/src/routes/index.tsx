import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material'
import z from 'zod'
import { Counter } from '~/components/Counter'
import { useQuery } from '@tanstack/react-query'
import { WeatherTable } from '../components/WeatherTable'

export const Route = createFileRoute('/')({
    validateSearch: z.object({
        count: z.number().optional(),
    }),
    component: RouteComponent,
})

export type WeatherForecast = {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary?: string | null;
}

function RouteComponent() {
    const { isPending, error, data } = useQuery<WeatherForecast[]>({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('/api/WeatherForecast').then((res) =>
                res.json(),
            ),
    });

    if (isPending) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <Stack alignItems="center">
            <Counter />
            <WeatherTable data={data} />
        </Stack>
    )
}
