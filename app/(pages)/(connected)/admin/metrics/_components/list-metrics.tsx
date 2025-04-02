'use client';

import { Metric } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DataTable } from '@/components/ui/data-table';
import { MetricModal } from './metric-modal';
import { useState } from 'react';
import { deleteMetric } from '../actions/metric';
import { toast } from 'sonner';

export const columns = (onDataUpdated: () => void): ColumnDef<Metric>[] => {
  return [
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'value',
      header: 'Value',
    },
    {
      accessorKey: 'unit',
      header: 'Unit',
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: ({ row }) => (
        <div className="max-w-xs truncate">
          {row.getValue('description') || '-'}
        </div>
      ),
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const metric = row.original;
        const [open, setOpen] = useState(false);

        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setOpen(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500"
                  onClick={async () => {
                    try {
                      await deleteMetric(metric.id);
                      onDataUpdated();
                      toast.success('Metric deleted successfully');
                    } catch (error) {
                      toast.error('Failed to delete metric');
                    }
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <MetricModal
              onDataUpdated={onDataUpdated}
              open={open}
              onOpenChange={setOpen}
              metric={metric}
            />
          </>
        );
      },
    },
  ];
};
export function MetricTable({
  data,
  onDataUpdated,
}: {
  data: Metric[];
  onDataUpdated: () => void;
}) {
  return (
    <div className="rounded-md border">
      <DataTable columns={columns(onDataUpdated)} data={data} />
    </div>
  );
}
