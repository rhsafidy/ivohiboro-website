'use client';

import { Partner } from '@prisma/client';
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
import { PartnerModal } from './partner-modal';
import { useState } from 'react';
import { deletePartner } from '../actions/partner';
import { toast } from 'sonner';
import Link from 'next/link';

export const columns = (onDataChanged: () => void): ColumnDef<Partner>[] => {
  return [
    {
      accessorKey: 'logo',
      header: 'Logo',
      cell: ({ row }) => (
        <div className="w-10 h-10 rounded-full overflow-hidden">
          {row.getValue('logo') ? (
            <img
              src={row.getValue('logo')}
              alt={row.getValue('name')}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-xs text-gray-500">No logo</span>
            </div>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'name',
      header: 'Name',
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
      accessorKey: 'website',
      header: 'Website',
      cell: ({ row }) => (
        <a
          href={row.getValue('website')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {row.getValue('website') || '-'}
        </a>
      ),
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const partner = row.original;
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
                <DropdownMenuItem>
                  <Link href={'/admin/partners/' + partner.id + '/details'}>
                    {' '}
                    Details
                  </Link>{' '}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500"
                  onClick={async () => {
                    try {
                      await deletePartner(partner.id);
                      onDataChanged();
                      toast.success('Partner deleted successfully');
                    } catch (error) {
                      toast.error('Failed to delete partner');
                    }
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <PartnerModal
              onDataChanged={onDataChanged}
              open={open}
              onOpenChange={setOpen}
              partner={partner}
            />
          </>
        );
      },
    },
  ];
};

export function PartnerTable({
  data,
  onDataChanged,
}: {
  data: Partner[];
  onDataChanged: () => void;
}) {
  return (
    <div className="rounded-md border">
      <DataTable columns={columns(onDataChanged)} data={data} />
    </div>
  );
}
