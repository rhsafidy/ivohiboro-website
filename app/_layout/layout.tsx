'use client';

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AdminSidebar } from './sidebar';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
  breadcrumbs: { label: string; href?: string | null; showOnMobile: boolean }[];
}

export const AdminLayout = ({ children, breadcrumbs }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen">
      <SidebarProvider>
        <AdminSidebar username={session?.user?.name || ''} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  const shouldShow =
                    item.showOnMobile || !('hidden md:block' in item);

                  return (
                    shouldShow && (
                      <div key={index} className="flex items-center">
                        {index > 0 && (
                          <BreadcrumbSeparator
                            className={
                              item.showOnMobile === false
                                ? 'hidden md:block'
                                : ''
                            }
                          />
                        )}
                        <BreadcrumbItem
                          className={
                            item.showOnMobile === false ? 'hidden md:block' : ''
                          }
                        >
                          {isLast || !item.href ? (
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink href={item.href}>
                              {item.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </div>
                    )
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className=" gap-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};
