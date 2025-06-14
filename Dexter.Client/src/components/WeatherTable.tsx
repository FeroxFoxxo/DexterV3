import { MaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { WeatherForecast } from '../routes';

export function WeatherTable({ data }: { data: WeatherForecast[] }) {
    const columns = useMemo<MRT_ColumnDef<WeatherForecast>[]>(
        () => [
            {
                accessorKey: 'date',
                header: 'Date',
                size: 150,
            },
            {
                accessorKey: 'temperatureC',
                header: 'Temperature',
                size: 150,
            },
            {
                accessorKey: 'temperatureF',
                header: 'American Temperature',
                size: 150,
            },
            {
                accessorKey: 'summary',
                header: 'Summary',
                size: 150,
            },
        ],
        [],
    );

    return (
        <MaterialReactTable columns={columns} data={data} />
    );
}