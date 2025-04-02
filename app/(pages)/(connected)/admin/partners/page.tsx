'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from '../../../../_layout/layout';
import { getPartners } from './actions/partner';
import { PartnerTable } from './_components/list-partners';
import { PartnerModal } from './_components/partner-modal';
import { Partner } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { SessionProvider } from 'next-auth/react';

const breadcrumbs = [
  { label: 'Partners', href: '#', showOnMobile: false },
  { label: 'Partners management', href: null, showOnMobile: true },
];

const Page = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(false);

  const handleDataChange = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/partners');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPartners(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, [refresh]);

  return (
    <SessionProvider>
      <AdminLayout breadcrumbs={breadcrumbs}>
        <Button className="mb-2" onClick={() => setIsOpen(true)}>
          Create a new partner
        </Button>
        <PartnerTable onDataChanged={handleDataChange} data={partners} />
        <PartnerModal
          onDataChanged={handleDataChange}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </AdminLayout>
    </SessionProvider>
  );
};

export default Page;
